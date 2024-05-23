import React from "react";

import { motion } from "framer-motion";

const groupMotion = {
  rest: {
    scale: 0.8,
  },
  hover: {
    scale: 0.95,
    rest: { duration: 0.2 },
  },
};

const eyeMotion = {
  rest: {
    x:0,
    opacity: 1,
    scale: 1,
  },
  hover: {
    x: [0, -20,20, 0],

    transition: {
      repeat: Infinity,
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const EyeBadge = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="334"
    height="328"
    fill="none"
    viewBox="0 0 334 328"
  >
    <motion.g
      id="Group 1"
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={groupMotion}
    >
      <g className="hex">
        <path
          fill="#234588"
          d="M159.5 9l138.131 79.75v159.5L159.5 328 21.369 248.25V88.75L159.5 9z"
          className="sha"
        ></path>
        <path
          fill="#92BDFF"
          d="M174.5 0l138.131 79.75v159.5L174.5 319 36.369 239.25V79.75L174.5 0z"
          className="base"
        ></path>
        <path
          fill="#87B1EF"
          d="M175.5 13l126.007 72.75v145.5L175.5 304 49.493 231.25V85.75L175.5 13z"
          className="top"
        ></path>
        <path
          stroke="#fff"
          strokeWidth="6"
          d="M184 11l124.5 71"
          className="shine"
        ></path>
        <path
          stroke="#234588"
          strokeWidth="3"
          d="M174 21l124.5 71m-1.012-2l.762 143.32"
          className="topsha"
        ></path>
      </g>
      <g className="eye">
        <g className="eyeparts">
          <path
            stroke="#DE8EC8"
            strokeLinecap="round"
            strokeWidth="12"
            d="M184.461 154.857l32.071 30.536c5.031 4.79 3.944 13.091-2.15 16.425l-11.898 6.508c-9.316 5.096-5.697 19.253 4.921 19.253h69.896"
            className="Vector 22"
          ></path>
          <circle
            cx="132.79"
            cy="162.316"
            r="71.79"
            fill="#fff"
            className="Ellipse 4"
          ></circle>
          <path
            fill="#ECECEC"
            d="M170.212 220.591a71.792 71.792 0 01-95.94-34.42 71.788 71.788 0 01-6.46-36.781l8.698.778a63.056 63.056 0 0089.944 62.54l3.758 7.883z"
            className="Ellipse 5"
          ></path>
        </g>
        <motion.g
          id="ear"
          initial="rest"
          animate="rest"
          whileHover="hover"
          variants={eyeMotion}
        >
          <rect x="0" y="0" width="300" height="300" fill="transparent" />
          <path
            fill="#87E3EF"
            d="M162.624 162.782c0 15.19-12.314 27.504-27.503 27.504-15.19 0-27.504-12.314-27.504-27.504 0-15.19 12.314-27.504 27.504-27.504 15.189 0 27.503 12.314 27.503 27.504z"
          ></path>
          <path
            fill="#fff"
            d="M155.838 155.108a22.385 22.385 0 00-8.68-11.349 22.384 22.384 0 00-13.777-3.783l.208 3.648a18.722 18.722 0 0118.79 12.661l3.459-1.177z"
          ></path>
          <path
            fill="#000"
            d="M149.572 162.782c0 7.981-6.47 14.451-14.451 14.451-7.982 0-14.452-6.47-14.452-14.451 0-7.981 6.47-14.451 14.452-14.451 7.981 0 14.451 6.47 14.451 14.451z"
          ></path>
        </motion.g>
      </g>
    </motion.g>
  </svg>
);

export default EyeBadge;
