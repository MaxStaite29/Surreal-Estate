import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";
import "../styles/addproperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      type: "Flat",
      bedrooms: "",
      bathrooms: "",
      price: "",
      city: "Manchester",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    axios
      .post("http://localhost:4000/api/v1/PropertyListing", fields)
      .then(() => {
        setAlert({
          message: "Property Added",
          isSuccess: true,
        });
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <form onSubmit={handleAddProperty} className="add-property-form">
        <div className="add-property-items">
          <label htmlFor="title">
            Title:
            <input
              className="add-property-title"
              id="title"
              name="title"
              placeholder="2 bed flat"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>

          <label htmlFor="type">
            Type:
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End Of Terrace">End Of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>

          <label htmlFor="bedrooms">
            Bedrooms:
            <input
              id="bedrooms"
              name="bedrooms"
              placeholder="2"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>

          <label htmlFor="bathrooms">
            Bathrooms:
            <input
              id="bathrooms"
              name="bathrooms"
              placeholder="4"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            />
          </label>

          <label htmlFor="price">
            Price: £
            <input
              className="add-property-price"
              id="price"
              name="price"
              placeholder="100000"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
              className="input-email"
              id="email"
              name="email"
              placeholder="JohnDoe@email.com"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>

          <label htmlFor="city">
            City:
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>

          <button type="submit">Add</button>
          <Alert message={alert.message} success={alert.isSuccess} />
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
