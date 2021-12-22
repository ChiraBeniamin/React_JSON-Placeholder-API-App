import React from "react";
import Grid from "@mui/material/Grid";
import UserCard from "./UserCard";

export default function Users(props) {
  return (
    <div>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        direction="row"
        justifyContent="flex-start"
        // alignItems="center"
        alignItems="flex-start"
      >
        {props.state.users.map((user) => (
          <Grid item xs={12} sm={10} md={6} lg={3} key={user.id}>
            <UserCard state={props.state} user={user} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
