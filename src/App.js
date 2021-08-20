import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Layout/Header";
import { AnimatePresence } from "framer-motion";
import Modal from "./components/Modal";
import Footer from "./components/Layout/footer/footer";
import Home from "./components/Home/Home";
import Body from "./components/Layout/Body";
import { useState } from "react";
function App() {
  const [message, setMessage] = useState(false);
  return (
    <>
      <Header />
      <Modal message={message} setMessage={setMessage} />
      <Body>
        <AnimatePresence exitBeforeEnter onExitComplete={() => {}}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            {/* <Route path="*" Body={() => <InView />} /> */}
          </Switch>
        </AnimatePresence>
      </Body>
      <Footer setMessage={setMessage} />
    </>
  );
}

export default App;
