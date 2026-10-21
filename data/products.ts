export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  alt: string;
};

/** Featured matcha bakes from the Figma "Featured Items" section. */
export const PRODUCTS: Product[] = [
  {
    id: "raspberry-macarons",
    name: "Matcha Raspberry Blossom Macarons",
    price: 4.99,
    image: "/images/products/raspberry-macarons.jpg",
    alt: "Rows of matcha macarons filled with green cream and freeze-dried raspberry",
  },
  {
    id: "pistachio-macarons",
    name: "Pistachio Garden Macarons",
    price: 4.99,
    image: "/images/products/pistachio-macarons.jpg",
    alt: "Pale green macarons topped with chopped pistachios",
  },
  {
    id: "almond-croissants",
    name: "Matcha Almond Dipped Croissants",
    price: 4.99,
    image: "/images/products/almond-croissants.jpg",
    alt: "Croissants half-dipped in matcha glaze with toasted almonds",
  },
  {
    id: "snow-peak-danish",
    name: "Matcha Snow Peak Danish",
    price: 4.99,
    image: "/images/products/snow-peak-danish.jpg",
    alt: "Spiral danish pastries filled with matcha cream peaks and powdered sugar",
  },
];

export function formatPrice(price: number) {
  return `$ ${price.toFixed(2)}`;
}
