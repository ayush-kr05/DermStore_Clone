import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import "./ProductOverview.css";
import { ProductImages } from "./ProductImages.jsx";
import { ItemCountCounter } from "./ItemCountCounter";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import compo from "./images/compo.PNG";
import reviewImg from "./images/rev.PNG";

export const ProductOverview = () => {
  const { id } = useParams();
  const [data, setData] = React.useState({});

  const getSearchData = () => {
    fetch(`https://dermstoreproducts.cyclic.app/dermproducts?q=${id}`)
      .then((res) => res.json())
      .then((res) => setData(res[0]))
      .catch((error) => console.log(error));
  };
  React.useState(() => {
    getSearchData();
  }, []);

  console.log(data);
  return (
    <>
      <Navbar />
      <div>
        <div className="pd1">
          <p className="pd2">
            Home / Skincare / {data.item_category} / {data.name}
          </p>
        </div>

        <div className="pd3">
          <div>
            <ProductImages
              img1={data.img_url_1}
              img2={data.img_url_2}
              img3={data.img_url_3}
            />
          </div>
          <div className="productDetailDiv">
            <div className="logoImgDiv">
              <img src={data.brand_logo_url} alt="" />
            </div>
            <div className="nameDiv">
              <p>{data.name}</p>
            </div>
            <div className="descriptionDiv">
              <p>{data.description}</p>
            </div>
            <div className="reviewDiv">
              <Stack spacing={0.5}>
                <Rating
                  name="half-rating-read"
                  defaultValue={data.rating}
                  precision={0.5}
                  readOnly
                />
              </Stack>
              <p>{data.review_count} Reviews</p>
            </div>
            <div className="rateOptionsDiv">
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={data.mrp}
                  name="radio-buttons-group"
                >
                  <div id="rateOption">
                    <FormControlLabel
                      value={data.mrp}
                      control={<Radio />}
                      label={"$" + data.mrp + "    (One Time Purchase)"}
                    />
                  </div>
                  <div id="rateOption">
                    <FormControlLabel
                      value={data.offer_price}
                      control={<Radio />}
                      label={"$" + data.offer_price + "    (Auto-Replenish)"}
                    />
                  </div>
                </RadioGroup>
              </FormControl>
            </div>
            <div className="mrpDiv">
              <h3>{"$" + data.mrp}</h3>
              <p>Subscribe to this product to save 15%</p>
            </div>
            <hr />
            <ItemCountCounter {...data} />
            <hr />
            <div className="deliverInstructionDiv">
              <p>Delivery and Returns</p>
              <p>
                Free delivery is available on all orders over $50. Please see
                our shipping information page for all available delivery
                options.
              </p>
              <p>If I'm not completely happy with my item?</p>
              <p>Please see our returns policy.</p>
              <p>
                *points earned on final checkout price, after any applied
                discounts.
              </p>
            </div>
            <hr />
          </div>
        </div>
        <div className="pd4">
          <img src={compo} alt="" />
        </div>
        <div className="customerReviewDiv">
          <hr />
          <p>Customer Reviews</p>
          <img src={reviewImg} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};
