import { createContext, useState } from "react";


export const UserContext = createContext();


export const UserProvider = (props) => {
  const [loggedUser, setLoggedUser] = useState(null);

  const [isLogged, setIsLogged] = useState(false);

  const [alreadyVoted, setAlreadyVoted] = useState([]);

  return <UserContext.Provider value={{ alreadyVoted, setAlreadyVoted, loggedUser, setLoggedUser, isLogged, setIsLogged }}>{props.children}</UserContext.Provider>;
};