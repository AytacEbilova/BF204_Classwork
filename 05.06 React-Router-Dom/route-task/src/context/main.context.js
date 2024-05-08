import React, { useState } from "react";
import { createContext, useContext } from "react";
const CountriesContext = createContext(null);

const MainContext = ({children}) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getAll("/countries")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        message.error("Failed to fetch data: " + err.message);
      });
  }, []);

  return (
    <div>
      <CountriesContext.Provider value={{countries,setCountries}}>
       {children}
      </CountriesContext.Provider>
    </div>
  );
};

export default MainContext;
