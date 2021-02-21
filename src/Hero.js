export function Hero({ children, dark }) {
  return (
    <div
      className={`min-h-screen flex justify-center items-center relative${
        dark ? ' bg-gray-400' : undefined
      }`}
    >
      {children}
    </div>
  );
}
