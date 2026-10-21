import Image from "next/image";
import { formatPrice, type Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  className?: string;
};

/** Figma "Item" (19:977): square photo, name and price; olive tint on hover. */
export function ProductCard({ product, className = "" }: ProductCardProps) {
  return (
    <article
      className={`flex w-[250px] flex-col gap-[13px] text-black transition-colors duration-200 hover:bg-olive/64 ${className}`}
    >
      <Image
        src={product.image}
        alt={product.alt}
        width={250}
        height={250}
        sizes="250px"
        className="aspect-square w-full object-cover"
      />
      <h3 className="text-xl leading-6">{product.name}</h3>
      <p className="text-2xl leading-6">{formatPrice(product.price)}</p>
    </article>
  );
}
