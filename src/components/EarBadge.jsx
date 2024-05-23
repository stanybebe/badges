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

const earMotion = {
    rest: {
        opacity: 0,
        scale: 1,
      },
      hover: {
        x:[0,20],
        opacity: [0,1, 0],
        scale: 1.2,
        transition: {
          repeat: Infinity,
          duration: 0.8,
          ease: "easeInOut",
          delayChildren: 0.2
        },
      },
};
const EarBadge = (props) => (
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
        <g className="ear">
          <g className="ear">
            <path
              fill="#DCB89E"
              d="M231.301 121.135l-20.06-30.51-8.104-10.46c-11.605-14.979-33.252-17.5-47.988-5.587A33.813 33.813 0 00143.5 93.096l-3.234 13.681a74.932 74.932 0 001.605 40.232l13.438 41.682a199.997 199.997 0 019.649 61.37v7.986a27.098 27.098 0 0047.239 18.128l9.116-10.129a100.993 100.993 0 0028.254-59.685l.704-6.437a119.704 119.704 0 00-18.97-78.789z"
            ></path>
            <path
              fill="#FCDBC3"
              d="M231.867 105.626l-19.414-30.981-4.351-5.88c-13.371-18.069-39.228-21.08-56.393-6.568a38.897 38.897 0 00-7.447 8.424l-2.935 4.49a75.643 75.643 0 00-4.688 74.513l18.062 37.079a54.895 54.895 0 011.593 44.491l-1.345 3.351a36.199 36.199 0 00-2.606 13.488v4.448c0 17.54 14.219 31.76 31.76 31.76a31.76 31.76 0 0024.035-11l13.344-15.449a107.79 107.79 0 0028.573-61.951l.797-7.206a129.516 129.516 0 00-18.985-83.009z"
            ></path>
            <path
              fill="#DCB89E"
              d="M168.787 72.223l6.061-2.02a9.499 9.499 0 0110.603 3.312l1.567 2.09c5.641 7.52-2.733 17.507-11.122 13.264-4.965-2.511-10.99.105-12.546 5.447l-5.154 17.705a24.198 24.198 0 003.782 21.159l4.883 6.598a40.756 40.756 0 017.728 19.585l6.618 57.496c.09.778.027 1.567-.185 2.321-1.761 6.273-10.839 5.688-11.78-.76l-2.899-19.882-4.26-24.497a85.753 85.753 0 00-5.768-19.324l-4.276-9.898a58.538 58.538 0 01-1.328-43.088l6.611-18.32a18.361 18.361 0 0111.465-11.188z"
            ></path>
            <path
              fill="#EEC8AD"
              d="M215.827 123.747l-33.577 19.028a3 3 0 01-3.961-.926l-12.704-18.718a2.999 2.999 0 01-.436-2.379l3.907-16.409a3.004 3.004 0 011.339-1.856l9.448-5.848 12.012-5.591a3 3 0 013.636.88l21.227 27.37a3 3 0 01-.891 4.449zm-23.798 26.063l23.562-12.451a10 10 0 018.897-.221l7.581 3.534a10 10 0 015.774 9.063v33.533a10 10 0 01-.212 2.048l-8.107 38.758c-1.359 6.499-8.559 9.893-14.437 6.806l-14.388-7.555a9.998 9.998 0 01-5.202-7.134l-4.654-26.653-4.05-29.528a10 10 0 015.236-10.2z"
            ></path>
            <path
              fill="#DCB89E"
              d="M203.8 157.654l12.732-9.455a10 10 0 0111.443-.335l2.349 1.539a10 10 0 014.519 8.364v34.796c0 .493-.037.985-.109 1.472l-1.667 11.2c-1.544 10.373-15.981 11.677-19.358 1.748l-4.654-13.68-8.704-24.241a9.999 9.999 0 013.449-11.408z"
            ></path>
            <path
              fill="#A9702C"
              d="M220.679 157.752l3.745-3.292a6.275 6.275 0 0110.419 4.713v21.81c-.9 7.155-10.962 7.936-12.954 1.005l-.289-1.005-3.888-12.817a10.002 10.002 0 012.967-10.414z"
            ></path>
          </g>
          <path
            stroke="#DCB89E"
            strokeLinecap="round"
            strokeWidth="4"
            d="M184.843 75.038c19.255 17.848 28.839 30.317 43 58.5m-2 98c-6.338 13.11-12.525 17.312-28 19.5"
            className="earlines"
          ></path>
        </g>
        <motion.g
        id="ear"
        initial="rest"
        animate="rest"
        whileHover="hover"
        variants={earMotion}
      >
        <rect x="0" y="0" width="300" height="300" fill="transparent" />
          <path
            stroke="#92F2FF"
            strokeWidth="6"
            d="M90 175.5c0 14.286-1.769 27.103-4.556 36.249-1.4 4.591-3.005 8.088-4.65 10.372C79.098 224.474 77.776 225 77 225c-.776 0-2.098-.526-3.794-2.879-1.645-2.284-3.25-5.781-4.65-10.372C65.769 202.603 64 189.786 64 175.5c0-14.286 1.769-27.103 4.556-36.249 1.4-4.591 3.005-8.088 4.65-10.372C74.902 126.526 76.224 126 77 126c.776 0 2.098.526 3.794 2.879 1.645 2.284 3.25 5.781 4.65 10.372C88.231 148.397 90 161.214 90 175.5z"
            className="Ellipse 6"
          ></path>
          <path
            stroke="#92F2FF"
            strokeWidth="6"
            d="M71 174.5c0 10.97-1.376 20.782-3.528 27.753-1.081 3.504-2.307 6.121-3.53 7.796-1.27 1.74-2.132 1.951-2.442 1.951-.31 0-1.173-.211-2.442-1.951-1.223-1.675-2.449-4.292-3.53-7.796C53.376 195.282 52 185.47 52 174.5c0-10.97 1.376-20.782 3.528-27.753 1.081-3.504 2.307-6.121 3.53-7.796 1.27-1.74 2.132-1.951 2.442-1.951.31 0 1.173.211 2.442 1.951 1.223 1.675 2.449 4.292 3.53 7.796C69.624 153.718 71 163.53 71 174.5z"
            className="Ellipse 9"
          ></path>
          <path
            stroke="#92F2FF"
            strokeWidth="6"
            d="M112 175.5c0 17.048-2.105 32.365-5.435 43.322-1.671 5.496-3.601 9.726-5.605 12.516C98.904 234.198 97.187 235 96 235c-1.187 0-2.904-.802-4.96-3.662-2.004-2.79-3.934-7.02-5.605-12.516C82.105 207.865 80 192.548 80 175.5c0-17.048 2.105-32.365 5.435-43.322 1.671-5.496 3.6-9.726 5.605-12.516C93.096 116.802 94.813 116 96 116c1.187 0 2.904.802 4.96 3.662 2.004 2.79 3.934 7.02 5.605 12.516 3.33 10.957 5.435 26.274 5.435 43.322z"
            className="Ellipse 7"
          ></path>
          <path
            stroke="#92F2FF"
            strokeWidth="6"
            d="M139 175.5c0 20.637-2.552 39.204-6.606 52.512-2.033 6.673-4.393 11.855-6.876 15.302-2.533 3.517-4.776 4.686-6.518 4.686s-3.985-1.169-6.518-4.686c-2.483-3.447-4.843-8.629-6.876-15.302C101.552 214.704 99 196.137 99 175.5s2.552-39.204 6.606-52.512c2.033-6.673 4.393-11.855 6.876-15.302 2.533-3.517 4.776-4.686 6.518-4.686s3.985 1.169 6.518 4.686c2.483 3.447 4.843 8.629 6.876 15.302C136.448 136.296 139 154.863 139 175.5z"
            className="Ellipse 8"
          ></path>
        </motion.g>
      </motion.g>
    </svg>
  );


export default EarBadge;