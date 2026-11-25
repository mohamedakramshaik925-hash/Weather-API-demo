
import { CloudSun } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <CloudSun size={32} />
        <h2>Weatherly</h2>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#forecast">Forecast</a>
        <a href="#about">About</a>
      </div>

    </nav>
  );
}

export default Navbar;

