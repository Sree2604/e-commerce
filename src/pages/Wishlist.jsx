import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WishlistProducts from "../components/WishlistProducts";
import Navbar from "../components/Navbar";

function Wishlist() {
  const navigate = useNavigate();
  const validLogin = sessionStorage.getItem("Login");
  useEffect(() => {
    if (!validLogin) {
      alert("Unauthorized Access...!!");
      navigate("/");
    }
  }, []);
  return (
    <div>
      {validLogin && (
        <>
          <Navbar />
          <WishlistProducts />
        </>
      )}
    </div>
  );
}

export default Wishlist;
