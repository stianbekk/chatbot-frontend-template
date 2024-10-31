import React from 'react';

export function Avatar() {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
        alt="Assistant avatar"
        className="w-full h-full object-cover"
      />
    </div>
  );
}