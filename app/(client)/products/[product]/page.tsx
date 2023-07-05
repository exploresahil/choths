"use client";

import Image from "next/image";
import Link from "next/link";
import productImg from "@/public/assets/images/products/product-img.png";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import { products } from "@/sanity/types/Products";
import { getProduct } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { product: any };
};

export default function Product({ params }: Props) {
  const [product, setProduct] = useState<products>();
  const slug = params.product;

  useEffect(() => {
    getProduct(slug).then((data) => {
      setProduct(data);
    });
  }, [slug]);

  return (
    <div>
      {product && (
        <div className="product-slug-main">
          <div className="product-container">
            <div className="product-info">
              <h2>{product.name}</h2>
              <div className="product-details">
                <PortableText value={product.details} />
              </div>
              <div className="product-info-price-size">
                <p>Rs {product.price}</p>
                <button>S</button>
                <button>M</button>
                <button>L</button>
              </div>
              <Link href="#">Size Guide</Link>
            </div>
            <div className="product-images">
              {product.images.slice(0, 2).map((image) => (
                <div key={image._id} className="img-container">
                  <Image
                    fill
                    src={image.url}
                    style={{ objectFit: "cover" }}
                    alt="logo"
                  />
                </div>
              ))}
            </div>
            <div className="buy-now-container">
              <AiFillPlusCircle />
              <div className="line" />
              <button>
                Buy Now <BsArrowRight />
              </button>
            </div>
          </div>
          <div className="description-container">
            <PortableText value={product.description} />
          </div>
        </div>
      )}
    </div>
  );
}
