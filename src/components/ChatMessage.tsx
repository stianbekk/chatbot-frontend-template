import React from 'react';
import { Avatar } from './Avatar';
import { Link } from './chat/Link';
import { ProductContainer } from './chat/ProductContainer';
import { ArticleContainer } from './chat/ArticleContainer';
import { StoreWidget } from './chat/StoreWidget';
import { MessageSuggestion } from './chat/MessageSuggestion';
import { Message } from '../types';

interface ChatMessageProps extends Message {
  onSuggestionClick?: (text: string) => void;
  onProductView?: (id: string) => void;
  onGetDirections?: () => void;
}

export function ChatMessage({
  isBot,
  message,
  type = 'text',
  data,
  onSuggestionClick,
  onProductView,
  onGetDirections,
}: ChatMessageProps) {
  const renderContent = () => {
    switch (type) {
      case 'link':
        return <Link {...data} />;
      case 'product':
        return <ProductContainer product={data} onViewDetails={onProductView!} />;
      case 'article':
        return <ArticleContainer article={data} />;
      case 'store':
        return <StoreWidget store={data} onGetDirections={onGetDirections!} />;
      case 'suggestion':
        return <MessageSuggestion text={data} onClick={onSuggestionClick!} />;
      default:
        return <p className="text-gray-800">{message}</p>;
    }
  };

  return (
    <div className="flex gap-3 mb-4">
      {isBot && <Avatar />}
      <div
        className={`rounded-2xl px-4 py-2 max-w-[80%] ${
          isBot ? 'bg-gray-100' : 'bg-sage-100 ml-auto'
        }`}
      >
        {renderContent()}
      </div>
    </div>
  );
}