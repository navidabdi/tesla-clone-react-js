import React, { useState } from "react";
import styled from "styled-components";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
const Header = () => {
  // Toggle The Burger Nav
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <>
      <Container>
        <a href="">
          <img src="/images/logo.svg" alt="logo" />
        </a>
        <nav>
          <ul>
            {cars &&
              cars.map((car, index) => (
                <li key={index}>
                  <a href="">{car}</a>
                </li>
              ))}
          </ul>
        </nav>
        <div className="menu">
          <a href="">Shop</a>
          <a href="">Tesla Account</a>
          <div onClick={() => setBurgerStatus(true)} className="burger-open">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </Container>
      <BurgerNav show={burgerStatus} className="burger-nav">
        <div onClick={() => setBurgerStatus(false)} className="burger-close">
          <div className={`line one ${burgerStatus}`}></div>
          <div className={`line two ${burgerStatus}`}></div>
        </div>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="">{car}</a>
            </li>
          ))}
        <li>
          <a href="">Existing Inventory</a>
        </li>
        <li>
          <a href="">Used Inventory</a>
        </li>
        <li>
          <a href="">Trade-In</a>
        </li>
        <li>
          <a href="">Cybertruck</a>
        </li>
        <li>
          <a href="">Roadaster</a>
        </li>
      </BurgerNav>
    </>
  );
};

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
    .burger-open {
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

const BurgerNav = styled.ul`
  position: fixed;
  width: 300px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(0.5rem);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 11;
  padding: 2.2rem;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: all 0.3s ease-in-out;
  .burger-close {
    margin-bottom: 1rem;
    align-self: flex-end;
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
      transition: all 1s ease;
    }
    .one.true {
      transform: rotateZ(45deg);
    }
    .two.true {
      transform: rotateZ(-45deg) translate(10px, -9px);
    }
  }
  li {
    text-align: left;
    border-bottom: 1px solid #ffffffac;
    a {
      padding: 1.2rem 0;
      font-weight: 600;
      display: block;
    }
  }
`;
