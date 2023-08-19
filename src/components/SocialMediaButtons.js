import "../styles/SocialMediaButtons.scss";
import Facebook from "../assets/facebook.png";
import Github from "../assets/github.png";
import Linkedin from "../assets/linkedin.png";
export default function SocialMediaButtons() {
  return (
    <div className="SocialMediaButtonContainer">
      <a href="https://www.linkedin.com/in/aleksa-kunovac-3a4977202/">
        <img
          className="Button"
          src={Linkedin}
          alt="facebook"
          height={40}
          width={40}
        />
      </a>
      <a href="https://github.com/kuna-kuna-kuna">
        <img
          className="Button"
          src={Github}
          alt="facebook"
          height={40}
          width={40}
        />
      </a>
      <img
        className="Button"
        src={Facebook}
        alt="facebook"
        height={40}
        width={40}
      />
    </div>
  );
}
