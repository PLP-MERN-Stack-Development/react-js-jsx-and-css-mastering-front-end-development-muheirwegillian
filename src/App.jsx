import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import Posts from './pages/Posts'

function App() {
    return (
        <ThemeProvider>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="/posts" element={<Posts />} />
                </Routes>
            </Layout>
        </ThemeProvider>
    )
}

export default App

