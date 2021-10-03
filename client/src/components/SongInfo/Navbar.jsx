import styles from "../../stylemodules/Homepage.module.css";
import jiologo from "../../../src/icons/jiologo.svg";
import downarrow from "../../../src/icons/downarrow.svg";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import avatar from "../../../src/icons/avatar.svg";
import { OtpContext } from "../../contexts/OtpContext";

function Navbar() {
  const { loggedIn } = useContext(OtpContext);
  const { handleLoggedIn } = useContext(OtpContext);
  const [showingLanguages, setShowingLanguages] = useState(false);
  const [showingProfile, setShowingProfile] = useState(false);
  const Arrow = styled.img`
    transform: ${(props) => (props.flag ? "rotate(180deg)" : "rotate(0deg)")};
    display: ${(props) => (props.showing ? "none" : "block")};
  `;

  const Languages = styled.div`
    min-width: 21%;
    min-height: 70.44%;
    /* margin-top:4.79%; */
    margin-left: 66.069%;
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    z-index: 10;
    display: ${(props) => (props.flag ? "block" : "none")};
    /* border: 2px solid black; */
    position: absolute;
    padding: 2% 0% 0% 0%;
  `;

  const Login = styled.div`
    width: 3.75%;
    height: 3.88%;
    margin-top: 2.8%;
    margin-left: 1.61%;
    padding: 8px;
    /* padding-bottom: 10px; */
    cursor: pointer;
    display: ${(props) => (props.loggedin ? "none" : "block")};
  `;

  const Logout = styled.div`
    width: 9.23%;
    height: 3.88%;
    margin-top: 2.8%;
    margin-left: 1.61%;
    /* padding: 8px; */
    display: flex;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
    cursor: pointer;
    /* border: 1px solid black; */
    display: ${(props) => (props.loggedin ? "flex" : "none")};
  `;

  const Signup = styled.div`
    width: 4.93%;
    height: 3.88%;
    margin-top: 2.8%;
    margin-left: 0.55%;
    padding: 8px 0px;
    cursor: pointer;
    display: ${(props) => (props.loggedin ? "none" : "block")};
  `;

  const UserProfile = styled.div`
    width: 20%;
    height: 40.11%;
    margin-left: 77.15%;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    position: absolute;
    z-index: 10;
    display: ${(props) => (props.showprofile ? "block" : "none")};
  `;

  const ProfileTexts = styled.p`
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    margin-left: 15%;
    color: #646464;
    cursor: pointer;
  `;

  const LanguageTexts = styled.div`
    border: 0.5px solid #f6f6f6;
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;
    padding: 8% 15%;
    cursor: pointer;
  `;

  const showLanguages = () => {
    setShowingLanguages(!showingLanguages);
  };

  const showProfile = () => {
    setShowingProfile(!showingProfile);
  };

  const LoggingOut = () => {
    handleLoggedIn(!loggedIn);
    setShowingProfile(false);
  };

  const LoggingIn = () => {
    handleLoggedIn(!loggedIn);
  };

  return (
    <>
      {/* Navbar start*/}
      <div className={styles["navbar-parent"]}>
        {/* Logo */}
        <img src={jiologo} alt="Logo"></img>
        {/* Menu Options */}
        <div className={styles["options-div"]}>
          <div>
            <div>
              {" "}
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Home
              </Link>
            </div>
            <div
              style={{
                width: "43px",
                height: "3px",
                background: "#2a2d36",
                border: "1px solid #2a2d36",
                marginTop: "8%",
              }}
              className={styles["selectedpage-representation-line "]}
            ></div>
          </div>
          <div>Browse</div>
          <div>Upgrade</div>
        </div>
        {/* Search bar */}
        {/* <div> */}
        <input
          //   onClick={toggleShowSearch}
          className={styles["search-bar"]}
          placeholder={"Search"}
        />
        {/* <img className={styles["magnify-icon"]} src={magnify} alt="Search Icon" /> */}
        {/* </div> */}
        {/* <SearchDropBox>
          <Search toggleShowSearch={toggleShowSearch} />
        </SearchDropBox> */}
        {/* {showSearchBar ? <Search /> : null} */}
        <div onClick={showLanguages} className={styles["languages-div"]}>
          <div className={styles["languages-text"]}>Music Languages</div>
          <Arrow
            flag={showingLanguages}
            className={styles["down-arrow"]}
            src={downarrow}
            alt="dropdown arrow"
            // showing={showSearchBar}
          />
          {/* Music Languages */}
        </div>
        <Login loggedin={loggedIn} onClick={LoggingIn}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/login">
            Login
          </Link>
          {/* Login */}
        </Login>
        <Signup loggedin={loggedIn} onClick={LoggingIn}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/signup">
            Sign Up
          </Link>
        </Signup>
        <Logout onClick={showProfile} loggedin={loggedIn}>
          <img className={styles["avatar"]} src={avatar} alt="avatar"></img>
          <Arrow
            flag={showingProfile}
            className={styles["down-arrow"]}
            src={downarrow}
            alt="dropdown arrow"
            // showing={showSearchBar}
          />
        </Logout>
      </div>
      {/* Navbar end */}
      {/* Separation Line between Navbar and Body */}
      <div
        style={{ width: "100%", height: "1px", background: "#e9e9e9" }}
        className={styles[".navbar-body-separation"]}
      ></div>
      {/* User profile modal start */}
      <UserProfile showprofile={showingProfile}>
        <ProfileTexts>My Music</ProfileTexts>
        <ProfileTexts>My Profile</ProfileTexts>
        <ProfileTexts>History</ProfileTexts>
        <ProfileTexts>Account Settings</ProfileTexts>
        <ProfileTexts>Help & Support</ProfileTexts>
        <ProfileTexts onClick={LoggingOut}>Logout</ProfileTexts>
      </UserProfile>
      {/* User profile modal end */}

      {/* Languages modal start */}
      <Languages flag={showingLanguages}>
        <div className={styles["what-lang-text"]}>What music do you like?</div>
        <div className={styles["italic-text"]}>
          <i>Pick all the languages you want to listen to.</i>
        </div>
        <br />
        <div className={styles["languages-display"]}>
          <LanguageTexts>English</LanguageTexts>
          <LanguageTexts>Hindi</LanguageTexts>
          <LanguageTexts>Marathi</LanguageTexts>
          <LanguageTexts>Punjabi</LanguageTexts>
          <LanguageTexts>Kannada</LanguageTexts>
          <LanguageTexts>Telugu</LanguageTexts>
          <LanguageTexts>Gujarati</LanguageTexts>
          <LanguageTexts>Tamil</LanguageTexts>
          <LanguageTexts>Malayalam</LanguageTexts>
          <LanguageTexts>
            <div className={styles["invisible-text"]}>Test</div>
          </LanguageTexts>
          <LanguageTexts>
            <div className={styles["invisible-text"]}>Test</div>
          </LanguageTexts>
          <LanguageTexts>
            <div className={styles["invisible-text"]}>Test</div>
          </LanguageTexts>
          <LanguageTexts>
            <div className={styles["invisible-text"]}>Test</div>
          </LanguageTexts>
          <LanguageTexts>
            <div className={styles["invisible-text"]}>Test</div>
          </LanguageTexts>
        </div>
        <button className={styles["update-button"]}>Update</button>
      </Languages>
      {/* Languages modal end */}
    </>
    // <div className={styles["navDiv"]}>

    //     <img className={styles["navImg1Div"]} src="https://uploadon.net/wp-content/uploads/2019/09/Upload-On-JioSaavn-Saavn-Free-Music-Distribution.png" alt= "logo" />

    //     <div className={styles["navTextDiv"]}>
    //         <span>Home</span>
    //         <span>Browse</span>
    //         <span>Upgrade</span>
    //     </div>
    //     <div className={styles["InputDiv"]}>
    //       <input type="text" placeholder="Search" className={styles["navInputDiv"]}/>
    //     </div>
    //     <div className={styles["navTextDiv1"]}>
    //         Music Languages
    //     </div>

    //      <img className={styles["navImg2Div"]} src="https://rpgplanner.com/wp-content/uploads/2020/06/no-photo-available.png" alt="user_img" width="2.760625em" />

    // </div>
  );
}

export { Navbar };
