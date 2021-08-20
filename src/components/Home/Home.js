import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import Container from "./general/Container";
import Button from "../general/Button";
import Loader from "../Loader";
import AnimatedDiv from "../View";
import { Container, Image } from "./home.element";
import { useEffect } from "react";
import { useState } from "react";
import { Div } from "../general/motionElement";
import TypeIt from "typeit-react";
// const ButtonVarients = {
//   initial: {},
//   // animate: {
//   //   x: 0,
//   //   transition: {
//   //     yoyo: Infinity,
//   //   },
//   // },
//   hover: {
//     scale: 1.1,
//     textShadow: "0px 0px 8px white",
//     transition: {
//       yoyo: Infinity,
//       duration: 0.5,
//     },
//   },
//   tap: {
//     boxShadow: "0px 0px 8px #fff",
//   },
// };
const containerVariants = {
  animate: {
    // marginTop: "200px",
    opacity: 1,
    // rotateX: 0,
    scale: 1,
    // rotateZ: 0,
    // rotateY: 0,
    transition: {
      delay: 0.75,
      duration: 1.2,
    },
  },
  initial: {
    scale: 0,

    // rotateX: 180,
    // rotateZ: 180,
    opacity: 0,
    // rotateY: 180,
  },
  exit: {
    x: "-100vw",
    transition: {
      delay: 0.3,
      ease: "easeInOut",
    },
  },
};
const Home = () => {
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    if (alert === false) {
      window.scrollTo(0, 0);
      window.alert("My name is Emmanuel Ifeanyi Mechie");
      setAlert(true);
    }
  }, [alert]);
  const techs = ["Html", "CSS", "JavaScript", "ReactJs", "NodeJs", "MongoDb"];
  return (
    <motion.div
      variants={containerVariants}
      animate="animate"
      initial="initial"
      className="home container"
      exit="exit"
    >
      <AnimatedDiv>
        <Div gap="2rem">
          <Container>
            <Image className="img" src="./images/profile.jpeg" alt="" />
          </Container>
          <Container
            col
            gap="2rem"
            mt="-1rem"
            p={{ width: "100%", lineHeight: 2 }}
          >
            <div className="typing">
              <TypeIt
                element="h1"
                getBeforeInit={(instance) => {
                  instance
                    .pause(1000)

                    .type("Hi, There!")
                    .pause(1000)
                    .delete(6)
                    .pause(1000)
                    .type("I'm Emmanuel!");

                  // Remember to return it!
                  return instance;
                }}
              ></TypeIt>
            </div>
            <p>
              I am Mechie Emmanuel Ifeanyi by name Experienced Backend Developer
              with a demonstrated history of working in the information
              technology and services industry. Skilled in Analytical Skills,
              Engineering, Communication, Presentations, and Strategy. Strong
              engineering professional with a Water Engineering focused in
              Software Engineering .
            </p>
          </Container>
        </Div>
      </AnimatedDiv>
      <AnimatedDiv>
        <Div col={true}>
          <Container col p={{ width: "80%", lineHeight: 2 }} gap="2rem">
            <h1>My Career So Far</h1>

            <p>
              Always up for a challenge, I have worked for lean start-ups and
              was a member of the first New Zealand start-up to attend Y
              Combinator, the largest start-up accelerator in the world. From
              there, I worked my way up to Art Director and Team Lead at Appster
              where I oversaw the design and coding of 30+ mobile and desktop
              apps. Currently, I lead am a lead developer at Techsemester
              start-up for Africa.
            </p>
          </Container>
        </Div>
      </AnimatedDiv>
      <AnimatedDiv>
        <Container col={true} gap="2rem">
          <h1>My Stacks</h1>
          <Div width="60%" gap="1rem" wrap={true}>
            {techs.map((stack) => {
              return <div className="stack">{stack}</div>;
            })}
          </Div>
        </Container>
      </AnimatedDiv>
    </motion.div>
  );
};

export default Home;
