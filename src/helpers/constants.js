import EcoImage from "../assets/images/eco-image.png";
import EcoCard1 from "../assets/images/eco-card-1.png";
import EcoCard2 from "../assets/images/eco-card-2.png";
import EcoCard3 from "../assets/images/eco-card-3.png";
import AboutImage from "../assets/images/about-us-image.png";
import NewsCard1 from "../assets/images/news-card-1.png";
import NewsCard2 from "../assets/images/news-card-2.png";
import SubscribeImage from "../assets/images/subscribe-image.png";
import TestimonialsImage1 from "../assets/images/testimonials-image-1.png";
import TestimonialsImage2 from "../assets/images/testimonials-image-2.png";
import TestimonialsImage3 from "../assets/images/testimonials-image-3.png";

import {
  AboutIcon1,
  AboutIcon2,
  Instagram,
  Facebook,
  Twitter,
  Pinterest,
} from "../components/Icon/index";

export const API_LINK = "https://sigma-online-store.onrender.com";

export const ECO_HEADER = {
  image: {
    src: EcoImage,
    alt: "eco image",
  },
  title: "Eco Friendly",
  heading: "Econis is a Friendly Organic Store",
};

export const ECO_INFO_CARDS = [
  {
    title: "Start with Our Company First",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
  },
  {
    title: "Learn How to Grow Yourself",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
  },
  {
    title: "Farming Strategies of Today",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
  },
];

export const ECO_WRAPPER_CARDS = [
  {
    image: EcoCard1,
    alt: "eco card image 1",
    heading: "Organic Juice",
  },
  {
    image: EcoCard2,
    alt: "eco card image 2",
    heading: "Organic Food",
  },
  {
    image: EcoCard3,
    alt: "eco card image 3",
    heading: "Nuts Cookies",
  },
];

export const ABOUT_IMAGE = {
  src: AboutImage,
  alt: "about image",
};

export const ABOUT_HEADER = {
  className: "about",
  title: "About Us",
  heading: "We Believe in Working Accredited Farmers",
};

export const ABOUT_DESCRIPTION =
  "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.";

