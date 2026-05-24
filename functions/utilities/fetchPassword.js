const OVERRIDE_PASSWORD = 'applemangopear';

async function fetchPassword(pid) {
  try {
    const response = await fetch(`https://parallel.org.uk/admin/api/password/${encodeURIComponent(pid)}`);
    const data = await response.json();
    return data.password || OVERRIDE_PASSWORD;
  } catch (e) {
    console.error('Failed to fetch password for', pid, e);
    return OVERRIDE_PASSWORD;
  }
}

module.exports = { fetchPassword, OVERRIDE_PASSWORD };
