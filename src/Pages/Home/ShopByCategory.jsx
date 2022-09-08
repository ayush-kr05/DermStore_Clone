import React from "react";
import { Link } from "react-router-dom";

export const ShopByCategory = () => {
  return (
    <>
      <Link to="/products">
        <img
          src="https://static.thcdn.com/images/small/webp/widgets/208-us/20/DS_Round_Nav_-_Untitled_Page_%287%29-052520.png"
          alt="prod"
        />
      </Link>
      <Link to="/products">
        {" "}
        <img
          src="https://static.thcdn.com/images/small/webp/widgets/208-us/56/DS_Round_Nav_-_Untitled_Page_%288%29-052556.png"
          alt="prod"
        />
      </Link>
      <Link to="/products">
        <img
          src="https://static.thcdn.com/images/small/webp/widgets/208-us/32/DS_Round_Nav_-_Untitled_Page_%289%29-052632.png"
          alt="prod"
        />
      </Link>
      <Link to="/products">
        <img
          src="https://static.thcdn.com/images/small/webp/widgets/208-us/03/DS_Round_Nav_-_Untitled_Page_%2810%29-052703.png"
          alt="prod"
        />
      </Link>
      <Link to="/products">
        <img
          src="https://static.thcdn.com/images/small/webp/widgets/208-us/49/DS_Round_Nav_-_Untitled_Page_%2813%29-053649.png"
          alt="prod"
        />
      </Link>
      <Link to="/products">
        <img
          src="https://static.thcdn.com/images/small/webp/widgets/208-us/36/DS_Round_Nav_-_Untitled_Page_%2825%29-063536.png"
          alt="prod"
        />
      </Link>
    </>
  );
};

export const ShopByCategory2 = () => {
  return (
    <>
      <div>
        <img
          src="https://static.thcdn.com/images/small/webp/widgets/208-us/54/0826-STDCRE-40745-DS-EF-Sept-Batch-SHOT34-HP_LPSQ_BANNER_676x556-044054.jpg"
          alt="prod"
        />
        <h4>New from HoliFrog</h4>
        <p>
          Helps strengthen & resurface for smoother, brighter & firmer-looking
          skin.
        </p>
      </div>
      <div>
        <img
          src="https://static.thcdn.com/images/small/webp/widgets/208-us/58/0826-STDCRE-40745-DS-EF-Sept-Batch-SHOT28-HP_LPSQ_BANNER_676x556-043258.jpg"
          alt="prod"
        />
        <h4>New from Elemis</h4>
        <p>
          Helps reduce visible signs of discoloration while promoting radiance.
        </p>
      </div>
      <div>
        <img
          src="https://static.thcdn.com/images/small/webp/widgets/208-us/38/EltaMD_676x556-041438.png"
          alt="prod"
        />
        <h4>New from EltaMD</h4>
        <p>
          Helps strengthen skin, visibly reduces the look of redness, & leaves a
          well-rested glow.
        </p>
      </div>
    </>
  );
};
