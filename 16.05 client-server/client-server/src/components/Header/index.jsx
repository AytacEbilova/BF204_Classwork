import * as React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.all}>
          <div className={styles.logo}>
            <h3>Tasty</h3>
          </div>
          <div className={styles.right}>
            <ul>
              <a className={styles.menu} href="">
                <li>
                  <Link to="/">Home</Link>{" "}
                </li>
              </a>
              <a className={styles.menu} href="">
                <li>
                  <Link to="/menu">Menu</Link>{" "}
                </li>
              </a>
              <a className={styles.menu} href="">
                <li>
                  <Link to="/special">Specialties</Link>
                </li>
              </a>
              <a className={styles.menu} href="">
                    <li>
                      <Link to="/add">Add Menu</Link>{" "}
                    </li>
                  </a>
              <a className={styles.menu} href="">
                <li>
                  <Link to="/reservation">Reservation</Link>{" "}
                </li>
              </a>
              <a className={styles.menu} href="">
                <li>
                  <Link to="/blog">Blog</Link>{" "}
                </li>
              </a>
              <a className={styles.menu} href="">
                <li>
                  <Link to="/about">About</Link>{" "}
                </li>
              </a>
              <a className={styles.menu} href="">
                <li>
                  <Link to="/contact">Contact</Link>{" "}
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
