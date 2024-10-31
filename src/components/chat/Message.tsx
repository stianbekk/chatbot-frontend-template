import React from 'react';
import { MessageSuggestion } from './MessageSuggestion';
import { Message as MessageType } from '../../types';

interface MessageProps {
  message: MessageType;
  onSuggestionClick?: (text: string) => void;
}

export function Message({ message, onSuggestionClick }: MessageProps) {
  if (message.type === 'suggestion' && message.data) {
    return (
      <div className="flex flex-col gap-2 p-4 w-full max-w-[280px]">
        {message.data.map((suggestion, index) => (
          <MessageSuggestion
            key={index}
            text={suggestion}
            onClick={onSuggestionClick || (() => {})}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} mb-4`}
    >
      <div
        className={`max-w-[80%] px-4 py-2 rounded-lg ${
          message.isBot
            ? 'bg-sage-50 text-sage-900'
            : 'bg-sage-600 text-white'
        }`}
      >
        {message.message}
      </div>
    </div>
  );
}