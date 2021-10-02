import { Link } from "react-router-dom";

export default function Show({ data }) {
  return (
    <>
      {data.map((e) => (
        <div
          style={{
            height: "80px",
          }}
        >
          <Link to={`/player/:id`}>
            <div
              style={{
                width: "41px",
                height: "37px",
                background: `url(${e.image})`,
                borderRadius: "4px",
                float: "left",
                marginRight: "-30px",
              }}
            ></div>
          </Link>
          <div
            style={{
              marginLeft: "-10px",
            }}
          >
            <span
              style={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "14px",
                lineHeight: "14px",
                width: "60%",
                color: "#2A2D36",
                textAlign: "left",
              }}
            >
              {e.song}
            </span>
            <br />
            <span
              style={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "14px",
                /* identical to box height, or 100% */
                textAlign: "left",
                color: "#B9B9B9",
              }}
            >
              {e.year}. {e.language}.{e.album}{" "}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}
