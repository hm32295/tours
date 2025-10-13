"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { themes } from "@/app/config/themeConfig";

type ThemeType = keyof typeof themes;

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "blue",
  setTheme: () => {},
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeType>("blue");

  // Load saved theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("app-theme") as ThemeType | null;
    if (saved && themes[saved]) setThemeState(saved);
  }, []);

  // Save to localStorage when theme changes
  useEffect(() => {
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  const setTheme = (newTheme: ThemeType) => {
    if (themes[newTheme]) setThemeState(newTheme);
  };

  const toggleTheme = () => {
    const order: ThemeType[] = ["blue", "sand", "dark"];
    const next = order[(order.indexOf(theme) + 1) % order.length];
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div className={`transition-all duration-500 min-h-screen`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// 🔹 Custom Hook for easier access
export const useTheme = () => useContext(ThemeContext);
