import { data } from "@/data";
import { useEffect, useState } from "react";
import LastPage from "../last-page";

export default function Question({ slug }) {
  const questions = data[0].categories[slug];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => {
    return localStorage.getItem("currentQuestionIndex")
      ? parseInt(localStorage.getItem("currentQuestionIndex"), 10)
      : 0;
  });
  const [selectedOption, setSelectedOption] = useState(() => {
    return localStorage.getItem("selectedOption")
      ? localStorage.getItem("selectedOption")
      : null;
  });
  const [showAnswer, setShowAnswer] = useState(false);
  const currentQuestion = questions[currentQuestionIndex];
  const optionLetters = ["A", "B", "C", "D"];
  const [count, setCount] = useState(() => {
    return localStorage.getItem("count")
      ? parseInt(localStorage.getItem("count"), 10)
      : 0;
  });
  const [questionCount, setQuestionCount] = useState(() => {
    return localStorage.getItem("questionCount")
      ? parseInt(localStorage.getItem("questionCount"), 10)
      : 0;
  });
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    localStorage.setItem("selectedOption", selectedOption);
  }, [selectedOption]);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => {
    localStorage.setItem("currentQuestionIndex", currentQuestionIndex);
  }, [currentQuestionIndex]);

  useEffect(() => {
    localStorage.setItem("questionCount", questionCount);
  }, [questionCount]);

  function quesCount() {
    setQuestionCount((x) => x + 1);
  }

  function scoreCount() {
    if (selectedOption === currentQuestion.correctAnswer) {
      setCount((x) => x + 1);
    }
  }

  function handleOptionClick(selected) {
    setSelectedOption(selected);
  }

  function handleSubmitAnswer() {
    quesCount();
    scoreCount();
    setShowAnswer(true);
  }

  function handleNextQuestion() {
    setSelectedOption("");
    setShowAnswer(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((i) => i + 1);
    } else {
      setIsCompleted(true); // son soruda tamamlandı
    }
  }

  if (isCompleted) {
    return <LastPage count={count} slug={slug} />; // Eğer tüm sorular tamamlandıysa LastPage bileşenini göster
  }

  return (
    <>
      <div className="questionSection">
        <div className="current-question">Soru {questionCount}/10</div>
        <div className="questionBox">
          <div className="question">
            <h3>{currentQuestion.question}</h3>
            <div className="progress-container">
              <div
                className="progress-bar"
                style={{ width: `${questionCount * 10}%` }}
              ></div>
            </div>
          </div>
          <div className="options">
            {currentQuestion.options.map((option, i) => {
              const optionClass =
                showAnswer && option === currentQuestion.correctAnswer
                  ? "correct"
                  : showAnswer && option === selectedOption
                  ? "incorrect"
                  : "";

              return (
                <button
                  key={i}
                  onClick={() => {
                    handleOptionClick(option);
                    scoreCount();
                  }}
                  className={`btnOption ${
                    selectedOption === option ? "selected" : ""
                  } ${optionClass}`}
                  disabled={showAnswer}
                >
                  <p className="harf">{optionLetters[i]}</p>
                  <span className="optionText">{option}</span>
                </button>
              );
            })}
            {showAnswer && (
              <div className="answer">
                {selectedOption === currentQuestion.correctAnswer
                  ? console.log("Doğru!")
                  : console.log("Yanlış!")}
              </div>
            )}
            {!showAnswer && (
              <button
                type="submit"
                className="submitBtn"
                onClick={handleSubmitAnswer}
                disabled={!selectedOption} // Seçim yapılmadıysa buton disabled
              >
                Cevabı Gönder
              </button>
            )}
            {showAnswer && currentQuestionIndex < questions.length - 1 && (
              <button
                type="submit"
                className="submitBtn"
                onClick={handleNextQuestion}
              >
                Sıradaki soru
              </button>
            )}
            {showAnswer && currentQuestionIndex === questions.length - 1 && (
              <button
                type="submit"
                className="submitBtn"
                onClick={handleNextQuestion}
              >
                Testi Bitir
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
