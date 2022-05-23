import React from "react";
import styled from "styled-components";
import googlePlay from "../assets/googlePlay.png";
import appStore from "../assets/appleStore.png";
import screens from "../assets/screens.png";
export default function DownloadApp() {
  return (
    <Section>
      <div className="info">
        <h1>Download Now Travel Community Apps</h1>
        <div className="downloads">
          <img src={googlePlay} alt="google Play" />
          <img src={appStore} alt="apple store" />
        </div>
      </div>
      <img src={screens} alt="screens" className="screens" />
    </Section>
  );
}

const Section = styled.section`
  height: 25rem;
  width: 100%;
  margin: 5rem 0;
  background: linear-gradient(to right, #a6f2f2, #ddf181);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  position: relative;
  overflow: hidden;
  .info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h1 {
      font-size: 3rem;
      width: 60%;
    }
    .downloads {
      display: flex;
      gap: 1rem;
      img {
        height: 3rem;
        cursor: pointer;
      }
    }
  }
  .screens {
    height: 22rem;
    position: absolute;
    bottom: -2rem;
    right: 1rem;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    height: max-content;
    gap: 4rem;
    padding: 2rem;
    .info {
      h1 {
        font-size: 2rem;
        width: 100%;
      }
    }
    .screens {
      position: initial;
      height: 15rem;
    }
  }
`;
