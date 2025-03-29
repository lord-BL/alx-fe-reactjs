import React, { useState } from "react";
import githubService from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);
    setPage(1);
    setHasMore(true);
    try {
      const query = githubService.constructQuery(username, location, minRepos);
      const data = await githubService.searchUsers(query, 1);
      setUsers(data.items);
      setHasMore(data.items.length === 30); // GitHub API returns 30 items per page
    } catch (err) {
      setError("Looks like we cant find the users");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setLoading(true);
    try {
      const query = githubService.constructQuery(username, location, minRepos);
      const data = await githubService.searchUsers(query, page + 1);
      setUsers([...users, ...data.items]);
      setPage(page + 1);
      setHasMore(data.items.length === 30);
    } catch (err) {
      setError("Failed to load more users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input fields */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="minRepos"
            className="block text-sm font-medium text-gray-700"
          >
            Minimum Repositories
          </label>
          <input
            type="number"
            id="minRepos"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}

      {users.length > 0 && (
        <div className="mt-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="mb-4 border p-4 rounded-md flex items-center"
            >
              <img
                src={user.avatar_url}
                alt="User Avatar"
                className="h-16 w-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">{user.login}</h2>
                <p>Location: {user.location || "Not specified"}</p>
                <p>Repositories: {user.public_repos}</p>
                <p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    GitHub Profile
                  </a>
                </p>
              </div>
            </div>
          ))}

          {hasMore && (
            <button
              onClick={handleLoadMore}
              className="w-full rounded-md bg-gray-200 py-2 px-4 mt-4 hover:bg-gray-300"
            >
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
