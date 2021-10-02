import styles from "./SongInfo.module.css";
function LikedSongs () {
    return (
        <div>
              <div className={styles["headDiv"]}>Your Favourites</div>

            <div className={styles["subTextDiv1"]}>
                <div className={styles["subTextDivin1"]}
                    style = {{
                        marginTop: "-1.8625em"
                    }}
                >Recent Played</div>
            </div>
            <div className={styles["subTextDiv2"]}>
                <div className={styles["subTextDivin2"]}
                    style = {{
                        marginTop: "1.8625em"
                    }}
                >Liked Songs</div>
                <div className={styles["lineDiv1"]}></div>
            </div>
            <div className={styles["subTextDiv3"]}>
                <div>Your Episodes</div>
            </div>
            <div className={styles["subTextDiv4"]}>
                 <div>Artists</div>
            </div>
        </div>
    )
}

export { LikedSongs };