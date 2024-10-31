import React, { useState } from 'react';
import { Search } from 'lucide-react';

export function TrackOrderScreen() {
  const [orderNumber, setOrderNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle order tracking logic here
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Ordrenummer
          </label>
          <input
            type="text"
            id="orderNumber"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-sage-500"
            placeholder="Skriv inn ditt ordrenummer"
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-sage-600 text-white py-2 px-4 rounded-lg hover:bg-sage-700 transition-colors"
        >
          <Search className="w-5 h-5" />
          Spor Bestilling
        </button>
      </form>
    </div>
  );
}