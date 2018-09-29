import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    let posts = [
      {
        _id: 0,
        titlephoto: "",
        title: "",
        sections: ""
      }
    ];
    posts = this.props.posts || posts;
    posts = posts.slice(0, 4);
    return (
      <div>
        <Carousel showThumbs={false} showArrows={true}>
          {posts.map(post => {
            return (
              <div key={post._id}>
                <a href="/">
                  <img src={post.titlephoto} alt="" />
                  <p className="legend">{post.sections}</p>
                </a>
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default DemoCarousel;
