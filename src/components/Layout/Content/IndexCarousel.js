import * as React from "react";
import Box from "@mui/material/Box";
import styles from "./IndexCarousel.module.css";
import Carousel from "react-bootstrap/Carousel";

const images = [
  {
    label: "React",
    imgPath: "logo.svg",
    description:
      "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.",
  },
  {
    label: "TailwindCSS",
    imgPath: "tailwind-css-2.svg",
    description:
      "Tailwind CSS makes it quicker to write and maintain the code of your application. By using this utility-first framework, you can use utility classes to control the padding, margin, color, font, shadow, and more of your application.",
  },
  {
    label: "MongoDB",
    imgPath: "mongodb.svg",
    description:
      "MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need.",
  },
  // {
  //   label: "Redux",
  //   imgPath: "redux.svg",
  //   description:
  //     "Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.",
  // },
];

function IndexCarousel() {
  return (
    <Box className={styles["kp-index-slider-wrapper"]}>
      <div className="absolute top-32 left-[5vw] right-[5vw] text-center md:left-1/2 md:-translate-x-1/2 h-auto text-white font-custom ">
        <h1 className="text-5xl sm:text-7xl md:text-6vw">Make it work.</h1>
        <h1 className="text-5xl sm:text-7xl md:text-6vw">Make it right.</h1>
        <h1 className="text-5xl sm:text-7xl md:text-6vw">Make it fast.</h1>
      </div>

      <div className="absolute bottom-0 left-[5vw] md:left-1/4 right-[5vw] md:right-1/4 h-auto text-white">
        <Carousel
          controls={false}
          indicators={false}
          interval={7000}
          pause={false}
        >
          {images.map((step, index) => (
            <Carousel.Item key={index} className="min-h-[300px]">
              <div className="flex justify-center flex-col md:flex-row">
                <img
                  src={step.imgPath}
                  alt={step.label}
                  style={{ width: 120, objectFit: "contain" }}
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
