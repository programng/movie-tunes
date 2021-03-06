import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <Link to="/">
          ENSONGBLE
        </Link>
        <p className="header-title-sub">
          made with <span className="heart">&#9829;</span> by&nbsp;
          <a href="http://www.programng.com" target="_blank" rel="noopener noreferrer">
            Jonathan Ng
          </a>
        </p>
      </div>
      <ul className="header-nav-list">
        <Link to="/"><li className="header-nav-list-item">Predict Genre</li></Link>
        <Link to="/about"><li className="header-nav-list-item">About</li></Link>
        <a href="https://www.github.com/programng/ensongble-project" target="_blank" rel="noopener noreferrer">
          <li className="header-nav-list-item github-link">
          <img src="GitHub-Mark-32px.png" className="github-logo" alt="Github" height="20" width="20" />
            Model
          </li>
        </a>
        <a href="https://www.github.com/programng/ensongble-app" target="_blank" rel="noopener noreferrer">
          <li className="header-nav-list-item github-link">
            <img src="GitHub-Mark-32px.png" className="github-logo" alt="Github" height="20" width="20" />
            Web App
          </li>
        </a>
        <a href="https://www.github.com/programng/ensongble-app" target="_blank" rel="noopener noreferrer">
          <li className="header-nav-list-item github-link">
            <img src="GitHub-Mark-32px.png" className="github-logo" alt="Github" height="20" width="20" />
            API
          </li>
        </a>
        <a href="http://www.programng.com" target="_blank" rel="noopener noreferrer"><li className="header-nav-list-item">programng</li></a>
      </ul>
    </div>
  );
}

export default Header;
