import { getArticleBySlug, getAllArticles } from '@/lib/articles';
import Header from '@/components/header';
import { notFound } from 'next/navigation';

interface Props {
  params: { slug: string };
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <div>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-4">
              {article.title}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>
          <div 
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content || '' }}
          />
        </div>
      </main>
    </>
  );
}

// Generate static paths for all articles
export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}