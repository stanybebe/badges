import * as React from "react";
import { motion } from "framer-motion";

const shineMotion = {
  rest: { opacity: 0, duration: 0.2 },
  hover: {
    scale: [1, 0.7, 1],
    opacity: [0, 1, 0],
    rest: {
      duration: 1,

      repeat: Infinity,
    },
  },
};

const starMotion = {
  rest: {},
  hover: {
    scale: [1, 0.7, 1],
    rest: {
      duration: 1,

      repeat: Infinity,
    },
  },
};
const groupMotion = {
  rest: {
    scale: 0.8,
  },
  hover: {
    
    scale: .95,
    rest: { duration: 0.2 },
  },
};


function SetPercent(props) {
  console.log(props);
  var percentMotion;
  const begin = 0;
  const twentyfive = 0.25;
  const fifty = 0.5;
  const seventyfive = 0.75;
  if (props === "0%") {
    percentMotion = {
   
        pathLength: begin,
      }
  
  } else if (props === "25%") {
    percentMotion = {

        pathLength: twentyfive

    };
  } else if (props === "50%") {
    percentMotion = {

        pathLength: fifty

    };
  } else if (props === "75%") {
    percentMotion = {
   
        pathLength: seventyfive

    };
  }
  const returnedAttributes = percentMotion;
  return returnedAttributes;
}
const Badge = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 300 300">
    <motion.g
      id="Group 1"
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={groupMotion}
    >
      <circle cx={123} cy={130} r={125} fill="#838383" id="bgshadow" />
      <circle cx={129} cy={125} r={125} fill="#FF5D39" id="bg" />
      <motion.path
        stroke="#10CE0C"
        strokeWidth="121"
        d="M129 64.5c33.413 0 60.5 27.087 60.5 60.5s-27.087 60.5-60.5 60.5-60.5-27.087-60.5-60.5S95.587 64.5 129 64.5z"        
        id="percent"
        initial="pathLength:0"
        animate={SetPercent(props.selectedValue)}
      ></motion.path>
      <circle
        cx="129"
        cy="125"
        r="125"
        stroke="#FFC700"
        strokeWidth="7"
        id="ring"
      ></circle>

      <motion.path
        fill="#838383"
        d="M123.245 17.635c1.496-4.606 8.014-4.606 9.51 0l21.064 64.828a5 5 0 0 0 4.755 3.455h68.164c4.844 0 6.858 6.198 2.939 9.045l-55.146 40.066a5 5 0 0 0-1.816 5.59l21.064 64.828c1.497 4.606-3.776 8.437-7.694 5.59l-55.146-40.066a5 5 0 0 0-5.878 0l-55.146 40.066c-3.918 2.847-9.19-.984-7.694-5.59l21.064-64.828a5 5 0 0 0-1.816-5.59L26.323 94.963c-3.919-2.847-1.905-9.045 2.939-9.045h68.164a5 5 0 0 0 4.755-3.455l21.064-64.828Z"
        id="starshadow"
        variants={starMotion}
      />
      <motion.path
        fill="#FFC700"
        d="M128.245 15.635c1.496-4.606 8.014-4.606 9.51 0l21.064 64.828a5 5 0 0 0 4.755 3.455h68.164c4.844 0 6.858 6.198 2.939 9.045l-55.146 40.066a5 5 0 0 0-1.816 5.59l21.064 64.828c1.497 4.606-3.776 8.437-7.694 5.59l-55.146-40.066a5 5 0 0 0-5.878 0l-55.146 40.066c-3.918 2.847-9.19-.984-7.694-5.59l21.064-64.828a5 5 0 0 0-1.816-5.59L31.323 92.963c-3.919-2.847-1.905-9.045 2.939-9.045h68.164a5 5 0 0 0 4.755-3.455l21.064-64.828Z"
        id="star"
        variants={starMotion}
      />
      <motion.path
        variants={shineMotion}
        fill="#fff"
        d="m157 19 6.482 16.423L181 41.5l-17.518 6.077L157 64l-6.482-16.423L133 41.5l17.518-6.077L157 19Z"
        id="shine"
      />
    </motion.g>
  </svg>
);

export default Badge;
