import React from "react";

const App = () => {
  const onClickBUtton = () => alert();
  const contentStyle = {
    color: "blue",
    fontsize: "50px"
  };
  return (
    <>
      {/* <h1 style={{ color: 'red'}}>hello</h1> */}
      <h1 style={contentStyle}>hello</h1>
      <p>How are you</p>
      <button onClick={onClickBUtton}>button</button>
    </>
  );
};

export default App;
