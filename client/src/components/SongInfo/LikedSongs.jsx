import { useEffect, useState } from "react";
import styles from "./SongInfo.module.css";
import axios from "axios";
import { SongInfo } from "./SongInfo";

function LikedSongs() {
  const [likedSongs, setLikedSongs] = useState([]);

  useEffect(() => {
    axios
      .get("https://apg-saavn-api.herokuapp.com/result/?q=bellbottom")
      .then((res) => {
        console.log(res.data);
        setLikedSongs(res.data);
      });
  }, []);

  return (
    <>
      <SongInfo />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          backgroundColor: "#F6F6F6",
        }}
      >
        <div className={styles["headDiv"]}>Your Favourites</div>

        <div className={styles["subTextDiv1"]}>
          <div
            className={styles["subTextDivin1"]}
            style={{
              marginTop: "-1.8625em",
            }}
          >
            Recent Played
          </div>
        </div>
        <div className={styles["subTextDiv2"]}>
          <div
            className={styles["subTextDivin2"]}
            style={{
              marginTop: "1.8625em",
            }}
          >
            Liked Songs
          </div>
          <div className={styles["lineDiv1"]}></div>
        </div>
        <div className={styles["subTextDiv3"]}>
          <div>Your Episodes</div>
        </div>
        <div className={styles["subTextDiv4"]}>
          <div>Artists</div>
        </div>
        {/* <div className={styles["shortLine-Lik"]}></div>
            <div className={styles["bigLine-Lik"]}></div> */}

        <div
          style={{
            marginTop: "13%",
          }}
        >
          {likedSongs.map((e) => (
            <div key={e.id} className={styles["hisContDiv"]}>
              <img
                src="/Images/pause.svg"
                alt="image_pause"
                className={styles["pauseImg"]}
              />
              <img
                src={e.image}
                alt="song_image"
                width="25px"
                className={styles["songImg"]}
              />
              <div className={styles["songName"]}>
                <div>{e.song}</div>
              </div>
              <div className={styles["singerName"]}>
                <div className={styles["subSingerName"]}>
                  <div>{e.singers}</div>
                </div>
              </div>
              <div className={styles["likeDiv"]}>
                <img
                  src="/Images/redlike.svg"
                  alt="image_like"
                  className={styles["likeImg"]}
                />
              </div>
              <div className={styles["duration"]}>{e.duration / 100}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export { LikedSongs };
