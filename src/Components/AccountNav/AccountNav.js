import style from "./AccountNav.module.css";
import Dropdown from "../Dropdown/Dropdown";
import { useState } from "react";

const AccountNav = () => {
  const [appsShowing, setAppsShowing] = useState(false);
  const toggleApps = () => setAppsShowing((prevShowing) => !prevShowing);
  const [settingsShowing, setSettingsShowing] = useState(false);
  const toggleSettings = () =>
    setSettingsShowing((prevShowing) => !prevShowing);

  return (
    <nav>
      <span>
        <button onClick={toggleApps}>Apps</button>
        {appsShowing ? (
          <Dropdown alignment="start">
            <li>YouTube TV</li>
            <li>YouTube Music</li>
            <li>YouTube Kids</li>
            <li>Creator Academy</li>
            <li>YouTube for Artists</li>
          </Dropdown>
        ) : null}
      </span>
      <span>
        <button onClick={toggleSettings}>Settings</button>
        {settingsShowing ? (
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
