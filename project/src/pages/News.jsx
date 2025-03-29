import { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState(null);
  const fetchNews = async () => {
    try {
      const res = await axios.get(
        "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
      );
      setNews(res.data.articles);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  console.log(news);

  return (
    news !== undefined &&
    news !== null && (
      <div className="space-y-10">
        {news.map((item, index) => (
          <div className="space-y-2 border p-4" key={index}>
            <h1>{item.title}</h1>
            <h1>{item.author}</h1>
            <h2>{item.content}</h2>
            <p>{item.description}</p>
            <img className="w-1/2 h-1/2" src={item.urlToImage} alt="News" />
          </div>
        ))}
      </div>
    )
  );
};

export default News;
