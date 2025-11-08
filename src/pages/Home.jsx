import Card from '../components/Card'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center py-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                    Welcome to React & Tailwind CSS Assignment
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                    A comprehensive React application demonstrating modern web development practices
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                        Task Manager
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Manage your tasks with add, complete, delete, and filter functionality.
                        Built with React hooks and localStorage persistence.
                    </p>
                    <Link to="/tasks">
                        <Button variant="primary">View Tasks</Button>
                    </Link>
                </Card>

                <Card>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                        API Integration
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Explore posts from JSONPlaceholder API with search, pagination, and
                        infinite scrolling features.
                    </p>
                    <Link to="/posts">
                        <Button variant="primary">View Posts</Button>
                    </Link>
                </Card>
            </div>

            <Card>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                    Features
                </h2>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Responsive design with Tailwind CSS</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Dark mode theme switcher</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Component architecture with reusable UI components</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span>State management with React hooks (useState, useEffect, useContext)</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Custom hooks (useLocalStorage)</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span>API integration with loading and error states</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span>React Router for navigation</span>
                    </li>
                </ul>
            </Card>
        </div>
    )
}

export default Home

