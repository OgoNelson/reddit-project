import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import shadows from "@mui/material/styles/shadows";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          ":hover": {
            color: "red",
          },
        },
      },
    },
  },
});

export default theme;
