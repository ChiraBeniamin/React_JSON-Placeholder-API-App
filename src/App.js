import React, { Component } from "react";
import MainNavigation from "./Main Pages/MainNavigation";
import { Route, Routes } from "react-router-dom";
import Users from "./Main Pages/Users";
import Posts from "./Main Pages/Posts";
import Comments from "./Main Pages/Comments";
import UserDetails from "./Main Pages/UserDetails";
import axios from "axios";

// import darkScrollbar from "@mui/material/darkScrollbar";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: [],
      comments: [],
      isLoading: false,
      error: null,
      userPostsAndComments: [],
    };
    // this.componentDidMount = this.componentDidMount.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    let one = "https://jsonplaceholder.typicode.com/users";
    let two = "https://jsonplaceholder.typicode.com/posts";
    let three = "https://jsonplaceholder.typicode.com/comments";

    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);

    axios
      .all([requestOne, requestTwo, requestThree])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          const responseThree = responses[2];

          // use/access the results
          // console.log(responseOne, responseTwo, responseThree);
          this.setState({
            users: responseOne.data,
            posts: responseTwo.data,
            comments: responseThree.data,
          });
          console.log(this.state);
        })
      )

      .catch((errors) => {
        // react on errors.
        console.error(errors);
      });

    //   .catch(function (error) {
    //     // handle error
    //     console.log("error--->", error);
    //   })
    //   .finally(function () {
    //     // always executed
    //   });

    // axios
    // .get("https://jsonplaceholder.typicode.com/users")
    // .then((response) => {
    //   // handle success
    //   // console.log("response--->", response);
    //   this.setState({
    //     users: response.data,
    //   });
    //   // console.log(this.state);
    // })

    //   .catch(function (error) {
    //     // handle error
    //     // console.log("error--->", error);
    //   })
    //   .finally(function () {
    //     // always executed
    //   });
  }
  render() {
    return (
      <div>
        <MainNavigation />
        <Routes>
          <Route path="/" element={<Users state={this.state} />} />
          <Route path="/posts" element={<Posts state={this.state} />} />
          <Route path="/comments" element={<Comments state={this.state} />} />
          <Route
            path="/users/:id"
            element={<UserDetails state={this.state} />}
          />
        </Routes>
      </div>
    );
  }
}
