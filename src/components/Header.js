import { FaUser, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '../styles/Header.css';

const userIcon = <FaUser className='user-icon' />;
const homeIcon = <FaHome className='home-icon' />;


function Header() {
  return (
    <div className="header-container">
      <Link to={'/'} className='home'><div >{homeIcon}</div></Link>
      <h1 className="header">NC News</h1>
      <div className="user">
        <span>login</span>{userIcon}
      </div>
    </div>

  );
}

export default Header;