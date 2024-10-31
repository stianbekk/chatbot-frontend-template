import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

interface ProductContainerProps {
  product: Product;
  onViewDetails: (id: string) => void;
}

export function ProductContainer({ product, onViewDetails }: ProductContainerProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
        {product.description && (
          <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-sage-700">
            kr {product.price}
          </span>
          <button
            onClick={() => onViewDetails(product.id)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sage-600 text-white hover:bg-sage-700 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Se mer
          </button>
        </div>
      </div>
    </div>
  );
}