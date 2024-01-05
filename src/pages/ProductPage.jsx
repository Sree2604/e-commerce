import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import ProductContent from '../components/ProductContent';

function ProductPage() {

    const {id} = useParams();
    const [productId,setProductId] = useState(parseInt(id))
    const [product,setProduct] = useState([])

    const products = [
        {
          id: 1,
          name: "Product 1",
          mrp: 120.25,
          description: "Description 1",
          image : `https://th.bing.com/th/id/OIP.QA8rM2LYl4H3rKpzD5rWyAHaHa?rs=1&pid=ImgDetMain`,
          rating : 3.5,
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

      useEffect(()=>{
        products.forEach(product=>{
            if(product.id == productId){
                setProduct(product)
            }
        })
      },[])
      console.log(product)
  return (
    <div>
        <Navbar/>
        <ProductContent productData={product}/>
    </div>
  )
}

export default ProductPage