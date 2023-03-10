import { createContext, useContext, useEffect, useState } from "react";

const RegistrationContext = createContext();

function RegistrationProvider({ children }) {

  const [value, setValue] = useState({})
  const [step, setStep] = useState(-1)

  return (
    <RegistrationContext.Provider value={{
      data: value,
      setData: (data) => {
        setValue(data)
      },
      step, setStep
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