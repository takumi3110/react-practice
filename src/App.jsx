import React from "react";
import ColorFullMessage from "./components/ColorFullMessage";

const App = () => {
  const onClickBUtton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      <ColorFullMessage color="blue">How are you ?</ColorFullMessage>
      <ColorFullMessage color="pink">I'm fine.</ColorFullMessage>
      <button onClick={onClickBUtton}>button</button>
    </>
  );
};

export default App;
