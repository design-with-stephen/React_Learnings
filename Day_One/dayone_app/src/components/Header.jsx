import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./componentStyles/header.css";
function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
      <header className="navbar">
        <h1 className="logo">MyApp</h1>
        <button className="menu-btn" onClick={toggleSidebar}>
          &#9776; {/* Hamburger Icon */}
        </button>
        <nav className="desktop-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
    </div>
  );
}

export default Header;
