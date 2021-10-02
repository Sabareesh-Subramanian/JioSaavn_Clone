import styles from "./SongInfo.module.css";
function History (){
    return (
        <div>
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
            
                
                
        </div>
    )
}

export { History };