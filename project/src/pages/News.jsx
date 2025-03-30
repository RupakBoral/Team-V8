import { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const res = await axios.get(
        "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
      );
      setNews(res.data.articles);
    } catch (err) {
      console.error("Error fetching news:", err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Health News</h1>
      <div className="space-y-8">
        {news.length > 0 ? (
          news.map((item, index) => (
            <a 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              key={index} 
              className="block border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <div className="flex flex-col md:flex-row">
                {item.urlToImage && (
                  <img 
                    src={item.urlToImage} 
                    alt={item.title} 
                    className="w-full md:w-1/3 h-48 object-cover"
                  />
                )}
                <div className="p-4 flex flex-col justify-between">
                  <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">By {item.author || "Unknown"}</p>
                  <p className="text-gray-600 mt-2 line-clamp-3">{item.description}</p>
                </div>
              </div>
            </a>
          ))
        ) : (
          <p className="text-center text-gray-500">Loading news...</p>
        )}
      </div>
    </div>
  );
};

export default News;
