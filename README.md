# React.js and Tailwind CSS Assignment

This assignment focuses on building a responsive React application using JSX and Tailwind CSS, implementing component architecture, state management, hooks, and API integration.

## Assignment Overview

You will:

- Set up a React project with Vite and Tailwind CSS
- Create reusable UI components
- Implement state management using React hooks
- Integrate with external APIs
- Style your application using Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Modern web browser
- Code editor (VS Code recommended)

### Installation

1. Clone your personal repository that was created by GitHub Classroom
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   └── TaskManager.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── Tasks.jsx
│   └── Posts.jsx
├── hooks/           # Custom React hooks
│   └── useLocalStorage.js
├── context/         # React context providers
│   └── ThemeContext.jsx
├── api/             # API integration functions
│   └── postsApi.js
├── utils/           # Utility functions
├── App.jsx          # Main application component
├── main.jsx         # Application entry point
└── index.css        # Global styles with Tailwind directives
```

## Features Implemented

### ✅ Task 1: Project Setup

- ✅ Created React application using Vite
- ✅ Installed and configured Tailwind CSS
- ✅ Set up project structure with components, pages, and utility folders
- ✅ Configured routing using React Router

### ✅ Task 2: Component Architecture

- ✅ **Button Component**: Reusable button with variants (primary, secondary, danger)
- ✅ **Card Component**: Boxed layout for displaying content
- ✅ **Navbar Component**: Site navigation with active route highlighting
- ✅ **Footer Component**: Links and copyright information
- ✅ **Layout Component**: Wraps pages with Navbar and Footer
- ✅ All components use props for customization and reusability

### ✅ Task 3: State Management and Hooks

- ✅ **TaskManager Component**: Full CRUD functionality
  - Add new tasks
  - Mark tasks as completed
  - Delete tasks
  - Filter tasks (All, Active, Completed)
- ✅ **Hooks Used**:
  - `useState` for managing component state
  - `useEffect` for side effects
  - `useContext` for theme management (light/dark mode)
- ✅ **Custom Hook**: `useLocalStorage` for persisting tasks to localStorage

### ✅ Task 4: API Integration

- ✅ Fetches data from JSONPlaceholder API
- ✅ Displays posts in a card-based layout
- ✅ Implements loading states with spinner
- ✅ Implements error states with retry functionality
- ✅ Pagination with "Load More" button
- ✅ Search feature to filter posts by title or content

### ✅ Task 5: Styling with Tailwind CSS

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Theme switcher (light/dark mode) using Tailwind's dark mode
- ✅ Utility classes for layout, spacing, typography, and colors
- ✅ Custom animations (fade-in, slide-up) for interactive elements
- ✅ Smooth transitions and hover effects

## Components Overview

### Button Component

A reusable button component with three variants:

- `primary`: Blue background for primary actions
- `secondary`: Gray background for secondary actions
- `danger`: Red background for destructive actions

### Card Component

A container component for displaying content in a boxed layout with:

- White/dark background based on theme
- Shadow and border styling
- Optional click handler

### Navbar Component

Navigation bar with:

- Responsive design (mobile menu ready)
- Active route highlighting
- Theme switcher button
- Links to Home, Tasks, and Posts pages

### Footer Component

Footer with:

- Three-column layout (responsive)
- Links to external resources
- Copyright information

### TaskManager Component

Full-featured task management with:

- Add tasks with Enter key support
- Toggle completion status
- Delete tasks
- Filter by All/Active/Completed
- Persistent storage using localStorage

### Posts Page

API integration page with:

- Fetch posts from JSONPlaceholder
- Search functionality
- Pagination with "Load More"
- Loading and error states
- Responsive card layout

## Custom Hooks

### useLocalStorage

A custom hook that syncs state with localStorage:

```javascript
const [value, setValue] = useLocalStorage("key", initialValue);
```

## Context API

### ThemeContext

Manages application theme (light/dark mode):

- Persists theme preference to localStorage
- Provides `isDark` state and `toggleTheme` function
- Automatically applies dark class to document

## API Integration

The application integrates with [JSONPlaceholder](https://jsonplaceholder.typicode.com) API:

- Fetches posts data
- Handles loading states
- Implements error handling with retry
- Supports search and pagination

## Deployment

To build for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Deployment Options

- **Vercel**: Connect your GitHub repository and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to build and deploy

**Deployment URL**: [Add your deployment URL here after deploying]

## Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **JSONPlaceholder**: Fake REST API for testing

## Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com)

## License

This project is part of a programming assignment.
