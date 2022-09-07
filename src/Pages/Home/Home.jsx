import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Navbar } from "../../Components/Navbar/Navbar";
import { HomeCarosel } from "./HomeCarosel";
import { SlidingProducts } from "./SlidingProducts";
import { ShopByCategory, ShopByCategory2 } from "./ShopByCategory";
import { SmallSlider } from "./SmallSlider";

export const Home = () => {
  return (
    <>
      <Navbar />
      <section className="homeSection">
        {/* -----------------{Part 1} -------------------*/}

        <div>
          <HomeCarosel />
        </div>

        {/* -----------------{Part 2} -------------------*/}

        <div>
          <h3>Best Sellers</h3>
          <SlidingProducts />
        </div>

        {/* -----------------{Part 3} -------------------*/}

        <div>
          <h3>3x Points on Sunday Riley</h3>
          <p>
            Rewards members earn TRIPLE on the cult-favorite formulas for
            radiant-looking skin.{" "}
          </p>
          <div className="SlidingProdSmall">
            <div className="ProdSmallDiv">
              <img
                src="https://static.thcdn.com/images/medium/webp/widgets/208-us/47/3x_PTS_Sunday_Riley-070147.png"
                alt="prod"
              />
            </div>
            <SmallSlider />
          </div>
        </div>

        {/* -----------------{Part 4} -------------------*/}
        <div className="SingleImmg">
          <Link to="/products">
            <img
              src="https://static.thcdn.com/images/large/webp/widgets/208-us/05/original-Glo_Skin_Disrupter_long-054505.png"
              alt="prod"
            />
          </Link>
        </div>

        {/* -----------------{Part 5} -------------------*/}

        <div>
          <h3>Shop By Category</h3>
          <div className="shop_category">
            <ShopByCategory />
          </div>
          <div className="shop_category2">
            <ShopByCategory2 />
          </div>
        </div>
        <div>
          <SlidingProducts />
        </div>
      </section>
    </>
  );
};
