import React from 'react';
import { MessageSquarePlus, Trash2, Download, ArrowLeft } from 'lucide-react';

interface MenuScreenProps {
  onAction: (action: string) => void;
}

export function MenuScreen({ onAction }: MenuScreenProps) {
  const menuItems = [
    {
      id: 'new',
      icon: <MessageSquarePlus className="w-5 h-5" />,
      text: 'Start ny samtale',
    },
    {
      id: 'delete',
      icon: <Trash2 className="w-5 h-5" />,
      text: 'Slett samtalen',
    },
    {
      id: 'download',
      icon: <Download className="w-5 h-5" />,
      text: 'Last ned samtalen',
    },
    {
      id: 'back',
      icon: <ArrowLeft className="w-5 h-5" />,
      text: 'Tilbake til samtalen',
    },
  ];

  return (
    <div className="flex-1 p-4 bg-gray-50">
      <div className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onAction(item.id)}
            className="w-full flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <span className="text-sage-700">{item.icon}</span>
            <span className="text-gray-900">{item.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}