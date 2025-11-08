import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Button from './Button'

const Navbar = () => {
    const location = useLocation()
    const { isDark, toggleTheme } = useTheme()

    const isActive = (path) => location.pathname === path

    return (
        <nav className="bg-white dark:bg-gray-800 shadow-md border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-8">
                        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
                            React App
                        </Link>
                        <div className="hidden md:flex space-x-4">
                            <Link
                                to="/"
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/')
                                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                    }`}
                            >
                                Home
                            </Link>
                            <Link
                                to="/tasks"
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/tasks')
                                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                    }`}
                            >
                                Tasks
                            </Link>
                            <Link
                                to="/posts"
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/posts')
                                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                    }`}
                            >
                                Posts
                            </Link>
                        </div>
                    </div>
                    <Button
                        variant="secondary"
                        onClick={toggleTheme}
                        className="flex items-center space-x-2"
                    >
                        {isDark ? (
                            <>
                                <span>☀️</span>
                                <span className="hidden sm:inline">Light</span>
                            </>
                        ) : (
                            <>
                                <span>🌙</span>
                                <span className="hidden sm:inline">Dark</span>
                            </>
                        )}
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

