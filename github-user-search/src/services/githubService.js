// services/githubService.js
const GITHUB_API_BASE_URL = "https://api.github.com/search/users?q=";

const githubService = {
  async searchUsers(query) {
    try {
      const response = await axios.get(
        `${GITHUB_API_BASE_URL}${encodeURIComponent(query)}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  },

  constructQuery(username, location, minRepos) {
    let query = username;
    if (location) {
      query += ` location:${location}`;
    }
    if (minRepos) {
      query += ` repos:>=${minRepos}`;
    }
    return query;
  },
};

export default githubService;
