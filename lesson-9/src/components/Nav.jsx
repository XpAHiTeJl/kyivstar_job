import React from "react";
import "./nav.css";
const ListItems = [
  { name: "Home", url: "/home" },
  { name: "Shop", url: "/shop" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];

export default function Nav({ type }) {
  return (
    <nav
      className={`bg-image  container p-0 ${type}`}
      style={{ height: "700px" }}
    >
      <ul className="headermenu container d-flex justify-content-around w-50 align-items-center list-unstyled ms-5 mt-4 ">
        <li>
          <i class="fa-solid fa-bars" id="burger"></i>
          <div className="logo text-light">
            <h3>room</h3>
          </div>
        </li>
        {ListItems.map(({ name, url }) => (
          <li key={name}>
            <a className="navlink text-light" href={url}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
