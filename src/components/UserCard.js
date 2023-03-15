import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/Users";

function UserCard({ userData }) {

  const { loggedUser, setLoggedUser, isLogged, setIsLogged } = useContext(UserContext);

  const [errMsg, setErrMsg] = useState('');
  const [buttonText, setButtonText] = useState('Login');
  const [buttonClass, setButtonClass] = useState('');

  useEffect(() => {
    if (isLogged && loggedUser.username === userData.username) {
      setButtonText('User Logged In / Log Out');
      setButtonClass('success');
    }
  }, []);



  const handleUserLogin = (e, user) => {

    if (!isLogged) {
      setErrMsg('');
      setIsLogged(true);
      setLoggedUser(user);
      setButtonClass('success');
      setButtonText('User Logged In / Log Out');
    } else if (isLogged && user.username === loggedUser.username) {
      setErrMsg('');
      setIsLogged(false);
      setLoggedUser(null);
      setButtonClass('');
      setButtonText('Login');
    } else if (isLogged && user.username !== loggedUser.username) {
      return setErrMsg('Another User already logged in!!');
    }
  };

  return (
    <li className="user-card">
      <div className="img-container">
        <img src={userData.avatar_url} alt={userData.name} />
      </div>
      <h2>{userData.username}</h2>
      <button className={buttonClass} onClick={(e) => { handleUserLogin(e, userData); }}>{buttonText}</button>
      {errMsg && <p className="error">{errMsg}</p>}
    </li>
  );
}

export default UserCard;