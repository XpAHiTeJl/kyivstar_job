import React from "react";
import "./nav.css";
const ListItems = [
  { name: "Home", url: "/" },
  { name: "Shop", url: "/" },
  { name: "About", url: "/" },
  { name: "Contact", url: "/" },
];

export default function Nav() {
  return (
    <nav className="container p-0  bg-image" style={{ height: "700px" }}>
      <ul className="container d-flex justify-content-around w-50 align-items-center list-unstyled ms-5 mt-4 ">
        <div className="logo text-light">
          <h3>room</h3>
        </div>
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
