import React from "react";

const ColorFullMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontsize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorFullMessage;
