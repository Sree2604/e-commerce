import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function WishlistProducts() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Product 1",
      image : `https://th.bing.com/th/id/OIP.QA8rM2LYl4H3rKpzD5rWyAHaHa?rs=1&pid=ImgDetMain`,
      mrp: 120.25,
      description: "Description 1",
      weight: "50gm",
    },
    {
      id: 3,
      name: "Product 3",
      image : `https://th.bing.com/th/id/R.fa8beff142524832c4b54e487ebd7114?rik=CXxcTltTdIpz5A&riu=http%3a%2f%2fclipart-library.com%2fimg1%2f1119710.jpg&ehk=88KFOt6AnmJXGpK3BdZLQwIbJuoPbp7KGSe0RHM%2fPXc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1`,    
      mrp: 200.0,
      description: "Description 3",
      weight: "100gm",
    },
  ];

  const addToCart = () => {
    alert("Products added to Cart");
    navigate("/cart");
  };

  return (
    <>
      {products.length == 0 ? (
        <>
          <div className="grid place-content-center mt-40">
            <p className="font-bold text-xl ml-24">Wishlist Items</p>
            <div className="max-w-sm rounded overflow-hidden ml-12 shadow-lg p-10">
              <p>No Items in wishlist</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <ToastContainer />
          <div className="grid place-content-center mt-40">
            <p className="font-bold text-xl ml-24">Wishlist Items</p>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="flex flex-row p-10 -mb-10">
                <p className="font-bold">Name</p>
                <p className="font-bold ml-48">MRP</p>
              </div>
              {products.map((product) => (
                <>
                  <div className="flex flex-row p-8" key={product.id}>
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src={product.image}
                  />
                    <p className="font-semibold">{product.name}</p>
                    <p className="ml-28">₹{product.mrp}</p>
                  </div>
                </>
              ))}
              <button
                onClick={addToCart}
                className="bg-teal-400 hover:bg-teal-700 text-white font-bold ml-8 mb-8 py-2 px-4 rounded-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default WishlistProducts;
