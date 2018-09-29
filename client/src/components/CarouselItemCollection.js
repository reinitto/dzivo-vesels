import React, { Component } from "react";
import CarouselItem from "./CarouselItem";

import React from "react";

const CarouselItemCollection = items => {
  return items.map(item => <CarouselItem key={item._id} item={item} />);
};

export default CarouselItemCollection;
