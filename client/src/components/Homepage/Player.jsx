import { useEffect, useRef, useState } from "react";

import "../../stylemodules/Homepage.module.css";


export default function Player() {
  const audioEl = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, [isPlaying]);
  // let param = useParams();
  // console.log("url is", param);
  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get(
  //       `https://apg-saavn-api.herokuapp.com/result/?q=${param.id}&limit=15&lyrics=true`
  //     )
  //     .then((res) => {
  //       setLoading(false);
  //       console.log(res.data);
  //       let [data] = res.data;
  //       console.log("data", data);
  //       setMySong(data);
  //     });
  // }, []);
  //console.log(mySong);
  //let {  image, album } = mySong;

  return (
    <div>
      <img
        //src={image}
        style={{
          width: "282px",
          height: "282px",
          left: "263px",
          top: "160px",

          borderRadius: "2px",
        }}
        alt="cover"
      ></img>
      <h1>I am the song</h1>
      {/* <h3>{language}</h3> */}
      {/* <h6>{album}</h6> */}
      <audio
        src="http://h.saavncdn.com/987/cd902d048c13e5ce6ca84cc409746a5d.mp3"
        //type="audio/mp3"
        ref={audioEl}
       // controls
      ></audio>
      <div className="player-box">
        <div className="p-m-n-album"></div>
        <div
          style={{
            height: "30%",
            width: "25%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img
            className="music-navigators4"
            src="/musicimages/repeatlogo.svg"
          ></img>
          <img
            className="music-navigators1"
            src="/musicimages/backbutton.svg"
          ></img>
          <img
            onClick={() => {
              setIsPlaying(!isPlaying);
              //console.log(isPlaying);

              console.log("hello");
            }}
            className="music-navigators2"
            src="/musicimages/playbutton.svg"
          ></img>
          <img
            className="music-navigators3"
            src="/musicimages/forwardbutton.svg"
          ></img>
          <img src="/musicimages/sufleicon.svg"></img>
        </div>
        <div className="p-dot-stretch">
          <img className="tripledot" src="/musicimages/tripledot.svg"></img>
          <img className="volumeicon" src="/musicimages/volume.svg"></img>
          <img className="stretchicon" src="/musicimages/stretch.svg"></img>
        </div>
      </div>
    </div>
  );
}
