import React, { Component } from "react";
import { connect } from "react-redux";
import "../components/News.css";
import PropTypes from "prop-types";
import { getPost, getPosts } from "../actions/postActions";
import SideBar from "./articles/SideBar";

class Post extends Component {
  componentWillMount() {
    this.props.getPost(this.props.match.params.id);
    this.props.getPosts();
  }

  render() {
    const post = this.props.post.post;
    const posts = this.props.post.posts;

    let postContent;
    console.log(this.props.post);
    postContent = (
      <div>
        <h1>{post.title}</h1>
        <img src={post.titlephoto} className="img-responsive" alt="" />
        <p>{post.sections}</p>
      </div>
    );

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-2 container">
            {postContent}
          </div>
          <div className=" col-xs-12 col-sm-3  col-sm-offset-1">
            <SideBar posts={posts} />{" "}
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { getPost, getPosts }
)(Post);
