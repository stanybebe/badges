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

const lungMotion = {
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
const LungBadge = (props) => (
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
        id="lungs"
        initial="rest"
        animate="rest"
        whileHover="hover"
        variants={lungMotion}
      >
        <rect x="0" y="0" width="300" height="300" fill="transparent" />
        <g className="traechea">
          <path
            fill="#DE8EC8"
            d="M181.403 131c0 2.209-6.044 4-13.5 4s-13.5-1.791-13.5-4 6.044-4 13.5-4 13.5 1.791 13.5 4z"
          ></path>
          <path fill="#DE8EC8" d="M154.403 122.84h27v8h-27v-8z"></path>
          <path
            fill="#FFB1DB"
            d="M181.403 123c0 2.209-6.044 4-13.5 4s-13.5-1.791-13.5-4 6.044-4 13.5-4 13.5 1.791 13.5 4z"
          ></path>
          <path
            fill="#DE8EC8"
            d="M181.403 121c0 2.209-6.044 4-13.5 4s-13.5-1.791-13.5-4 6.044-4 13.5-4 13.5 1.791 13.5 4z"
          ></path>
          <path fill="#DE8EC8" d="M154.403 112.84h27v8h-27v-8z"></path>
          <path
            fill="#FFB1DB"
            d="M181.403 113c0 2.209-6.044 4-13.5 4s-13.5-1.791-13.5-4 6.044-4 13.5-4 13.5 1.791 13.5 4z"
          ></path>
          <path
            fill="#DE8EC8"
            d="M181.403 110.25c0 2.071-6.044 3.75-13.5 3.75s-13.5-1.679-13.5-3.75c0-2.071 6.044-3.75 13.5-3.75s13.5 1.679 13.5 3.75z"
          ></path>
          <path fill="#DE8EC8" d="M154.403 102.6h27v7.5h-27v-7.5z"></path>
          <path
            fill="#FFB1DB"
            d="M181.403 102.75c0 2.071-6.044 3.75-13.5 3.75s-13.5-1.679-13.5-3.75c0-2.071 6.044-3.75 13.5-3.75s13.5 1.679 13.5 3.75z"
          ></path>
          <path
            fill="#DE8EC8"
            d="M181.403 100.25c0 2.071-6.044 3.75-13.5 3.75s-13.5-1.679-13.5-3.75c0-2.071 6.044-3.75 13.5-3.75s13.5 1.679 13.5 3.75z"
          ></path>
          <path fill="#DE8EC8" d="M154.403 92.6h27v7.5h-27v-7.5z"></path>
          <path
            fill="#FFB1DB"
            d="M181.403 92.75c0 2.071-6.044 3.75-13.5 3.75s-13.5-1.679-13.5-3.75c0-2.071 6.044-3.75 13.5-3.75s13.5 1.679 13.5 3.75z"
          ></path>
        </g>
        <path
          fill="#DE8EC8"
          d="M139.403 146.441L153.005 131h31.345l10.053 15.441L181.688 152l-5.262-3.772a16.001 16.001 0 00-19.275.478L153.005 152l-13.602-5.559z"
          className="lungsconnect"
        ></path>
        <g className="lungs">
          <path
            fill="#DE8EC8"
            d="M154.513 118.613c.094.303.184.602.271.896 1.141 3.855 2.127 8.484 2.94 12.999 2.202 12.225.427 24.746-3.901 36.389a80.646 80.646 0 01-20.92 31.182l-8.395 7.741c-1.7 1.567-3.424 3.078-5.238 4.51-7.97 6.294-31.591 24.144-42.559 23.66-13.824-.609-11.544-19.98-8.059-33.372l5.22-20.057a240.997 240.997 0 0124.32-59.458l8.406-14.615c3.535-6.146 6.498-12.742 11.242-18.012 4.587-5.096 11.671-9.846 20.679-6.175 11.611 4.73 12.281 22.336 15.994 34.312zm25.739-.062c-.1.325-.196.644-.288.958-1.135 3.877-2.115 8.537-2.923 13.075-2.166 12.18-.417 24.649 3.855 36.259a81.1 81.1 0 0020.827 31.332l8.193 7.633c1.69 1.575 3.406 3.094 5.212 4.534 7.901 6.305 31.257 24.132 42.104 23.648 13.754-.612 11.434-19.949 8-33.281l-5.244-20.36a240.993 240.993 0 00-23.938-59.11l-8.415-14.783c-3.486-6.125-6.405-12.691-11.088-17.958-4.539-5.104-11.557-9.874-20.485-6.198-11.561 4.76-12.133 22.302-15.81 34.251z"
          ></path>
          <path
            fill="#FFB1DB"
            d="M154.554 115.551c.1.325.196.644.288.958 1.135 3.877 2.116 8.537 2.923 13.075 2.167 12.18.417 24.649-3.855 36.259a81.09 81.09 0 01-20.827 31.332l-8.193 7.633c-1.69 1.575-3.406 3.094-5.211 4.534-7.902 6.305-31.258 24.132-42.105 23.648-13.754-.612-11.433-19.949-8-33.281l5.245-20.36a240.995 240.995 0 0123.937-59.11l8.415-14.783c3.486-6.125 6.405-12.691 11.088-17.958 4.54-5.104 11.557-9.874 20.486-6.198 11.56 4.76 12.132 22.302 15.809 34.251zm25.74.062c-.094.303-.185.602-.272.896-1.141 3.855-2.126 8.484-2.939 12.999-2.202 12.225-.428 24.746 3.901 36.389a80.644 80.644 0 0020.919 31.182l8.396 7.741c1.699 1.567 3.423 3.078 5.238 4.51 7.969 6.294 31.591 24.144 42.558 23.66 13.824-.609 11.544-19.98 8.059-33.372l-5.22-20.057a240.977 240.977 0 00-24.32-59.458l-8.406-14.615c-3.535-6.146-6.498-12.742-11.242-18.012-4.587-5.096-11.67-9.846-20.679-6.175-11.611 4.73-12.28 22.336-15.993 34.312z"
          ></path>
        </g>
        <path
          stroke="#DE8EC8"
          strokeWidth="5"
          d="M174.403 130.955s2.027.894 6.545 2.943m0 0c3.933 1.783 9.754 4.441 17.769 8.146 17.223 7.962 21.999 0 21.999 0m-39.768-8.146l-.625.425m.625-.425c1.949-1.322 8.578-5.792 21.583-14.345C218.353 109.146 213.909 101 213.909 101m-9.818 68.572s7.091 3.128 24.314 11.089c17.222 7.961 21.998 0 21.998 0m-55.371-39.881s.748 4.88 2.362 16.859c1.614 11.979 7.67 11.744 7.67 11.744m19.655 10.013s.748 4.88 2.362 16.859c1.614 11.98 7.67 11.745 7.67 11.745m-35.225-85.993s4.625 1.893 15.863 6.728c11.239 4.835 14.168-.394 14.168-.394m-32.083 28.753s2.31.519 7.972 1.919c5.662 1.4 5.821-2.068 5.821-2.068m15.895 38.765s2.31.52 7.972 1.919c5.661 1.4 5.82-2.068 5.82-2.068m-25.996-67.175s1.646-1.68 5.79-5.731 1.214-5.979 1.214-5.979m-64.559 14.279s-2 .894-6.459 2.943m0 0a2649.67 2649.67 0 00-17.535 8.146c-16.996 7.962-21.709 0-21.709 0m39.244-8.146c.417.286.617.425.617.425m-.617-.425c-1.923-1.322-8.465-5.792-21.298-14.345C114.032 109.146 118.417 101 118.417 101m9.689 68.572s-6.998 3.128-23.994 11.089c-16.995 7.961-21.709 0-21.709 0m54.643-39.881s-.738 4.88-2.331 16.859c-1.592 11.979-7.569 11.744-7.569 11.744m-19.397 10.013s-.738 4.88-2.33 16.859c-1.593 11.98-7.57 11.745-7.57 11.745m34.762-85.993s-4.564 1.893-15.655 6.728c-11.09 4.835-13.98-.394-13.98-.394m31.66 28.753s-2.28.519-7.867 1.919-5.744-2.068-5.744-2.068m-15.686 38.765s-2.28.52-7.867 1.919c-5.587 1.4-5.744-2.068-5.744-2.068m25.655-67.175s-1.625-1.68-5.714-5.731c-4.09-4.051-1.199-5.979-1.199-5.979"
          className="bronchi"
        ></path>
      </motion.g>
    </motion.g>
  </svg>
);

export default LungBadge;
