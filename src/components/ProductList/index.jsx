import Modal from "../Modal";
import Button from "../Button";
import ProductCard from "../ProductCard";
import ElementHeader from "../ElementHeader";
import { useState, useEffect } from "react";

import { fetchProducts } from "../../helpers/api";

const INITIAL_VISIBLE_COUNT = 8;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const handleModalOpen = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const showProducts = () => {
    setVisibleProducts((prev) =>
      prev.length === products.length
        ? products.slice(0, INITIAL_VISIBLE_COUNT)
        : products,
    );
  };

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setVisibleProducts(data.slice(0, INITIAL_VISIBLE_COUNT));
    };

    loadProducts();
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
