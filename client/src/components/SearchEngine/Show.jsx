// import { Link } from "react-router-dom";
import styled from "styled-components";
import SSHeading from "./SSHeading";
// import { useContext } from "react";
// import { SongContext } from "../../contexts/SongContext";
export default function Show({ data, loading, toggleShowSearch, ChangeSong }) {
  // console.log(data);
  // const { playingSong } = useContext(SongContext);
  // const { SetNewSong } = useContext(SongContext);

  const SongContainer = styled.div`
    height: 40px;
    width: 230px;
  `;
  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 25%);
    gap: 2%;
    width: 80%;
    margin: ${!loading ? "0%" : "2%"} auto;
    grid-row-gap: 15px;
  `;
  const CoverImg = styled.img`
    width: 41px;
    height: 37px;
    cursor: pointer;
    border-radius: 4px;
    float: left;
    margin-right: 10px;
    border-radius: 4px;
  `;
  const SongName = styled.div`
    height: 90%;
    width: 189px;
  `;

  return (
    <>
      {" "}
      {!loading ? <SSHeading /> : null}
      <Grid>
        {data.map((el) => (
          <SongContainer>
            {/* <Link to="/player"> */}
            <CoverImg
              onClick={() => {
                toggleShowSearch();
                ChangeSong(el);
              }}
              src={el.image}
            ></CoverImg>{" "}
            {/* </Link> */}
            <SongName>
              <span
                style={{
                  width: "189px",
                  fontFamily: "Lato",

                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "14px",
                  lineHeight: "17px",
                }}
              >
                {el.song}
              </span>
              <br />
              <span
                style={{
                  width: "189px",
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "14px",
                  textAlign: "left",
                  color: "#B9B9B9",
                }}
              >
                {el.year} {el.language} {!loading ? "Album" : null}
              </span>
            </SongName>
          </SongContainer>
        ))}
      </Grid>
    </>
  );
}
//   let k = false;
//   //console.log(data.length)
//   return k?{data.map((el)=> return {<h1>{el}</h1>)}}: (
//     <>
//       {data.map((e) => (
//         <div>
//           {/* <Link to={`/player/:id`}> */}
//           <div
//             style={{

//             }}
//           ></div>
//           {/* </Link> */}
//           <div
//             style={{
//               marginLeft: "-10px",
//             }}
//           >
//             <span
//               style={{
//                 fontFamily: "Lato",
//                 fontStyle: "normal",
//                 fontWeight: "bold",
//                 fontSize: "14px",
//                 lineHeight: "14px",
//                 width: "60%",
//                 color: "#2A2D36",
//                 textAlign: "left",
//               }}
//             >
//               {e.song}
//             </span>
//             <br />
//             <span
//               style={{
//                 fontFamily: "Lato",
//                 fontStyle: "normal",
//                 fontWeight: "500",
//                 fontSize: "14px",
//                 lineHeight: "14px",
//                 /* identical to box height, or 100% */
//                 textAlign: "left",
//                 color: "#B9B9B9",
//               }}
//             >
//               {e.year}. {e.language}.{e.album}{" "}
//             </span>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }
