import React, { useState } from "react";
import "./index.css";
import FreezeCard from "../../assets/Freeze card.svg";
import setSpent from "../../assets/Set spend limit.svg";
import GPay from "../../assets/GPay.svg";
import Replace from "../../assets/Replace card.svg";
import Cancel from "../../assets/Deactivate card.svg";
import { Modal, Button } from "react-bootstrap";
import {
  getAccountData,
  getAccountSlide,
} from "../../features/account/accountSelector";
import { useDispatch, useSelector } from "react-redux";
import {
  handleFreezeCard,
} from "../../features/account/accountSlice";

const ActionTray = ({ isDesktopView = false }) => {
  const dispatch = useDispatch();
  const accountData = useSelector(getAccountData);
  const currentSlide = useSelector(getAccountSlide);
  const isFreezeCard = accountData[currentSlide]?.freeze;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const freezeCard = () => {
    dispatch(handleFreezeCard());
  };

  return (
    <div
      className={`action-tray ${
        isDesktopView ? "mt-5 w-75 border-radius-all" : ""
      }`}
    >
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this card?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="nav-link" onClick={freezeCard}>
        <img src={FreezeCard} alt={"Freeze Card"} />
        <div className="active-text">
          {isFreezeCard ? `Unfreeze Card` : `Freeze Card`}
        </div>
      </div>
      <div className="nav-link">
        <img src={setSpent} alt={"Set Spent Limit"} />
        <div className="active-text">Set spend limit</div>
      </div>
      <div className="nav-link">
        <img src={GPay} alt={"Add to GPay"} />
        <div className="active-text">Add to GPay</div>
      </div>
      <div className="nav-link">
        <img src={Replace} alt={"Replace Card"} />
        <div className="active-text">Replace Card</div>
      </div>
      <div
        className="nav-link"
        onClick={() => {
          accountData.length > 0 && handleShow();
        }}
      >
        <img src={Cancel} alt={"Cancel Card"} />
        <div className="active-text">Cancel Card</div>
      </div>
    </div>
  );
};

export default ActionTray;
