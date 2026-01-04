import { useTheme } from '../../context/ThemeContext';
import { HiSun, HiMoon } from 'react-icons/hi';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <HiMoon className="w-5 h-5 text-gray-800" />
      ) : (
        <HiSun className="w-5 h-5 text-yellow-400" />
      )}
    </button>
  );
};

export default ThemeToggle;

