import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/postActions";
import "../News.css";
import SideBar from "./SideBar";

class ArticleLayout extends Component {
  componentWillMount() {
    this.props.getPosts();
  }

  render() {
    const { posts } = this.props.post;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-2 container">
            {this.props.children}
          </div>
          <div className=" col-xs-12 col-sm-3  col-sm-offset-1">
            <SideBar posts={posts} />
          </div>
        </div>
      </div>
    );
  }
}

ArticleLayout.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(ArticleLayout);
