const FALLBACK_PASSWORD = 'euclid';

async function fetchPassword(pid) {
  try {
    const response = await fetch(`https://beta.parallel.org.uk/admin/api/password/${encodeURIComponent(pid)}`);
    const data = await response.json();
    return data.password || FALLBACK_PASSWORD;
  } catch (e) {
    console.error('Failed to fetch password for', pid, e);
    return FALLBACK_PASSWORD;
  }
}

module.exports = { fetchPassword };
