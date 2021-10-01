import styles from "./SongInfo.module.css";
function YourEpisodes () {
    return (
        <div>
              <div className={styles["headDiv"]}>Podcasts</div>

            <div className={styles["subTextDiv1"]}>
                <div className={styles["subTextDivin1"]}
                    style = {{
                        marginTop: "-1.8625em"
                    }}
                >Recent Played</div>
            </div>
            <div className={styles["subTextDiv2"]}>
                <div className={styles["subTextDivin2"]}>Liked Songs</div>
            </div>
            <div className={styles["subTextDiv3"]}>
                <div className={styles["subTextDivin3"]}
                     style = {{
                        marginTop: "1.8625em"
                    }}
                >Your Episodes</div>
                <div className={styles["lineDiv2"]}></div>
            </div>
            <div className={styles["subTextDiv4"]}>
                 <div>Artists</div>
            </div>
        </div>
    )
}

export { YourEpisodes };