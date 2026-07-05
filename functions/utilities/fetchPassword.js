const OVERRIDE_PASSWORD = 'applemangopear';

async function fetchPassword(pid) {
  try {
    const response = await fetch(`https://parallel.org.uk/admin/api/password/${encodeURIComponent(pid)}`);
    const data = await response.json();
    return {
      password: data.password || OVERRIDE_PASSWORD,
      answersVisible: data.answersVisible || false,
    };
  } catch (e) {
    console.error('Failed to fetch password for', pid, e);
    return {
      password: OVERRIDE_PASSWORD,
      answersVisible: false,
    };
  }
}

module.exports = { fetchPassword, OVERRIDE_PASSWORD };
