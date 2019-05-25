import React from "react";
import { Menu } from "semantic-ui-react";
import styles from "./Navbar.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Menu borderless fixed="top">
        <Menu.Item header href="/">
          Seamark
        </Menu.Item>
      </Menu>
    </div>
  );
}
