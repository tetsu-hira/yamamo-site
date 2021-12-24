import React, { useState } from "react";
import Link from 'next/link';

export default function Hamburger(props) {
  const [menuState, setMenuState] = useState(false);
  const clickValue = () => {
    const newState = !menuState
    setMenuState(newState)
    if (props.setOpenMenu) {
      props.setOpenMenu(newState)
    }
  };

  return (
    <div onClick={clickValue} className="cursor-pointer sm:hidden absolute right-0 top-0">
      {menuState ? (
        <div>
          <span className="absolute h-0.5 w-5 bg-primary"></span>
          <span className="absolute mt-1 h-0.5 w-5 bg-primary"></span>
        </div>
      ):(
        <ul>
          <div>
            <span className="absolute transform rotate-45 mt-0.5 h-0.5 w-5 bg-primary"></span>
            <span className="absolute transform -rotate-45 mt-0.5 h-0.5 w-5 bg-primary"></span>
          </div>
          <li>
            <Link href="/">
              <a>
                <p>Shop</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <p>About</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <p>Blog</p>
              </a>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}