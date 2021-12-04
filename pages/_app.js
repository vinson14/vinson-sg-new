import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      text: {
        primary: "#272932",
      },
      background: {
        default: "#FDF7FA",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
