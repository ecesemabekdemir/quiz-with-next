"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.theme ? localStorage.getItem("theme") : false
  );
  console.log(localStorage.theme ? localStorage.getItem("theme") : false);

  const handleToggle = () => {
    setTheme(!theme);
    localStorage.theme = !theme;
  };

  useEffect(() => {
    console.log("calişti", theme);
    if (theme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
