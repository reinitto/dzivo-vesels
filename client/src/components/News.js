import React, { Component } from "react";
import "./News.css";
import { Link } from "react-router-dom";
import FirstArticle from "./FirstArticle";
import Spinner from "./Spinner";

class News extends Component {
  render() {
    const posts = this.props.posts;
    let postContent;
    if (posts === null || Object.keys(posts).length === 0) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div>
          <FirstArticle firstpost={posts.shift()} />
          {posts.map(post => {
            return (
              <div className="col-page col-sm-4 col-md-3 " key={post._id}>
                <Link
                  to={`api/posts/${post._id}`}
                  className="fondo-publicacion-home"
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
                    <p>
                      {post.sections}
                      <span>...</span>
                    </p>
                  </div>
                  <div className="mascara-enlace-blog-home">
                    <span>Lasīt</span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      );
    }
    return (
      <div className="container-fluid">
        <div className=" row">
          <div className="col-md-10 col-md-offset-1">
            <section className="publicaciones-blog-home">
              <div>
                <div className="row-page row">{postContent}</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
