import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "./styles.css";
import { Div } from "./general/motionElement";

function AnimatedDiv({ children }) {
  const controls = useAnimation();
  // const [ ref, inView ] = useInView();
  const { ref, inView } = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (inView) {
      console.log(inView);
      controls.start("visible");
    } else {
      controls.stop("visible");

      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <Div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
        hidden: { opacity: 0, scale: 0 },
      }}
      className="box-col"
    >
      {children}
    </Div>
  );
}

// function InView() {
//   return (
//     <div className="App">
//       {/* <p style={{ color: "white", padding: 10 }}>Scroll down</p> */}
//       {[0, 1, 2, 3, 4, 5, 6].map((e) => (
//         <FadeInWhenVisible>
//           <div key={e} className="box-container">
//             <div className="box left">Flex</div>
//             <div className="box right">flex</div>
//           </div>
//         </FadeInWhenVisible>
//       ))}
//     </div>
//   );
// }
export default AnimatedDiv;
