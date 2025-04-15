
export function Card({ children }) {
  return <div className="rounded-2xl shadow-md border p-4 bg-white dark:bg-gray-800">{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={`text-sm text-gray-800 dark:text-gray-100 ${className}`}>{children}</div>;
}
