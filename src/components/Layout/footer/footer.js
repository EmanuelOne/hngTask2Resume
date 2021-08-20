import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import TypeIt from "typeit-react";
import Wavy from "../../general/wavy";
import { Container } from "../../Home/home.element";
import "./footer.css";
import { Div } from "../../general/motionElement";
import {
  RiFacebookCircleFill as FaceBook,
  RiLinkedinBoxFill as LinkedIn,
  RiInstagramFill as Instagram,
  RiTwitterFill as Twitter,
} from "react-icons/ri";
import { useRef } from "react";
const Footer = ({ setMessage }) => {
  // console.log(setMessage);
  // background-color: rgb(100, 0, 123);
  const [instance, setInstance] = useState(null);
  const toggleFreeze = () => {
    if (instance.is("frozen")) {
      instance.unfreeze();
      // setButtonText("Freeze");
      return;
    }

    instance.freeze();
    // setButtonText("Unfreeze");
  };
  const strings = ["Contact Me", "Message Me", "Dm Me!"];
  const controls = useAnimation();
  const ref = useRef([]);
  ref.current = Array.from(Array(4)).map(() => React.createRef());
  const [showForm, setShowForm] = useState(false);
  const handleForm = () => {
    setShowForm((pre) => !pre);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    setMessage(true);
  };
  return (
    <Div col={true}>
      <Wavy colors={{ r: 100, g: 0, b: 123 }} />
      {!showForm ? (
        <Container>
          <motion.button
            className="typing"
            onClick={handleForm}
            onMouseOver={toggleFreeze}
            onMouseOut={toggleFreeze}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: { delay: 1, duration: 0.6 },
              },
              hidden: { y: "100vh", opacity: 0 },
            }}
            initial="hidden"
            animate="visible"
          >
            <TypeIt
              options={{
                loop: true,
                speed: 130,
                waitUntilVisible: true,
              }}
              getBeforeInit={(instance) =>
                instance
                  .type(strings[0])
                  .pause(1000)
                  .delete(strings[0].length)
                  .pause(100)
                  .type(strings[1])
                  .pause(1000)
                  .delete(strings[1].length)
                  .pause(1000)
                  .type(strings[2])
                  .pause(1000)
                  .delete(strings[2].length)
              }
              getAfterInit={(instance) => {
                setInstance(instance);
                return instance;
              }}
              element={"h1"}
            >
              {/* This will just keep on going. */}
              Click Here,
            </TypeIt>
          </motion.button>
        </Container>
      ) : (
        <motion.form onSubmit={(e) => handleSubmit(e)}>
          <div className="name">
            <label htmlFor="Name">Name</label>
            <input required type="text" ref={(e) => (ref.current[0] = e)} />
          </div>
          <div className="email">
            <label htmlFor="Email">Email</label>
            <input ref={(e) => (ref.current[1] = e)} required type="email" />
          </div>
          <div className="message">
            <label htmlFor="Message">Message</label>
            {/* <input required type="text" /> */}
            <textarea
              ref={(e) => (ref.current[2] = e)}
              name="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="number">
            <label htmlFor="phone number"></label>Phone number
            <input required type="number" ref={(e) => (ref.current[3] = e)} />
          </div>
          <button type="submit">Send Message</button>
        </motion.form>
      )}
      <div className="icons">
        <FaceBook />
        <LinkedIn />
        <Twitter />
      </div>
    </Div>
  );
};

export default Footer;
