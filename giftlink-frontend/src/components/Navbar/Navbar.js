import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        GiftLink
      </a>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {/* Task 1: Add links to Home and Gifts below*/}
          <li className="nav-item">
            <a className="nav-link" href="/home.html">
              Home
            </a>{" "}
            {/* Link to home.html */}
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/app">
              Gifts
            </a>{" "}
            {/* Updated Link */}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/app/search">
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
