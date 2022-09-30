import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const LINKS = [
  { to: '/home', text: 'Home' },
  { to: '/calculator', text: 'Calculator' },
  { to: '/Quote', text: 'Quote' },
];

const Navs = () => (
  <div className="Nav-bar">
    <h1> MATH MAGICIANS</h1>
    <ul>
      {LINKS.map((item) => (
        <li key={item.to}>
          {' '}
          <Link to={item.to}>{item.text}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Navs;
