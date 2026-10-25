// Video Availability Checker
// Periodically checks YouTube video availability for embedded videos in pages

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const PAGE_DIR = path.join(__dirname, '../pages');
const OUTPUT_FILE = path.join(__dirname, '../static/youtube-status.json');
const LOG_FILE = path.join(__dirname, '../static/youtube-check-results.txt');

// Error patterns that indicate unavailable videos
const UNAVAILABLE_PATTERNS = [
  'Video player configuration error',
  'Error 153',
  'this video is unavailable',
  'video has been removed',
  'private video',
];

/**
 * Extract YouTube video IDs from page markdown files
 * @returns {string[]} - Array of unique video IDs
 */
function extractVideoIds() {
  const ids = new Set();
  
  // Get all .md files in pages directory
  const mdFiles = fs.readdirSync(PAGE_DIR).filter(f => f.endsWith('.md'));
  
  for (const file of mdFiles) {
    const content = fs.readFileSync(path.join(PAGE_DIR, file), 'utf8');
    
    // Extract video IDs from @youtube[] patterns
    const regex = /@\[youtube\]\([^)]*?([a-zA-Z0-9_-]{11})[^)]*\)/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      ids.add(match[1]);
    }
  }
  
  return Array.from(ids).sort();
}

/**
 * Check if a video is available using the oEmbed API
 * @param {string} videoId - YouTube video ID to check
 * @returns {Promise<{available: boolean, videoId: string, error?: string}>}
 */
async function checkVideoAvailability(videoId) {
  return new Promise((resolve) => {
    const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}`;
    
    const cmd = `curl -s -w '\\n%{http_code}' '${oembedUrl}'`;
    
    childProcess.exec(cmd, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
      const lines = stdout.trim().split('\n');
      const httpCode = lines.pop(); // Last line is the HTTP status code
      const body = lines.join('\n');
      
      if (httpCode !== '200') {
        resolve({
          available: false,
          videoId,
          error: `HTTP ${httpCode}: ${stderr || 'Video unavailable'}`,
        });
        return;
      }
      
      try {
        const data = JSON.parse(body);
        resolve({
          available: true,
          videoId,
          title: data.title,
          author: data.author_name,
        });
      } catch (parseError) {
        resolve({
          available: false,
          videoId,
          error: 'Invalid JSON response from oEmbed API',
        });
      }
    });
  });
}

/**
 * Check all videos and return results
 * @param {string[]} videoIds - Array of video IDs to check
 * @returns {Promise<{total: number, available: number, unavailable: number, results: Array}>}
 */
async function checkAllVideos(videoIds) {
  const results = [];
  
  console.log(`Checking ${videoIds.length} video IDs...`);
  
  for (const videoId of videoIds) {
    const result = await checkVideoAvailability(videoId);
    results.push(result);
    
    // Progress indicator
    if (results.length % 50 === 0) {
      console.log(`  Checked ${results.length}/${videoIds.length} videos...`);
    }
  }
  
  const available = results.filter((r) => r.available).length;
  const unavailable = results.filter((r) => !r.available).length;
  
  return {
    total: results.length,
    available,
    unavailable,
    results,
  };
}

/**
 * Format results for display
 * @param {{total: number, available: number, unavailable: number, results: Array}} results
 * @param {boolean} includeTimestamp - Whether to include timestamp
 * @returns {string}
 */
function formatResults(results, includeTimestamp = true) {
  const lines = [];
  
  if (includeTimestamp) {
    lines.push(`YouTube Video Availability Check - ${new Date().toISOString()}`);
    lines.push(`========================================`);
  } else {
    lines.push(`YouTube Video Availability Check Results`);
    lines.push(`================================`);
  }
  lines.push(`Total: ${results.total}`);
  lines.push(`Available: ${results.available}`);
  lines.push(`Unavailable: ${results.unavailable}`);
  lines.push('');
  
  if (results.results.length > 0) {
    lines.push('Details:');
    lines.push('--------');
    
    for (const result of results.results) {
      const status = result.available ? '✓ AVAILABLE' : '✗ UNAVAILABLE';
      lines.push(`${status}: ${result.videoId}`);
      lines.push(`  Embed URL: https://www.youtube.com/embed/${result.videoId}`);
      
      if (result.available && result.title) {
        lines.push(`  Title: ${result.title}`);
      }
      if (!result.available && result.error) {
        lines.push(`  Error: ${result.error}`);
      }
      lines.push('');
    }
  }
  
  return lines.join('\n');
}

/**
 * Save results to output files
 * @param {string} formattedResults
 * @param {Array} resultsArray - The actual results array
 */
function saveResults(formattedResults, resultsArray) {
  // Save to JSON file
  const jsonOutput = {
    timestamp: new Date().toISOString(),
    total: resultsArray.total,
    available: resultsArray.available,
    unavailable: resultsArray.unavailable,
    results: resultsArray.results,
  };
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(jsonOutput, null, 2));
  console.log(`Results saved to ${OUTPUT_FILE}`);
  
  // Save to text log file
  fs.writeFileSync(LOG_FILE, formattedResults);
  console.log(`Log saved to ${LOG_FILE}`);
}

// Main execution
async function run() {
  const videoIds = extractVideoIds();
  const results = await checkAllVideos(videoIds);
  const formatted = formatResults(results);
  
  console.log(formatted);
  saveResults(formatted, results);
  
  // Exit with error if any videos are unavailable
  if (results.unavailable > 0) {
    console.log('\nWARNING: Some videos are unavailable!');
    process.exit(1);
  }
}

// Export for testing
module.exports = { extractVideoIds, checkVideoAvailability, checkAllVideos, formatResults, saveResults, run };

// Run if called directly
if (require.main === module) {
  run().catch(console.error);
}
