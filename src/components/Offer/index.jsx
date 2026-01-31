import OfferImage1 from "../../assets/images/offer-image-1.png";
import OfferImage2 from "../../assets/images/offer-image-2.png";
import OfferImage3 from "../../assets/images/offer-image-3.png";
import OfferImage4 from "../../assets/images/offer-image-4.png";
import ElementHeader from "../ElementHeader";
import ProductCard from "../ProductCard";

const Offer = () => {
  return (
    <div className="offer">
      <ElementHeader
        className={"offer"}
        title={"Offer"}
        heading={"We Offer Organic For You"}
      />
      <div className="offer__wrapper">
        <ProductCard
          className={"offer"}
          category={"Vegetable"}
          image={OfferImage1}
          name={"Mung Bean"}
          discount={true}
          discountPrice={20}
          price={11}
          rate={5}
        />
        <ProductCard
          className={"offer"}
          category={"Vegetable"}
          image={OfferImage2}
          name={"Brown Hazelnut"}
          discount={true}
          discountPrice={20}
          price={12}
          rate={5}
        />
        <ProductCard
          className={"offer"}
          category={"Vegetable"}
          image={OfferImage3}
          name={"Onion"}
          discount={true}
          discountPrice={20}
          price={17}
          rate={5}
        />
        <ProductCard
          className={"offer"}
          category={"Vegetable"}
          image={OfferImage4}
          name={"Cabbage"}
          discount={true}
          discountPrice={20}
          price={17}
          rate={5}
        />
      </div>
    </div>
  );
};

export default Offer;
