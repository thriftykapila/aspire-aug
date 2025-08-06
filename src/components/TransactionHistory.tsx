import React from 'react';
import { ChevronRight } from 'lucide-react';
import businessType from "../assets/business-and-finance.svg"
import RecentTransactions from "../assets/Recent-transactions.svg"
import CardDetails from "../assets/Card-Details.svg"
import Hamleys1 from "../assets/Hamleys1.svg"
import Hamleys2 from "../assets/Hamleys2.svg"
import Hamleys3 from "../assets/Hamleys3.svg"


interface Transaction {
  id: string;
  merchant: string;
  date: string;
  amount: number;
  type: 'refund' | 'charge' | 'payment';
  category: 'refund' | 'charge' | 'transfer';
  icon: string;
  iconBgColor: string;
}

const TransactionHistory: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: '1',
      merchant: 'Hamleys',
      date: '20 May 2020',
      amount: 150,
      type: 'refund',
      category: 'refund',
      icon: Hamleys1,
      iconBgColor: 'bg-[#009DFF1A]'
    },
    {
      id: '2',
      merchant: 'Hamleys',
      date: '20 May 2020',
      amount: -150,
      type: 'charge',
      category: 'charge',
      icon:Hamleys2,
      iconBgColor: 'bg-[#00D6B51A]'
    },
    {
      id: '3',
      merchant: 'Hamleys',
      date: '20 May 2020',
      amount: -150,
      type: 'charge',
      category: 'charge',
      icon:Hamleys3,
      iconBgColor: 'bg-[#F251951A]'
    },
    {
      id: '4',
      merchant: 'Hamleys',
      date: '20 May 2020',
      amount: -150,
      type: 'charge',
      category: 'charge',
      icon:Hamleys1,
      iconBgColor: 'bg-[#009DFF1A]'
    },
  ];

  const getTransactionColor = (amount: number) => {
    return amount > 0 ? 'text-green-500' : 'text-red-500';
  };

  const getTransactionType = (transaction: Transaction) => {
    return transaction.type === 'refund' ? 'Refund on debit card' : 'Charged to debit card';
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-100">
        <div className="flex items-center justify-between p-4 cursor-pointer bg-[#F5F9FF] border-[#F5F5F5]" style={{ boxShadow: '0px 2.67px 16px #00000014' }}>
          <div className="flex items-center space-x-3">
            <img src={CardDetails} alt="Card Details" height={24} width={24}/>
            <span className="font-medium text-gray-900">Card details</span>
          </div>
          <ChevronRight className="text-gray-400" size={20} />
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-100">
        <div className="flex items-center justify-between p-4 border-b bg-[#F5F9FF] border-[#F5F5F5]" style={{ boxShadow: '0px 2.67px 16px #00000014' }}>
          <div className="flex items-center space-x-3">
            <img src={RecentTransactions} alt="recent transactions" height={24} width={24}/>
            
            <span className="font-medium text-gray-900">Recent transactions</span>
          </div>
          <ChevronRight className="text-gray-400" size={20} />
        </div>

        <div className="divide-y divide-gray-100">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="p-4 hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-center justify-between">
                <div className="flex space-x-3">
                  <div className={`w-10 h-10 ${transaction.iconBgColor} rounded-full flex items-center justify-center`}>
                    <img src={transaction.icon} alt="Hamleys" height={16} width={16}/>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{transaction.merchant}</h4>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                    <div className="mt-2 flex items-center space-x-2 text-sm text-[#325BAF] font-semibold">

                      <div className="flex items-center space-x-2 bg-[#325BAF] rounded-full p-[6px]">
                        <img src={businessType} alt="transaction type" height={7} width={10}/>
                      </div>
                        <span className='text-[12px]'>{getTransactionType(transaction)}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right flex items-center space-x-2">
                  <p className={`font-semibold ${getTransactionColor(transaction.amount)}`}>
                    {transaction.amount > 0 ? '+' : ''}S$ {Math.abs(transaction.amount)}
                  </p>
                  <ChevronRight className="text-gray-400" size={20} />
                </div>
              </div>

            </div>
          ))}
          <div className='flex justify-center p-4 bg-[#EDFFF5] border-[#DDFFEC] text-[#01D167] font-semibold text-sm'>
            View all card transactions
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;