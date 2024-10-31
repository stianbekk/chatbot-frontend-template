import React from 'react';
import { MessageSquare } from 'lucide-react';

interface ChatOptionProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

export function ChatOption({ icon, title, description, onClick }: ChatOptionProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-200 mb-3 border border-gray-100 hover:border-sage-500 transform hover:-translate-y-0.5"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-sage-100 flex items-center justify-center">
          {icon || <MessageSquare className="w-5 h-5 text-sage-700" />}
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </button>
  );
}