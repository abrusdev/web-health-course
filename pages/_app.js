import '@/styles/fonts.css'
import '@/styles/globals.css'
import { useEffect } from "react";
import { RegistrationProvider } from "@/context/RegistrationContext";
import { StylesProvider } from "@/context/StyleContext";

function App({ Component, pageProps }) {

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return <StylesProvider>
    <RegistrationProvider>
      <Component {...pageProps} />
    </RegistrationProvider>
  </StylesProvider>
}

// App.propTypes = {
//   Component: PropTypes.func,
//   pageProps: PropTypes.any,
// };

export default App;