import React, { useState } from "react";
import "./ShoppingCart.css";
import img1 from "./assets/sony.png"
import img2 from "./assets/apple.jpg"
import img3 from "./assets/samsung.png"
import ProductCard from "./components/ProductCard";

function ShoppingCart() {

  const datas = [
    {
      id: 1,
      product_name: "Sony",
      price: 20000,
      desc: "To download drivers, firmware updates, BIOS, and software",
      img: img1,
    },
    {
      id: 2,
      product_name: "Apple",
      price: 150000,
      desc: "To download drivers, firmware updates, BIOS, and software",
      img: img2,
    },
    {
      id: 3,
      product_name: "Samsung",
      price: 45000,
      desc: "To download drivers, firmware updates, BIOS, and software",
      img: img3,
    },
    {
      id: 4,
      product_name: "Xiomi",
      price: 12000,
      desc: "To download drivers, firmware updates, BIOS, and software",
      img: img1,
    },
    {
      id: 5,
      product_name: "Oppo",
      price: 25000,
      desc: "To download drivers, firmware updates, BIOS, and software",
      img: img2,
    },
    {
      id: 6,
      product_name: "Vivo",
      price: 30000,
      desc: "To download drivers, firmware updates, BIOS, and software",
      img: img3,
    },
  ];

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  console.log(cartItems);
  

  return (
    <div className="container-fluid mymain">
      <div className="row">
        <div className="left_section col-10">
          <div className="row">
            {datas.map((item) => {
              return (
                <ProductCard item={item} handleAddToCart={handleAddToCart} />
              );
            })}
          </div>
        </div>
        <div className="right_section col-2">
          <ol class="list-group list-group-numbered">
            {
              cartItems.map((citem) => {
                return (
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">{citem.product_name}</div>
                      {citem.price}
                    </div>
                    <span class="badge text-bg-primary rounded-pill">X</span>
                  </li>
                );
              })
            }
            
            
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
