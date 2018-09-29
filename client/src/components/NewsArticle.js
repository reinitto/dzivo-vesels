import React, { Component } from "react";
import { Link } from "react-router-dom";
class NewsArticle extends Component {
  render() {
    const post = this.props.post;
    return (
      <div className="col-page col-sm-4 col-md-3 ">
        <Link to="/Article2" className="fondo-publicacion-home">
          <div className="img-publicacion-home">
            <img className="img-responsive" src={post.articlephoto} alt="" />
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
  }
}
export default NewsArticle;
