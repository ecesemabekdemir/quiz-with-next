"use client";

import Header from "@/components/header";
import Question from "@/components/questions";
import { ThemeContext } from "@/context";
import { useContext, useState } from "react";

export default function QuizPage({ params }) {
  const { slug } = params;

  const { theme, handleToggle } = useContext(ThemeContext);

  return (
    <>
      <div className="container">
        <Header handleToggle={handleToggle} slug={slug} theme={theme} />
        <Question slug={slug} />
      </div>
    </>
  );
}
