import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductCards from "../components/ProductCards";

function Home() {
  const navigate = useNavigate();
  const validLogin = sessionStorage.getItem("Login");
  useEffect(() => {
    if (!validLogin) {
      alert("Unauthorized Access...!!");
      navigate("/");
    }
  }, []);

  return (
    <>
      {validLogin && (
        <>
          <Navbar />
          <ProductCards />
        </>
      )}
    </>
  );
}

export default Home;
