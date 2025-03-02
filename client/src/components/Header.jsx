import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Logo from '../images/_logo.png';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800);

  const handleResize = () => {
    setIsNavShowing(window.innerWidth > 800);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeNavHandler = () => {
    if (window.innerWidth < 800) {
      setIsNavShowing(false);
    } else {
      setIsNavShowing(true);
    }
  };

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav_logo" onClick={closeNavHandler}>
          <img src={Logo} alt="Navbar Logo" />
        </Link>
        <div className="AB">
             <h3>AB BLOGS</h3>
        </div>
     
        {isNavShowing && (
          <ul className='nav__menu'>
            <li><Link to="/profile/sdfsdf" onClick={closeNavHandler}>Ernest Achiever</Link></li>
            <li><Link to="/create" onClick={closeNavHandler}>Create Post</Link></li>
            <li><Link to="/authors" onClick={closeNavHandler}>Authors</Link></li>
            <li><Link to="/logout" onClick={closeNavHandler}>Logout</Link></li>
            <li> <Link to="/login" onClick={closeNavHandler}>Login</Link> </li>
          </ul>
        )}
        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Header;



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../images/_logo.png';
// import { FaBars } from 'react-icons/fa';
// import { AiOutlineClose } from 'react-icons/ai';

// const Header = ({ isLoggedIn }) => {
//   const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800);

//   const handleResize = () => {
//     setIsNavShowing(window.innerWidth > 800);
//   };

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const closeNavHandler = () => {
//     if (window.innerWidth < 800) {
//       setIsNavShowing(false);
//     } else {
//       setIsNavShowing(true);
//     }
//   };

//   return (
//     <nav>
//       <div className="container nav__container">
//         <Link to="/" className="nav_logo" onClick={closeNavHandler}>
//           <img src={Logo} alt="Navbar Logo" />
//         </Link>
//         <div className="AB">
//           <h3>AB BLOGS</h3>
//         </div>

//         {isNavShowing && (
//           <ul className="nav__menu">
//             {isLoggedIn ? (
//               <>
//                 <li>
//                   <Link to="/profile/sdfsdf" onClick={closeNavHandler}>Ernest Achiever</Link>
//                 </li>
//                 <li>
//                   <Link to="/create" onClick={closeNavHandler}>Create Post</Link>
//                 </li>
//                 <li>
//                   <Link to="/authors" onClick={closeNavHandler}>Authors</Link>
//                 </li>
//                 <li>
//                   <Link to="/logout" onClick={closeNavHandler}>Logout</Link>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <Link to="/authors" onClick={closeNavHandler}>Authors</Link>
//                 </li>
//                 <li>
//                   <Link to="/login" onClick={closeNavHandler}>Login</Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         )}
//         <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
//           {isNavShowing ? <AiOutlineClose /> : <FaBars />}
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Header;
