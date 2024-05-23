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

const liverMotion = {
  rest: {
    opacity: 1,
    scale: 1,
  },
  hover: {
    scale: [1, 1.2, 1],
    transition: {
      repeat: Infinity,
      duration: 0.7,
      ease: "linear",
    },
  },
};

const LiverBadge = (props) => (
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
      <motion.g
        id="liver"
        initial="rest"
        animate="rest"
        whileHover="hover"
        variants={liverMotion}
      >
        <rect x="0" y="0" width="300" height="300" fill="transparent" />
        <path
          stroke="#DE8EC8"
          strokeLinecap="round"
          strokeWidth="25"
          d="M171.833 67c11.484 17.862 13.104 28.549 11.05 48.298m12.154 74.827c4.461 31.819 2.19 48.582-6.755 77.375"
          className="Vector"
        ></path>
        <g className="Vector">
          <path
            fill="url(#a)"
            d="M175.749 219.164L62.624 242.7c-5.14 1.069-8.7-4.997-5.263-8.963a5.487 5.487 0 001.34-3.593v-92.586a43.595 43.595 0 0139.258-43.38l15.304-1.53a92.04 92.04 0 0139.104 4.55l21.222 7.303a194.526 194.526 0 0034.44 8.433l17.202 2.581a194.145 194.145 0 0028.8 2.148h22.515c.92 0 1.836-.113 2.729-.336 11.846-2.962 19.261 12.422 9.566 19.844l-98.194 75.174a36.873 36.873 0 01-14.898 6.819z"
          ></path>
          <path
            fill="#81B15B"
            d="M128.561 222.755c1.946 6.151-4.933 13.813-15.366 17.115-10.433 3.301-20.468.991-22.414-5.16-1.947-6.15 4.933-13.813 15.365-17.114 10.433-3.301 20.468-.992 22.415 5.159z"
          ></path>
        </g>
        <path
          fill="#DE8EC8"
          d="M187.063 113.246a2.5 2.5 0 00-3.104 3.92l3.104-3.92zm-3.104 3.92c14.761 11.69 22.758 21.305 25.54 32.083 2.783 10.788.488 23.3-6.8 41.16l4.629 1.889c7.389-18.106 10.214-31.891 7.012-44.298-3.204-12.415-12.297-22.891-27.277-34.754l-3.104 3.92z"
          className="Vector 24"
        ></path>
        <path
          stroke="#81B15B"
          strokeLinecap="round"
          strokeWidth="10"
          d="M173.843 191.353v27.634l23.335-27.634"
          className="Vector 27"
        ></path>
        <path
          stroke="#81B15B"
          strokeLinecap="round"
          strokeWidth="10"
          d="M176.756 209.776l-9.826 49.741"
          className="Vector 28"
        ></path>
      </motion.g>
    </motion.g>
    <defs>
      <linearGradient
        id="a"
        x1="174.654"
        x2="174.654"
        y1="92.191"
        y2="242.824"
        className="a"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFB1DB"></stop>
        <stop offset="1" stopColor="#DE8EC8"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default LiverBadge;
