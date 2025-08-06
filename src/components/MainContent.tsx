import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import DebitCard from './DebitCard';
import TransactionHistory from './TransactionHistory';
import { Modal, Button } from "react-bootstrap";
import {
  generateRandom16DigitNumber,
  generateRandomMMYY,
} from "./utils";
import { useDispatch } from "react-redux";
import { addCard } from "../features/account/accountSlice";


const MainContent: React.FC = () => {
  const dispatch = useDispatch();
  const [activeCardTab, setActiveCardTab] = useState('my-cards');
  const [showCardNumber, setShowCardNumber] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");
  const handleNewCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setUserName("");
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSaveCard = () => {
    let cardData = {
      cardDisplayName: userName,
      cardNumber: generateRandom16DigitNumber(),
      cardExpiry: generateRandomMMYY(),
      cardCvv: "123",
      freeze: false,
    };
    dispatch(addCard(cardData));
    handleCloseModal();
  };

  return (
    <div className="flex-1 bg-gray-50 min-h-screen lg:min-h-0">
      <div className="lg:hidden bg-slate-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm">Account balance</p>
            <div className="flex items-center space-x-2 mt-1">
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded font-semibold">S$</span>
              <span className="text-white text-2xl font-bold">3,000</span>
            </div>
          </div>
          <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <div className="w-4 h-2 bg-green-500 transform rotate-45 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 lg:p-8">
        <div className="hidden lg:flex lg:items-center lg:justify-between lg:mb-8">
          <div>
            <p className="text-gray-600 text-sm mb-2">Available balance</p>
            <div className="flex items-center space-x-3">
              <span className="bg-green-500 text-white text-sm px-3 py-1 rounded font-semibold">S$</span>
              <span className="text-gray-900 text-3xl font-bold">3,000</span>
            </div>
          </div>
          <button onClick={handleNewCardClick} className="bg-[#325BAF] hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors duration-200 font-medium">
            <Plus size={20} />
            <span>New card</span>
          </button>
        </div>

        <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create New Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="form-control"
            placeholder="Card Name"
            value={userName}
            onChange={handleUserNameChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveCard}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

        <div className="lg:hidden flex justify-end mb-6">
          <button onClick={handleNewCardClick} className="bg-[#325BAF] hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200 text-sm font-medium">
            <Plus size={16} />
            <span>New card</span>
          </button>
        </div>

        <div className="flex space-x-0 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveCardTab('my-cards')}
            className={`px-0 py-3 text-sm font-medium border-b-2 transition-colors duration-200 mr-8 ${
              activeCardTab === 'my-cards'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            My debit cards
          </button>
          <button
            onClick={() => setActiveCardTab('company-cards')}
            className={`px-0 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${
              activeCardTab === 'company-cards'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            All company cards
          </button>
        </div>

        <div className="lg:flex lg:space-x-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <DebitCard/>
          </div>

          <div className="lg:w-1/2">
            <TransactionHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;