import axios from "axios";
import { useEffect, useState } from "react";
import Show from "./Show";
import styled from "styled-components";
import styles from "../../stylemodules/Homepage.module.css";
const InputContainer = styled.div`
  width: 94%;
  height: 48px;
  display: flex;

  border-bottom: 1px solid #e9e9e9;
  zindex: 10;
  margin: auto;
`;
export default function Search({ toggleShowSearch, ChangeSong }) {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const preData = [
    {
      id: "veJXEDAz",
      type: "",
      song: "Alone",
      album: "Alone",
      year: "2020",
      music: "Hiten",
      music_id: "1012934",
      primary_artists: "Raashi Sood",
      primary_artists_id: "758310",
      featured_artists: "",
      featured_artists_id: "",
      singers: "Raashi Sood",
      starring: "",
      image:
        "https://c.saavncdn.com/743/Alone-Punjabi-2020-20200507184621-500x500.jpg",
      label: "Raashi Sood Music",
      albumid: "20256407",
      language: "punjabi",
      origin: "none",
      play_count: 99635,
      copyright_text: "\u00a9 2020 Raashi Sood Music",
      "320kbps": "true",
      is_dolby_content: false,
      explicit_content: 0,
      has_lyrics: "false",
      lyrics_snippet: "",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyOhrnqUS7lpoA1zmcTWqHXKWLoZj6nvBbFVsibSNp3QylKAyz26t8thw7tS9a8Gtq",
      encrypted_media_path:
        "NMKyboFo/FgyVY0LDZmv94I9L8AZhm2ZRjL9Kj7tiq2hy+uRZnemKj8CQWfc84YZ",
      media_preview_url:
        "https://preview.saavncdn.com/743/dc78d52426dff2c0bf8e755c4721c398_96_p.mp4",
      perma_url: "https://www.jiosaavn.com/song/alone/Bg0haTF0dkk",
      album_url: "https://www.jiosaavn.com/album/alone/,kQ0LrBIybc_",
      duration: "120",
      rights: {
        code: 0,
        reason: "",
        cacheable: true,
        delete_cached_object: false,
      },
      cache_state: "false",
      starred: "false",
      artistMap: { Hiten: "1012934", "Raashi Sood": "758310" },
      release_date: "2020-05-07",
      vcode: "010910391147704",
      vlink:
        "https://jiotunepreview.jio.com/content/Converted/010910391104133.mp3",
      triller_available: false,
      label_url: "/label/raashi-sood-music-albums/P4Ln5V7QgIA_",
      media_url:
        "https://aac.saavncdn.com/743/dc78d52426dff2c0bf8e755c4721c398_320.mp4",
    },
    {
      id: "bQBzr3Qs",
      type: "",
      song: "Alone",
      album: "Alone",
      year: "2019",
      music: "Andy Grewal",
      music_id: "4413418",
      primary_artists: "Sikander Kahlon",
      primary_artists_id: "890376",
      featured_artists: "Queen Desi Ma",
      featured_artists_id: "6774328",
      singers: "Sikander Kahlon, Queen Desi Ma",
      starring: "",
      image:
        "https://c.saavncdn.com/628/Alone-Punjabi-2019-20190807095007-500x500.jpg",
      label: "Sikander Kahlon",
      albumid: "16852077",
      language: "punjabi",
      origin: "none",
      play_count: 12433,
      copyright_text: "\u2117 2019 Sikander Kahlon",
      "320kbps": "true",
      is_dolby_content: false,
      explicit_content: 1,
      has_lyrics: "false",
      lyrics_snippet: "",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy66ko3RvUKzj2i9FVPpvMqwIM6JdYjR27wgDVDCppH5cdS8LKutmSnxw7tS9a8Gtq",
      encrypted_media_path:
        "NMKyboFo/Fgku3ixe0I2awZ6nVl1+jwETCI7CtqpJZ5SU/rwFLO2sg7sRo4Ti3dE",
      media_preview_url:
        "https://preview.saavncdn.com/628/1a101108160b7799701d117bdfb8eb05_96_p.mp4",
      perma_url: "https://www.jiosaavn.com/song/alone/EjkpSwYDZkA",
      album_url: "https://www.jiosaavn.com/album/alone/pDUxTMSYqeE_",
      duration: "181",
      rights: {
        code: 0,
        reason: "",
        cacheable: true,
        delete_cached_object: false,
      },
      cache_state: "false",
      starred: "false",
      artistMap: {
        "Andy Grewal": "4413418",
        "Sikander Kahlon": "890376",
        "Queen Desi Ma": "6774328",
      },
      release_date: "2019-08-08",
      triller_available: false,
      label_url: "/label/sikander-kahlon-albums/ZwhNsrnmWjE_",
      media_url:
        "https://aac.saavncdn.com/628/1a101108160b7799701d117bdfb8eb05_320.mp4",
    },
    {
      id: "bHPcuEbE",
      type: "",
      song: "Alone",
      album: "Punjabi Sad Hits 2021",
      year: "2021",
      music: "",
      music_id: "",
      primary_artists: "Masha Ali",
      primary_artists_id: "495100",
      featured_artists: "",
      featured_artists_id: "",
      singers: "Masha Ali",
      starring: "",
      image:
        "https://c.saavncdn.com/215/Punjabi-Sad-Hits-2021-Unknown-2021-20210807124230-500x500.jpg",
      label: "Satrang Entertainers",
      albumid: "27072057",
      language: "punjabi",
      origin: "none",
      play_count: 18375,
      copyright_text: "\u00a9 2021 Satrang Entertainers",
      "320kbps": "true",
      is_dolby_content: false,
      explicit_content: 0,
      has_lyrics: "false",
      lyrics_snippet: "",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyj6ms3Edw25i4ufBkcsw7Ea6cUytxrrPn4zG8kmXXz/simXAswY+7Fxw7tS9a8Gtq",
      encrypted_media_path:
        "NMKyboFo/FihJON94LtA2VXolCx0idfpHUtJsFheQRgvyPqSbZkbrHYJXLIIvstg",
      media_preview_url:
        "https://preview.saavncdn.com/215/3ae7cde42b0920d8d5324c44edd550e8_96_p.mp4",
      perma_url: "https://www.jiosaavn.com/song/alone/EiA7UgF1VXY",
      album_url:
        "https://www.jiosaavn.com/album/punjabi-sad-hits-2021/Du9jxmQIP-I_",
      duration: "178",
      rights: {
        code: 0,
        reason: "",
        cacheable: true,
        delete_cached_object: false,
      },
      cache_state: "false",
      starred: "false",
      artistMap: { "Masha Ali": "495100" },
      release_date: "2021-05-08",
      vcode: "010912221171101",
      vlink:
        "https://jiotunepreview.jio.com/content/Converted/010912221127578.mp3",
      triller_available: false,
      label_url: "/label/satrang-entertainers-albums/tWpgES9p770_",
      media_url:
        "https://aac.saavncdn.com/215/3ae7cde42b0920d8d5324c44edd550e8_320.mp4",
    },
    {
      id: "CW-lQN1D",
      type: "",
      song: "Alone",
      album: "Alone",
      year: "2020",
      music: "M.Vee",
      music_id: "3318360",
      primary_artists: "Harvy Sandhu",
      primary_artists_id: "733602",
      featured_artists: "",
      featured_artists_id: "",
      singers: "Harvy Sandhu",
      starring: "",
      image:
        "https://c.saavncdn.com/093/Alone-Punjabi-2020-20200121150330-500x500.jpg",
      label: "Hit Waves",
      albumid: "18707471",
      language: "punjabi",
      origin: "none",
      play_count: 24489,
      copyright_text: "\u2117 2019 Hit Waves",
      "320kbps": "true",
      is_dolby_content: false,
      explicit_content: 0,
      has_lyrics: "true",
      lyrics_snippet: "Fir dekhan lag payi lagda hun kalli ho gayi ea",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDymeA0KuyZxctHjY1RPKKCHtjE7LhXvvCJGGWsRXb/cPYw2seiY61SYhw7tS9a8Gtq",
      encrypted_media_path:
        "NMKyboFo/FhVcyQiqUuo51LR1cH518EJi+6a7LxYcaARZWTEkbdtAofmXb8cUQ5b",
      media_preview_url:
        "https://preview.saavncdn.com/093/ced76236eea90e219178c4e42123fc81_96_p.mp4",
      perma_url: "https://www.jiosaavn.com/song/alone/Mz9GXSV,Bnc",
      album_url: "https://www.jiosaavn.com/album/alone/E,PaiQvRIN8_",
      duration: "225",
      rights: {
        code: 0,
        reason: "",
        cacheable: true,
        delete_cached_object: false,
      },
      cache_state: "false",
      starred: "false",
      artistMap: { "M.Vee": "3318360", "Harvy Sandhu": "733602" },
      release_date: "2020-01-17",
      vcode: "010912261244684",
      vlink:
        "https://jiotunepreview.jio.com/content/Converted/010912261201374.mp3",
      triller_available: false,
      label_url: "/label/hit-waves-albums/levAXCbJhTM_",
      media_url:
        "https://aac.saavncdn.com/093/ced76236eea90e219178c4e42123fc81_320.mp4",
    },
    {
      id: "FlRqzD0j",
      type: "",
      song: "Fan Jassi Gill Da",
      album: "Fan Jassi Gill Da",
      year: "2017",
      music: "Romey Singh",
      music_id: "497758",
      primary_artists: "Vishal Gill",
      primary_artists_id: "1901446",
      featured_artists: "",
      featured_artists_id: "",
      singers: "Vishal Gill",
      starring: "Vishal Gill",
      image:
        "https://c.saavncdn.com/267/Fan-Jassi-Gill-Da-Punjabi-2017-500x500.jpg",
      label: "Jai Bala Music",
      albumid: "10334283",
      language: "punjabi",
      origin: "none",
      play_count: 68288,
      copyright_text: "\u00a9  2017 Jai Bala Music",
      "320kbps": "true",
      is_dolby_content: false,
      explicit_content: 0,
      has_lyrics: "false",
      lyrics_snippet: "",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy1dg+xNouaVfaZewhZ1OZ0+WUPu3Vd/L9ISMOHhUOABuUZ3SU6NcRmBw7tS9a8Gtq",
      encrypted_media_path:
        "NMKyboFo/FgG1EtCc/zmbHghO1wPqaRI9jelHsXb5JM+v4Kj0XrzJS1UXgdPDX3k",
      media_preview_url:
        "https://preview.saavncdn.com/267/a174347681670200a621cf895348ca2e_96_p.mp4",
      perma_url: "https://www.jiosaavn.com/song/fan-jassi-gill-da/NgQ5QA50B1k",
      album_url:
        "https://www.jiosaavn.com/album/fan-jassi-gill-da/,ZTXJG6SE6g_",
      duration: "210",
      rights: {
        code: 0,
        reason: "",
        cacheable: true,
        delete_cached_object: false,
      },
      cache_state: "false",
      starred: "false",
      artistMap: { "Romey Singh": "497758", "Vishal Gill": "1901446" },
      release_date: "2017-02-27",
      triller_available: false,
      label_url: "/label/jai-bala-music-albums/IFywV01UYY0_",
      media_url:
        "https://aac.saavncdn.com/267/a174347681670200a621cf895348ca2e_320.mp4",
      lyrics: null,
    },
    {
      id: "17e6Hf71",
      type: "",
      song: "No Competition",
      album: "No Competition",
      year: "2020",
      music: "Jass Manak",
      music_id: "4698047",
      primary_artists: "Jass Manak",
      primary_artists_id: "4698047",
      featured_artists: "DIVINE",
      featured_artists_id: "653605",
      singers: "Jass Manak, DIVINE",
      starring: "",
      image:
        "https://c.saavncdn.com/679/No-Competition-Punjabi-2020-20200820164406-500x500.jpg",
      label: "GK. Digital",
      albumid: "22019083",
      language: "punjabi",
      origin: "none",
      play_count: 11304698,
      copyright_text: "\u00a9 2020 Geet MP3",
      "320kbps": "true",
      is_dolby_content: false,
      explicit_content: 0,
      has_lyrics: "true",
      lyrics_snippet: "naa ajj koi hai naa kallh koi hai",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyzB2efp+mJRgFhDaGuud/YBAEwTGV/8md5ZCTdVkqUYzIbrAogZW33xw7tS9a8Gtq",
      encrypted_media_path:
        "NMKyboFo/FjfZXjstLpe/ekH5QVZV46o1ozY1I1DPvtB6b6NwTn7GU5obu++sBvB",
      media_preview_url:
        "https://preview.saavncdn.com/679/d4a5ad9eb35145c7695c2c9eafde2807_96_p.mp4",
      perma_url: "https://www.jiosaavn.com/song/no-competition/QV8OBzxWAAI",
      album_url: "https://www.jiosaavn.com/album/no-competition/r0u9W6nB9Z4_",
      duration: "205",
      rights: {
        code: 0,
        reason: "",
        cacheable: true,
        delete_cached_object: false,
      },
      cache_state: "false",
      starred: "false",
      artistMap: { "Jass Manak": "4698047", DIVINE: "653605" },
      release_date: "2020-08-19",
      vcode: "010910091172475",
      vlink:
        "https://jiotunepreview.jio.com/content/Converted/010910091128889.mp3",
      triller_available: false,
      label_url: "/label/gk.-digital-albums/aguA5abrFcA_",
      media_url:
        "https://aac.saavncdn.com/679/d4a5ad9eb35145c7695c2c9eafde2807_320.mp4",
      lyrics:
        "We back Jass Manak DIVINE<br><br><br>oh meri jaaa naa ho pareshs<br>juthe bolane da koi reason nahi<br>naa ajj koi hai naa kallh koi hai<br>tere yaar da taan koi competition nahi<br><br>oh meri jaaa naa ho pareshs<br>juthe bolane da koi reason nahi<br>naa ajj koi hai naa kallh koi hai<br>tere yaar da taan koi competition nahi<br>Competition nahi<br><br>Son there ain t no competition<br><br>Competition nahi<br>Son there ain t no competition<br><br>ha kudia kahindia Romeo ji<br>Romeo de kol gaddi kaafe rang di<br>Romeo de tub ch banduk hundi ae<br>tanhi lali-chali nahiyon muhre khanghadi<br><br>ho kudia kahindia Romeo ji<br>Romeo de kol gaddi kaafe rang di<br><br>tanhi lali-chali nahiyon muhre khangh<br><br><br>mera ara-garaa kisey naa relation nahi<br><br>naa ajj koi hai naa kallh koi hai<br>tere yaar da taan koi competition nahi<br>naa ajj koi hai naa kallh koi hai Aye<br>tere yaar da taan koi competition nahi Jass Manak<br>Competition nahi<br><br><br>I came from the bottom and we winnin<br><br>We came from the bottom and we winnin<br><br><br>Uh koyi nahin muqaabala naa<br>From the bottom niklaa topper<br>daalaa paisa to munaafaa maan pe gaalee seedha laafaa<br><br>Uh rep the naakaa sunate bangla muje dhaka mein<br>Five star ke kapade pahan ke khaataa main hoon  dhabe pe<br>Streams ho ya dreams uh pooraa kaamayaab main<br>Kohli waalaa mindset aur Dhoni jesaa sharp main<br>har PUB mein G aur game hai mere haath mein<br>hansataa seedha bank tak Fifty waale laugh mein<br><br>Hahahaha bhaaee too hai weak aur main letaa haftaa<br>Uh khud ke tere haath nahin tune rakhaa chamachaa<br>pooraa gang hai grimy huh<br>Topper top top seedha sho-sho-shot-shots tere brain mein<br><br>Bombay da bad munda punjab tak ghent main<br>naam hai DIVINE par banda nahin hoon  saint main<br>Rikshaw se nikalaa ab Rover mere range mein<br>Back bench waale ladke aaye frontpage pe<br><br>too sadak hai maharani ke bhes mein<br>main Sanju Baba walk karthaa haath rakh ke jeb mein<br>dekh le dekh le uh khalanaayak main aur gusse waalaa<br>Fracture tera gang aur main ambulance mein pahunchne waalaa<br><br>Romeo nu kisey di naa care goriye<br>Romeo nu lau kihda gher goriye<br>kudia khan nu firdia ne<br>Romeo aa tisi aafa ber goriye<br><br>Romeo nu kisey di naa care goriye<br>Romeo nu lau kihda gher goriye<br>kudia khan nu firdia ne<br>Romeo aa tisi aafa ber goriye<br><br>sanu rokne layi tokane layi<br>duniya te bani koi situation nahi<br><br>naa ajj koi hai naa kallh koi hai<br>tere yaar da taan koi competition nahi<br>naa ajj koi hai naa kallh koi hai<br>tere yaar da taan koi competition nahi<br>Competition nahi competition nahi",
    },
    {
      id: "DoZ1MpaH",
      type: "",
      song: "Tera Mera Viah",
      album: "Tera Mera Viah",
      year: "2019",
      music: "MixSingh",
      music_id: "683612",
      primary_artists: "Jass Manak",
      primary_artists_id: "4698047",
      featured_artists: "",
      featured_artists_id: "",
      singers: "Jass Manak",
      starring: "",
      image:
        "https://c.saavncdn.com/153/Tera-Mera-Viah-Punjabi-2019-20191128194608-500x500.jpg",
      label: "GK. Digital",
      albumid: "18112183",
      language: "punjabi",
      origin: "none",
      play_count: 24902902,
      copyright_text: "\u00a9 2019 Geet MP3",
      "320kbps": "true",
      is_dolby_content: false,
      explicit_content: 0,
      has_lyrics: "false",
      lyrics_snippet: "",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDycjTxtYzKZ86o+1urF1UjcSV57gZ5nxPLRrHI+q1I7NjnDGrP5C2LQRw7tS9a8Gtq",
      encrypted_media_path:
        "NMKyboFo/FjQhIbO8L4wXmfLbGVAZnnZfEd57ZRWTglqpXyqsohYt81CYXnZ9Mjh",
      media_preview_url:
        "https://preview.saavncdn.com/153/6f6c8c169609f2cd6d5d3d77b3a8ee30_96_p.mp4",
      perma_url: "https://www.jiosaavn.com/song/tera-mera-viah/NAcxADlAVns",
      album_url: "https://www.jiosaavn.com/album/tera-mera-viah/1XWZij3a17w_",
      duration: "197",
      rights: {
        code: 0,
        reason: "",
        cacheable: true,
        delete_cached_object: false,
      },
      cache_state: "false",
      starred: "false",
      artistMap: { MixSingh: "683612", "Jass Manak": "4698047" },
      release_date: "2019-11-24",
      vcode: "010910091052452",
      vlink:
        "https://jiotunepreview.jio.com/content/Converted/010910091009001.mp3",
      triller_available: false,
      label_url: "/label/gk.-digital-albums/aguA5abrFcA_",
      media_url:
        "https://aac.saavncdn.com/153/6f6c8c169609f2cd6d5d3d77b3a8ee30_320.mp4",
      lyrics: null,
    },

    {
      id: "lkQzSw2z",
      type: "",
      song: "Bad Munda",
      album: "Bad Munda",
      year: "2021",
      music: "",
      music_id: "",
      primary_artists: "Jass Manak",
      primary_artists_id: "4698047",
      featured_artists: "Emiway Bantai",
      featured_artists_id: "2985822",
      singers: "Jass Manak",
      starring: "",
      image:
        "https://c.saavncdn.com/060/Bad-Munda-English-2021-20210819201456-500x500.jpg",
      label: "jass manak",
      albumid: "29147062",
      language: "punjabi",
      origin: "none",
      play_count: 196827,
      copyright_text: "\u00a9 2021 Jass Manak",
      "320kbps": "true",
      is_dolby_content: false,
      explicit_content: 0,
      has_lyrics: "false",
      lyrics_snippet: "",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyJwmh4Q1AiAibFCTYWB9wps2SBnjrNqvzHTQOYRaQWtf80DrVT5TSTRw7tS9a8Gtq",
      encrypted_media_path:
        "NMKyboFo/Fg3lVs5X7hQJsmE73Ec/ZpHBVUWCPeNV+1ivuKSK/HYKFFyIR+fOIT+",
      media_preview_url:
        "https://preview.saavncdn.com/060/5fcfd3ce18735888a6cc043a4883c615_96_p.mp4",
      perma_url: "https://www.jiosaavn.com/song/bad-munda/HAM6SydHBUk",
      album_url: "https://www.jiosaavn.com/album/bad-munda/uR3zsQoM4a4_",
      duration: "177",
      rights: {
        code: 0,
        reason: "",
        cacheable: true,
        delete_cached_object: false,
      },
      cache_state: "false",
      starred: "false",
      artistMap: { "Jass Manak": "4698047", "Emiway Bantai": "2985822" },
      release_date: "2021-08-17",
      triller_available: false,
      label_url: "/label/jass-manak-albums/FpiFqDTy54k_",
      media_url:
        "https://aac.saavncdn.com/060/5fcfd3ce18735888a6cc043a4883c615_320.mp4",
      lyrics: null,
    },
    {
      id: "tTW59_FN",
      type: "",
      song: "Jai Govinda Jaigopala",
      album: "Dolotsavam Part 1",
      year: "1997",
      music: "",
      music_id: "",
      primary_artists: "Swami Haridhos Giri Guruji",
      primary_artists_id: "586075",
      featured_artists: "",
      featured_artists_id: "",
      singers: "Swami Haridhos Giri Guruji",
      starring: "",
      image:
        "https://c.saavncdn.com/785/Dolotsavam-Part-1-Carnatic-1997-500x500.jpg",
      label: "Sangeetha",
      albumid: "1097052",
      language: "carnatic",
      origin: "none",
      play_count: 91287,
      copyright_text: "\u00a9  1997 Sangeetha",
      "320kbps": "true",
      is_dolby_content: false,
      explicit_content: 0,
      has_lyrics: "false",
      lyrics_snippet: "",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy7z3SjNJvb3SrCWQfjjLRF6SmCFo3pv7DiQZJzBWwdsvTxr3aa2Sn/Rw7tS9a8Gtq",
      encrypted_media_path: "NMKyboFo/Fj7qYfvfzOadiEKBvqGDpFk4QOi7Klt8Po=",
      media_preview_url:
        "https://preview.saavncdn.com/785/c050e931c625008a2d2b64d4f09fda2c_96_p.mp4",
      perma_url:
        "https://www.jiosaavn.com/song/jai-govinda-jaigopala/BDw8BE1vcX0",
      album_url:
        "https://www.jiosaavn.com/album/dolotsavam-part-1/AZ0IrvkyceQ_",
      duration: "221",
      rights: {
        code: 0,
        reason: "",
        cacheable: true,
        delete_cached_object: false,
      },
      cache_state: "false",
      starred: "false",
      artistMap: { "Swami Haridhos Giri Guruji": "586075" },
      release_date: "1997-01-01",
      vcode: "010910400265389",
      vlink:
        "https://jiotunepreview.jio.com/content/Converted/010910400278020.mp3",
      triller_available: false,
      label_url: "/label/sangeetha-albums/WC0GBETe0bQ_",
      media_url:
        "https://aac.saavncdn.com/785/c050e931c625008a2d2b64d4f09fda2c_320.mp4",
      lyrics: null,
    },
    {
      id: "v79UN0yk",
      type: "",
      song: "Parmish Verma",
      album: "Dil Da Showroom - Parmish Verma",
      year: "2021",
      music: "M.Vee, Sukhpal Sukh",
      music_id: "3318360, 469231",
      primary_artists: "Parmish Verma",
      primary_artists_id: "739894",
      featured_artists: "",
      featured_artists_id: "",
      singers: "Parmish Verma",
      starring: "",
      image:
        "https://c.saavncdn.com/177/Dil-Da-Showroom-Parmish-Verma-Punjabi-2021-20210922173606-500x500.jpg",
      label: "Saregama",
      albumid: "28577911",
      language: "punjabi",
      origin: "none",
      play_count: 45815,
      copyright_text: "\u00a9 2021 Saregama",
      "320kbps": "true",
      is_dolby_content: false,
      explicit_content: 0,
      has_lyrics: "false",
      lyrics_snippet: "",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDymiMVDc+p8GwWNFz+IaJEsKdXLr/hXB7O3rNwBxDqk0LIaRvPc978URw7tS9a8Gtq",
      encrypted_media_path:
        "NMKyboFo/FjOTlJBxt0Pp+UoiZ1NsngeYFHiwfqcaqcTfDYU+ZlW6TXmnnJgviOv",
      media_preview_url:
        "https://preview.saavncdn.com/177/67a9cb2849981b489efce4df1a600cb8_96_p.mp4",
      perma_url: "https://www.jiosaavn.com/song/parmish-verma/Bl9SZDoATlg",
      album_url:
        "https://www.jiosaavn.com/album/dil-da-showroom---parmish-verma/cqvpvFXT9mo_",
      duration: "189",
      rights: {
        code: 0,
        reason: "",
        cacheable: true,
        delete_cached_object: false,
      },
      cache_state: "false",
      starred: "false",
      artistMap: {
        "M.Vee": "3318360",
        "Sukhpal Sukh": "469231",
        "Parmish Verma": "739894",
        "Reshi Khattanwala": "11068644",
      },
      release_date: "2021-07-06",
      vcode: "010910081333380",
      vlink:
        "https://jiotunepreview.jio.com/content/Converted/010910081289326.mp3",
      triller_available: false,
      label_url: "/label/saregama-albums/MNccah3udrQ_",
      media_url:
        "https://aac.saavncdn.com/177/67a9cb2849981b489efce4df1a600cb8_320.mp4",
      lyrics: null,
    },
    {
      id: "Bn1KtcYd",
      type: "",
      song: "Parmeshwara",
      album: "Love Aaj Kal",
      year: "2020",
      music: "Pritam",
      music_id: "456323",
      primary_artists: "Pritam, Raftaar",
      primary_artists_id: "456323, 458918",
      featured_artists: "",
      featured_artists_id: "",
      singers: "Pritam, Raftaar",
      starring: "Sara Ali Khan, Kartik Aaryan",
      image:
        "https://c.saavncdn.com/862/Love-Aaj-Kal-Hindi-2020-20200214140423-500x500.jpg",
      label: "Sony Music Entertainment India Pvt. Ltd.",
      albumid: "19072107",
      language: "hindi",
      origin: "none",
      play_count: 1434931,
      copyright_text: "(P) 2020 Sony Music Entertainment India Pvt. Ltd.",
      "320kbps": "true",
      is_dolby_content: false,
      explicit_content: 0,
      has_lyrics: "true",
      lyrics_snippet: "parameshra o parameshra parameshra",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyOKco1eqZGiHvIvVx6Pc8LOzzT6kMoXGkCcJpO6AAdJFa1J6VdhpLahw7tS9a8Gtq",
      encrypted_media_path:
        "NMKyboFo/FhPk/EtjLooYbej+yBBNA6jsHMFFwL0c/KiAhhWBOiys7A0nr/ST+li",
      media_preview_url:
        "https://preview.saavncdn.com/862/8672dc858ecd08edcc829d511d0cce75_96_p.mp4",
      perma_url: "https://www.jiosaavn.com/song/parmeshwara/MgZaegBTblc",
      album_url: "https://www.jiosaavn.com/album/love-aaj-kal/08dQgBZGh20_",
      duration: "187",
      rights: {
        code: 1,
        reason: "Pro Only",
        cacheable: true,
        delete_cached_object: false,
      },
      disabled: "true",
      disabled_text: "Pro Only",
      cache_state: "false",
      starred: "false",
      artistMap: {
        Pritam: "456323",
        Raftaar: "458918",
        "Irshad Kamil": "456259",
        "Sara Ali Khan": "5607405",
        "Kartik Aaryan": "3392054",
      },
      release_date: "2020-02-14",
      vcode: "010910141126971",
      vlink:
        "https://jiotunepreview.jio.com/content/Converted/010910141083500.mp3",
      triller_available: false,
      label_url:
        "/label/sony-music-entertainment-india-pvt.-ltd.-albums/LaFAA6h1q2U_",
      media_url:
        "https://aac.saavncdn.com/862/8672dc858ecd08edcc829d511d0cce75_320.mp4",
      lyrics:
        "are yo dekho ye he teri love story<br>sunale too vistaar mein<br>ek din wo tere te dikhi<br>aur too bhee use dikhaa<br>jhat-pat pad gae pyaar mein<br><br>Pehili baar me ghay nazar-nazar ke vaar me<br>Love aayaa air mein dil ye chauthe gear mein<br>kabhi tum naa bichhadoge ye qasam-vasam loge<br>phir tension laaegi paas mein<br><br>vaah-vaah do badan single jaan<br>wo jahaan tu vahaan peeche tu saaye sa<br>chaare si upar wo neeche tu gaay sa<br>ghar magar ladega tu bhidega tu<br>Commit jo hai karega too<br>yaheen fasega tu ab ab ab fasega tu<br><br>rasmen banaate hum khudako fasaate hum<br>parameshra o parameshra<br>Social darinde hain kehne ko hai bande hain<br>parameshra o parameshra parameshra<br><br>gilton mein sharmon mein ulje hain dharmon mein<br>parameshra o parameshra<br>too to purshottam hai duniyaa hee condom hai<br>parameshra o parameshra parameshra<br><br>jhuthe-jhuthe saare show-off hoke maare<br>Hypocritic \u092c\u093e\u0924\u0947\u0902 \u092a\u093f\u091b\u0935\u093e\u095c\u0947 \u092a\u0947 \u0932\u093e\u0924\u0947\u0902<br>maarun main tumhaare joote jhuthe saare<br>hota jo main khota jahaan chaahe sota<br>belon ko naa bole koyi paaji-luccha<br>nanga-punga bhee vo changa<br><br>tere-mere pe hee lage rahe taale<br>toone maine hai daale hai kapade hain saale<br>jag le pagale uth le bhaga le<br>mar ke lad ke chotii chadh ke<br>jiske chaahe peechhe lagaa le<br>agali thag le phir roke phir row mein kyun fasaa<br>saale romantic confusion mein kyun fasaa<br>Inorganic equation mein kyun fasaa<br><br>tedi-medhi rasmon se<br>baandhe ye qasamon se band ye<br>to koyi to tuutegaa bhedon se chhutegaa<br>bamb sa phutegaa socially fasaaiye<br>nahin main jo vaheen muje banaaiye<br>ye mujse dhokhaa hai<br>My Lord ye mujse dhokhaa hai<br><br>rasmen banaate hum khudako fasaate hum<br>parameshra o parameshra<br>Social darinde hain kehne ko hai bande hain<br>parameshra o parameshra parameshra<br><br>gilton mein sharmon mein ulje hain dharmon mein<br>parameshra o parameshra<br>too to purshottam hai duniyaa hee condom hai<br>parameshra o parameshra parameshra",
    },
    {
      id: "lp8p4E0T",
      type: "",
      song: "Chimbh Bhijalele",
      album: "Bandh Premache",
      year: "2009",
      music: "Ajay-Atul",
      music_id: "459381",
      primary_artists: "Shankar Mahadevan, Priti Kamath",
      primary_artists_id: "455275, 463191",
      featured_artists: "",
      featured_artists_id: "",
      singers: "Shankar Mahadevan, Priti Kamath",
      starring:
        "Suhas Joshi, Nisha Parulekar, Niranjan Naamjoshi, Aishwarya Narkar",
      image: "https://c.saavncdn.com/349/Bandh-Premache-2009-500x500.jpg",
      label: "Video Palace",
      albumid: "1021349",
      language: "marathi",
      origin: "none",
      play_count: 1999706,
      copyright_text: "\u00a9 2019 Video Palace",
      "320kbps": "true",
      is_dolby_content: false,
      explicit_content: 0,
      has_lyrics: "true",
      lyrics_snippet: "chimb bhijlele, rup sajalele",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyjqb+NDlPHEAtVl95Bq8mrsacZjmSuALMlV3pZXMq0rLuLB9gn0qEQxw7tS9a8Gtq",
      encrypted_media_path:
        "NMKyboFo/FhlAlcfXCd0NJi1VFYITcpuOXyXelIjdx3A4i3L8NffMXCGMOFMGc/Z",
      media_preview_url:
        "https://preview.saavncdn.com/349/27280c1af0985679f778a283b27ffd20_96_p.mp4",
      perma_url: "https://www.jiosaavn.com/song/chimbh-bhijalele/HBhTQUB1B2c",
      album_url: "https://www.jiosaavn.com/album/bandh-premache/6ODH0zerjwE_",
      duration: "321",
      rights: {
        code: 0,
        reason: "",
        cacheable: true,
        delete_cached_object: false,
      },
      cache_state: "false",
      starred: "false",
      artistMap: {
        "Ajay-Atul": "459381",
        "Shankar Mahadevan": "455275",
        "Priti Kamath": "463191",
        "Pravin Davane": "459138",
        "Suhas Joshi": "456698",
        "Nisha Parulekar": "456400",
        "Niranjan Naamjoshi": "463189",
        "Aishwarya Narkar": "463190",
      },
      release_date: "2009-01-01",
      triller_available: false,
      label_url: "/label/video-palace-albums/77i7viC8t1I_",
      media_url:
        "https://aac.saavncdn.com/349/27280c1af0985679f778a283b27ffd20_320.mp4",
      lyrics:
        "yaa rimjhim jhilmil paoosdhara tanman phulavun jaati<br>yaa rimjhim jhilmil paoosdhara tanman phulavun jaati<br>sahavaas tujhaa madhumaas phulancha gandh sukhcha haati<br><br>ha dhund gaar vaara, ha kowala shahaara<br>ujalun rang aale, svachhand pritiche<br><br>chimb bhijlele, rup sajalele<br>barsooni aale rang pritiche<br>chimb bhijlele, rup sajalele<br>barsooni aale rang pritiche<br><br>odh jaage rajasa re antari sukh bole<br>saptarangi paakhru he indradhanu bagh aale<br>laat hi vaadali mohuni gaate<br>hi mithi laadki bhovara hote<br><br>padasaad bhaavnaanche, re bandha naa kunache<br>daahi dishanth gane bedhund pritiche<br><br>chimb bhijlele, rup sajalele<br>barsooni aale rang pritiche<br>chimb bhijlele, rup sajalele<br>barsooni aale rang pritiche<br><br>he phool aale, pankh aale, rup he sukhache<br>romaromi jaagale deep bagh swapnache<br>barasato mogra themb gandhae<br>bharajri vade he taal chhandaanche<br><br>ghan vyakul rimjhimanara man-antar darvalnara<br>hi swargsukhachi daare, he geet pritiche<br><br>chimb bhijlele, rup sajalele<br>barsooni aale rang pritiche<br>chimb bhijlele, rup sajalele<br>barsooni aale rang pritiche",
    },

    {
      id: "V2qXB3vm",
      type: "",
      song: "Olya Sanj Veli",
      album: "Premachi Goshta",
      year: "2013",
      music: "Avinash-Vishwajeet",
      music_id: "470401",
      primary_artists: "Bela Shende",
      primary_artists_id: "455939",
      featured_artists: "",
      featured_artists_id: "",
      singers: "Bela Shende",
      starring: "",
      image:
        "https://c.saavncdn.com/472/Premachi-Goshta-Marathi-2013-20180629-500x500.jpg",
      label: "Everest Entertainment Pvt. Ltd.",
      albumid: "13282431",
      language: "marathi",
      origin: "none",
      play_count: 298178,
      copyright_text: "Everest Entertainment Pvt. Ltd.",
      "320kbps": "true",
      is_dolby_content: false,
      explicit_content: 0,
      has_lyrics: "true",
      lyrics_snippet: "olya sanjawhili unhe sawalis bilgavi",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyvYnSdKEZ7Iuc3OBIX+sWuLcSHJgKqXasy81ase373wZcaqgDKY1NJhw7tS9a8Gtq",
      encrypted_media_path:
        "NMKyboFo/FjaQ9h09CUYcQ2Hs4dK33wrq8C75j7ukeec6WvzUqBD5f6/jbPCBS8c",
      media_preview_url:
        "https://preview.saavncdn.com/472/7301c3b52aea7e4a6d67a4eac5ef4310_96_p.mp4",
      perma_url: "https://www.jiosaavn.com/song/olya-sanj-veli/JloaaTYDQV4",
      album_url: "https://www.jiosaavn.com/album/premachi-goshta/Cd6PSohB6Pk_",
      duration: "319",
      rights: {
        code: 0,
        reason: "",
        cacheable: true,
        delete_cached_object: false,
      },
      cache_state: "false",
      starred: "false",
      artistMap: {
        "Avinash-Vishwajeet": "470401",
        "Bela Shende": "455939",
        "Vishwajeet Joshi": "470402",
      },
      release_date: "2013-02-01",
      vcode: "010911261071950",
      vlink:
        "https://jiotunepreview.jio.com/content/Converted/010911261028240.mp3",
      triller_available: false,
      label_url: "/label/everest-entertainment-pvt.-ltd.-albums/b8GvVw-4n6Q_",
      media_url:
        "https://aac.saavncdn.com/472/7301c3b52aea7e4a6d67a4eac5ef4310_320.mp4",
      lyrics:
        "olya sanjawhili unhe sawalis bilgavi<br>tashi tu jawali ye jaraa<br>kokeya kaagadachi kavita an jashi vavi<br>tashi tu halake bol naa<br><br>abhal khaali jhuke pavalankhaalee dhuke<br>sukh he nave salgi kare kaa sang naa<br><br>olya sanjawhili unhe sawalis bilgavi<br>tashi tu jawali ye jaraa<br>kokeya kaagadachi kavita an jashi vavi<br>tashi tu halake bol naa<br><br>saare june duve jayeeti jase deeve<br>panyavari jaraa sodun deuya<br><br>majhi hi arjave pasrun kaajave<br>jate yaa navya vatevary tujhya<br><br>rastaa nava shodhu jaraa haataat haat de<br>pusuya junya paul khunaa<br>so tujhi saath de<br><br>olya sanjawhili unhe sawalis bilgavi<br>tashi tu jawali ye jaraa<br>kokeya kaagadachi kavita an jashi vavi<br>tashi tu halake bol naa<br><br>valanavari tujhya paoos me ubhaa<br>onjal tujhi punha vahun jaau de<br><br>dolala sari visarun ye ghari<br>oikh aata khari houn jaau de<br><br>sambhal tu maajhe mala mazya navya phula<br>me sawali houn tujhi dein saath hi tula<br><br>olya sanjawhili unhe sawalis bilgavi<br>tashi tu jawali ye jaraa<br>kokeya kaagadachi kavita an jashi vavi<br>tashi tu halake bol naa",
    },
  ];

  const SLogo = styled.img`
    height: 18px;
    width: 18px;

    margin-top: 1%;
    border-radius: 0px;
    margin-left: 20px;
  `;

  const searchData = (text) => {
    if (text.length > 2) {
      axios
        .get(
          `https://apg-saavn-api.herokuapp.com/result/?q=${text}&limit=15&lyrics=true
    `
        )
        .then((res) => {
          console.log(res.data);
          setData(res.data);
          setLoading(true);
        });
    }
  };
  useEffect(() => {
    searchData(query);
  }, [query]);
  const set = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <InputContainer>
        <SLogo src="/musicimages/searchicon.svg" alt="search" />

        <input
          value={query}
          type="text"
          className={styles["search-input-box"]}
          onChange={(e) => {
            set(e);
          }}
        />
        <img
          style={{
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14px",
            lineWeight: "17px",
            height: "14px",
            width: "40px",
            marginTop: "15px",
          }}
          src="/musicimages/Clear.svg"
          alt="clear"
        />
        <img
          src="/musicimages/cross.svg"
          alt=""
          onClick={toggleShowSearch}
          style={{
            background: "#2BC5B4",
            height: "16px",
            width: "16px",
            borderRadius: "8px",
            marginTop: "1%",
            color: "white",
            border: "none",
            marginLeft: "8px",
            padding: "0px",
          }}
        ></img>
      </InputContainer>
      <div className="search-results">
        {!loading ? (
          <Show
            toggleShowSearch={toggleShowSearch}
            ChangeSong={ChangeSong}
            data={preData}
            loading={loading}
          />
        ) : (
          <Show
            toggleShowSearch={toggleShowSearch}
            ChangeSong={ChangeSong}
            data={data}
            loading={loading}
          />
        )}
      </div>
    </>
  );
}
