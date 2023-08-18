import "../styles/Header.scss";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="HeaderContainer">
      <div className="HeaderTitle">Aleksa's Portfolio</div>
      <NavBar />
    </div>
  );
}
