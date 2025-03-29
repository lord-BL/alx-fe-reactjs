import axios from "axios";

const url = "https://api.github.com/users";

const githubService = {
  async fetchUserData(query) {
    try {
      const response = await axios.get(`${url}/${query}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching data: ", error);
      throw error;
    }
  },
};

export default githubService;
