import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../css/newslist.css'

const API_KEY = 'f8dc279aff0e487599c18563cb686d1f'; // Replace this with your NewsAPI.org API key

function NewsList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchTopArticles = async () => {
            try {
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=${API_KEY}`);
                setArticles(response.data.articles);
                console.log(response);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchTopArticles();
    }, []);

    return (
        <div className='grid-container'>
            {articles.map((article, index) => (
                <div key={index} className='grid-item'>
                    <p className='title'>{article.title}</p>
                    <img className='article-img' src={article.urlToImage} />
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
