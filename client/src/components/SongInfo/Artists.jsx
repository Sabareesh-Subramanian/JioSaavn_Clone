import styles from "./SongInfo.module.css";
function Artists () {
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
                <div className={styles["subTextDivin2"]}>Liked Songs</div>
               
            </div>
            <div className={styles["subTextDiv3"]}>
                <div className={styles["subTextDivin3"]}>Your Episodes</div>
            </div>
            <div className={styles["subTextDiv4"]}>
                 <div className={styles["subTextDivin4"]}
                     style = {{
                        marginTop: "1.8625em"
                    }}
                 >Artists</div>
                 <div className={styles["lineDiv3"]}></div>
            </div>
        </div>
    )
}

export { Artists };