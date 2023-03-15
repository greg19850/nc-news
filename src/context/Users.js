import { createContext, useState } from "react";


export const UserContext = createContext();


export const UserProvider = (props) => {
  const [loggedUser, setLoggedUser] = useState(null);

  const [userVoted, setUserVoted] = useState(false);

  return <UserContext.Provider value={{ loggedUser, setLoggedUser, userVoted, setUserVoted }}>{props.children}</UserContext.Provider>;
};