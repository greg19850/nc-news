import { createContext, useState } from "react";


export const UserContext = createContext();


export const UserProvider = (props) => {
  const [loggedUser, setLoggedUser] = useState(null);

  const [userVoted, setUserVoted] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  return <UserContext.Provider value={{ loggedUser, setLoggedUser, userVoted, setUserVoted, isLogged, setIsLogged }}>{props.children}</UserContext.Provider>;
};