import '../styles/Navbar.scss';
import { useContext } from "react";
import { UserContext } from "../context/Users";

function Navbar() {
  const { loggedUser } = useContext(UserContext);

  let userInfo = loggedUser ? loggedUser.username : 'No User Logged in';
  return (
    <div className="navbar">
      <ul className='categories'>
        <li>Category1</li>
        <li>Category2</li>
        <li>Category3</li>
      </ul>
      <p className='user-info'>Logged in as: <span> {userInfo}</span></p>
    </div>
  );
}

export default Navbar;