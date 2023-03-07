import '@/styles/fonts.css'
import '@/styles/globals.css'
import { useEffect } from "react";
import PropTypes from "prop-types";
import { StylesProvider } from "@/pages/context/StyleContext";

function App({ Component, pageProps }) {

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return <StylesProvider>
    <Component {...pageProps} />
  </StylesProvider>
}

// App.propTypes = {
//   Component: PropTypes.func,
//   pageProps: PropTypes.any,
// };

export default App;