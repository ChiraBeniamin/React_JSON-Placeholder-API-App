import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import { grey } from "@mui/material/colors";
// import { withStyles } from "@mui/styles";
// import { makeStyles } from "@material-ui/core/styles";

import Typography from "@mui/material/Typography";
import "@fontsource/roboto";

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[700],
    },
    secondary: {
      main: grey[100],
    },
  },
  typography: {
    fontFamily: ["Source Code Pro", "monospace"].join(","),
  },
});
// const useStyles = makeStyles((theme) => ({
//   title: {
//     flexGrow: 1,
//     textAlign: "center",
//   },
// }));

export default function MainNavigation(props) {
  // const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar
          position="static"
          // className={classes.appbar}
        >
          <Typography textAlign="center" variant="h2" color="secondary">
            Client Evidence
          </Typography>
          {/* <h1>Benita Sweets</h1> */}
          <Toolbar variant="dense">
            <li className="header-li">
              <Link to="/">Users</Link>
            </li>
            <li className="header-li">
              <Link to="/posts">Posts</Link>
            </li>
            <li className="header-li">
              <Link to="/comments">Comments</Link>
            </li>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
// HigherOrderComponent.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(HigherOrderComponent);
