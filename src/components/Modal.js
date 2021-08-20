import { AnimatePresence, motion } from "framer-motion";
import { Link, useHistory } from "react-router-dom";
import Button from "./general/Button";
import { Div } from "./general/motionElement";
const backdrop = {
  animate: { opacity: 1 },
  initial: { opacity: 0 },
};
const modal = {
  initial: {
    y: "-100vh",
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: "200px",
    transition: { delay: 0.5 },
  },
};
const Modal = ({ message, setMessage }) => {
  const history = useHistory();
  return (
    <AnimatePresence exitBeforeEnter>
      {message && (
        <Div
          className="backdrop"
          variants={backdrop}
          animate="animate"
          initial="initial"
        >
          <motion.div className="modal" variants={modal}>
            <div>
              <p>Message Sent SuccessFully</p>
              <Link to="/">
                <Button
                  x={0}
                  onClick={() => {
                    setMessage(false);
                    // history.push("/");
                    window.scrollTo(0, 0);
                  }}
                >
                  Home Page
                </Button>
              </Link>
            </div>
          </motion.div>
        </Div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
