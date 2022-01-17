import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";

function Section({
  title,
  description,
  backgrounImg,
  buttonOne,
  buttonTwo,
  downArrow,
}) {
  return (
    <Wrap backgrounImg={backgrounImg}>
      <Fade bottom>
        <div className="item-text">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </Fade>
      <div className="buttons">
        <Fade bottom>
          <div className="button-group">
            {buttonOne && <button>{buttonOne}</button>}
            {buttonTwo && <button className="white-btn">{buttonTwo}</button>}
          </div>
        </Fade>
        {downArrow && (
          <img
            className="down-arrow"
            src="/images/down-arrow.svg"
            alt="down arrow"
          />
        )}
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
  /* background-image: url("/images/model-s.jpg"); */
  background-image: ${(props) => `url("/images/${props.backgrounImg}")`};
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
