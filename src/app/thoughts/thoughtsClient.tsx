'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface Article {
  id?: number;
  slug: string;
  title: string;
  excerpt: string;
  tags?: string[];
  imageUrl?: string;
}

export default function ThoughtsClient({ articles }: { articles: Article[] }) {
  const router = useRouter();

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 md:py-20 cursor-default">
      <div style={{ padding: '20px' }}>
        <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-12">ARTICLES</h1>
        <div className="flex flex-col gap-6">
          <p><i>I have always loved writing and occasionally update this page with some of my thoughts. 
            Hope you find something interesting!</i>
          </p>
          {articles.map((article) => (
            <div
              key={article.slug}
              className="flex items-center border border-gray-300 dark:hover:border-gray-400 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-800 hover:transition-all duration-300"
              onClick={() => router.push(`/thoughts/${article.slug}`)}
            >
              <div>
                <h2 className="text-xl font-light mb-2">{article.title}</h2>
                <div className="flex flex-wrap mt-3 gap-2">
                  {article.tags?.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 mb-2 text-xs bg-gray-100 dark:bg-gray-800 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300">{article.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
