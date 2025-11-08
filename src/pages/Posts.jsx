import { useState, useEffect, useCallback } from 'react'
import { fetchPosts, fetchAllPosts } from '../api/postsApi'
import Card from '../components/Card'
import Button from '../components/Button'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState('')
    const [hasMore, setHasMore] = useState(true)
    const postsPerPage = 10

    const loadPosts = useCallback(async (pageNum = 1, append = false) => {
        setLoading(true)
        setError(null)
        try {
            if (pageNum === 1) {
                // Load all posts for search functionality
                const allPosts = await fetchAllPosts()
                setPosts(allPosts)
                setFilteredPosts(allPosts.slice(0, postsPerPage))
                setHasMore(allPosts.length > postsPerPage)
            } else {
                const newPosts = await fetchPosts(pageNum, postsPerPage)
                if (newPosts.length === 0) {
                    setHasMore(false)
                } else {
                    setPosts((prev) => [...prev, ...newPosts])
                    setFilteredPosts((prev) => [...prev, ...newPosts])
                }
            }
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }, [postsPerPage])

    useEffect(() => {
        loadPosts(1, false)
    }, [loadPosts])

    useEffect(() => {
        if (searchQuery.trim() === '') {
            // Show paginated results when no search
            const startIndex = 0
            const endIndex = page * postsPerPage
            setFilteredPosts(posts.slice(startIndex, endIndex))
        } else {
            // Filter posts based on search query
            const filtered = posts.filter(
                (post) =>
                    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    post.body.toLowerCase().includes(searchQuery.toLowerCase())
            )
            setFilteredPosts(filtered)
        }
    }, [searchQuery, posts, page])

    const loadMore = () => {
        const nextPage = page + 1
        setPage(nextPage)
        loadPosts(nextPage, true)
    }

    if (error) {
        return (
            <div className="max-w-4xl mx-auto">
                <Card>
                    <div className="text-center py-8">
                        <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
                        <Button onClick={() => loadPosts(1, false)}>Retry</Button>
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <Card>
                <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                    Posts from JSONPlaceholder
                </h1>

                {/* Search Input */}
                <div className="mb-6">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search posts by title or content..."
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                </div>

                {/* Loading State */}
                {loading && page === 1 && (
                    <div className="text-center py-8">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Loading posts...</p>
                    </div>
                )}

                {/* Posts Grid */}
                {!loading || page > 1 ? (
                    <>
                        <div className="space-y-4">
                            {filteredPosts.length === 0 ? (
                                <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                                    {searchQuery ? 'No posts found matching your search.' : 'No posts available.'}
                                </p>
                            ) : (
                                filteredPosts.map((post) => (
                                    <Card key={post.id} className="animate-slide-up">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                                                    {post.title}
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                                                    {post.body}
                                                </p>
                                                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                                                    Post ID: {post.id} | User ID: {post.userId}
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                ))
                            )}
                        </div>

                        {/* Load More Button */}
                        {!searchQuery && hasMore && !loading && (
                            <div className="text-center mt-6">
                                <Button onClick={loadMore} variant="secondary">
                                    Load More
                                </Button>
                            </div>
                        )}

                        {/* Loading More Indicator */}
                        {loading && page > 1 && (
                            <div className="text-center py-4">
                                <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Loading more posts...</p>
                            </div>
                        )}

                        {/* Results Count */}
                        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                            {searchQuery
                                ? `Found ${filteredPosts.length} post(s) matching "${searchQuery}"`
                                : `Showing ${filteredPosts.length} of ${posts.length} posts`}
                        </div>
                    </>
                ) : null}
            </Card>
        </div>
    )
}

export default Posts

