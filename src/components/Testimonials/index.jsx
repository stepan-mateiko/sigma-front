import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";
import "../../../node_modules/swiper/swiper.scss";
import "../../../node_modules/swiper/modules/pagination.scss";

import ElementHeader from "../ElementHeader";

import {
  TESTIMONIALS_HEADER,
  TESTIMONIALS_SWIPER_CONFIG,
  TESTIMONIALS_RATING,
  TESTIMONIALS_SLIDES,
  TESTIMONIALS_STATISTICS,
} from "../../helpers/constants";

SwiperCore.use([Pagination]);

const Testimonials = () => {
  return (
    <div className="testimonials">
      <ElementHeader
        className={TESTIMONIALS_HEADER.className}
        title={TESTIMONIALS_HEADER.title}
        heading={TESTIMONIALS_HEADER.heading}
      />

      <Swiper {...TESTIMONIALS_SWIPER_CONFIG}>
        {TESTIMONIALS_SLIDES.map(
          ({ image, imageAlt, text, name, position }) => (
            <SwiperSlide className="testimonials__card" key={name}>
              <div className="testimonials__image">
                <img src={image} alt={imageAlt} />
              </div>

              <div className="testimonials__rate">{TESTIMONIALS_RATING}</div>

              <p className="testimonials__text">{text}</p>

              <h4 className="testimonials__name">{name}</h4>
              <p className="textimonials__position">{position}</p>
            </SwiperSlide>
          ),
        )}
      </Swiper>

      <hr />

      <div className="testimonials__statistics">
        {TESTIMONIALS_STATISTICS.map(({ value, label }) => (
          <div className="testimonials__statistics-card" key={label}>
            <h4 className="testimonials__statistics-number">{value}</h4>
            <p className="testimonials__statistics-text">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
