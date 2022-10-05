import React from "react";
import styled from "styled-components";

const StyleCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  & p {
    border: 1px solid grey;
    padding: 5px 12px;
    cursor: default;
  }

  & > img {
    width: 100%;
    cursor: pointer;
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #222;
  color: white;
  padding: 6px 5px;
  font-size: 18px;
  border: none;
  transition: 0.2s;

  &: hover {
    background-color: rgb(95, 92, 92);
  }
`;

export const SmallSlider = () => {
  return (
    <div className="SlidingProd">
      <StyleCard>
        <img
          src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/11207443-2214866130380732.jpg"
          alt="pro"
        />
        <h6>EltaMD UV Elements Tinted Broad-Spectrum SPF 44 (2 oz.)</h6>
        <p>Moisturizers</p>
        <h6>$84</h6>
        <Button>Quick Buy</Button>
      </StyleCard>
      <StyleCard>
        <img
          src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/13674838-2504939183735374.jpg"
          alt="pro"
        />
        <h6>EltaMD UV Elements Tinted Broad-Spectrum SPF 44 (2 oz.)</h6>
        <p>Moisturizers</p>
        <h6>$84</h6>
        <Button>Quick Buy</Button>
      </StyleCard>
      <StyleCard>
        <img
          src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/12905829-1844869965787699.jpg"
          alt="pro"
        />
        <h6>EltaMD UV Elements Tinted Broad-Spectrum SPF 44 (2 oz.)</h6>
        <p>Moisturizers</p>
        <h6>$84</h6>
        <Button>Quick Buy</Button>
      </StyleCard>
    </div>
  );
};
