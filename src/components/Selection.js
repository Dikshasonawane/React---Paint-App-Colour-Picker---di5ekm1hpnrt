import React, { useState } from "react";
import "../styles/Child.css";

export default function Selection({ applyColor }) {
  let [color, setColor] = useState({ background: "" });
  return (
    <div className="fix-box" style={color} onClick={() => applyColor(setColor)}>
      <h2 className="subheading">Selection</h2>
    </div>
  );
}
