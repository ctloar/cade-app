'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface Article {
  id?: number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl?: string;
}

export default function ThoughtsClient({ articles }: { articles: Article[] }) {
  const router = useRouter();

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      <div style={{ padding: '20px' }}>
        <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-12">ARTICLES</h1>
        <div className="flex flex-col gap-6">
          {articles.map((article) => (
            <div
              key={article.slug}
              className="flex items-center border border-gray-300 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-800 hover:transition-all duration-300"
              onClick={() => router.push(`/thoughts/${article.slug}`)}
            >
              <div>
                <h2 className="text-xl font-light mb-2">{article.title}</h2>
                <p className="text-gray-600">{article.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
