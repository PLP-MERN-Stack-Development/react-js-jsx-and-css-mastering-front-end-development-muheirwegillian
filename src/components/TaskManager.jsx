import { useState, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import Button from './Button'
import Card from './Card'

const TaskManager = () => {
    const [tasks, setTasks] = useLocalStorage('tasks', [])
    const [inputValue, setInputValue] = useState('')
    const [filter, setFilter] = useState('all') // 'all', 'active', 'completed'

    useEffect(() => {
        // This effect runs when tasks change, but we're using localStorage hook
        // so tasks are automatically persisted
    }, [tasks])

    const addTask = () => {
        if (inputValue.trim()) {
            const newTask = {
                id: Date.now(),
                text: inputValue.trim(),
                completed: false,
                createdAt: new Date().toISOString(),
            }
            setTasks([...tasks, newTask])
            setInputValue('')
        }
    }

    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        )
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'active') return !task.completed
        if (filter === 'completed') return task.completed
        return true
    })

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTask()
        }
    }

    return (
        <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
            <Card>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                    Task Manager
                </h2>

                {/* Add Task Input */}
                <div className="flex gap-2 mb-6">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Add a new task..."
                        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                    <Button onClick={addTask} disabled={!inputValue.trim()}>
                        Add Task
                    </Button>
                </div>

                {/* Filter Buttons */}
                <div className="flex gap-2 mb-6 flex-wrap">
                    <Button
                        variant={filter === 'all' ? 'primary' : 'secondary'}
                        onClick={() => setFilter('all')}
                        className="text-sm"
                    >
                        All ({tasks.length})
                    </Button>
                    <Button
                        variant={filter === 'active' ? 'primary' : 'secondary'}
                        onClick={() => setFilter('active')}
                        className="text-sm"
                    >
                        Active ({tasks.filter((t) => !t.completed).length})
                    </Button>
                    <Button
                        variant={filter === 'completed' ? 'primary' : 'secondary'}
                        onClick={() => setFilter('completed')}
                        className="text-sm"
                    >
                        Completed ({tasks.filter((t) => t.completed).length})
                    </Button>
                </div>

                {/* Task List */}
                <div className="space-y-2">
                    {filteredTasks.length === 0 ? (
                        <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                            {filter === 'all'
                                ? 'No tasks yet. Add one above!'
                                : `No ${filter} tasks.`}
                        </p>
                    ) : (
                        filteredTasks.map((task) => (
                            <div
                                key={task.id}
                                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 animate-slide-up"
                            >
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleTask(task.id)}
                                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                                />
                                <span
                                    className={`flex-1 ${task.completed
                                            ? 'line-through text-gray-500 dark:text-gray-400'
                                            : 'text-gray-900 dark:text-gray-100'
                                        }`}
                                >
                                    {task.text}
                                </span>
                                <Button
                                    variant="danger"
                                    onClick={() => deleteTask(task.id)}
                                    className="text-sm"
                                >
                                    Delete
                                </Button>
                            </div>
                        ))
                    )}
                </div>
            </Card>
        </div>
    )
}

export default TaskManager

