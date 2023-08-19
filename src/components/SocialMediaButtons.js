import "../styles/SocialMediaButtons.scss";
export default function SocialMediaButtons() {
  return (
    <div className="SocialMediaButtonContainer">
      <a href="https://www.linkedin.com/in/aleksa-kunovac-3a4977202/">
        <img
          className="Button"
          src="assets/linkedin.png"
          alt="facebook"
          height={40}
          width={40}
        />
      </a>
      <a href="https://github.com/kuna-kuna-kuna">
        <img
          className="Button"
          src="assets/github.png"
          alt="facebook"
          height={40}
          width={40}
        />
      </a>
      <img
        className="Button"
        src="assets/facebook.png"
        alt="facebook"
        height={40}
        width={40}
      />
    </div>
  );
}
