import { useRouter } from "next/navigation";

export default function StartMenu() {
  const categories = [
    { name: "HTML", img: "./img/html.svg" },
    { name: "CSS", img: "./img/css.svg" },
    { name: "JavaScript", img: "./img/js.svg" },
    { name: "Erisebilirlik", img: "./img/acces.svg" },
  ];

  const router = useRouter();
  return (
    <div className="categorieSection">
      <div className="text">
        <h2>
          Hoşgeldiniz <strong>Frontend Testine!</strong>
          <span>Başlamak için bir konu seçin.</span>
        </h2>
      </div>
      <div className="categories">
        {categories.map((category, index) => (
          <button
            className="btnOption"
            key={index}
            onClick={() => router.push(`/${category.name.toLowerCase()}`)}
          >
            <img src={category.img} alt={`${category.name} icon`} />
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
