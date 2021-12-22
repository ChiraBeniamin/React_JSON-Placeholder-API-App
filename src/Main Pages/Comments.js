import React from "react";
import Grid from "@mui/material/Grid";
import CommentsCard from "./CommentsCard";

export default function Comments(props) {
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
        {props.state.comments.slice(0, 10).map((comment) => (
          <Grid item xs={12} sm={10} md={6} lg={3} key={comment.id}>
            <CommentsCard comment={comment} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
