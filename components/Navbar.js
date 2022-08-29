import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [expandNavbar, setExpanNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]
  );


  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => setExpanNavbar((prev) => !prev)}>
          </button>
        <div className="links">
      <Link to="/"> Home </Link>
      <Link to="/projects"> Projects </Link>
      <Link to="/experience"> Experience </Link>
    </div>
   </div> 
  );
}

export default Navbar;

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

// function Navbar({ currentPage, handlePageChange }) {
//   return (
//     <div className='overlay'>
//     <div className="navbar">
//     <ul className="nav navbar">
//       <li className="nav-item">
//         <a
//           href="#home"
//           onClick={() => handlePageChange('Home')}
//           // This is a conditional (ternary) operator that checks to see if the current page is "Home"
//           // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
//           className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
//         >
//           Home
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#about"
//           onClick={() => handlePageChange('About')}
//           // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//         >
//           About
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#projects"
//           onClick={() => handlePageChange('Projects')}
//           // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
//         >
//           Projects
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#contact"
//           onClick={() => handlePageChange('Contact')}
//           // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//         >
//           Contact
//         </a>
//       </li>
//     </ul>
//   </div>
// </div>
// );
// }


// export default Navbar;
