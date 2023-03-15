import { useContext } from "react";
import { UserContext } from "../context/Users";

function UserCard({ userData }) {

  const { loggedUser, setLoggedUser } = useContext(UserContext);

  return (
    <li className="user-card">
      <div className="img-container">
        <img src={userData.avatar_url} alt={userData.name} />
      </div>
      <h2>{userData.username}</h2>
      <button>Login</button>
    </li>
  );
}

export default UserCard;