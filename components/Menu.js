import React from "react";
import Link from 'next/link';
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props}>
      <Link href="/">
        <a>Shop</a>
      </Link>
      <Link href="/">
        <a>About</a>
      </Link>
      <Link href="/">
        <a>Blog</a>
      </Link>
    </Menu>
  );
};