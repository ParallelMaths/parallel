// YouTube Video Availability Checker
// Checks only videos from .md files listed in static/pages.yaml

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(PROJECT_ROOT, 'pages');
const PAGES_YAML = path.join(PROJECT_ROOT, 'static/pages.yaml');
const OUTPUT_JSON = path.join(PROJECT_ROOT, 'static/youtube-status.json');
const OUTPUT_LOG = path.join(PROJECT_ROOT, 'static/youtube-check-results.txt');

// YouTube oEmbed API URL
const OEMBED_URL = (id) => `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}`;

/**
 * Parse static/pages.yaml to get list of pages
 * @returns {Array<{url: string, title?: string}>}
 */
function getPagesFromYaml() {
  const content = fs.readFileSync(PAGES_YAML, 'utf8');
  const pages = [];
  
  // Parse YAML manually - extract lines that start with "  - url:"
  const lines = content.split('\n');
  let inYearSection = false;
  
  for (const line of lines) {
    // Check if we're in a year section (year6:, year7:, etc.)
    if (line.match(/^year\d+:$/)) {
      inYearSection = true;
      continue;
    }
    
    if (inYearSection) {
      // Check if we've hit a new top-level section
      if (line.match(/^[a-zA-Z]/)) {
        inYearSection = false;
        continue;
      }
      
      // Extract url from "  - url: filename"
      const urlMatch = line.match(/^[ ]*- url: ([^\s]+)/);
      if (urlMatch) {
        pages.push({ url: urlMatch[1] });
      } else if (line.trim().startsWith('- url:')) {
        const urlMatch2 = line.match(/- url: ([^\s]+)/);
        if (urlMatch2) {
          pages.push({ url: urlMatch2[1] });
        }
      }
    }
  }
  
  return pages;
}

/**
 * Get video IDs from a page's .md file
 * @param {string} url - The URL slug from pages.yaml (without .md extension)
 * @returns {Array<{id: string, ref: string}>} - Array of video ID objects
 */
function getVideoIdsFromPage(url) {
  const mdFile = path.join(PAGES_DIR, `${url}.md`);
  
  if (!fs.existsSync(mdFile)) {
    return [];
  }
  
  const content = fs.readFileSync(mdFile, 'utf8');
  const videoIds = [];
  
  // Match @youtube patterns like: @[youtube](videoId?...) or @[youtube](watch?v=videoId?...)
  const regex = /@\[youtube\]\([^)]*\)/g;
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    const youtubeRef = match[0];
    
    // Extract video ID from various formats
    // @[youtube](GhsZUZmJvaM?end=324&rel=0)
    // @[youtube](watch?v=GFFcRY235fI?rel=0)
    const idMatch = youtubeRef.match(/([a-zA-Z0-9_-]{11})/);
    if (idMatch) {
      videoIds.push({
        id: idMatch[1],
        ref: youtubeRef,
      });
    }
  }
  
  return videoIds;
}

/**
 * Check video availability using YouTube oEmbed API
 * @param {string} videoId - YouTube video ID
 * @returns {Promise<{available: boolean, videoId: string, title?: string, error?: string}>}
 */
function checkVideoAvailability(videoId) {
  return new Promise((resolve) => {
    childProcess.exec(`curl -s -w '\\n%{http_code}' '${OEMBED_URL(videoId)}'`, { 
      maxBuffer: 1024 * 1024 
    }, (error, stdout, stderr) => {
      const lines = stdout.trim().split('\n');
      const httpCode = lines.pop();
      const body = lines.join('\n');
      
      if (httpCode !== '200') {
        resolve({
          available: false,
          videoId,
          error: `HTTP ${httpCode}`,
        });
        return;
      }
      
      try {
        const data = JSON.parse(body);
        resolve({
          available: true,
          videoId,
          title: data.title,
        });
      } catch {
        resolve({
          available: false,
          videoId,
          error: 'Invalid JSON from oEmbed',
        });
      }
    });
  });
}

/**
 * Main execution
 */
async function run() {
  console.log('Reading pages from static/pages.yaml...');
  const pages = getPagesFromYaml();
  console.log(`Found ${pages.length} pages in pages.yaml`);
  
  // Collect all videos from pages listed in pages.yaml
  const videos = [];
  for (const page of pages) {
    const pageVideos = getVideoIdsFromPage(page.url);
    for (const video of pageVideos) {
      videos.push({
        ...video,
        pageUrl: page.url,
        mdFilename: `${page.url}.md`,
      });
    }
  }
  
  console.log(`Found ${videos.length} YouTube videos in pages listed in pages.yaml`);
  
  // Check each video
  const results = [];
  for (let i = 0; i < videos.length; i++) {
    const video = videos[i];
    console.log(`[${i + 1}/${videos.length}] Checking ${video.id} (${video.mdFilename})...`);
    
    const checkResult = await checkVideoAvailability(video.id);
    results.push({
      ...checkResult,
      mdFilename: video.mdFilename,
      pageUrl: video.pageUrl,
      ref: video.ref,
    });
  }
  
  // Summary
  const available = results.filter(r => r.available).length;
  const unavailable = results.filter(r => !r.available).length;
  
  const summary = {
    timestamp: new Date().toISOString(),
    pagesChecked: pages.length,
    videosTotal: videos.length,
    available,
    unavailable,
    results,
  };
  
  // Output
  console.log('\n' + '='.repeat(60));
  console.log('YouTube Video Availability Check Results');
  console.log('='.repeat(60));
  console.log(`Pages in static/pages.yaml: ${pages.length}`);
  console.log(`Total videos found: ${videos.length}`);
  console.log(`Available: ${available}`);
  console.log(`Unavailable: ${unavailable}`);
  console.log('='.repeat(60));
  
  if (unavailable > 0) {
    console.log('\n❌ UNAVAILABLE VIDEOS:');
    for (const r of results.filter(r => !r.available)) {
      console.log(`  ${r.videoId} (${r.mdFilename})`);
      if (r.error) console.log(`    Error: ${r.error}`);
    }
  }
  
  // Save results
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(summary, null, 2));
  console.log(`\n✓ JSON results saved to: ${OUTPUT_JSON}`);
  
  const logLines = [
    `YouTube Video Availability Check`,
    `Generated: ${new Date().toISOString()}`,
    ``,
    `Pages in static/pages.yaml: ${pages.length}`,
    `Total videos found: ${videos.length}`,
    `Available: ${available}`,
    `Unavailable: ${unavailable}`,
    ``,
    `Details:`,
    `--------`,
  ];
  
  for (const r of results) {
    const status = r.available ? '✓' : '✗';
    logLines.push(`${status} ${r.videoId} (${r.mdFilename})`);
    if (r.available && r.title) {
      logLines.push(`   Title: ${r.title}`);
    }
    if (!r.available && r.error) {
      logLines.push(`   Error: ${r.error}`);
    }
    logLines.push('');
  }
  
  fs.writeFileSync(OUTPUT_LOG, logLines.join('\n'));
  console.log(`✓ Log saved to: ${OUTPUT_LOG}`);
  
  // Exit with error if any videos are unavailable
  if (unavailable > 0) {
    console.log('\n⚠️  WARNING: Some videos are unavailable!');
    process.exit(1);
  }
  
  console.log('\n✓ All videos are available!');
  process.exit(0);
}

// Export for testing
module.exports = {
  getPagesFromYaml,
  getVideoIdsFromPage,
  checkVideoAvailability,
  run,
};

// Run if called directly
if (require.main === module) {
  run().catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
}
