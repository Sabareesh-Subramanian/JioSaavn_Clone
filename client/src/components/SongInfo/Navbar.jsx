import styles from "./SongInfo.module.css";

function Navbar (){
    return (
        <div className={styles["navDiv"]}>
            
            <img className={styles["navImg1Div"]} src="https://uploadon.net/wp-content/uploads/2019/09/Upload-On-JioSaavn-Saavn-Free-Music-Distribution.png" alt= "logo" />
            
            <div className={styles["navTextDiv"]}>
                <span>Home</span>
                <span>Browse</span>
                <span>Upgrade</span>
            </div>
            <div className={styles["InputDiv"]}>
              <input type="text" placeholder="Search" className={styles["navInputDiv"]}/>
            </div>
            <div className={styles["navTextDiv1"]}>
                Music Languages
            </div>
            
             <img className={styles["navImg2Div"]} src="https://rpgplanner.com/wp-content/uploads/2020/06/no-photo-available.png" alt="user_img" width="2.760625em" />
            
        </div>
    )
}

export { Navbar };