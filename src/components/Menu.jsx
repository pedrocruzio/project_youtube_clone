import React from "react";
import { Stack } from "@mui/material";
import styles from '../styles/MenuNav.module.css';
import { Link, useParams } from "react-router-dom";

import { menuItems } from "../utils/constants";

const Menu = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "row" },
    }}
    className={styles.menuNav}
  >
    {menuItems.map((menu) => (
      <Link to={ menu.link }>
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(menu.name)}
        style={{
          background: menu.name === selectedCategory && "#FC1503",
          color: "white",
        }}
        key={menu.name}
      >
        <span style={{ color: menu.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
          {menu.icon}
        </span>
        <span style={{ opacity: menu.name === selectedCategory ? "1" : "0.8" }}>
          {menu.name}
        </span>
      </button>
      </Link>
    ))}
  </Stack>
);

export default Menu;
