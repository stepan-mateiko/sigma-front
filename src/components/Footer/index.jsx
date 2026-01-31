import { Logo } from "../Icon";

import {
  FOOTER_CONTACTS,
  FOOTER_DESCRIPTION,
  FOOTER_SOCIALS,
  FOOTER_UTILITY,
  FOOTER_COPYRIGHT,
} from "../../helpers/constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__contacts footer__card">
          <h3 className="footer__contacts-title">{FOOTER_CONTACTS.title}</h3>

          <ul className="footer__contacts-list">
            {FOOTER_CONTACTS.items.map(({ label, value }) => (
              <li className="footer__contacts-list-item" key={label}>
                <strong>{label}</strong>
                <br />
                {value}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__links footer__card">
          <Logo />

          <p className="footer__links-text">{FOOTER_DESCRIPTION}</p>

          <div className="logo__links-wrapper">
            {FOOTER_SOCIALS.map(({ Icon, href, label }) => (
              <a href={href} aria-label={label} key={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__utility footer__card">
          <h3 className="footer__utility-title">{FOOTER_UTILITY.title}</h3>

          <ul className="footer__utility-list">
            {FOOTER_UTILITY.links.map(({ label, href }) => (
              <li className="footer__utility-list-item" key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="footer__line" />

      <div className="footer__copyright">
        <p>
          {FOOTER_COPYRIGHT.text} <strong>{FOOTER_COPYRIGHT.brand}</strong> |
          Designed by <strong>{FOOTER_COPYRIGHT.designedBy}</strong> Templates -
          Powered by <strong>{FOOTER_COPYRIGHT.poweredBy}</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
