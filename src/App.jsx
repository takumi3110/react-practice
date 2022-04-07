import React, { useState } from "react";
import ColorFullMessage from "./components/ColorFullMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      <ColorFullMessage color="blue">How are you ?</ColorFullMessage>
      <ColorFullMessage color="pink">I'm fine.</ColorFullMessage>
      <button onClick={onClickCountUp}>count up</button>
      <p>{num}</p>
    </>
  );
};

export default App;
