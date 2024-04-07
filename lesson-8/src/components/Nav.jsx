import React, { Component } from "react";

const ListItems = [
  { name: "Home", url: "/" },
  { name: "News", url: "/" },
  { name: "Popular", url: "/" },
  { name: "Category", url: "/" },
];

export class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          {ListItems.map(({ name, url }) => (
            <li key={name}>
              <a href={url}>{name}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;
