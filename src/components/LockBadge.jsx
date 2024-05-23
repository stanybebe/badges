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

const LockMotion = {
  rest: {
  pathLength: 1,
  },
  hover: {
   
    pathLength: .8,
    transition: {
      repeat: Infinity,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const LockBadge = (props) => (
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
        <g className="lock">
          <g className="Vector">
            <path
              fill="#B6B6B6"
              d="M86 215.854v-93.879l116.548 40.906V265L86 215.854z"
            ></path>
            <path
              fill="#D8D6D6"
              d="M244.243 139.338l-42.023 24.031v101.337l42.023-30.018v-95.35z"
            ></path>
            <path
              fill="#D9D9D9"
              d="M131.306 105.495L86 121.975l116.548 41.201 41.695-23.838-112.937-33.843z"
            ></path>
          </g>
          <path
            stroke="#B6B6B6"
            strokeLinecap="round"
            strokeWidth="32"
            d="M202.22 144.635l-21.012 15.303"
            className="Vector 34"
          ></path>
          <path
            stroke="#B6B6B6"
            strokeLinecap="round"
            strokeWidth="32"
            d="M121.457 125.801l-14.446 10.006"
            className="Vector 33"
          ></path>
     
          <motion.path
            stroke="#D3A429"
            strokeLinecap="round"
            strokeWidth="27"
            d="M122.77 122.002v0c0-28.274 16.912-61.817 44.354-55.01a45.319 45.319 0 015.61 1.796c21.525 8.427 29.486 33.83 29.486 56.946v13.604"
            className="lock"

          >
          
          </motion.path>
          <path
            fill="#D9D9D9"
            d="M129.336 173.774c0-5.568 5.547-9.434 10.771-7.505l10.264 3.789a8 8 0 015.23 7.505v4.444c0 5.568-5.547 9.433-10.771 7.505l-10.264-3.79a8 8 0 01-5.23-7.505v-4.443z"
            className="Rectangle 1"
          ></path>
          <path
            fill="#D9D9D9"
            d="M126.053 212.383l14.07-35.376 15.478 48.853-29.548-13.477z"
            className="Vector 35"
          ></path>
          <path
            fill="#000"
            d="M128.68 211.794l14.07-35.375 15.477 48.852-29.547-13.477z"
            className="Vector 36"
          ></path>
          <path
            fill="#000"
            d="M131.306 173.593c0-5.679 5.753-9.55 11.014-7.411l8.294 3.373a8 8 0 014.987 7.411v4.633c0 5.679-5.753 9.55-11.014 7.41l-8.294-3.372a8.001 8.001 0 01-4.987-7.411v-4.633z"
            className="Rectangle 2"
          ></path>
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth="8"
            d="M163.152 64c23.309 2.06 32.539 12.725 40.053 34.432"
            className="Vector 37"
          ></path>
        </g>
      </motion.g>

    </svg>
  );


export default LockBadge;
