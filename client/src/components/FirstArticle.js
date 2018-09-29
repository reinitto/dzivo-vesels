import React, { Component } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
class FirstArticle extends Component {
  render() {
    let postContent;
    const firstpost = this.props.firstpost;

    if (firstpost === null || Object.keys(firstpost).length === 0) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div className="col-page col-sm-8 col-md-6" key={firstpost._id}>
          <Link
            to={`api/posts/${firstpost._id}`}
            className="black fondo-publicacion-home"
          >
            <div className="img-publicacion-principal-home">
              <img className="" src={firstpost.titlephoto} alt="" />
            </div>
            <div className="contenido-publicacion-principal-home">
              <h3>{firstpost.title}</h3>
              <p className="contenido-publicacion-home">
                {firstpost.sections}
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
    return <div>{postContent}</div>;
  }
}

export default FirstArticle;
