import React from "react";
import Carousel from "./Carousel";
import News from "./News";

const Home = () => (
  <div>
    <h2
      style={{
        textAlign: "center",
        color: "rgb(2, 111, 137)",
        fontSize: "28px"
      }}
    >
      Kā paaugstināt darbaspējas, atbrīvoties no liekajiem kilogramiem un
      uzlabot savu dzīves kvalitāti
    </h2>
    <Carousel />
    <News />
  </div>
);

export default Home;
