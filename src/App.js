import React, { useState } from 'react';
import './App.css';

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

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
  const [loginClicked, setLoginClicked] = useState(false);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryClick = category => {
    setSearchTerm(category);
    setActiveCategory(category);
  };

  const handleLoginClick = () => {
    setLoginClicked(true);
  };

  const handleCloseClick = () => {
    setLoginClicked(false);
    setSearchTerm(''); // Reset search term
    setActiveCategory(''); // Reset active category
  };

  return (
    <div className="App">
      <div className='title-container'>
        <div className='title-content-container'>
          <h2>News APP</h2>
          <a className='login-container' onClick={handleLoginClick}>
            Login
          </a>
        </div>
        <div className={`news-category ${loginClicked ? 'hidden' : ''}`}>
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
      <div className={`body-container ${loginClicked ? 'hidden' : ''}`}>
        <div className='search-container'>
          <div className="search-box">
            <button className="btn-search"><i className="fas fa-search"></i><SearchIcon className='search-icon' /></button>
            <input type="text" className="input-search" placeholder="Type to Search..." value={searchTerm} onChange={handleSearchChange} />
          </div>
        </div>

        <div className='news-articles-container'>
          <NewsList searchTerm={searchTerm} />
        </div>
      </div>
      {/* Empty red container */}
      {loginClicked && (
        <div className={`empty-container visible`}>
          <div className='close-container'>
            <div className='close' onClick={handleCloseClick}>
              <CloseIcon />
            </div>
          </div>

          <div className='login-signup-container'>
            <div className='login-form-container'>
              <div className='form-title'>
                Login
              </div>

              <div className='form-container'>
                <form className="login-form">
                  <label htmlFor="uname">User Name</label><br />
                  <input type="text" id="uname" name="uname" /><br />
                  <label htmlFor="password">Password</label><br />
                  <input type="password" id="password" name="password" /><br />
                  <input type="submit" value="Submit" className="submit-btn" />
                </form>
              </div>
            </div>

            <div className='login-form-container'>
              <div className='form-title'>
                Sign Up
              </div>

              <div className='form-container'>
                <form className="login-form">
                  <label htmlFor="uname">First Name</label><br />
                  <input type="text" id="uname" name="uname" /><br />

                  <label htmlFor="uname">Last Name</label><br />
                  <input type="text" id="uname" name="uname" /><br />

                  <label htmlFor="uname">User Name</label><br />
                  <input type="text" id="uname" name="uname" /><br />

                  <label htmlFor="password">Password</label><br />
                  <input type="password" id="password" name="password" /><br />

                  <input type="submit" value="Submit" className="submit-btn" />
                </form>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
