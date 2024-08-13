import React from "react";
import { createRoot } from "react-dom/client";
import "./frontend.scss";

document.addEventListener("DOMContentLoaded", function () {
  const divsToUpdate = document.querySelectorAll(".paying-attention-update-me");

  function Quiz() {
    return <div className="paying-attention-frontend">Hello From React.</div>;
  }

  divsToUpdate.forEach(function (div) {
    createRoot(div).render(<Quiz />);
    div.classList.remove("paying-attention-update-me");
  });
});
