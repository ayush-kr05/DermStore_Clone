import React from "react";
import { useParams } from "react-router-dom";

export const ProductOverview = () => {
  const { id } = useParams();
  return (
    <div>
      ProductOverview
      <p>{id}</p>
    </div>
  );
};
