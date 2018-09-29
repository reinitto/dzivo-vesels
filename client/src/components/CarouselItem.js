import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Carousel.css";
var Carousel = require("react-bootstrap").Carousel;

class Item extends Component {
  render() {
    const { post } = this.props;
    return (
      <Carousel.Item key={post._id}>
        <img width="auto" height="auto" alt="900x500" src={post.titlephoto} />
        <div className="absolute-div">
          <Carousel.Caption>
            <div className="row">
              <div className="col-md-12">
                <h1>{post.title}</h1>
              </div>
              <div className="col-md-6">
                <p>{post.sections}</p>
                <Link
                  to={`api/posts/${post._id}`}
                  type="button"
                  className=" carousel-button"
                >
                  Lasīt Tālāk
                </Link>
              </div>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    );
  }
}

export default Item;
