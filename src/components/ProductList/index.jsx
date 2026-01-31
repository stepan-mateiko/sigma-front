import React, { useState, useEffect } from "react";
import axios from "axios";

import Modal from "../Modal";
import Button from "../Button";
import ProductCard from "../ProductCard";
import ElementHeader from "../ElementHeader";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [visibleProducts, setVisibleProducts] = useState([]);

  const handleModalOpen = (product) => {
    setModalOpen(true);
    setSelectedProduct({ ...product });
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  const showProducts = () => {
    if (visibleProducts.length === products.length) {
      setVisibleProducts(products.slice(0, 8));
    } else {
      setVisibleProducts(products);
    }
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(
          "https://sigma-online-store.onrender.com/api/products"
        );
        let list = response.data.sort((a, b) => {
          if (a.discount === b.discount) {
            return 0;
          }
          if (a.discount) {
            return -1;
          } else {
            return 1;
          }
        });
        setProducts(list);
        setVisibleProducts(list.slice(0, 8));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="products">
      <ElementHeader
        className={"products"}
        title={"Categories"}
        heading={"Our Products"}
      />
      <div className="products__wrapper">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product._id}
            className={"products"}
            category={product.category}
            handler={() => handleModalOpen(product)}
            image={product.image}
            name={product.name}
            discount={product.discount}
            discountPrice={product.discount_price}
            price={product.price}
            rate={product.rate}
          />
        ))}
      </div>
      <Button
        className={"products__btn"}
        handler={showProducts}
        text={
          visibleProducts.length === products.length ? "Show Less" : "Load More"
        }
        arrow={true}
      />
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          handleModalClose={handleModalClose}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default ProductList;
