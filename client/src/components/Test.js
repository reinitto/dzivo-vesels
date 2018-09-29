import React, { Component } from "react";
import PropTypes from "prop-types";
import Article from "./Article";

class Test extends Component {
  render() {
    const { posts } = this.props;

    return posts.map(post => <Article key={post._id} post={post} />);
  }
}

Test.propTypes = {
  posts: PropTypes.array.isRequired
};
export default Test;
