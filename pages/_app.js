import '@/styles/fonts.css'
import '@/styles/globals.css'
import { useEffect } from "react";
import PropTypes from "prop-types";
import { StylesProvider } from "@/pages/context/StyleContext";
import { RegistrationProvider } from "@/pages/context/RegistrationContext";

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