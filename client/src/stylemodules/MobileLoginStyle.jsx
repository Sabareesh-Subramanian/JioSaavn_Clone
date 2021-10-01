import styled from "styled-components";

export const MobLog = styled.div`
  display: flex;
  & > div:nth-child(1) {
    background-color: #ba6053;
    width: 45.625em;
    min-height: 56.25em;
  }
  & > div:nth-child(1) > div:nth-child(1) {
    width: 13.45em;
    margin-top: 2em;
    margin-left: 1.5em;
    margin-bottom: 0;
  }
  & > div:nth-child(1) > div:nth-child(1) > img {
    width: 100%;
  }
  & > div:nth-child(1) > div:nth-child(2) {
    width: 31em;
    margin: 4.79625em auto;
    margin-bottom: 0;
  }
  & > div:nth-child(1) > div:nth-child(2) > img {
    width: 100%;
  }
  & > div:nth-child(1) > div:nth-child(3) {
    width: 17.25em;
    margin: auto;
    margin-top: 40px;
    text-align: center;
  }
  & > div:nth-child(1) > div:nth-child(3) > p:nth-child(1) {
    margin-top: 0;
    margin-bottom: 0;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 2.5em;
    color: #ffffff;
  }
  & > div:nth-child(1) > div:nth-child(4) {
    width: 17.25em;
    margin: auto;
    margin-top: 12px;
    text-align: center;
  }
  & > div:nth-child(1) > div:nth-child(4) > p:nth-child(1) {
    margin-top: 0;
    margin-bottom: 0;
    font-family: lato;
    font-style: italic;
    font-weight: bold;
    font-size: 1.75em;
    color: #f4b199;
  }

  & > div:nth-child(2) {
    width: 710px;
    min-height: 900px;
    background-color: #e5e5e5;
  }
  & > div:nth-child(2) > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    margin-left: 20em;
    margin-top: 1.5em;
    margin-right: 7.875em;
    align-items: center;
    justify-content: space-around;
    width: 23em;
  }
  & > div:nth-child(2) > div:nth-child(1) > p:nth-child(1) {
    width: 16em;
    height: 1.1875em;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    line-height: 1.1875em;
    color: #727272;
  }
  & > div:nth-child(2) > div:nth-child(1) > button:nth-child(2) {
    width: 88px;
    height: 37px;
    border: 1px solid #8d8f93;
    box-sizing: border-box;
    border-radius: 20px;
  }
  & div:nth-child(2) > div:nth-child(1) > button > :nth-child(1) {
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #2a2d36;
  }
  & > div:nth-child(2) > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    margin-top: 2.6875em;
    margin-left: 7.625em;
    margin-right: 6.4375em;
  }
  & > div:nth-child(2) > div:nth-child(2) > p:nth-child(1) {
    text-align: center;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 3em;
    letter-spacing: 0.01em;
    color: #3e3e3e;
  }
  & > div:nth-child(2) > div:nth-child(2) > p:nth-child(2) {
    text-align: center;
    font-family: Lato;
    font-style: normal;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: bold;
    font-size: 1.125em;
    letter-spacing: 0.01em;
    color: #727272;
    height: 22px;
  }
  & > div:nth-child(2) > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    width: 27em;
    align-items: center;
    justify-content: center;
    margin: 2.5em auto;
  }
  & > div:nth-child(2) > div:nth-child(3) > input {
    width: 100%;
    height: 54px;
    margin-bottom: 1.5em;
    border-radius: 69px;
    outline: none;
    border: none;
    padding-left: 40px;
  }
  & > div:nth-child(2) > div:nth-child(3) > button {
    width: 100%;
    height: 52px;
    border-radius: 69px;
    border: none;
    background-color: #2bc5b4;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: white;
    margin-bottom: 0;
  }
  & > div:nth-child(2) > div:nth-child(3) > button:hover {
    cursor: pointer;
  }
  & > div:nth-child(2) > div:nth-child(3) > input::placeholder {
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #b2b2b2;
  }
  & > div:nth-child(2) > div:nth-child(3) > input[type="text"] {
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
  }
  & > div:nth-child(2) > div:nth-child(3) > input[type="password"] {
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
  }
  & > div:nth-child(2) > div:nth-child(4) {
    width: 25em;
    margin: 24px auto;
  }
  & > div:nth-child(2) > div:nth-child(4) > p {
    font-family: Lato;
    font-style: italic;
    font-weight: 500;
    font-size: 14px;
    color: #b2b2b2;
    margin-top: 0;
    letter-spacing: 0.01em;
    margin-bottom: 0;
  }
  & span {
    color: black;
  }
  & > div:nth-child(2) > div:nth-child(5) {
    width: 8em;
    margin: 24px auto;
  }
  & > div:nth-child(2) > div:nth-child(5) > p {
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #ababab;
    margin-top: 0;
    margin-bottom: 0;
  }
  & > div:nth-child(2) > div:nth-child(6) {
    width: 440px;
    margin: 24px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & > div:nth-child(2) > div:nth-child(6) > :nth-child(1) > button {
    width: 11.5em;
    height: 56px;
    border: none;
    border-radius: 64px;
    background-color: #2a2d36;
    color: white;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    margin-right: 16px;
  }
  & > div:nth-child(2) > div:nth-child(6) > :nth-child(1) > button:hover {
    cursor: pointer;
  }
  & > div:nth-child(2) > div:nth-child(6) > button:nth-child(2) {
    width: 13.25em;
    height: 56px;
    border: none;
    border-radius: 64px;
    background-color: #3d5798;
    color: white;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
  }
  & > div:nth-child(2) > div:nth-child(6) > button:nth-child(2):hover {
    cursor: pointer;
  }
`;
