import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const props = {
    title: "New Home",
    type: "Detached",
    bathrooms: "3",
    bedrooms: "4",
    price: "100000",
    city: "Manchester",
    email: "JohnDoe@gmail.com",
  };

  test("renders correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={props.title}
        type={props.type}
        bathrooms={props.bathrooms}
        bedrooms={props.bedrooms}
        price={props.price}
        city={props.city}
        email={props.email}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
