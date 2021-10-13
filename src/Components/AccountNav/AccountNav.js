import style from "./AccountNav.module.css";
import Dropdown from "../Dropdown/Dropdown";
import { useState, useEffect } from "react";

const AccountNav = () => {
  const [appsShowing, setAppsShowing] = useState(false);
  const toggleApps = () => setAppsShowing((prevShowing) => !prevShowing);
  const minimizeApps = () => setAppsShowing(false);
  const [settingsShowing, setSettingsShowing] = useState(false);
  const toggleSettings = () =>
    setSettingsShowing((prevShowing) => !prevShowing);
  const minimizeSettings = () => setSettingsShowing(false);

  useEffect(() => {
    const handleClick = (event) => {
      const { target } = event;
      if (target.classList.contains(style.navBtns)) {
        if (!target.classList.contains(style.appsBtn)) {
          minimizeApps();
          console.log("apps");
        }
        if (!target.classList.contains(style.settingsBtn)) {
          console.log("settings");
          minimizeSettings();
        }
      } else {
        minimizeApps();
        minimizeSettings();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <nav className={style.accountNav}>
      <span>
        <button
          onClick={toggleApps}
          className={`${style.appsBtn} ${style.navBtns}`}
        >
          Apps
        </button>
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
        <button
          onClick={toggleSettings}
          className={`${style.settingsBtn} ${style.navBtns}`}
        >
          Settings
        </button>
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
