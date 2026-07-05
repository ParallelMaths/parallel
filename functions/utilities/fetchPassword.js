const OVERRIDE_PASSWORD = 'applemangopear';

async function getPageWithRemoteData(page, pid) {
  if (page.password !== true) {
    return page;
  }

  try {
    const response = await fetch(`https://parallel.org.uk/admin/api/password/${encodeURIComponent(pid)}`);
    const data = await response.json();
    return {
      ...page,
      password: data.password || OVERRIDE_PASSWORD,
      answersVisible: data.answersVisible || false,
    };
  } catch (e) {
    console.error('Failed to fetch password for', pid, e);
    return {
      ...page,
      password: OVERRIDE_PASSWORD,
      answersVisible: false,
    };
  }
}

module.exports = { getPageWithRemoteData, OVERRIDE_PASSWORD };
