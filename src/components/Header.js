import { FaUser, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '../styles/Header.scss';

const userIcon = <FaUser className='user-icon' />;
const homeIcon = <FaHome className='home-icon' />;


function Header() {
  return (
    <div className="header-container">
      <Link to={'/'} className='home'><div >{homeIcon}</div></Link>
      <h1 className="header">NC News</h1>
      <Link to={'/users'}>
        <div className="user">
          <span>login</span>{userIcon}
        </div>
      </Link>
    </div>

  );
}

export default Header;