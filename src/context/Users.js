import { createContext, useState } from "react";


export const UserContext = createContext();


export const UserProvider = (props) => {
  const [loggedUser, setLoggedUser] = useState(null);

  const [isLogged, setIsLogged] = useState(false);

  return <UserContext.Provider value={{ loggedUser, setLoggedUser, isLogged, setIsLogged }}>{props.children}</UserContext.Provider>;
};