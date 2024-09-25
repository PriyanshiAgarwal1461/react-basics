import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./src/components/common/Footer";
import Header from "./src/components/common/Header";
import RestaurantCardsList from "./src/components/RestaurantCardsList";

const AppLayout = function () {
  return( 
    <>
    <Header/>
    <RestaurantCardsList/>
    <Footer/>
    </>    
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>); 

