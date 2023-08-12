import logo from "../logo.svg";

export default function Header() {
  return (
    <div className="header">
      <img
        src={logo}
        alt="Логотип проекта Место место"
        className="header__logo"
      />
    </div>
  );
}
