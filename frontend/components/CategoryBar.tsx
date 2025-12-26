import Link from 'next/link';

const categories = [
    { name: '最新文章', slug: 'latest' },
    { name: 'Agentic', slug: 'agentic' },
    { name: 'AI', slug: 'ai' },
    { name: 'Enterprise', slug: 'enterprise' },
];

export default function CategoryBar() {
    return (
        <div className="border-b border-gray-200 sticky top-0 bg-white z-10 overflow-x-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {categories.map((category) => (
                        <Link
                            key={category.slug}
                            href={category.slug === 'latest' ? '/' : `/category/${category.slug}`}
                            className="whitespace-nowrap py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        >
                            {category.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}
