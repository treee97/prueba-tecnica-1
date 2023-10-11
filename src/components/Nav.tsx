import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-routes">
        <Link to="/" className="navba-routes_title text-white">
          DEMO Streaming
        </Link>
      </div>
      <div className="navbar-container_buttons">
        <button type="button">Log In</button>
        <button type="button">Start your free trial</button>
      </div>
    </nav>
  );
};

export default Nav;
