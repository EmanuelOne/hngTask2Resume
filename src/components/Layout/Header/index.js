import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
const svgVarients = {
  initial: {
    rotate: -180,
    // rotateX: 0
  },
  animate: {
    rotate: 0,
    // rotateX: [0, 180, 0],
    transition: { duration: 1 },
  },
};
const pathVarients = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
const Header = () => {
  return (
    <header>
      <Hamburger />
    </header>
  );
};

export default Header;
