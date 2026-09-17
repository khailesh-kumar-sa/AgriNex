import { describe, expect, it } from "vitest";
import { products } from "../client/src/App";

describe("FarmConnect demo catalog", () => {
  it("ships the 12 core produce listings requested for judge mode", () => {
    expect(products).toHaveLength(12);
    expect(products.map(product => product.name)).toEqual(expect.arrayContaining([
      "Tomatoes",
      "Potatoes",
      "Onions",
      "Basmati Rice",
      "Wheat",
      "Alphonso Mangoes",
      "Himachal Apples",
      "Chickpeas",
      "Groundnuts",
      "Robusta Bananas",
      "Brinjal",
      "Green Chillies",
    ]));
  });

  it("contains the seeded tomato scenario used in the order flow", () => {
    const tomatoes = products.find(product => product.id === "tomatoes");
    expect(tomatoes).toMatchObject({
      farmer: "Arun Kumar",
      location: "Nashik, MH",
      qty: 100,
      price: 30,
      rating: 4.9,
      organic: true,
    });
  });
});
