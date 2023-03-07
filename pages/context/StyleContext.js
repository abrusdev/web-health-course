import { createContext, useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const StylesContext = createContext();

function StylesProvider({ children }) {
  const checkMobile = useMediaQuery({ maxWidth: 1160 });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(checkMobile ? checkMobile : false);
  }, [checkMobile]);

  return (
    <StylesContext.Provider value={{ isMobile }}>
      {children}
    </StylesContext.Provider>
  )
}

function useStyles() {
  return useContext(StylesContext);
}

export default StylesContext;
export { StylesProvider, useStyles };