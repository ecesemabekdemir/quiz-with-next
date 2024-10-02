"use client";

import { useContext, useEffect } from "react";
import "./globals.css";
import { ThemeContext } from "@/context";
import Header from "@/components/header";
import StartMenu from "@/components/start-menu";

export default function Home() {
  const { theme, handleToggle } = useContext(ThemeContext);
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <div className="container">
        <Header handleToggle={handleToggle} theme={theme} slug="" />
        <StartMenu />
      </div>
    </>
  );
}
