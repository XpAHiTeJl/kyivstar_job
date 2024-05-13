import { createContext } from "react";

export const Context = createContext(null);

const AppContext = ({ children }) => {
  return (
    <Context.Provider
      value={{
        navigation: [
          { name: "Product", href: "#" },
          { name: "Features", href: "#" },
          { name: "Marketplace", href: "#" },

          { name: "Company", href: "#" },
        ],
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
