import styles from "../../stylemodules/Homepage.module.css";
import jiologo from "../../../src/icons/jiologo.svg";
import downarrow from "../../../src/icons/downarrow.svg";
import styled from "styled-components";
import { useState } from "react";

export const Homepage = () => {
  const [showingLanguages, setShowingLanguages] = useState(false);
  const Arrow = styled.img`
    transform: ${(props) => (props.flag ? "rotate(180deg)" : "rotate(0deg)")};
  `;

  const Languages = styled.div`
    min-width: 19.65%;
    min-height: 64.44%;
    margin-top: 4.79%;
    margin-left: 70.069%;
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    z-index: 1;
    display: ${(props) => (props.flag ? "block" : "none")};
    border: 2px solid black;
  `;

  const showLanguages = () => {
    setShowingLanguages(!showingLanguages);
  };
  return (
    <>
      {/* Navbar start*/}
      <div className={styles["navbar-parent"]}>
        {/* Logo */}
        <img src={jiologo} alt="Logo"></img>
        {/* Menu Options */}
        <div className={styles["options-div"]}>
          {/* <div className={styles["home-div"]}>
                    <div className={styles["home-option"]}>Home</div>
                    <div className={styles["selection-line"]}></div>
                </div>
                <div className={styles["browse-div"]}>
                    <div className={styles["browse-option"]}>Browse</div>
                </div>
                <div className={styles["upgrade-div"]}>
                    <div className={styles["upgrade-option"]}>Upgrade</div>
                </div> */}
          <div>
            <div>Home</div>
            <div
              style={{
                width: "43px",
                height: "3px",
                background: "#2A2D36",
                border: "1px solid #2A2D36",
                marginTop: "8%",
              }}
            ></div>
          </div>
          <div>Browse</div>
          <div>Upgrade</div>
        </div>
        {/* Search bar */}
        {/* <div> */}
        <input className={styles["search-bar"]} placeholder="Search" />
        {/* <img className={styles["magnify-icon"]} src={magnify} alt="Search Icon" /> */}
        {/* </div> */}
        <div className={styles["languages-div"]}>
          <div className={styles["languages-text"]}>Music Languages</div>
          <Arrow
            onClick={showLanguages}
            flag={showingLanguages}
            className={styles["down-arrow"]}
            src={downarrow}
            alt="dropdown arrow"
          />
          {/* Music Languages */}
        </div>
        <div className={styles["login-div"]}>Login</div>
        <div className={styles["signup-div"]}>Sign Up</div>
        <Languages flag={showingLanguages}></Languages>
      </div>
      {/* Navbar end */}
    </>
  );
};
