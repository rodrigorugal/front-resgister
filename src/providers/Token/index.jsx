import { createContext, useState } from "react";

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const addToken = (access) => {
    localStorage.setItem("@Acess:Token", JSON.stringify(access));
    setToken(access);
  };

  return (
    <TokenContext.Provider value={{ token, addToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export { TokenProvider, TokenContext };
