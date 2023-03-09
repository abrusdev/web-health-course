import { createContext, useContext, useEffect, useState } from "react";

const RegistrationContext = createContext();

function RegistrationProvider({ children }) {

  const [value, setValue] = useState({})

  return (
    <RegistrationContext.Provider value={{
      data: value,
      setData: (data) => {
        setValue(data)
      }
    }}>
      {children}
    </RegistrationContext.Provider>
  )
}

function useRegistration() {
  return useContext(RegistrationContext);
}

export default RegistrationContext;
export { RegistrationProvider, useRegistration };