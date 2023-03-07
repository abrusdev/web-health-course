import { createContext } from "react";
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

export default StylesContext;
export { StylesProvider };