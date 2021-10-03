import styles from "../../stylemodules/Homepage.module.css";
import jiologo from "../../../src/icons/jiologo.svg";
import downarrow from "../../../src/icons/downarrow.svg";
// import magnify from "../../../src/icons/magnify.svg";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import avatar from "../../../src/icons/avatar.svg";
import microphone from "../../../src/icons/microphone.svg";
import musicbox from "../../../src/icons/musicbox.svg";
import history from "../../../src/icons/history.svg";
import podcast from "../../../src/icons/podcast.svg";
import add from "../../../src/icons/add.svg";
import repeat from "../../../src/icons/repeat.svg";
import previous from "../../../src/icons/previous.svg";
import next from "../../../src/icons/next.svg";
import play from "../../../src/icons/play.svg";
import pause from "../../icons/pause.svg";
import shuffle from "../../../src/icons/shuffle.svg";
import moredetails from "../../../src/icons/moredetails.svg";
import volume from "../../../src/icons/volume.svg";
import expand from "../../../src/icons/expand.svg";
import Playing from "./Playing";
import { Link } from "react-router-dom";

import Search from "../SearchEngine/Search";

export const Homepage = ({ song, loadingFlag }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showingLanguages, setShowingLanguages] = useState(false);
  const [showingProfile, setShowingProfile] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songlink, setSongLink] = useState("");

  const [songPlaying, setSongPlaying] = useState(false);
  const audioEl = useRef(null);
  useEffect(() => {
    if (songPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, [songPlaying]);

  const [categories, setCategories] = useState([
    "TRENDING NOW",
    "NEW RELEASES",
    "EDITORIAL PICKS",
    "CRICKET FEVER",
    "MONSOON MOMENTS",
    "DEVOTIONAL",
    "FRESH HITS",
    "TOP SONGS",
  ]);
  const [playingsong, setPlayingSong] = useState({
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfe9JQ56xzr8HlpDnWufzRFI3RUtXoMCAvwQ&usqp=CAU",
    album: "",
    song: "",
    media_url: "",
  });

  const Arrow = styled.img`
    transform: ${(props) => (props.flag ? "rotate(180deg)" : "rotate(0deg)")};
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
  const toggleShowSearch = () => {
    setShowSearchBar(!showSearchBar);
  };

  const showProfile = () => {
    setShowingProfile(!showingProfile);
  };

  const LoggingOut = () => {
    setLoggedIn(!loggedIn);
    setShowingProfile(false);
  };

  const LoggingIn = () => {
    setLoggedIn(!loggedIn);
  };

  const ModifyPlay = () => {
    setSongPlaying(!songPlaying);
    setIsPlaying(!isPlaying);
    // console.log("URL", playingsong.media_url);
  };

  const ChangeSong = (el) => {
    setSongPlaying(false);
    setPlayingSong(el);
    setSongLink(el.media_url);
    setTimeout(() => {
      setSongPlaying(true);
    }, 300);
    // setSongPlaying(true);
    // ModifyPlay();
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
            <div>Home</div>
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
          onClick={toggleShowSearch}
          className={styles["search-bar"]}
          placeholder={"Search"}
        />
        {/* <img className={styles["magnify-icon"]} src={magnify} alt="Search Icon" /> */}
        {/* </div> */}
        {showSearchBar ? <Search /> : null}
        <div onClick={showLanguages} className={styles["languages-div"]}>
          <div className={styles["languages-text"]}>Music Languages</div>
          <Arrow
            flag={showingLanguages}
            className={styles["down-arrow"]}
            src={downarrow}
            alt="dropdown arrow"
          />
          {/* Music Languages */}
        </div>
        <Login loggedin={loggedIn} onClick={LoggingIn}>
          Login
        </Login>
        <Signup loggedin={loggedIn} onClick={LoggingIn}>
          Sign Up
        </Signup>
        <Logout onClick={showProfile} loggedin={loggedIn}>
          <img className={styles["avatar"]} src={avatar} alt="avatar"></img>
          <Arrow
            flag={showingProfile}
            className={styles["down-arrow"]}
            src={downarrow}
            alt="dropdown arrow"
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

      {/* Homepage body start */}
      <div className={styles["home-body-div"]}>
        {/* Library list start */}
        <div>
          <div className={styles["library-list-div"]}>
            <div>
              <p>LIBRARY</p>
            </div>
            <div className={styles["library-list-items"]}>
              <img src={history} alt="mic" />

              <div className={styles["library-list-text"]}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/history"
                >
                  {" "}
                  History{" "}
                </Link>
              </div>
            </div>
            <div className={styles["library-list-items"]}>
              <img src={musicbox} alt="mic" />
              <div className={styles["library-list-text"]}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/likedsongs"
                >
                  {" "}
                  Liked Songs{" "}
                </Link>
              </div>
            </div>
            <div className={styles["library-list-items"]}>
              <img src={podcast} alt="mic" />
              <div className={styles["library-list-text"]}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/yourepisodes"
                >
                  {" "}
                  Your Episodes{" "}
                </Link>
              </div>
            </div>
            <div className={styles["library-list-items"]}>
              <img src={microphone} alt="mic" />
              <div className={styles["library-list-text"]}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/artists"
                >
                  {" "}
                  Artists{" "}
                </Link>
              </div>
            </div>
            <br />
            <button className={styles["newplaylist-button"]}>
              <img src={add} alt="mic" />
              <div className={styles["newplaylist-text"]}>New Playlist</div>
            </button>
          </div>
        </div>
        {/* Library list end */}
        {/* Songs display start */}
        {loadingFlag ? (
          <div className={styles["loading-div"]}>
            <i>We're fetching your favorite and best tunes. Please hold on!</i>
          </div>
        ) : (
          <div className={styles["songs-list-div"]}>
            <h2 className={styles["greeting-text"]}>Hi, User</h2>
            {categories.map((cat) => {
              return (
                <>
                  {" "}
                  <p className={styles["category-name-start"]}>{cat}</p>
                  <div className={styles["songs-div"]}>
                    {song.map((el) => {
                      return (
                        <div
                          key={el.id}
                          onClick={() => {
                            ChangeSong(el);
                          }}
                          className={styles["songs-info-div"]}
                        >
                          <img src={el.image} alt=""></img>
                          <div className={styles["album-name"]}>
                            <b>{el.album}</b>
                          </div>
                          <div className={styles["singer-name"]}>{el.song}</div>
                        </div>
                      );
                    })}
                  </div>{" "}
                </>
              );
            })}
            {/* Footer Start */}
            <div className={styles["songs-separation-line"]}></div>
            <div className={styles["footer-about-div"]}>
              <div className={styles["footer-about-text"]}>JioSaavn Pro</div>
              <div className={styles["footer-about-text"]}>
                JioSaavn For IOS
              </div>
              <div className={styles["footer-about-text"]}>
                JioSaavn For Android
              </div>
              <div className={styles["footer-about-text"]}>New Releases</div>
              <div className={styles["footer-about-text"]}>Sitemap</div>
            </div>
            <div className={styles["songs-separation-line"]}></div>
            <div className={styles["footer-media-div"]}>
              <div>2021 Saavn Media Pvt. Ltd.</div>
              <div>FOLLOW US</div>
            </div>
            {/* Footer End */}
          </div>
        )}
        {/* Songs display end */}
      </div>
      {/* Homepage body end */}

      {/* Playback div start */}
      <div className={styles["playback-div"]}>
        <div className={styles["playback-song-div"]}>
          <img src={playingsong.image} alt="album" />
          <div>
            <div className={styles["album-name"]}>
              <b>{playingsong.album}</b>
            </div>
            <div className={styles["singer-name"]}>{playingsong.song}</div>
          </div>
        </div>
        <div className={styles["playback-controls-div"]}>
          <img src={repeat} alt="repeat" />
          <img src={previous} alt="previous" />
          <div>
            {/* onClick={ModifyPlay}> */}
            {/* <Playing source={playingsong.vlink} /> */}
            <img
              // onClick={isPlaying ? pauseSong : playSong}
              onClick={ModifyPlay}
              src={songPlaying ? pause : play}
              alt=""
            ></img>
            <audio
              // src="http://h.saavncdn.com/987/cd902d048c13e5ce6ca84cc409746a5d.mp3"
              src={songlink}
              //type="audio/mp3"
              ref={audioEl}
              // controls
            ></audio>
          </div>
          <img src={next} alt="next" />
          <img src={shuffle} alt="shuffle" />
        </div>
        <div className={styles["playback-extracontrols-div"]}>
          <img src={moredetails} alt="moredetails" />
          <img src={volume} alt="volume" />
          <img src={expand} alt="expand" />
        </div>
      </div>
      {/* Playback div end */}
    </>
  );
};
