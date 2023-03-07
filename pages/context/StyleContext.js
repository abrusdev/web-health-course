import { createContext, useContext } from "react";
import { useMediaQuery } from "react-responsive";

const StylesContext = createContext();

function StylesProvider({ children }) {
  const isMobile = useMediaQuery({ maxWidth: 1160 });

  console.log(isMobile)

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