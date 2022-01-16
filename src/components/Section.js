import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <Wrap>
      <div className="item-text">
        <h1>Model S</h1>
        <p>Order Online For Touchless Delivery</p>
      </div>
      <div className="buttons">
        <div className="button-group">
          <button>Custom Order</button>
          <button className="white-btn">Existing Inventory</button>
        </div>
        <img
          className="down-arrow"
          src="/images/down-arrow.svg"
          alt="down arrow"
        />
      </div>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.jpg");
  .item-text {
    padding-top: 15vh;
    text-align: center;
  }
  .button-group {
    margin-bottom: 2rem;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    button {
      border: none;
      background-color: rgba(23, 26, 32, 0.8);
      width: 256px;
      color: #fff;
      padding: 1rem 2rem;
      border-radius: 50px;
      text-transform: uppercase;
      cursor: pointer;
      opacity: 0.85;
      margin: 0.5rem;
    }
    .white-btn {
      background-color: rgba(255, 255, 255, 0.8);
      color: rgb(23, 26, 32);
    }
  }
  .down-arrow {
    height: 50px;
    cursor: pointer;
    animation: animateDown infinite 2s;
  }
`;
