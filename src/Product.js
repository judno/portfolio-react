import { Hero } from './Hero';

export function Product({ name, img, link, github, dark, children }) {
  return (
    <Hero dark={dark}>
      <div className="flex flex-col px-10">
        <div className="flex justify-between gap-4">
          <a href={link}>
            <h2 className="sm:text-6xl text-3xl font-semibold hover:underline">
              {name}
            </h2>
          </a>
          <a href={github}>
            <img
              alt="Github icon"
              src="/github-dark.png"
              className="h-8 sm:h-16 cursor-pointer"
            />
          </a>
        </div>
        <div
          className={`flex flex-col ${
            dark ? 'sm:flex-row-reverse' : 'sm:flex-row'
          } items-center gap-10`}
        >
          <img
            className="w-full sm:w-3/5"
            alt="Example of aightbet"
            src={img}
          />
          <div className="flex flex-col gap-4">
            <p className="text-lg sm:text-2xl tracking-wide text-gray-700">
              {children}
            </p>
          </div>
        </div>
      </div>
    </Hero>
  );
}
