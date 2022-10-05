import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";

const StyleCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
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

const handleDragStart = (e) => e.preventDefault();

export const CaroselItems = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getSearchData();
  }, []);

  //   console.log(products);

  const getSearchData = () => {
    fetch(`http://localhost:8080/products?&_limit=15`)
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((error) => console.log(error));
  };

  const Items = products.map((elm) => {
    return (
      <StyleCard>
        <img src={elm.img_url_1} alt="pro" />
        <h6>{elm.name}</h6>
        <p>{elm.item_category}</p>
        <h6>${elm.mrp}</h6>
        <Button>Quick Buy</Button>
      </StyleCard>
    );
  });
  //   console.log(Items);

  return (
    <AliceCarousel mouseTracking items={Items} infinite={true} responsive={5} />
  );
};
