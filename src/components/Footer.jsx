const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                            About
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            A React application demonstrating component architecture, state management, hooks, and API integration.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                            Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="https://react.dev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    React Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://tailwindcss.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    Tailwind CSS
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://jsonplaceholder.typicode.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    JSONPlaceholder API
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                            Contact
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Built with React, Vite, and Tailwind CSS
                        </p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
                    <p>&copy; {currentYear} React & Tailwind CSS Assignment. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

