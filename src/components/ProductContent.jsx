import React from "react";
import Rating from '@mui/material/Rating';
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function ProductContent({ productData }) {

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
        toast.success(`${productData.name} added to wishlist..!`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    };
  
    const addCart = (id) => {
      const alreadyInCart = cartItems.includes(id);
      if (alreadyInCart) {
        toast.warning("Already in cart...!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        cartItems.push(id);
        toast.success(`${productData.name} added to cart...!`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    };

  return (
    <div className="flex justify-center items-center mt-24 h-full">
        <ToastContainer/>
      <div className="max-w-lg rounded-lg overflow-hidden shadow-lg">
        <div className="flex-none h-64 bg-cover rounded-t-lg text-center overflow-hidden">
          <img
            src={productData.image}
            alt={productData.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="border-r border-b border-l border-gray-400 bg-white rounded-b-lg p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              {productData.name}
            </div>
            <p className="text-gray-700 text-base">
              {productData.description}
            </p>
            <p className="text-gray-700 text-base">
              {productData.weight}
            </p>
          </div>
          <Rating name="size-medium" readOnly precision={0.1} defaultValue={productData.rating} />
          <div className="flex items-center">
            
            <div className="px-6 pt-4 pb-2 ">
                    <button
                      onClick={() => addWishlist(productData.id)}
                      className="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-1 px-2 border border-teal-500 hover:border-transparent rounded"
                    >
                      Add to Wishlist
                    </button>{" "}
                    <button
                      onClick={() => addCart(productData.id)}
                      className="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-1 px-2 border border-teal-500 hover:border-transparent rounded"
                    >
                      Add to cart
                    </button>
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductContent;
