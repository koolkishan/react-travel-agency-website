import React from "react";
import styled from "styled-components";
import lighthouse from "../assets/lighthouse.png";
import { BiWorld } from "react-icons/bi";
import { BsHeadphones, BsPerson } from "react-icons/bs";
export default function Offer() {
  const data = [
    {
      text: "Best Travel Guide Always for your Services",
      icon: <BsPerson />,
      color: "red",
    },
    {
      text: "World Class Services Provided For You",
      icon: <BiWorld />,
      color: "green",
    },
    {
      text: "24/7 Strong Customer Support",
      icon: <BsHeadphones />,
      color: "yellow",
    },
  ];
  return (
    <Section id="offer">
      <div className="image">
        <img src={lighthouse} alt="lighthouse" />
      </div>
      <div className="content">
        <div className="title">
          <h1>We are Offering in Total 793 Tours Across the World</h1>
        </div>
        <ul className="list">
          {data.map(({ text, icon, color }) => {
            return (
              <li key={text}>
                <div className={`icon ${color}`}>{icon}</div>
                <div className="text">
                  <h3>{text}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 8rem 0;
  display: flex;
  gap: 5rem;
  .image {
    img {
      height: 35rem;
    }
  }
  .content {
    .title {
      margin: 2rem 0;
      h1 {
        font-size: 3rem;
      }
    }
    .list {
      list-style-type: none;
      li {
        display: flex;
        align-items: center;
        gap: 4rem;
        margin: 4rem 0;
        .icon {
          padding: 0.5rem;
          border-radius: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
        }
        .red {
          background-color: #ff3010aa;
          color: white;
        }
        .green {
          background-color: #65ce5455;
          color: #65ce54;
        }
        .yellow {
          background-color: #ffc01e55;
          color: #ffc01e;
        }
        .text {
          h3 {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    margin: 5rem 1rem;
    gap: 2rem;
    .image {
      img {
        max-inline-size: 100%;
        block-size: auto;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 2rem;
          text-align: center;
        }
      }
      .list {
        li {
          gap: 1rem;
          margin: 2rem 0;
          .text {
            h3 {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
`;
