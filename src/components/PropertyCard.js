import React from "react";
import "../styles/propertycard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faSterlingSign,
  faEnvelope,
  faHouse,
  faLocationDot,
  faHouseChimneyWindow,
} from "@fortawesome/free-solid-svg-icons";

const PropertyCard = (props) => {
  const { title, type, bathrooms, bedrooms, price, city, email } = props;

  return (
    <div className="property-card" data-testid="property-card">
      <div className="house-icon">
        <FontAwesomeIcon
          icon={faHouseChimneyWindow}
          size="2xl"
          className="house-icon-img"
        />
      </div>
      <div className="property-card-title">{title}</div>
      <div className="property-card-type-city">
        <FontAwesomeIcon icon={faHouse} /> {type} -{" "}
        <FontAwesomeIcon icon={faLocationDot} /> {city}
      </div>
      <div className="property-card-bathrooms">
        <FontAwesomeIcon icon={faBath} /> {bathrooms}
      </div>
      <div className="property-card-bedrooms">
        <FontAwesomeIcon icon={faBed} /> {bedrooms}
      </div>
      <div className="property-card-price">
        <FontAwesomeIcon icon={faSterlingSign} /> {price}
      </div>
      <div className="property-card-email">
        <FontAwesomeIcon icon={faEnvelope} className="email-icon" />{" "}
        <a href={`mailto:${email}`}>Email</a>
      </div>
    </div>
  );
};

export default PropertyCard;
