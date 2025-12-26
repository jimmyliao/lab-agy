import ArticleCard, { Article } from "@/components/ArticleCard";

// Mock data fallback
const fallbackArticles: Article[] = [
  {
    id: '1',
    title: 'Apple releases new M5 Chip for Enterprise AI',
    excerpt: 'The new chip promises 5x performance improvements for local LLM inference.',
    category: 'Enterprise',
    date: '2025-12-26',
    author: 'Tim Cook',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
  }
];

async function getArticles(): Promise<Article[]> {
  // In Docker environment, usually 'http://backend:8000'
  const backendUrl = process.env.BACKEND_INTERNAL_URL || 'http://backend:8000';

  try {
    const res = await fetch(`${backendUrl}/api/articles`, {
      cache: 'no-store',
      next: { revalidate: 0 }
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.warn("Failed to fetch articles from backend, using fallback:", error);
    return fallbackArticles;
  }
}

export default async function Home() {
  const articles = await getArticles();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
