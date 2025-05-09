import React, { useRef, useState } from 'react';
import './Navbar.css';
import verling_solutions_logo from '../../assets/verling_solutions_logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-300px";
  };

  return (
    <div className="navbar">
      <img src={verling_solutions_logo} alt="Logo" className="logo" />
      <img src={menu_open} onClick={openMenu} alt="Menü öffnen" className="nav-mob-open" />

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="Menü schließen" className="nav-mob-close" />

        <li>
          <AnchorLink className="anchor-link" href="#home" offset={100}>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <div className="active-indicator" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#about" offset={50}>
            <p onClick={() => setMenu("about")}>Über Verling Solutions</p>
          </AnchorLink>
          {menu === "about" && <div className="active-indicator" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#services" offset={50}>
            <p onClick={() => setMenu("services")}>Dienstleistungen</p>
          </AnchorLink>
          {menu === "services" && <div className="active-indicator" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#contact" offset={50}>
            <p onClick={() => setMenu("contact")}>Kontakt</p>
          </AnchorLink>
          {menu === "contact" && <div className="active-indicator" />}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" href="#contact" offset={50}>Kontakt</AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
