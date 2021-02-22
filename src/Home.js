import { Hero } from "./Hero";
import { Product } from "./Product";
import hoopsImage from "./images/hoops.png";
import weatherWearImage from "./images/weather-wear.png";
import aightbetImage from "./images/aightbet.png";
import githubIcon from "./images/github-dark.png";

const projects = [
  {
    name: "Book search",
    link: "https://book-search-judno.herokuapp.com/",
    github: "https://github.com/judno/book-search",
  },
  {
    name: "Weather dashboard",
    link: "https://judno.github.io/weatherDashboard/",
    github: "https://github.com/judno/weatherDashboard",
  },
  {
    name: "Workout tracker",
    link: "https://workout-tracker-123.herokuapp.com/",
    github: "https://github.com/judno/workout-tracker",
  },
  {
    name: "Budget tracker",
    link: "https://budget-tracker-judno.herokuapp.com/",
    github: "https://github.com/judno/budget-tracker",
  },
];

export function Home() {
  return (
    <>
      <Hero>
        <div className="flex flex-col gap-3">
          <h1 className="md:text-8xl sm:text-7xl text-4xl text-gray-600">
            <span className="text-gray-400">Hi 👋 I'm </span>Judah
          </h1>
          <p className="md:text-4xl sm:text-2xl text-xl">
            I build stuff with JavaScript
          </p>
        </div>
      </Hero>
      <Hero dark>
        <div className="flex flex-col sm:flex-row items-center gap-10 px-10 sm:w-4/6">
          <img
            className="rounded-full w-20 h-20 sm:w-60 sm:h-60"
            alt="Judah"
            src="https://avatars.githubusercontent.com/u/69154965?s=460&u=7a2dcd4221f476004de06e088deb154fd42c5dbc&v=4"
          />
          <p className="text-lg sm:text-2xl text-white tracking-wide">
            Im a web developer from Melbourne, passionate about designing
            aesthetic interfaces and writing semantic code.
          </p>
        </div>
      </Hero>
      <Product
        name="Aightbet"
        img={aightbetImage}
        link="https://aightbet.herokuapp.com/"
        github="https://github.com/judno/aightbet"
      >
        An App to challenge other users for credibility. Bet your friends and
        become the GOAT of challenges.
      </Product>
      <Product
        dark
        name="Hoops"
        img={hoopsImage}
        link="https://hoops-judno.herokuapp.com/"
        github="https://github.com/judno/hoops"
      >
        A web app that lets you view and log every basketball hoop around the
        world.
      </Product>
      <Product
        name="Weather wear"
        img={weatherWearImage}
        link="https://judno.github.io/project-WeatherWear/"
        github="https://github.com/judno/project-WeatherWear"
      >
        A web app that helps you decide what to wear when you are going out
        depending on the current weather forecast. You can also look up places
        to eat in the local area whilst you are out.
      </Product>
      <Hero>
        <div className="flex flex-col gap-5 px-10">
          <div className="text-4xl sm:w-96">Other projects:</div>
          <ul className="flex flex-col gap-4 items-end">
            {projects.map(({ name, link, github }) => (
              <li className="flex gap-4">
                <a className="text-2xl hover:underline" href={link}>
                  {name}
                </a>
                <a href={github}>
                  <img className="w-8" src={githubIcon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Hero>
    </>
  );
}
