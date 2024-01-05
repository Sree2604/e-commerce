import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function ShoppingCart() {
  const [total, setTotal] = useState(0);

  const products = [
    {
      id: 1,
      name: "Product 1",
      mrp: 120.25,
      description: "Description 1",
      image: `https://th.bing.com/th/id/OIP.QA8rM2LYl4H3rKpzD5rWyAHaHa?rs=1&pid=ImgDetMain`,
      quantity: 1,
      weight: "50gm",
    },
    {
      id: 3,
      name: "Product 3",
      mrp: 200.0,
      description: "Description 3",
      image: `https://th.bing.com/th/id/R.fa8beff142524832c4b54e487ebd7114?rik=CXxcTltTdIpz5A&riu=http%3a%2f%2fclipart-library.com%2fimg1%2f1119710.jpg&ehk=88KFOt6AnmJXGpK3BdZLQwIbJuoPbp7KGSe0RHM%2fPXc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1`,
      quantity: 3,
      weight: "100gm",
    },
  ];

  useEffect(() => {
    const calculatedTotal = () => {
      let calculatedTotal = 0;
      for (var i = 0; i < products.length; i++) {
        calculatedTotal += products[i].quantity * products[i].mrp;
      }
      setTotal(calculatedTotal);
    };
    calculatedTotal();
  }, []);

  const handleCheckout = () => {
    alert("Ordered confirmed...!!");
    window.location.href = "/home";
  };

  return (
    <>
      {products.length === 0 ? (
        <>No items in cart</>
      ) : (
        <>
          <ToastContainer />
          <div className="grid place-content-center mt-40">
            <p className="font-bold text-xl ml-32">Shopping Cart</p>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="flex flex-row p-10 -mb-3.5">
                <p className="font-bold ml-3">Name</p>
                <p className="font-bold ml-20">Quantity</p>
                <p className="font-bold ml-16">Total</p>
              </div>
              {products.map((product) => (
                <div className="flex flex-row p-8" key={product.id}>
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src={product.image}
                  />
                  <p className="font-semibold">{product.name}</p>
                  <p className="ml-16">{product.quantity}</p>
                  <p className="ml-20">₹{product.mrp * product.quantity}</p>
                </div>
              ))}
              <div className="flex flex-row ml-10 mb-8">
                <p className="font-bold">Subtotal</p>
                <p className="ml-52">{total}</p>
              </div>
              <button
                onClick={handleCheckout}
                className="bg-teal-400 hover:bg-teal-700 text-white font-bold ml-8 mb-8 py-2 px-4 rounded-full"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ShoppingCart;
