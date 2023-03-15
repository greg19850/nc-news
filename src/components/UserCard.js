import { useContext } from "react";
import { UserContext } from "../context/Users";

function UserCard({ userData }) {

  const { loggedUser, setLoggedUser } = useContext(UserContext);

  return (
    <li className="user-card">
      <h2>{userData.username}</h2>
      <div className="img-container">
        <img src={userData.avatar_url} alt={userData.name} />
      </div>
      <button>Login</button>
    </li>
  );
}

export default UserCard;