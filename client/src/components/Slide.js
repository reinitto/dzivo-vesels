import React from "react";

const Slide = ({ post }) => {
  const styles = {
    backgroundImage: `url(img/${post.titlephoto}.jpg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%"
  };
  return <div className="slide" style={styles} />;
};

export default Slide;
