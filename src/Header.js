import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav className="flex justify-end">
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
