import "./navbar.styles.css";
import * as React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonTypes } from "..";
import { useLocation } from "react-router-dom";

export interface NavbarProps {}

export function NavBar(props: NavbarProps) {
  let location = useLocation();
  console.log(location.pathname);

  const routes = [
    {
      icon: "info",
      href: "/about"
    },
    {
      icon: "shopping_cart",
      href: "/"
    },
    {
      icon: "account_circle",
      href: "/auth"
    }
  ];

  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        {routes.map(item => {
          return (
            <li
              className={[
                "navbar__listitem",
                item.href === location.pathname ? "active" : ""
              ].join(" ")}
              key={item.href}
            >
              <Button
                className='navbar__button'
                Type={ButtonTypes.Link}
                href={item.href}
              >
                <span className='material-icons'>{item.icon}</span>
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
