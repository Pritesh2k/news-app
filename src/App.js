import React, { useState, useEffect } from 'react';
import './App.css';

import SearchIcon from '@mui/icons-material/Search';
import NewsList from './Components/NewsList';

function App() {
  const [categories, setCategories] = useState([
    'Top News',
    'Politics',
    'Business',
    'Technology',
    'Entertainment',
    'Health',
    'Sports',
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('');

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryClick = category => {
    setSearchTerm(category);
    setActiveCategory(category);
  };

  return (
    <div className="App">
      <div className='title-container'>
        <div className='title-content-container'>
          <h2>News APP</h2>
          <a className='login-container'>
            Login
          </a>
        </div>
        <div className='news-category'>
          <ul>
            {categories.map((category, index) => (
              <li className={`category-item ${activeCategory === category ? 'active' : ''}`} key={index} onClick={() => handleCategoryClick(category)}>
                <div className='hover-category-item'>
                  {category}
                </div>
                <div className='category-item-txt'>
                  {category}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='body-container'>

        <div className='search-container'>
          <div className="search-box">
            <button className="btn-search"><i className="fas fa-search"></i><SearchIcon className='search-icon'/></button>
            <input type="text" className="input-search" placeholder="Type to Search..." value={searchTerm} onChange={handleSearchChange} />
          </div>
        </div>

        <div className='news-articles-container'>
          <NewsList searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
}

export default App;
