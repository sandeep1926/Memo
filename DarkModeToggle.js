import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const classList = document.documentElement.classList;
    dark ? classList.add('dark') : classList.remove('dark');
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white p-2 rounded-full shadow-md z-50"
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
}