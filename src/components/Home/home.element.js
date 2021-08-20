import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: ${({ jContent }) =>
    jContent === "space-around" ? "space-around" : "center"};
  align-items: center;
  height: 80vh;
  width: 100%;
  flex-direction: ${({ col }) => (col ? "column" : "row")};
  /* flex-wrap: wrap; */
  border-radius: 10px;
  gap: ${({ gap }) => gap && gap};

  margin-top: ${({ mt }) => mt && mt};
  p {
    width: ${({ p }) => {
      const { width } = p ? p : {};
      return width ? width : "100%";
    }};
    line-height: ${({ p }) => {
      const { lineHeight } = p ? p : {};
      return lineHeight ? lineHeight : "1";
    }};
  }
  h1,
  .typing span {
    font-size: 20px;
    font-weight: 700;
  }
  button {
    background-color: transparent;
    font-size: 1.5rem;
    font-weight: 700;
    border: none;
    border: 2px dotted whitesmoke;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    span {
      color: whitesmoke;
    }
    & :hover {
      span {
        color: black;
      }
      background-color: whitesmoke;
      color: rgb(100, 0, 123);
    }
  }
  form {
    width: 100%;
    display: flex;
  }
`;
export const Image = styled.div`
  background-image: ${({ src }) => src && `url(${src})`};
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  border-radius: 10px;
  background-size: contain;
`;
