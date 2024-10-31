import React from 'react';
import { MapPin, Clock } from 'lucide-react';

interface Store {
  name: string;
  address: string;
  distance?: string;
  openingHours: string;
  isOpen: boolean;
}

interface StoreWidgetProps {
  store: Store;
  onGetDirections: () => void;
}

export function StoreWidget({ store, onGetDirections }: StoreWidgetProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-3">
      <div className="flex items-start gap-3 mb-3">
        <MapPin className="w-5 h-5 text-sage-700 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-medium text-gray-900">{store.name}</h3>
          <p className="text-sm text-gray-600">{store.address}</p>
          {store.distance && (
            <span className="text-xs text-gray-500">{store.distance} unna</span>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <Clock className="w-4 h-4 text-gray-500" />
        <span className="text-sm text-gray-600">{store.openingHours}</span>
        <span className={`text-sm ${store.isOpen ? 'text-green-600' : 'text-red-600'}`}>
          • {store.isOpen ? 'Åpen' : 'Stengt'}
        </span>
      </div>
      <button
        onClick={onGetDirections}
        className="w-full py-2 px-4 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors"
      >
        Veibeskrivelse
      </button>
    </div>
  );
}