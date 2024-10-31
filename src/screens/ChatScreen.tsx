import React from 'react';
import { Message } from '../components/chat/Message';
import { ChatInput } from '../components/chat/ChatInput';
import { Message as MessageType } from '../types';

interface ChatScreenProps {
  messages: MessageType[];
  onSend: (message: string) => void;
  onSuggestionClick: (text: string) => void;
}

export function ChatScreen({ messages, onSend, onSuggestionClick }: ChatScreenProps) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <Message
            key={index}
            message={message}
            onSuggestionClick={onSuggestionClick}
          />
        ))}
      </div>
      <ChatInput onSend={onSend} />
    </div>
  );
}