"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Başlangıçta Light temayı seçili olarak getirdik.
  const [theme, setTheme] = useState("light");

  // useEffect ile DOM'un yüklenmesini bekledik ve sonrasında local storage'dan temayı çektik. Çünki localStorage İstemci(Tarayıcı) tarafında çalışır.
  useEffect(() => {
    const localTheme = localStorage.getItem("theme"); // Local storage'dan temayı çektik.
    if (localTheme) {
      // Eğer local storage'da temayı bulduysak setTheme ile temayı set ettik.
      setTheme(localTheme);
    }
  }, []);

  useEffect(() => {
    if (theme == "dark") {
      // Eğer temamız dark ise body'e dark class'ını ekledik.
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark"); // Eğer temamız light ise body'den dark class'ını kaldırdık.
    }
  }, [theme]); // Tema değiştiğinde çalışacak useEffect.

  const handleToggle = () => {
    const newTheme = theme == "light" ? "dark" : "light"; // Eğer temamız light ise dark, dark ise light yapacak.
    setTheme(newTheme); // Temayı set ettik.
    localStorage.setItem("theme", newTheme); // Local storage'a temayı kaydettik.
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
