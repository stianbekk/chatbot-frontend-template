import React from 'react';

interface MessageSuggestionProps {
  text: string;
  onClick: (text: string) => void;
}

export function MessageSuggestion({ text, onClick }: MessageSuggestionProps) {
  return (
    <button
      onClick={() => onClick(text)}
      className="w-full px-4 py-3 bg-sage-50 text-sage-700 rounded-lg hover:bg-sage-100 transition-colors text-sm text-left"
    >
      {text}
    </button>
  );
}