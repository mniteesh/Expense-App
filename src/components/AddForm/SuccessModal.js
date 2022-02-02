import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./SuccessModal.css";

const SuccessModal = ({modalOpen, setModalOpen}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#71ccca",
      borderRadius: "12px",
    },
  };
  return (
    <Modal isOpen={modalOpen}  style={customStyles}>
      <div className="modal-inner">
        <label>Expenses Added SuccessFully</label>
        <img
          src="/assets/images/added-image.png"
          alt="expense add"
          className="added-image"
        />
        <Link to="/">
          <div className="take-home-button">
            <i className="fas fa-home"></i>
            Home
          </div>
        </Link>
      </div>
    </Modal>
  );
};

export default SuccessModal;
