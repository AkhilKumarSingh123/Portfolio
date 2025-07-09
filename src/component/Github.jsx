import React, { useState, useEffect } from "react";

export default function GitHub() {
  const username = "AkhilKumarSingh123";
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Top Projects");

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch repos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, [username]);

  const totalStars = projects.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const totalForks = projects.reduce((sum, repo) => sum + repo.forks_count, 0);
  const totalRepos = projects.length;

  const popularProjects = projects.filter(repo => repo.stargazers_count > 0);
  const displayProjects = activeTab === "Top Projects" ? projects : popularProjects;

  return (
    <section className="w-full min-h-screen bg-gray-700 py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-2 text-white">My GitHub Universe</h2>
      <p className="text-center text-white mb-6">
        Explore my open-source contributions, projects, and coding activity.
      </p>

      <div className="flex justify-center gap-6 flex-wrap mb-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-500">⭐ {totalStars}</div>
          <div className="text-gray-50">Total Stars</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">🍴 {totalForks}</div>
          <div className="text-gray-50">Total Forks</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">📦 {totalRepos}</div>
          <div className="text-gray-50">Public Repos</div>
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        {["Top Projects", "Popular"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${
              activeTab === tab ? "bg-indigo-600 text-white" : "bg-gray-500 text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="hidden lg:grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {displayProjects.map((repo) => (
          <div
            key={repo.id}
            className="bg-gray-600 border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-white">{repo.name}</h3>
            <p className="text-sm text-white mt-1">{repo.description}</p>
            <div className="flex items-center justify-between text-sm mt-3">
              <span className="bg-gray-500 text-green-300 px-2 py-1 rounded">
                {repo.language || "N/A"}
              </span>
              <span className="text-gray-50">{new Date(repo.updated_at).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-50">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🍴 {repo.forks_count}</span>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-green-300 hover:underline"
              >
                View ↗
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="lg:hidden overflow-x-auto mt-6 px-2">
        <div className="flex gap-4 w-max">
          {[...Array(Math.ceil(displayProjects.length / 2)).keys()].map((colIndex) => (
            <div
              key={colIndex}
              className="flex flex-col gap-4 min-w-[85vw] sm:min-w-[340px] max-w-[360px] flex-shrink-0"
            >
              {displayProjects
                .slice(colIndex * 2, colIndex * 2 + 2)
                .map((repo) => (
                  <div
                    key={repo.id}
                    className="bg-gray-600 border rounded-lg p-4 shadow hover:shadow-lg transition"
                  >
                    <h3 className="text-lg font-semibold text-white">{repo.name}</h3>
                    <p className="text-sm text-white mt-1">{repo.description}</p>
                    <div className="flex items-center justify-between text-sm mt-3">
                      <span className="bg-gray-500 text-green-300 px-2 py-1 rounded">
                        {repo.language || "N/A"}
                      </span>
                      <span className="text-gray-50">{new Date(repo.updated_at).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-50">
                      <span>⭐ {repo.stargazers_count}</span>
                      <span>🍴 {repo.forks_count}</span>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-green-300 hover:underline"
                      >
                        View ↗
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
