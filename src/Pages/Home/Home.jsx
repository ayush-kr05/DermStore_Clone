import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Navbar } from "../../Components/Navbar/Navbar";
import { HomeCarosel } from "./HomeCarosel";
import { SlidingProducts } from "./SlidingProducts";
import { ShopByCategory, ShopByCategory2 } from "./ShopByCategory";
import { SmallSlider } from "./SmallSlider";
import { NowTrending } from "./NowTrending";
import { FeaturedBrand } from "./FeaturedBrand";
import ReactPlayer from "react-player";
import { FromBlogs } from "./FromBlogs";
import { Footer } from "../../Components/Footer/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <section className="homeSection">
        {/* -----------------{Part 1} -------------------*/}
        <div className="CaroselDivMain">
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
        {/* -----------------{Part 6} -------------------*/}
        <div>
          <SlidingProducts />
        </div>
        {/* -----------------{Part 7} -------------------*/}
        <div>
          <h3>Now Trending</h3>
          <div className="NowTrendingDiv">
            <NowTrending />
          </div>
        </div>
        {/* -----------------{Part 8} -------------------*/}
        <div>
          <h3>Featured Brands</h3>
          <div className="FeaturedBrandDiv">
            <FeaturedBrand />
          </div>
        </div>
        {/* -----------------{Part 9} -------------------*/}
        <div className="VideoDiv">
          <ReactPlayer
            width="100%"
            height="600px"
            controls
            url="https://s1.thcdn.com/productvideo/12902717/dermstore_60sec_16x9_new.mp4"
          />
          <h4 style={{ marginTop: "40px", marginBottom: "20px" }}>
            #MyDermstoreGlow
          </h4>
          <p style={{ marginBottom: "40px" }}>
            We care about what goes on your skin, because of what’s within. Our
            assortment is top-rated, curated & authenticated—bringing you the
            highest quality products and straight-from-the-experts info to help
            you navigate all things beauty and skin care. Join the conversation
            on Instagram with #MyDermstoreGlow—show us your favorite #Dermstore
            finds that help you care for the skin you’re in! We’re excited to
            feature our community’s must-haves all season long.
          </p>
          <div className="SingleImmg">
            <img
              src="https://static.thcdn.com/images/large/webp/widgets/208-us/06/original-6-055106.png"
              alt="banner"
            />
          </div>
        </div>
        {/* -----------------{Part 10} -------------------*/}
        <div>
          <h3> From The Blog</h3>
          <div className="FromTheBlogDiv">
            <FromBlogs />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
