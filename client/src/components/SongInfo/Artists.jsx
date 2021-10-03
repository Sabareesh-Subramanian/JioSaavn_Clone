import styles from "./SongInfo.module.css";
import { SongInfo } from "./SongInfo";

function Artists() {
  const artists = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0NW9LJoT0T-TmGtB3wOse0SF7u7EIeT6-8A&usqp=CAU",
      name: "Arjit Singh",
      id: 1,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbO6QqPb3Si_Fs_LsekAQxWHThfO2B8xDWQ&usqp=CAU",
      name: "Kailash Kher",
      id: 2,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY-Pb-fH9Ze6_icbmTmmvsVBSD2DTJv99aCw&usqp=CAU",
      name: "Udit Narayan",
      id: 3,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_2vaEjR5B4N4ysSmuPJZvVTk13XNb1N5tg&usqp=CAU",
      name: "Guru Randhawa",
      id: 4,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrPHpFCMaMuNY8yJ5cHV_7wUCOzgDB3ay0w&usqp=CAU",
      name: "Armaan Malik",
      id: 5,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3lZmH8aRmebbj0gpHfudny1uREnqpzRF4Q&usqp=CAU",
      name: "Neha Kakkar",
      id: 6,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1j3_kZAuvZaH3WsZx5i8KrMaPCGeaB9rU5w&usqp=CAU",
      name: "Tulsi Kumar",
      id: 7,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXTRYDN2Q4K7TNYOFj_aSPQU97cJh3dNH3bw&usqp=CAU",
      name: "Sonu Nigam",
      id: 8,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMKvU4e84IrdgH8S8goZIGSD2mP8mL6z1vdg&usqp=CAU",
      name: "Jubin Nautiyal",
      id: 9,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg83aUvi7iR8nWFQUXM6zFRt3Mg4E0uti4qA&usqp=CAU",
      name: "Shreya Ghoshal",
      id: 10,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8D5GAdfWdvsH6rHVYe2Cgz9Vsxuksr65MOg&usqp=CAU",
      name: "Palak Muchhal",
      id: 11,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAXFF-2qqI-jsq5a2CpCZZJMLeYK6OsYXwtA&usqp=CAU",
      name: "Sukhwinder Singh",
      id: 12,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz95h97IUWLKnc-IkW6Po2IASMzQHWZN2Mew&usqp=CAU",
      name: "Shaan",
      id: 13,
    },
  ];

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
          <div className={styles["subTextDivin2"]}>Liked Songs</div>
        </div>
        <div className={styles["subTextDiv3"]}>
          <div className={styles["subTextDivin3"]}>Your Episodes</div>
        </div>
        <div className={styles["subTextDiv4"]}>
          <div
            className={styles["subTextDivin4"]}
            style={{
              marginTop: "1.8625em",
            }}
          >
            Artists
          </div>
          <div className={styles["lineDiv3"]}></div>
        </div>
        {/* <div className={styles["shortLine-Art"]}></div>
            <div className={styles["bigLine-Art"]}></div> */}

        <div
          style={{
            marginTop: "13%",
          }}
          className={styles["flex-Align"]}
        >
          {artists.map((e) => (
            <div key={e.id} className={styles["prodcastContDiv"]}>
              <img src={e.img} alt="song_image" className={styles["prodImg"]} />
              {/* <div> {e.name} </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export { Artists };
