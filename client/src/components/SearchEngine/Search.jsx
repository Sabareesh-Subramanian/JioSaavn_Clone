import axios from "axios";
import { useEffect, useState } from "react";
import Show from "./Show";
import styled from "styled-components";
export default function Search({ flag }) {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const preData =  [
    {
      "id": "HgyjuLNF",
      "type": "",
      "song": "Alone Alone (From 'Malli Modalaindi')",
      "album": "Alone Alone (From 'Malli Modalaindi')",
      "year": "2021",
      "music": "",
      "music_id": "",
      "primary_artists": "Sid Sriram, Anup Rubens",
      "primary_artists_id": "689580, 684364",
      "featured_artists": "",
      "featured_artists_id": "",
      "singers": "Sid Sriram, Anup Rubens",
      "starring": "Sumanth, Naina Ganguly",
      "image": "https://c.saavncdn.com/156/Alone-Alone-From-Malli-Modalaindi--Telugu-2021-20210920131019-500x500.jpg",
      "label": "Lahari Music",
      "albumid": "29782034",
      "language": "telugu",
      "origin": "none",
      "play_count": 48576,
      "copyright_text": "\u2117 2021 Lahari Recording Company",
      "320kbps": "true",
      "is_dolby_content": false,
      "explicit_content": 0,
      "has_lyrics": "false",
      "lyrics_snippet": "",
      "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy+wmHkYhLnirydrrQRFTGN1/Y5BfcqfOeE1vnFHLj55aPZ6ZSWTy79hw7tS9a8Gtq",
      "encrypted_media_path": "NMKyboFo/Fg+cyKmRS7XwUulP98YjXcFATezf4D09HKGDswiDeJNN+a1KL4jB2IB",
      "media_preview_url": "https://preview.saavncdn.com/156/415efd81e509abbf8182d806abe0ae25_96_p.mp4",
      "perma_url": "https://www.jiosaavn.com/song/alone-alone-from-malli-modalaindi/OA8SWwF8eXU",
      "album_url": "https://www.jiosaavn.com/album/alone-alone-from-malli-modalaindi/lLQ4oVnaTvM_",
      "duration": "243",
      "rights": {
        "code": 0,
        "reason": "",
        "cacheable": true,
        "delete_cached_object": false
      },
      "cache_state": "false",
      "starred": "false",
      "artistMap": {
        "Sid Sriram": "689580",
        "Anup Rubens": "684364",
        "Krishna Chaitanya": "455242",
        "Sumanth": "465174",
        "Naina Ganguly": "2529284"
      },
      "release_date": "2021-09-20",
      "triller_available": false,
      "label_url": "/label/lahari-music-albums/L899GJu3hlQ_",
      "media_url": "https://aac.saavncdn.com/156/415efd81e509abbf8182d806abe0ae25_320.mp4"
    },
    {
      "id": "veJXEDAz",
      "type": "",
      "song": "Alone",
      "album": "Alone",
      "year": "2020",
      "music": "Hiten",
      "music_id": "1012934",
      "primary_artists": "Raashi Sood",
      "primary_artists_id": "758310",
      "featured_artists": "",
      "featured_artists_id": "",
      "singers": "Raashi Sood",
      "starring": "",
      "image": "https://c.saavncdn.com/743/Alone-Punjabi-2020-20200507184621-500x500.jpg",
      "label": "Raashi Sood Music",
      "albumid": "20256407",
      "language": "punjabi",
      "origin": "none",
      "play_count": 99635,
      "copyright_text": "\u00a9 2020 Raashi Sood Music",
      "320kbps": "true",
      "is_dolby_content": false,
      "explicit_content": 0,
      "has_lyrics": "false",
      "lyrics_snippet": "",
      "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyOhrnqUS7lpoA1zmcTWqHXKWLoZj6nvBbFVsibSNp3QylKAyz26t8thw7tS9a8Gtq",
      "encrypted_media_path": "NMKyboFo/FgyVY0LDZmv94I9L8AZhm2ZRjL9Kj7tiq2hy+uRZnemKj8CQWfc84YZ",
      "media_preview_url": "https://preview.saavncdn.com/743/dc78d52426dff2c0bf8e755c4721c398_96_p.mp4",
      "perma_url": "https://www.jiosaavn.com/song/alone/Bg0haTF0dkk",
      "album_url": "https://www.jiosaavn.com/album/alone/,kQ0LrBIybc_",
      "duration": "120",
      "rights": {
        "code": 0,
        "reason": "",
        "cacheable": true,
        "delete_cached_object": false
      },
      "cache_state": "false",
      "starred": "false",
      "artistMap": { "Hiten": "1012934", "Raashi Sood": "758310" },
      "release_date": "2020-05-07",
      "vcode": "010910391147704",
      "vlink": "https://jiotunepreview.jio.com/content/Converted/010910391104133.mp3",
      "triller_available": false,
      "label_url": "/label/raashi-sood-music-albums/P4Ln5V7QgIA_",
      "media_url": "https://aac.saavncdn.com/743/dc78d52426dff2c0bf8e755c4721c398_320.mp4"
    },
    {
      "id": "bQBzr3Qs",
      "type": "",
      "song": "Alone",
      "album": "Alone",
      "year": "2019",
      "music": "Andy Grewal",
      "music_id": "4413418",
      "primary_artists": "Sikander Kahlon",
      "primary_artists_id": "890376",
      "featured_artists": "Queen Desi Ma",
      "featured_artists_id": "6774328",
      "singers": "Sikander Kahlon, Queen Desi Ma",
      "starring": "",
      "image": "https://c.saavncdn.com/628/Alone-Punjabi-2019-20190807095007-500x500.jpg",
      "label": "Sikander Kahlon",
      "albumid": "16852077",
      "language": "punjabi",
      "origin": "none",
      "play_count": 12433,
      "copyright_text": "\u2117 2019 Sikander Kahlon",
      "320kbps": "true",
      "is_dolby_content": false,
      "explicit_content": 1,
      "has_lyrics": "false",
      "lyrics_snippet": "",
      "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy66ko3RvUKzj2i9FVPpvMqwIM6JdYjR27wgDVDCppH5cdS8LKutmSnxw7tS9a8Gtq",
      "encrypted_media_path": "NMKyboFo/Fgku3ixe0I2awZ6nVl1+jwETCI7CtqpJZ5SU/rwFLO2sg7sRo4Ti3dE",
      "media_preview_url": "https://preview.saavncdn.com/628/1a101108160b7799701d117bdfb8eb05_96_p.mp4",
      "perma_url": "https://www.jiosaavn.com/song/alone/EjkpSwYDZkA",
      "album_url": "https://www.jiosaavn.com/album/alone/pDUxTMSYqeE_",
      "duration": "181",
      "rights": {
        "code": 0,
        "reason": "",
        "cacheable": true,
        "delete_cached_object": false
      },
      "cache_state": "false",
      "starred": "false",
      "artistMap": {
        "Andy Grewal": "4413418",
        "Sikander Kahlon": "890376",
        "Queen Desi Ma": "6774328"
      },
      "release_date": "2019-08-08",
      "triller_available": false,
      "label_url": "/label/sikander-kahlon-albums/ZwhNsrnmWjE_",
      "media_url": "https://aac.saavncdn.com/628/1a101108160b7799701d117bdfb8eb05_320.mp4"
    },
    {
      "id": "bHPcuEbE",
      "type": "",
      "song": "Alone",
      "album": "Punjabi Sad Hits 2021",
      "year": "2021",
      "music": "",
      "music_id": "",
      "primary_artists": "Masha Ali",
      "primary_artists_id": "495100",
      "featured_artists": "",
      "featured_artists_id": "",
      "singers": "Masha Ali",
      "starring": "",
      "image": "https://c.saavncdn.com/215/Punjabi-Sad-Hits-2021-Unknown-2021-20210807124230-500x500.jpg",
      "label": "Satrang Entertainers",
      "albumid": "27072057",
      "language": "punjabi",
      "origin": "none",
      "play_count": 18375,
      "copyright_text": "\u00a9 2021 Satrang Entertainers",
      "320kbps": "true",
      "is_dolby_content": false,
      "explicit_content": 0,
      "has_lyrics": "false",
      "lyrics_snippet": "",
      "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyj6ms3Edw25i4ufBkcsw7Ea6cUytxrrPn4zG8kmXXz/simXAswY+7Fxw7tS9a8Gtq",
      "encrypted_media_path": "NMKyboFo/FihJON94LtA2VXolCx0idfpHUtJsFheQRgvyPqSbZkbrHYJXLIIvstg",
      "media_preview_url": "https://preview.saavncdn.com/215/3ae7cde42b0920d8d5324c44edd550e8_96_p.mp4",
      "perma_url": "https://www.jiosaavn.com/song/alone/EiA7UgF1VXY",
      "album_url": "https://www.jiosaavn.com/album/punjabi-sad-hits-2021/Du9jxmQIP-I_",
      "duration": "178",
      "rights": {
        "code": 0,
        "reason": "",
        "cacheable": true,
        "delete_cached_object": false
      },
      "cache_state": "false",
      "starred": "false",
      "artistMap": { "Masha Ali": "495100" },
      "release_date": "2021-05-08",
      "vcode": "010912221171101",
      "vlink": "https://jiotunepreview.jio.com/content/Converted/010912221127578.mp3",
      "triller_available": false,
      "label_url": "/label/satrang-entertainers-albums/tWpgES9p770_",
      "media_url": "https://aac.saavncdn.com/215/3ae7cde42b0920d8d5324c44edd550e8_320.mp4"
    },
    {
      "id": "CW-lQN1D",
      "type": "",
      "song": "Alone",
      "album": "Alone",
      "year": "2020",
      "music": "M.Vee",
      "music_id": "3318360",
      "primary_artists": "Harvy Sandhu",
      "primary_artists_id": "733602",
      "featured_artists": "",
      "featured_artists_id": "",
      "singers": "Harvy Sandhu",
      "starring": "",
      "image": "https://c.saavncdn.com/093/Alone-Punjabi-2020-20200121150330-500x500.jpg",
      "label": "Hit Waves",
      "albumid": "18707471",
      "language": "punjabi",
      "origin": "none",
      "play_count": 24489,
      "copyright_text": "\u2117 2019 Hit Waves",
      "320kbps": "true",
      "is_dolby_content": false,
      "explicit_content": 0,
      "has_lyrics": "true",
      "lyrics_snippet": "Fir dekhan lag payi lagda hun kalli ho gayi ea",
      "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDymeA0KuyZxctHjY1RPKKCHtjE7LhXvvCJGGWsRXb/cPYw2seiY61SYhw7tS9a8Gtq",
      "encrypted_media_path": "NMKyboFo/FhVcyQiqUuo51LR1cH518EJi+6a7LxYcaARZWTEkbdtAofmXb8cUQ5b",
      "media_preview_url": "https://preview.saavncdn.com/093/ced76236eea90e219178c4e42123fc81_96_p.mp4",
      "perma_url": "https://www.jiosaavn.com/song/alone/Mz9GXSV,Bnc",
      "album_url": "https://www.jiosaavn.com/album/alone/E,PaiQvRIN8_",
      "duration": "225",
      "rights": {
        "code": 0,
        "reason": "",
        "cacheable": true,
        "delete_cached_object": false
      },
      "cache_state": "false",
      "starred": "false",
      "artistMap": { "M.Vee": "3318360", "Harvy Sandhu": "733602" },
      "release_date": "2020-01-17",
      "vcode": "010912261244684",
      "vlink": "https://jiotunepreview.jio.com/content/Converted/010912261201374.mp3",
      "triller_available": false,
      "label_url": "/label/hit-waves-albums/levAXCbJhTM_",
      "media_url": "https://aac.saavncdn.com/093/ced76236eea90e219178c4e42123fc81_320.mp4"
    },
  ]
  
  const searchData = (query) => {
    if (query.length > 2) {
      setLoading(true);
      axios
        .get(
          `https://apg-saavn-api.herokuapp.com/result/?q=${query}&lyrics=true
    `
        )
        .then((res) => {
          console.log(res.data);
          setData([...res.data]);
          setLoading(false);
        });
    }
  };
  useEffect(() => {
    searchData(query);
  }, [query]);
  
  
  return (
    <div className="search-drop">
      {" "}
      <div
        style={{
          width: "100%",
          height: "48px",
          marginTop: "-10px",
          borderBottom: "1px solid #E9E9E9",
          zIndex: "10",
        }}
      >
        <img
          style={{
            marginTop: "21px",
          }}
          src="/musicimages/searchicon.svg"
          alt="search"
        />
        <input
          // className="sea-inp"
          style={{
            width: "90%",
            height: "100%",

            borderWidth: "0px",

            outline: "none",

            background: "#FFFFFF",
            // borderRadius: "8px 8px 0px 0px",
          }}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        ></input>
      </div>
      <div className=" search-results ">
        {loading ? <Show data={preData} /> : <Show data={data} />}
      </div>
    </div>
  );
}
