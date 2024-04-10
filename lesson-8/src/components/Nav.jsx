import React from "react";
import "./nav.css";
const ListItems = [
  { name: "Home", url: "/" },
  { name: "News", url: "/" },
  { name: "Popular", url: "/" },
  { name: "Category", url: "/" },
];

export default function Nav() {
  return (
    <nav className="   bg-image" style={{ width: "60%", height: "700px" }}>
      <ul className="d-flex justify-content-around w-50">
        {ListItems.map(({ name, url }) => (
          <li key={name}>
            <a href={url}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
