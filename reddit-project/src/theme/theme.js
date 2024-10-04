import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

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
          backgroundColor: grey[500],
          ":hover": {
            color: "red",
          },
        },
      },
    },
  },
});

export default theme;
