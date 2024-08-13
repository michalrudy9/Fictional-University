import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./frontend.scss";

const divsToUpdate = document.querySelectorAll(".paying-attention-update-me");

divsToUpdate.forEach((div) => {
  const data = JSON.parse(div.querySelector("pre").innerText);
  const root = ReactDOM.createRoot(div);
  root.render(<OurComponent {...data} />);
  div.classList.remove("paying-attention-update-me");
});

function OurComponent(props) {
  return <div className="paying-attention-frontend">Hello From React.</div>;
}
