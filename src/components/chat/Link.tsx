import React from 'react';
import { ExternalLink } from 'lucide-react';

interface LinkProps {
  url: string;
  title: string;
  description?: string;
}

export function Link({ url, title, description }: LinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 rounded-lg border border-gray-200 hover:border-sage-500 transition-colors mb-2"
    >
      <div className="flex items-start gap-3">
        <ExternalLink className="w-5 h-5 text-sage-700 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-medium text-sage-700">{title}</h3>
          {description && <p className="text-sm text-gray-600">{description}</p>}
        </div>
      </div>
    </a>
  );
}