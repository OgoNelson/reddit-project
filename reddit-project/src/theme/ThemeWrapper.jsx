import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function ThemeWrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeWrapper;
