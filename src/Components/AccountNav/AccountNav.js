import style from "./AccountNav.module.css";
import Dropdown from "../Dropdown/Dropdown";
import { useState } from "react";

const AccountNav = () => {
  const [dropdownShowing, setShowing] = useState(false);
  const toggleDropdown = () => setShowing((prevShowing) => !prevShowing);

  return (
    <nav>
      <span>
        <button onClick={toggleDropdown}>Settings</button>
        {dropdownShowing ? (
          <Dropdown alignment="start">
            <li>Appearance: Device theme</li>
            <li>Language: English</li>
            <li>Location: United States</li>
            <li>Settings</li>
            <li>Your data in YouTube</li>
            <li>Help</li>
            <li>Send feedback</li>
            <li>Keyboard shortcuts</li>
            <li>Restricted Mode: Off</li>
          </Dropdown>
        ) : null}
      </span>
      <button className={style.signIn}>Sign In</button>
    </nav>
  );
};

export default AccountNav;
