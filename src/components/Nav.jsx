import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  { to: '/home', text: 'Home' },
  { to: '/calculator', text: 'Calculator' },
  { to: '/about', text: 'About' },
];

// const Nav = () => (
//   <div>
//     <h2>Mathmatician</h2>
//     <ul>
//       LINKS.map((file) => (
//       <li key={file.to}>
//         <Link to={file.to}>{file.test}</Link>
//       </li>
//       ));
//     </ul>
//   </div>
// );
const Navs = () => (
  <div>
    <h1> MATH MAGICIANS</h1>
    <ul>
      {LINKS.map((item) => (
        <li key={item.to}>
          {' '}
          <Link to={item.to}>
            {' '}
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Navs;
