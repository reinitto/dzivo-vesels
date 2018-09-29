import React, { Component } from "react";
import News from "./News";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../actions/postActions";
import CarouselTest from "./CarouselContainer";
import "./Carousel.css";

class Home extends Component {
  componentWillMount() {
    this.props.getPosts();
  }

  render() {
    const { posts } = this.props.post;
    return (
      <div>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-sm-offset-2 col-sm-8  ">
              <CarouselTest posts={posts} />
            </div>
          </div>
        </div>

        <News posts={posts} />
      </div>
    );
  }
}

Home.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Home);
