import { getArticleBySlug, getAllArticles } from '@/lib/articles';
import Header from '@/components/header';
import { notFound } from 'next/navigation';
import MarkdownRenderer from '@/components/markdownRender';

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export default async function ArticlePage({ params }: PageProps) {
  const resolvedParams = await params;
  const article = await getArticleBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-12 md:py-20 cursor-default">
        <div className="prose dark:prose-invert max-w-none">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-4">
              {article.title}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
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
          <article className="prose prose-slate">
            <MarkdownRenderer content={article.content || ''} />
          </article>
        </div>
      </main>
    </>
  );
}

// Generate static paths for all articles
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}