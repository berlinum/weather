import React from "react";
import { Global, css } from "@emotion/core";

const GlobalStyles = () => {
  return (
    <Global
      styles={theme => css`
        @font-face {
          font-family: SF;
          src: url("/fonts/SF-Pro-Display-Regular.otf");
        }

        body {
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          margin: 0;
          background-color: whitesmoke;
          height: 100vh;
          color: #707070;
          font-family: SF;
        }
      `}
    />
  );
};

export default GlobalStyles;
