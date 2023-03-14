import { FaUser, FaHome } from 'react-icons/fa';

import '../styles/Header.scss';

function Header() {
  return (
    <div className="header-container">
      <div className='home'><FaHome className='react-icon' /></div>
      <h1 className="header">NC News</h1>
      <div className="user">
        <span>login</span> <FaUser className='react-icon' />
      </div>
    </div>

  );
}

export default Header;