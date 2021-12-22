import React from "react";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import { grey } from "@mui/material/colors";

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

export default function PostsCard(props) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            textAlign: "center",
            width: 250,
            height: 400,
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
          <h1>{props.post.id}</h1>

          <p className="def">Title:</p>
          <p>{props.post.title}</p>

          <p className="def">Post:</p>
          <p>{props.post.body}</p>
        </Box>
      </ThemeProvider>
    </div>
  );
}
