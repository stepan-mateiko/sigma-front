import propTypes from "prop-types";

import Button from "../Button";

const ElementHeader = (props) => {
  const { className, title, heading } = props;
  return (
    <div className={`${className}__header`}>
      <p className={`${className}__title`}>{title} </p>
      {className === "start" && (
        <h1 className={`${className}__heading`}>{heading}</h1>
      )}
      {className === "start" && (
        <Button className={"start__btn"} text={"Explore Now"} arrow={true} />
      )}
      {className !== "start" && (
        <h2 className={`${className}__heading`}>{heading}</h2>
      )}
      {className === "news" && (
        <Button className={"news__btn"} text={"More News"} arrow={true} />
      )}
    </div>
  );
};

export default ElementHeader;

ElementHeader.propTypes = {
  className: propTypes.string,
  title: propTypes.string,
  heading: propTypes.string,
};
