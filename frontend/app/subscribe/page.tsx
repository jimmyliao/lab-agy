export default function Subscribe() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Subscribe to our Newsletter</h1>
                <p className="text-gray-500 mb-6 text-center">
                    Get the latest AI and Agentic workflow news delivered directly to your inbox.
                </p>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                            placeholder="you@example.com"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Subscribe
                    </button>
                </form>
                <p className="mt-4 text-xs text-center text-gray-400">
                    We respect your privacy. No spam.
                </p>
            </div>
        </div>
    );
}
