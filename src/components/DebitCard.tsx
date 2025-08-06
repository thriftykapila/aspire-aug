import React from 'react';
import CardCarousel from "./CardCarousel"
import ActionTray from './ActionTray/ActionTray';

const DebitCard: React.FC = () => {
  return (
    <div className="relative">
      <CardCarousel/>
      <ActionTray/>
    </div>
  );
};

export default DebitCard;