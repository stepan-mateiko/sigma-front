import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";
import "../../../node_modules/swiper/swiper.scss";
import "../../../node_modules/swiper/modules/pagination.scss";

import TestimonialsImage1 from "../../assets/images/testimonials-image-1.png";
import TestimonialsImage2 from "../../assets/images/testimonials-image-2.png";
import TestimonialsImage3 from "../../assets/images/testimonials-image-3.png";
import ElementHeader from "../ElementHeader";

SwiperCore.use([Pagination]);

const Testimonials = () => {
  return (
    <div className="testimonials">
      <ElementHeader
        className={"testimonials"}
        title={"Testimonial"}
        heading={"What Our Customer Saying?"}
      />
      <Swiper
        className="testimonials__swiper"
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide className="testimonials__card">
          <div className="testimonials__image">
            <img src={TestimonialsImage1} alt="about image" />
          </div>
          <div className="testimonials__rate">★★★★★</div>
          <p className="testimonials__text">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </p>
          <h4 className="testimonials__name">Harry Potter</h4>
          <p className="textimonials__position">Wizard</p>
        </SwiperSlide>
        <SwiperSlide className="testimonials__card">
          <div className="testimonials__image">
            <img src={TestimonialsImage2} alt="about image" />
          </div>
          <div className="testimonials__rate">★★★★★</div>
          <p className="testimonials__text">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </p>
          <h4 className="testimonials__name">Frodo Baggins</h4>
          <p className="textimonials__position">Hobbit</p>
        </SwiperSlide>
        <SwiperSlide className="testimonials__card">
          <div className="testimonials__image">
            <img src={TestimonialsImage3} alt="about image" />
          </div>
          <div className="testimonials__rate">★★★★★</div>
          <p className="testimonials__text">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </p>
          <h4 className="testimonials__name">Luke Skywalker</h4>
          <p className="textimonials__position">Jedi</p>
        </SwiperSlide>
      </Swiper>
      <hr />
      <div className="testimonials__statistics">
        <div className="testimonials__statistics-card">
          <h4 className="testimonials__statistics-number">100%</h4>
          <p className="testimonials__statistics-text">Organic</p>
        </div>
        <div className="testimonials__statistics-card">
          <h4 className="testimonials__statistics-number">285</h4>
          <p className="testimonials__statistics-text">Active Product</p>
        </div>
        <div className="testimonials__statistics-card">
          <h4 className="testimonials__statistics-number">350+</h4>
          <p className="testimonials__statistics-text">Organic Orchads</p>
        </div>
        <div className="testimonials__statistics-card">
          <h4 className="testimonials__statistics-number">25+</h4>
          <p className="testimonials__statistics-text">Years of Farming</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
