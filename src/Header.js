import githubIcon from "./images/github-dark.png";
import linkedInIcon from "./images/linked-in.png";

export function Header() {
  return (
    <nav className="absolute top-5 right-5 flex gap-5">
      <a href="https://www.linkedin.com/in/judah-slatter-655637203">
        <img src={linkedInIcon} className="w-8 h-8" />
      </a>
      <a href="https://github.com/judno">
        <img src={githubIcon} className="w-8 h-8" />
      </a>
    </nav>
  );
}
