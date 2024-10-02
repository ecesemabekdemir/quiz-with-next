export default function Toggle({ handleToggle, isChecked }) {
  return (
    <div className="toggle">
      <img src="./img/sunny.svg" />
      <label className="switch">
        <input type="checkbox" onChange={handleToggle} checked={isChecked} />
        <span className="slider round"></span>
      </label>
      <img src="./img/moon.svg" />
    </div>
  );
}
