import { getAllArticles } from '@/lib/articles';
import Header from '@/components/header';
import ThoughtsClient from './thoughtsClient';

export default async function ThoughtsPage() {
  const articles = getAllArticles();

  return (
    <>
      <Header />
      <ThoughtsClient articles={articles} />
    </>
  );
}
