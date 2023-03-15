import { useEffect, useState } from "react";
import { getUsers } from "../utils/api";
import UserCard from "./UserCard";

import '../styles/Users.scss';

function UserLogin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then(usersList => {
        setUsers(usersList);
      });
  }, []);

  return (
    <div className="users-page">
      <h2>Registered Users</h2>
      <ul className="users-list">
        {users.map(user => {
          return <UserCard key={user.username} userData={user} />;
        })}

      </ul>
    </div>
  );
}

export default UserLogin;