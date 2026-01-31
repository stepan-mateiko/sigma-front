import { Logo, Instagram, Facebook, Twitter, Pinterest } from "../Icon";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__contacts footer__card">
          <h3 className="footer__contacts-title">Contact Us</h3>
          <ul className="footer__contacts-list">
            <li className="footer__contacts-list-item">
              <strong>Email</strong> <br /> needhelp@Organia.com
            </li>
            <li className="footer__contacts-list-item">
              <strong>Phone</strong> <br /> 666 888 888
            </li>
            <li className="footer__contacts-list-item">
              <strong>Address</strong> <br />
              88 road, borklyn street, USA
            </li>
          </ul>
        </div>
        <div className="footer__links footer__card">
          <Logo />
          <p className="footer__links-text">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing
          </p>
          <div className="logo__links-wrapper">
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Twitter />
            </a>
            <a href="#">
              <Pinterest />
            </a>
          </div>
        </div>
        <div className="footer__utility footer__card">
          <h3 className="footer__utility-title">Utility Pages</h3>
          <ul className="footer__utility-list">
            <li className="footer__utility-list-item">
              <a href="#">Style Guide</a>
            </li>
            <li className="footer__utility-list-item">
              <a href="#">404 Not Found</a>
            </li>
            <li className="footer__utility-list-item">
              <a href="#">Password Protected</a>
            </li>
            <li className="footer__utility-list-item">
              <a href="#">Licences</a>
            </li>
            <li className="footer__utility-list-item">
              <a href="#">Changelog</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="footer__line" />
      <div className="footer__copyright">
        <p>
          Copyright © <strong>Organick</strong> | Designed by{" "}
          <strong>VictorFlow</strong> Templates - Powered by{" "}
          <strong>Webflow</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
