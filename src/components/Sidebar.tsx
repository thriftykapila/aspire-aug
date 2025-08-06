import React from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}
import logo from '../assets/Logo.svg';
import Home from "../assets/Home.svg"
import Card from "../assets/Card.svg"
import Payments from "../assets/Payments.svg"
import Credit from "../assets/Credit.svg"
import Account from "../assets/Account.svg"

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home, disabled: true },
    { id: 'cards', label: 'Cards', icon: Card ,disabled: false},
    { id: 'payments', label: 'Payments', icon: Payments, disabled: true },
    { id: 'credit', label: 'Credit', icon: Credit, disabled: true },
    { id: 'settings', label: 'Settings', icon: Account, disabled: true },
  ];

  return (
    <div className="hidden lg:flex lg:flex-col lg:w-80 lg:bg-slate-800 lg:min-h-screen">
      <div className="p-8">
        <div className="flex items-center space-x-2 mb-6">
          <img src={logo} height={35} width={125} alt="logo"  />
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </p>
      </div>

      <nav className="flex-1 px-4 py-8">
        {menuItems.map((item) => {
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              disabled={item.disabled}
              className={`w-full flex items-center space-x-4 px-4 py-4 rounded-lg mb-2 transition-all duration-200 ${
                isActive
                  ? 'text-green-500'
                  : 'text-gray-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              <img src={item.icon} alt={item.label} height={24} width={24} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;