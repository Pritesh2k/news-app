import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/newslist.css';

const API_KEY = 'f8dc279aff0e487599c18563cb686d1f'; // Replace this with your NewsAPI.org API key

function NewsList({ searchTerm }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchTopHeadlines = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=${API_KEY}`);
        const filteredArticles = response.data.articles.filter(article => article.urlToImage && article.description); // Filter articles without image or description
        setArticles(filteredArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchTopHeadlines();
  }, []);

  useEffect(() => {
    const fetchArticlesBySearch = async () => {
      try {
        if (searchTerm.trim() !== '') {
          const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchTerm}&pageSize=100&apiKey=${API_KEY}`);
          const filteredArticles = response.data.articles.filter(article => article.urlToImage && article.description); // Filter articles without image or description
          setArticles(filteredArticles);
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticlesBySearch();
  }, [searchTerm]);

  return (
    <div className='grid-container'>
      {articles.map((article, index) => (
        <div key={index} className='grid-item'>
          <p className='title'>{article.title}</p>
          <img className='article-img' src={article.urlToImage} alt={article.title} />
          <a className='read-more' href={article.url}>Read More</a>
          <p className='description'>{article.description}</p>

          <div className='additional-info'>
            <div>{article.source.name}</div>
            <div>{article.author}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
