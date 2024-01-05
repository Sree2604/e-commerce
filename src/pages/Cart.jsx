import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCart from "../components/ShoppingCart";

function Cart() {
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
          <ShoppingCart />
        </>
      )}
    </>
  );
}

export default Cart;
