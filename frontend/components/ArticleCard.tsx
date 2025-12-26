import Link from 'next/link';

export interface Article {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    author: string;
    imageUrl?: string;
}

export default function ArticleCard({ article }: { article: Article }) {
    return (
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex-shrink-0">
                <div className="h-48 w-full bg-gray-200 flex items-center justify-center text-gray-400">
                    {article.imageUrl ? (
                        <img className="h-48 w-full object-cover" src={article.imageUrl} alt={article.title} />
                    ) : (
                        <span>No Image</span>
                    )}
                </div>
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                        <Link href={`/category/${article.category}`} className="hover:underline">
                            {article.category}
                        </Link>
                    </p>
                    <Link href={`/article/${article.id}`} className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">{article.title}</p>
                        <p className="mt-3 text-base text-gray-500 line-clamp-3">{article.excerpt}</p>
                    </Link>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <span className="sr-only">{article.author}</span>
                        <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-xs">
                            {article.author[0]}
                        </div>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                            {article.author}
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime={article.date}>{article.date}</time>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
