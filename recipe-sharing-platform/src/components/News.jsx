import { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [articles, setArticles] = useState([]);
  const API_KEY = "a2843d5154824f4085fe6f0125ff9f95"; // Ensure it's a string
  const url = `https://newsapi.org/v2/everything?q=agriculture&language=en&apiKey=${API_KEY}`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div>
      <h2>Latest Tech News</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
