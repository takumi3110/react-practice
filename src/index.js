import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <>
      <h1>hello</h1>
      <p>How are you</p>
    </>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
