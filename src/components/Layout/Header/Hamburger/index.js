// import React, { useState } from "react";
import { useState } from "react";
import styled from "styled-components";
import "./style.css";
// const Lines = styled.div`
//   .line-1 {
//     transform: ${({ checked }) =>
//       checked ? "translatey(18px) rotate(45deg)" : ""};
//   }
//   .line-2 {
//     ${({ checked }) => (checked ? "transform: scale(0)" : "")};
//   }
//   .line-3 {
//     transform: ${({ checked }) =>
//   }
// `;
function Hamburger() {
  const [checked, setChecked] = useState(false);
  const style3 = {
    transform: checked ? "translatey(-10px) rotate(-45deg)" : "",
  };
  const style2 = {
    transform: checked ? " scale(0)" : "",
  };
  const style1 = {
    transform: checked ? "translatey(10px) rotate(45deg)" : "",
  };
  const styleItem = {
    transform: !checked ? "translateX(-100px)" : "translateX(0px)",
    opacity: !checked ? "0%" : "100%",
    pointerEvents: !checked ? "none" : "auto",
  };

  return (
    <div class="menu">
      {!checked && <div class="i-1">Emmanuel</div>}
      <div class="items first" style={styleItem}>
        <div class="i-1">Home</div>
        <div class="i-2">About</div>
        <div class="i-3">Services</div>
        <div class="i-4">Contact</div>
      </div>

      {/* <input type="checkbox" name="menu-active" id="menu-active" /> */}
      <label for="menu-active" onClick={() => setChecked(!checked)}>
        <div
          class="lines"
          //   checked={ checked }
        >
          <div class="line-1" style={style1}></div>
          <div class="line-2" style={style2}></div>
          <div class="line-3" style={style3}></div>
        </div>
      </label>
    </div>
  );
}

export default Hamburger;
