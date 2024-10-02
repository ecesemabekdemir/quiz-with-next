import Toggle from "../toogle";

export default function Header({ handleToggle, slug, theme }) {
  return (
    <div className="header">
      <div className="categoriesTitle">
        <h2>{slug.toUpperCase()}</h2>
      </div>
      <div className="mod">
        <Toggle handleToggle={handleToggle} isChecked={theme} />
      </div>
    </div>
  );
}
