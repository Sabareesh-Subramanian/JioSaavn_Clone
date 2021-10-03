import { useEffect, useState } from "react";
import styles from "./SongInfo.module.css";
import axios from "axios";
import { SongInfo } from "./SongInfo";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios
      .get(
        " https://apg-saavn-api.herokuapp.com/playlist/?q=https://www.jiosaavn.com/featured/romantic-hits-2020---hindi/ABiMGqjovSFuOxiEGmm6lQ"
      )
      .then((res) => {
        console.log(res.data.songs);
        setHistory(res.data.songs);
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
        <div className={styles["headDiv"]}>History</div>

        <div className={styles["subTextDiv1"]}>
          <div className={styles["subTextDivin1"]}>Recent Played</div>
          <div className={styles["lineDiv"]}></div>
        </div>
        <div className={styles["subTextDiv2"]}>
          <div>Liked Songs</div>
        </div>
        <div className={styles["subTextDiv3"]}>
          <div>Your Episodes</div>
        </div>
        <div className={styles["subTextDiv4"]}>
          <div>Artists</div>
        </div>
        {/* <div className={styles["bigLine-His"]}></div> */}

        <div
          style={{
            marginTop: "13%",
          }}
        >
          {history.map((e) => (
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
                  src="/Images/like.svg"
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

export { History };
