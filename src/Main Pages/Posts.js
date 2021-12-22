import React from "react";
import Grid from "@mui/material/Grid";
import PostsCard from "./PostsCard";

export default function Posts(props) {
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
        {props.state.posts.slice(0, 10).map((post) => (
          <Grid item xs={12} sm={10} md={6} lg={3} key={post.id}>
            <PostsCard state={props.state} post={post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
