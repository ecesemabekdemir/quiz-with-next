"use client";
import { useRouter } from "next/navigation";

export default function LastPage({ count, slug }) {
  const router = useRouter();
  const handleStartPage = () => {
    router.push("/");
    localStorage.clear();
  };
  return (
    <div className="scoreBox">
      <div className="scoreText">
        <h3>Test tamamlandı</h3>
        <strong>Skorunuz...</strong>
      </div>
      <div className="scorePage">
        <h3>{slug.toUpperCase()}</h3>
        <strong>{count}</strong>
        <p>10 üzerinden</p>
        <button onClick={() => handleStartPage()} className="scoreBtn ">
          Tekrar Oyna
        </button>
      </div>
    </div>
  );
}
