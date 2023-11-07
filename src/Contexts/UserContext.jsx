import { createContext, useContext, useState, useCallback, useEffect } from "react";
import localStorageKey from "../constant/localStorageKey";
import { jwtDecode } from "jwt-decode";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem(localStorageKey.USER_PROFILE);
    if(storedUser) {
        setUser(storedUser);
    }
  }, []);

  const login = useCallback((username) => {
    setUser(username);
    localStorage.setItem(localStorageKey.USER_PROFILE, username);
  }, []);

  const logout = useCallback(() => {
    setUser();
    localStorage.removeItem(localStorageKey.USER_PROFILE);
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
