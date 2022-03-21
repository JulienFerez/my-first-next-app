import Link from "next/link";
import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <nav>
        <h1>My super website</h1>

        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="test">
              <a>test</a>
            </Link>
          </li>
        </ul>
      </nav>

      {children}

      <footer>toto</footer>
    </>
  );
};

export default Layout;
