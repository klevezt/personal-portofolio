import * as React from "react";
import Box from "@mui/material/Box";
import styles from "./IndexCarousel.module.css";
import Carousel from "react-bootstrap/Carousel";
import { heroCarouselItems } from "../../../_constants/carousel";

function IndexCarousel() {
  return (
    <Box className={styles["kp-index-slider-wrapper"]}>
      <div className="absolute top-32 left-[5vw] right-[5vw] text-center md:left-1/2 md:-translate-x-1/2 h-auto text-white font-custom ">
        <h1 className="text-6xl sm:text-6xl md:text-[7vw]">Make it work.</h1>
        <h1 className="text-4xl sm:text-4xl md:text-[4vw] mb-4">Make it right.</h1>
        <h1 className="text-4xl sm:text-4xl md:text-[4vw]">Make it fast.</h1>
      </div>

      <div className="absolute bottom-0 left-[5vw] md:left-1/4 right-[5vw] md:right-1/4 h-auto text-white">
        <Carousel controls={false} indicators={false} interval={5000} pause={false}>
          {heroCarouselItems.map((step, index) => (
            <Carousel.Item key={index} className="min-h-[250px]">
              <div className="flex justify-center items-center flex-col md:flex-row">
                <img
                  src={step.imgPath}
                  alt={step.label}
                  style={{ width: 120, objectFit: "contain" }}
                  className="mb-6 md:mb-0 border rounded-lg bg-white"
                />
                <div className="border-t-2 md:border-l-2 md:border-t-0 ml-8 p-8">
                  <h4>{step.label}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Box>
  );
}

export default IndexCarousel;
