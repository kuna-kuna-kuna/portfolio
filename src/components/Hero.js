import "../styles/Hero.scss";
import SocialMediaButtons from "./SocialMediaButtons";

export default function Hero() {
  return (
    <div className="HeroSection">
      <div className="HeroContent">
        <div className="HeroTitle">Hi there I'm Aleksa 👋</div>
        <div className="HeroParagraph">
          I am a software engineer with more than two years of experience in
          frontend development. I hold a BCs degree from the Faculty of Science
          in Novi Sad. Solving problems are my areas of expertise. I am a team
          player who enjoys communicating and connecting with people while
          growing with them. I am an energetic, positive, and hardworking
          individual who is always eager to learn new technologies.
        </div>
        <SocialMediaButtons />
      </div>
      <img
        className="HeroAvatar"
        src="/assets/avatar.svg"
        alt="Avatar "
        loading="lazy"
      />
    </div>
  );
}
