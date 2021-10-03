import { Link } from "react-router-dom";
import styles from "./SongInfo.module.css";

function Sidebar() {
  return (
    <div className={styles["sideBarDiv"]}>
      <div className={styles["sideBarDiv1"]}>LIBRARY</div>

      <div className={styles["sideImgDiv1"]}>
        <img src="/Images/image_1.svg" alt="image_1" />
        <div>
          <Link
            style={{
              textDecoration: "none",
              color: "#545454",
            }}
            to="/history"
          >
            History
          </Link>
        </div>
      </div>
      <div className={styles["sideImgDiv2"]}>
        <img src="/Images/image_2.svg" alt="image_2" />
        <div>
          <Link
            style={{
              textDecoration: "none",
              color: "#545454",
            }}
            to="/likedsongs"
          >
            Liked Songs
          </Link>
        </div>
      </div>
      <div className={styles["sideImgDiv3"]}>
        <img src="/Images/image_3.svg" alt="image_3" />
        <div
          style={{
            marginLeft: "2.4375em",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "#545454",
            }}
            to="/yourepisodes"
          >
            Your Episodes
          </Link>
        </div>
      </div>
      <div className={styles["sideImgDiv4"]}>
        <img src="/Images/image_4.svg" alt="image_4" />
        <div>
          <Link
            style={{
              textDecoration: "none",
              color: "#545454",
            }}
            to="/artists"
          >
            Artists
          </Link>
        </div>
      </div>
      <div className={styles["sideButtonDiv"]}>
        <button className={styles["sideButtonDiv1"]}>
          <img src="/Images/plus.svg" alt="plus_logo" />
          <div>New Playlist</div>
        </button>
      </div>
    </div>
  );
}

export { Sidebar };
