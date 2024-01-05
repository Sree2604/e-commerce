import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";

function ProductCards() {

    const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "Product 1",
      mrp: 120.25,
      description: "Description 1",
      image : `https://th.bing.com/th/id/OIP.QA8rM2LYl4H3rKpzD5rWyAHaHa?rs=1&pid=ImgDetMain`,
      rating : 3.5  ,
      weight: "50gm",
    },
    {
      id: 2,
      name: "Product 2",
      mrp: 100.25,
      description: "Description 2",
      image : `https://th.bing.com/th/id/OIP.WuymIvWM41yvTEIgahwLewHaE9?rs=1&pid=ImgDetMain`,
      rating : 4,
      weight: "40gm",
    },
    {
      id: 3,
      name: "Product 3",
      mrp: 200.0,
      description: "Description 3",
      image : `https://th.bing.com/th/id/R.fa8beff142524832c4b54e487ebd7114?rik=CXxcTltTdIpz5A&riu=http%3a%2f%2fclipart-library.com%2fimg1%2f1119710.jpg&ehk=88KFOt6AnmJXGpK3BdZLQwIbJuoPbp7KGSe0RHM%2fPXc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1`,
      rating : 5,
      weight: "100gm",
    },
  ];

  const wishlistItems = [];
  const cartItems = [];

  const addWishlist = (id) => {
    const alreadyInWishlist = wishlistItems.includes(id);
    if (alreadyInWishlist) {
      toast.warning("Already in wishlist...!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      wishlistItems.push(id);
      toast.success(`${products[id - 1].name} added to wishlist..!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const viewProduct = (id) => {
    navigate(`/view/${id}`)
  }

  const addCart = (id) => {
    const alreadyInCart = cartItems.includes(id);
    if (alreadyInCart) {
      toast.warning("Already in cart...!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      cartItems.push(id);
      toast.success(`${products[id - 1].name} added to cart...!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      {products.length == 0 ? (
        <> No Products Right now at store </>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-2 ml-8 mt-28">
            {products.map((product) => (
              <>
                <div
                  className="max-w-sm rounded overflow-hidden shadow-lg"
                  key={product.id}
                >
                  <img
                    className="w-full cursor-pointer"
                    src={product.image}
                    alt="Sunset in the mountains"
                    onClick={()=>viewProduct(product.id)}
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{product.name}</div>
                    <p className="text-gray-700 text-base">
                      {product.description}
                    </p>
                    <Rating name="size-medium" readOnly precision={0.1} defaultValue={product.rating} />
                  </div>
                  <div className="px-6 pt-4 pb-2 ">
                    <button
                      onClick={() => addWishlist(product.id)}
                      className="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-1 px-2 border border-teal-500 hover:border-transparent rounded"
                    >
                      Add to Wishlist
                    </button>{" "}
                    <button
                      onClick={() => addCart(product.id)}
                      className="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-1 px-2 border border-teal-500 hover:border-transparent rounded"
                    >
                      Add to cart
                    </button>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #healthy
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #goodQuality
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #tasty
                    </span>
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default ProductCards;
