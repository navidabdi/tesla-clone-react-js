import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="">Model S</a>
          </li>
          <li>
            <a href="">Model X</a>
          </li>
          <li>
            <a href="">Model Y</a>
          </li>
          <li>
            <a href="">Model 3</a>
          </li>
        </ul>
      </nav>
      <div className="menu">
        <a href="">Shop</a>
        <a href="">Tesla Account</a>
        <div className="menu-lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(0.5rem);
  min-height: 4.5rem;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  nav {
    @media (max-width: 992px) {
      display: none;
    }
    ul {
      li {
        display: inline-block;
        padding: 0 0.7rem;
        a {
          font-weight: 700;
          text-transform: uppercase;
        }
      }
    }
  }
  .menu {
    display: flex;
    a {
      font-weight: 700;
      text-transform: uppercase;
      padding: 0 0.7rem;
      @media (max-width: 600px) {
        display: none;
      }
    }
    .menu-lines {
      width: 1.8rem;
      height: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 1rem;
      cursor: pointer;
      .line {
        width: 100%;
        height: 0.15rem;
        background: black;
      }
    }
  }
`;
