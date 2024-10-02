import React from 'react';
import { Link } from 'react-router-dom';
// import './App.css';

function Header({ onLoginClick }) {
  return (
    <div>
      <header>
        <h2 className="logo">Logo</h2>
        <nav className="navigation">
          <ul>
            <li><a href="#">Hồ sơ CV</a></li>
            <li><a href="#">Việc làm</a></li>
            <li><a href="#">Công ty</a></li>
          </ul>
        </nav>
        <nav className="navigation2">
          <button className="btnLogin-popup2">Đăng ký</button>
          <Link to="/login">
            <button className="btnLogin-popup" onClick={onLoginClick}>Đăng nhập</button>
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
