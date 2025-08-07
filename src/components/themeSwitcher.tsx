    // components/ThemeSwitcher.js
    'use client' // Important for App Router

    import { useTheme } from 'next-themes'
    import { useEffect, useState } from 'react'
    import { Sun, Moon } from 'lucide-react';

    export default function ThemeSwitcher() {
      const [mounted, setMounted] = useState(false)
      const { theme, setTheme, resolvedTheme } = useTheme()

      // useEffect ensures the component is mounted before rendering,
      // preventing hydration errors related to theme changes.
      useEffect(() => setMounted(true), [])

      if (!mounted) return null

      return (
        <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
        >
            {resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      )
    }
