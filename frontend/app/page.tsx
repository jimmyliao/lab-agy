import ArticleCard, { Article } from "@/components/ArticleCard";

// Mock data
const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Apple releases new M5 Chip for Enterprise AI',
    excerpt: 'The new chip promises 5x performance improvements for local LLM inference.',
    category: 'Enterprise',
    date: '2025-12-26',
    author: 'Tim Cook',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Agentic Workflows: The Future of Automation',
    excerpt: 'How multi-agent systems are redefining productivity in the modern workplace.',
    category: 'Agentic',
    date: '2025-12-24',
    author: 'Sam Altman',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Understanding Transformer Architectures',
    excerpt: 'A deep dive into the underlying technology powering ChatGPT and Gemini.',
    category: 'AI',
    date: '2025-12-23',
    author: 'Yann LeCun',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Microsoft Copilot Pro for Business Review',
    excerpt: 'Is it worth the investment for small to medium businesses?',
    category: 'Enterprise',
    date: '2025-12-22',
    author: 'Satya Nadella',
    imageUrl: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
