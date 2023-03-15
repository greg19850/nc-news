import { useContext, useState } from "react";
import { UserContext } from "../context/Users";

function UserCard({ userData }) {

  const { loggedUser, setLoggedUser, isLogged, setIsLogged } = useContext(UserContext);

  const [errMsg, setErrMsg] = useState(false);

  const handleUserLogin = (e, user) => {

    if (!isLogged) {
      setErrMsg(false);
      setIsLogged(true);
      setLoggedUser(user);
      e.target.textContent = 'User Logged In / Log Out';
      e.target.classList.add('success');
    } else if (isLogged && user.username === loggedUser.username) {
      setErrMsg(false);
      setIsLogged(false);
      setLoggedUser(null);
      e.target.textContent = 'Login';
      e.target.classList.remove('success');
    } else if (isLogged && user.username !== loggedUser.username) {
      return setErrMsg(true);
    }
  };


  return (
    <li className="user-card">
      <div className="img-container">
        <img src={userData.avatar_url} alt={userData.name} />
      </div>
      <h2>{userData.username}</h2>
      <button onClick={(e) => { handleUserLogin(e, userData); }}>Login</button>
      {errMsg && <p className="error">Another User already logged in!!</p>}
    </li>
  );
}

export default UserCard;