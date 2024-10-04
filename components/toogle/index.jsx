"use client";
export default function Toggle({ handleToggle, isChecked }) {
  return (
    <div className="toggle">
      <img src="./img/sunny.svg" />
      <label className="switch">
        <input type="checkbox" onChange={handleToggle} checked={isChecked == "dark" ? true : false} /> 
        { /* Eğer temamız dark ise checked'ı true yapacak. */ }
        { /* Eğer temamız light ise checked'ı false yapacak. */ }
        {/* Eski halinde isChecked string geliyordu, şimdi sorgu aracılığıyla boolean olan true ve false u getirdik. */}
        <span className="slider round"></span>
      </label>
      <img src="./img/moon.svg" />
    </div>
  );
}
