import React from "react";
// import Card from "@mui/material/Card";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";

import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";

// import TreeView from "@mui/lab/TreeView";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import TreeItem from "@mui/lab/TreeItem";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[200],
      dark: blueGrey[400],
    },
    secondary: {
      main: grey[100],
    },
  },
  typography: {
    fontFamily: ["Source Code Pro", "monospace"].join(","),
  },
});

export default function UserCard(props) {
  // console.log("user--->", props.user);
  const { error, isLoading } = props.state;

  if (error) {
    return <div></div>;
  } else if (isLoading) {
    return <CircularProgress />;
  } else {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              textAlign: "center",
              width: 250,
              height: 310,
              backgroundColor: "primary.main",
              borderRadius: 1.5,
              // padding: 3,
              marginTop: 2,
              paddingTop: 2,
              paddingLeft: 2,
              paddingRight: 2,
              paddingBottom: 0.8,
              "&:hover": {
                backgroundColor: "primary.dark",
                //   opacity: [0.9, 0.8, 0.7],
                color: blueGrey[100],
              },
            }}
          >
            <p className="def">{props.user.id}</p>

            <h1>{props.user.name}</h1>

            <p className="def">E-mail</p>
            <p>{props.user.email}</p>

            {/* <p className="def">City:</p>
            <p>{props.user.address.city}</p>

            <p className="def">Street:</p>
            <p>{props.user.address.street}</p>

            <p className="def">Suite:</p>
            <p>{props.user.address.suite} </p>

            <p className="def">Phone number:</p>
            <p>{props.user.phone}</p>

            <p className="def">Company-name</p>
            <p>{props.user.company.name}</p> */}

            <li className="card-li">
              <Link to={`/users/${props.user.id}`}>Details</Link>
            </li>
          </Box>
        </ThemeProvider>
      </div>
    );
  }
}
