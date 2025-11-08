const Card = ({ children, className = '', onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`
        bg-white dark:bg-gray-800 
        rounded-lg shadow-md 
        p-6 
        border border-gray-200 dark:border-gray-700
        transition-all duration-200
        hover:shadow-lg
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    )
}

export default Card

