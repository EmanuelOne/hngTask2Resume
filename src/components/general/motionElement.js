import { motion } from "framer-motion";
import styled from "styled-components";

export const Div = styled(motion.div)`
  @media (max-width: 550px) {
  }
  &.backdrop {
    background: rgba(0, 0, 0, 0.6);
    /* width:; */
    position: fixed;
    top: 0%;
    left: 0%;
    bottom: 0%;
    right: 0%;
    z-index: 99999;
    border-radius: 10px;

    div {
      height: fit-content;
      padding: 2rem;
      background: whitesmoke;
      border-radius: 20px;
      text-align: center;
    }
    p,
    button {
      color: black;
      margin: 1rem;
    }
    button {
      padding: 0.5rem 1rem;
      border-radius: 20px;
      border: none;
      border: 2px solid rgba(0, 0, 0, 0.6);
      outline: none;
      color: rgba(123, 0, 10 0, 0.7);
      background-color: transparent;
      font-weight: 700;
      &:hover {
        color: black;
        background-color: whitesmoke;
      }
    }
  }
  display: flex;
  justify-content: center;
  gap: ${({ gap }) => gap && gap};
  flex-direction: ${({ col }) => (col ? "column" : "row")};
  width: ${({ width }) => (width ? width : "100%")};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "no-wrap")};
  .stack {
    padding: 0.5rem 1rem;
    border: 2px white solid;
    border-radius: 10px;
    width: fit-content;
    cursor: pointer;
    display: flex;
    &:hover {
      background-color: whitesmoke;
      color: black;
    }
  }
  form {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.1);
    justify-content: center;
    gap: 2rem;
    padding: 2rem 3rem;
    margin: 2rem auto;
    height: fit-content;
    border-radius: 10px;
    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 0.5rem;
      label {
        font-size: 1.1rem;
      }
      input,
      textarea {
        border: none;
        background-color: transparent;
        outline: none;
        border-radius: 10px;
        color: whitesmoke;
        border: 2px dashed rgba(255, 255, 255, 0.2);
        padding: 0.5rem 1rem;
        &:-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge add Firefox */
        -ms-overflow-style: none;
        scrollbar-width: none; /* Firefox */
      }
    }
    button {
      padding: 0.5rem 1rem;
      border-radius: 20px;
      border: none;
      border: 2px solid whitesmoke;
      outline: none;
      color: rgba(123, 0, 10 0, 0.7);
      background-color: transparent;
      font-weight: 700;
      &:hover {
        color: black;
        background-color: whitesmoke;
      }
    }
  }
  .icons {
    margin: auto;
    padding: 3rem 1rem;
    display: flex;
    gap: 1rem;

    svg {
      font-size: 30px;
    }
  }
  .zuriLogo {
    width: 20%;
    height: 20%;
    object-fit: cover;
    margin: auto;
  }
`;
