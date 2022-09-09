import React from "react";
import { Carousel } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export const HomeCarosel = () => {
  return (
    <Carousel fade={true} pause={false} variant="dark">
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/48/original-0826-STDCRE-40745-DS-EF-Sept-Batch-SHOT33-HomePage_1920x700-063848.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="CrouselText">
          <h1 className="h1carosal">Introducing Chantecaille</h1>
          <p className="h1carosal">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/26/original-Chantecaille_Banner_1920x700_%281%29-042426.png"
          alt="Third slide"
        />
        <Carousel.Caption className="CrouselText">
          <h1 className="h1carosal">New From SkinCeuticals</h1>
          <p className="h1carosal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/52/original-BoD_Necessities_Kit_1920x700-083952.png"
          alt="Third slide"
        />
        <Carousel.Caption className="CrouselText">
          <h1 className="h1carosal"> SkinCeuticals Nisl Consectetur</h1>
          <p className="h1carosal">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/26/original-Chantecaille_Banner_1920x700_%281%29-042426.png"
          alt="Third slide"
        />
        <Carousel.Caption className="CrouselText">
          <h1 className="h1carosal"> Praesent cursus magna</h1>
          <p className="h1carosal">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
