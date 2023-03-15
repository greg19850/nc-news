import { useEffect, useState } from "react";
import { getUsers } from "../utils/api";
import UserCard from "./UserCard";

import '../styles/Users.scss';

function UserLogin() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getUsers()
      .then(usersList => {
        setUsers(usersList);
        setIsLoading(false);
      });
  }, []);

  const loadingMsg = <p className='loading'>Loading Users...</p>;
  return (
    <div className="users-page">
      <h2>Registered Users</h2>
      <ul className="users-list">
        {isLoading ? loadingMsg : users.map(user => {
          return <UserCard key={user.username} userData={user} />;
        })}

      </ul>
    </div>
  );
}

export default UserLogin;