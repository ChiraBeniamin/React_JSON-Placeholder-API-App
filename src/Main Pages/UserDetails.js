import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { blueGrey } from "@mui/material/colors";
// import { grey } from "@mui/material/colors";
// import Box from "@mui/material/Box";
import UserDetailsCard from "./UserDetailsCard";
import {
  NavigateFunction,
  useLocation,
  useNavigate,
  useParams,
} from "react-router";

export default function UserDetails(props) {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <li className="back-li">
        <Link to="/">Back</Link>
      </li>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        direction="row"
        justifyContent="flex-start"
        // alignItems="center"
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={10} md={6} lg={3}>
          <UserDetailsCard state={props.state} />
        </Grid>
      </Grid>
    </div>
  );
}
