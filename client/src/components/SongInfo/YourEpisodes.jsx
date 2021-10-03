import { useEffect, useState } from "react";
import styles from "./SongInfo.module.css";
import axios from "axios";
import { SongInfo } from "./SongInfo";

function YourEpisodes() {
  const [yourEpisodes, setyourEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://apg-saavn-api.herokuapp.com/playlist/?q=https://www.jiosaavn.com/featured/dance-hits-2021---hindi/eaTB-JpePNYGSw2I1RxdhQ__"
      )
      .then((res) => {
        console.log(res.data.songs);
        setyourEpisodes(res.data.songs);
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
        <div className={styles["headDiv"]}>Podcasts</div>

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
          <div className={styles["subTextDivin2"]}>Liked Songs</div>
        </div>
        <div className={styles["subTextDiv3"]}>
          <div
            className={styles["subTextDivin3"]}
            style={{
              marginTop: "1.8625em",
            }}
          >
            Your Episodes
          </div>
          <div className={styles["lineDiv2"]}></div>
        </div>
        <div className={styles["subTextDiv4"]}>
          <div>Artists</div>
        </div>
        {/* <div className={styles["shortLine-Your"]}></div>
            <div className={styles["bigLine-Your"]}></div> */}

        <div
          style={{
            marginTop: "13%",
          }}
          className={styles["flex-Align"]}
        >
          {yourEpisodes.map((e) => (
            <div key={e.id} className={styles["prodcastContDiv"]}>
              {/* <img src="/Images/pause.svg" alt="image_pause" className={styles["pauseImg"]} /> */}
              <img
                src={e.image}
                alt="song_image"
                className={styles["prodImg"]}
              />
              {/* <div className={styles["songName"]}>
                        <div>
                            {e.song}
                        </div>
                    </div>
                    <div className={styles["singerName"]}>
                        <div className={styles["subSingerName"]}>
                            <div>
                                {e.singers}
                            </div>
                        </div>
                    </div>
                    <div className={styles["likeDiv"]}>
                    <img src="/Images/redlike.svg" alt="image_like" className={styles["likeImg"]} />
                    </div>
                    <div className={styles["duration"]}>
                        {(e.duration)/100}
                    </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export { YourEpisodes };
