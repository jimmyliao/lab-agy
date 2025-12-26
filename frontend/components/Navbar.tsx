import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
            The Agentic Lens
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
           <Link href="/about" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</Link>
           <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium">Subscribe</button>
        </div>
      </div>
    </header>
  );
}
