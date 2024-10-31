import React from 'react';
import { Bot, ArrowLeft, Menu, X, RefreshCw } from 'lucide-react';
import { ChatType } from '../types';

interface HeaderProps {
  chatType: ChatType;
  onBack?: () => void;
  onMenu: () => void;
  onExit: () => void;
  onRefresh?: () => void;
}

export function Header({ chatType, onBack, onMenu, onExit, onRefresh }: HeaderProps) {
  const getTitle = () => {
    switch (chatType) {
      case 'customer_service':
        return 'Kundeservice';
      case 'product_assistant':
        return 'Produktassistent';
      case 'track_order':
        return 'Spor Bestilling';
      default:
        return 'Chatbot';
    }
  };

  return (
    <header className="bg-sage-50 px-4 py-3 border-b flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        {chatType !== 'intro' && (
          <button
            onClick={onBack}
            className="p-2 hover:bg-sage-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-sage-700" />
          </button>
        )}
        {chatType === 'intro' && <Bot className="w-6 h-6 text-sage-700" />}
        <h1 className="text-xl font-semibold text-sage-900">{getTitle()}</h1>
      </div>
      <div className="flex items-center gap-2">
        {chatType !== 'intro' && chatType !== 'track_order' && (
          <button
            onClick={onRefresh}
            className="p-2 hover:bg-sage-100 rounded-full transition-colors"
          >
            <RefreshCw className="w-5 h-5 text-sage-700" />
          </button>
        )}
        <button
          onClick={onMenu}
          className="p-2 hover:bg-sage-100 rounded-full transition-colors"
        >
          <Menu className="w-5 h-5 text-sage-700" />
        </button>
        <button
          onClick={onExit}
          className="p-2 hover:bg-sage-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-sage-700" />
        </button>
      </div>
    </header>
  );
}