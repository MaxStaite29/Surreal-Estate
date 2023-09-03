import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/properties.css";

const Properties = () => {
  const initialState = {
    properties: [],
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [properties, setProperties] = useState(initialState.properties);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then((res) => setProperties(res.data))
      .catch(() => {
        setAlert({
          message: "Server Error, please try again later.",
          isSuccess: false,
        });
      });
  }, []);

  return (
    <div className="properties">
      {properties.map((property) => (
        <div key={property._id} className="item">
          <PropertyCard {...property} />
        </div>
      ))}{" "}
      <Alert message={alert.message} success={alert.isSuccess} />
    </div>
  );
};

export default Properties;
