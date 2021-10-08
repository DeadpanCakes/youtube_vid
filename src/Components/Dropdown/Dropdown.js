import { cloneElement } from "react";
import style from "./Dropdown.module.css";

const Dropdown = ({ children, alignment }) => {
  const styledChildren = children.map((child, key) => {
    console.log(key);
    return cloneElement(child, {
      key,
      className: style.dropdownItem,
      style: { justifyContent: alignment },
    });
  });
  return <ul className={style.dropdown}>{styledChildren}</ul>;
};

export default Dropdown;
