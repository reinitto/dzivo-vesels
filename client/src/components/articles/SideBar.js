import React, { Component } from "react";
import "../News.css";
import { Link } from "react-router-dom";

import Spinner from "../Spinner";
class SideBar extends Component {
  render() {
    let posts = this.props.posts;

    let postContent;
    if (posts === null || Object.keys(posts).length === 0) {
      postContent = <Spinner />;
    } else {
      posts = posts.slice(0, 5);
      postContent = (
        <div>
          <section className="publicaciones-blog-home">
            <div>
              <div className="row-page row">
                <div
                  className="col-md-12 "
                  style={{
                    marginTop: "10px",
                    borderRight: "none"
                  }}
                >
                  {posts.map(post => {
                    return (
                      <Link
                        to={`api/posts/${post._id}`}
                        className="fondo-publicacion-home"
                        key={post._id}
                      >
                        <div className="img-publicacion-home">
                          <img
                            className="img-responsive"
                            src={post.titlephoto}
                            alt=""
                          />
                        </div>
                        <div className="contenido-publicacion-home">
                          <h3>{post.title}</h3>
                          <p>{post.sections}</p>
                        </div>
                        <div className="mascara-enlace-blog-home">
                          <span>Lasīt</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    return <div>{postContent}</div>;
  }
}

export default SideBar;
