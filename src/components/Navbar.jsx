import React, { useState } from "react";
import styled from "styled-components";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import Logo from "../assets/logo.png";
export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", (e) => setIsNavOpen(false));
  return (
    <Container state={isNavOpen ? 1 : 0}>
      <div className="brand">
        <img src={Logo} alt="logo" />
      </div>
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={() => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
          />
        )}
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul>
          <li>
            <a href="#services">Home</a>
          </li>
          <li>
            <a href="#destination"> Destination</a>
          </li>
          <li>
            <a href="#offer">Offer</a>
          </li>
          <li>
            <a href="#tour">Tour</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
      </div>
      <div className="account-info">
        <div className="account">
          <span>
            <BsPerson />
          </span>
          <span>My Account</span>
        </div>
        <div className="search">
          <IoSearchOutline />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    img {
      cursor: pointer;
    }
  }
  .toggle {
    display: none;
  }
  .links {
    ul {
      display: flex;
      gap: 3rem;
      list-style-type: none;
      li {
        a {
          text-decoration: none;
          color: black;
          cursor: pointer;
          transition: var(--default-transition);
          &:hover {
            color: var(--primary-color);
          }
        }
      }
    }
  }
  .account-info {
    display: flex;
    gap: 2rem;
    .account {
      display: flex;
      gap: 0.5rem;
      cursor: pointer;
    }
    .search {
      cursor: pointer;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: relative;
    padding: 1rem 0.5rem;
    z-index: 10;
    .account-info {
      display: none;
    }
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .toggle {
      padding-right: 1rem;
      display: block;
      z-index: 1;
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }

    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "60%" : "0%")};
      height: 100vh;
      background-color: var(--primary-color);
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
        li {
          a {
            color: white;
          }
        }
      }
    }
  }
`;
