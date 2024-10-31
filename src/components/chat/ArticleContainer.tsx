import React from 'react';
import { BookOpen } from 'lucide-react';

interface Article {
  title: string;
  excerpt: string;
  url: string;
  readTime?: number;
}

interface ArticleContainerProps {
  article: Article;
}

export function ArticleContainer({ article }: ArticleContainerProps) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-gray-200 rounded-lg p-4 hover:border-sage-500 transition-colors mb-3"
    >
      <div className="flex items-start gap-3">
        <BookOpen className="w-5 h-5 text-sage-700 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-medium text-sage-700 mb-1">{article.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{article.excerpt}</p>
          {article.readTime && (
            <span className="text-xs text-gray-500">
              {article.readTime} min lesetid
            </span>
          )}
        </div>
      </div>
    </a>
  );
}