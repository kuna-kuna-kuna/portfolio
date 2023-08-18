import { useState } from "react";
import "../styles/NavBar.scss";

export default function NavBar() {
  const [active, setActive] = useState(0);
  const handleOnClick = (number) => {
    switch (number) {
      case 0:
        setActive(0);
        //navigate;
        break;
      case 1:
        setActive(1);
        //navigate;
        break;
      case 2:
        setActive(2);
        //navigate;
        break;
      default:
        break;
    }
  };
  return (
    <div className="NavBarContainer">
      <div
        className={`NavBarContainerItem ${active === 0 ? "active" : ""}`}
        onClick={() => handleOnClick(0)}
      >
        Home
      </div>
      <div
        className={`NavBarContainerItem ${active === 1 ? "active" : ""}`}
        onClick={() => handleOnClick(1)}
      >
        Github
      </div>
      <div
        className={`NavBarContainerItem ${active === 2 ? "active" : ""}`}
        onClick={() => handleOnClick(2)}
      >
        Projects
      </div>
    </div>
  );
}
