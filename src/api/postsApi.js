const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

export const fetchPosts = async (page = 1, limit = 10) => {
    try {
        const response = await fetch(
            `${API_BASE_URL}/posts?_page=${page}&_limit=${limit}`
        )
        if (!response.ok) {
            throw new Error('Failed to fetch posts')
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error(`Error fetching posts: ${error.message}`)
    }
}

export const fetchAllPosts = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/posts`)
        if (!response.ok) {
            throw new Error('Failed to fetch posts')
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error(`Error fetching posts: ${error.message}`)
    }
}

export const fetchPostById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/posts/${id}`)
        if (!response.ok) {
            throw new Error('Failed to fetch post')
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error(`Error fetching post: ${error.message}`)
    }
}