export const ABOUT_CARDS = [
  {
    Icon: AboutIcon1,
    heading: "Organic Foods Only",
    text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  {
    Icon: AboutIcon2,
    heading: "Quality Standards",
    text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
];

export const ABOUT_BUTTON = {
  className: "about__btn",
  text: "Shop Now",
  arrow: true,
};

export const CART_FORM_FIELDS = [
  {
    label: "Full name*",
    name: "name",
    type: "text",
    placeholder: "Enter your full name.....",
    pattern: "^[A-Z][a-z]+ [A-Z][a-z]+$",
    title:
      "Please enter your full name with both words starting with capital letters.",
    required: true,
  },
  {
    label: "Your Email*",
    name: "email",
    type: "email",
    placeholder: "Enter your e-mail.....",
    pattern: "^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$",
    title: "Please enter a valid email address in the format user@example.com.",
    required: true,
  },
  {
    label: "Address*",
    name: "address",
    type: "text",
    placeholder: "Enter your address.....",
    required: true,
  },
  {
    label: "Phone Number*",
    name: "phone",
    type: "tel",
    placeholder: "Enter your phone number.....",
    pattern: "^(\\+380\\d{9})$",
    title:
      "Please enter a valid phone number starting with +380 followed by 9 digits.",
    required: true,
  },
];

export const CART_FORM_TEXTAREA = {
  label: "Message",
  name: "additionalNotes",
  placeholder: "Additional Notes",
};

export const CART_FORM_BUTTON = {
  type: "submit",
  text: "Confirm",
};

export const CART_LIST_TEXT = {
  empty: "Your cart is empty.",
  quantity: "Quantity",
  totalPrice: "Total Price:",
  totalDiscount: "Total Discount:",
};

export const FOOTER_CONTACTS = {
  title: "Contact Us",
  items: [
    {
      label: "Email",
      value: "needhelp@Organia.com",
    },
    {
      label: "Phone",
      value: "666 888 888",
    },
    {
      label: "Address",
      value: "88 road, borklyn street, USA",
    },
  ],
};

export const FOOTER_DESCRIPTION =
  "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing";

export const FOOTER_SOCIALS = [
  {
    Icon: Instagram,
    href: "#",
    label: "Instagram",
  },
  {
    Icon: Facebook,
    href: "#",
    label: "Facebook",
  },
  {
    Icon: Twitter,
    href: "#",
    label: "Twitter",
  },
  {
    Icon: Pinterest,
    href: "#",
    label: "Pinterest",
  },
];

export const FOOTER_UTILITY = {
  title: "Utility Pages",
  links: [
    { label: "Style Guide", href: "#" },
    { label: "404 Not Found", href: "#" },
    { label: "Password Protected", href: "#" },
    { label: "Licences", href: "#" },
    { label: "Changelog", href: "#" },
  ],
};

export const FOOTER_COPYRIGHT = {
  text: "Copyright ©",
  brand: "Organick",
  designedBy: "VictorFlow",
  poweredBy: "Webflow",
};

export const HEADER_LINKS = {
  home: "Home",
  cart: "Cart",
  orders: "Orders",
};

export const MODAL = {
  text: " Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  quantity: "Quantity:",
  description:
    " This is Main Description - Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.",
  additionalText:
    " This is Additional Text - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero officia ipsa expedita repellat, voluptatum quo modi quia optio quae aliquid debitis alias est aliquam aut ut saepe. Sed, deserunt eius.",
};

export const NEWS_HEADER = {
  className: "news",
  title: "News",
  heading: "Discover weekly content about organic food, & more",
};

export const NEWS_CARDS = [
  {
    image: NewsCard1,
    imageAlt: "news card 1",
    date: "25 Nov",
    author: "By Rachi Card",
    heading: "The Benefits of Vitamin D & How to Get It",
    text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  {
    image: NewsCard2,
    imageAlt: "news card 2",
    date: "25 Nov",
    author: "By Rachi Card",
    heading: "Our Favourite Summertime Tommeto",
    text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
];

export const NEWS_BUTTON = {
  className: "news__card-btn",
  text: "Read More",
  arrow: true,
};

export const SUBSCRIBE_SECTION = {
  image: {
    src: SubscribeImage,
    alt: "subscribe image",
  },
  heading: "Subscribe to our Newsletter",
  input: {
    type: "email",
    placeholder: "Your Email Address",
  },
  button: {
    text: "Subscribe",
  },
};

export const ORDERS = {
  heading: "Orders",
  empty: "No orders available",
  id: "Order ID:",
  products: "Products:",
  price: {
    sum: "Sum:",
    price: "Price:",
    discount: "Discount:",
  },
  customer: {
    name: "Name:",
    email: "Email:",
    address: "Address:",
    telephone: "Telephone:",
  },
  message: "Extra Notes:",
};

export const START_HEADER = {
  className: "start",
  title: "100% Natural Food",
  heading: "Choose the best healthier way of life",
};

export const START_CARDS = [
  {
    id: 1,
    className: "start__card start__card-1",
    title: "Natural!!",
    heading: "Get Garden Fresh Fruits",
  },
  {
    id: 2,
    className: "start__card start__card-2",
    title: "Offer!!",
    heading: "Get 10% off on Vegetables",
  },
];

export const TESTIMONIALS_HEADER = {
  className: "testimonials",
  title: "Testimonial",
  heading: "What Our Customer Saying?",
};

export const TESTIMONIALS_SWIPER_CONFIG = {
  className: "testimonials__swiper",
  spaceBetween: 50,
  slidesPerView: 1,
  loop: true,
  pagination: { clickable: true },
};

export const TESTIMONIALS_RATING = "★★★★★";

export const TESTIMONIALS_SLIDES = [
  {
    image: TestimonialsImage1,
    imageAlt: "testimonial image",
    name: "Harry Potter",
    position: "Wizard",
    text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
  },
  {
    image: TestimonialsImage2,
    imageAlt: "testimonial image",
    name: "Frodo Baggins",
    position: "Hobbit",
    text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
  },
  {
    image: TestimonialsImage3,
    imageAlt: "testimonial image",
    name: "Luke Skywalker",
    position: "Jedi",
    text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
  },
];

export const TESTIMONIALS_STATISTICS = [
  {
    value: "100%",
    label: "Organic",
  },
  {
    value: "285",
    label: "Active Product",
  },
  {
    value: "350+",
    label: "Organic Orchads",
  },
  {
    value: "25+",
    label: "Years of Farming",
  },
];
