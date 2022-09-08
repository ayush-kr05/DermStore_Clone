import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";

export const ProductOverview = () => {
  const { id } = useParams();
  const [data,setData]=React.useState({})

  const getSearchData = () => {
    fetch(`http://localhost:8080/products?q=${id}`)
      .then((res) => res.json())
      .then((res) => setData(res[0]))
      .catch((error) => console.log(error));
  };
  React.useState(()=>{
    getSearchData()
  },[])

  console.log(data)
  return (
    <>
    <Navbar/>
     <div>
       ProductOverview
       <p>{id}</p>
     </div>
     <Footer/>
    </>
  );
};
