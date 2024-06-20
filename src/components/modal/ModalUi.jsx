import React from "react";
import "./ModalUi.css";
export const ModalUi = ({ children, onClose }) => {
  return (
    <div className="container-modal" >
      <div className="backdrop" onClick={onClose}></div>

      <div className="modal">{children}</div>
    </div>
  );
};
