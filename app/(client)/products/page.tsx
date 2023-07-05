"use client";

import Filter from "@/components/client/Filter";
import Image from "next/image";

import productImg from "@/public/assets/images/products/product-img.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PortableTextBlock } from "sanity";
import { getCategories, getProducts } from "@/sanity/sanity-utils";
import { products } from "@/sanity/types/Products";
import { category } from "@/sanity/types/Category";

const Products = () => {
  const [products, setProducts] = useState<products[]>([]);
  const [categories, setCategories] = useState<category[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const products = await getProducts();
      setProducts(products);
    }

    async function fetchCategories() {
      const categories = await getCategories();
      setCategories(categories);
    }

    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <div className="products-main">
      <Filter />
      <div className="products-container">
        <div className="sidebar">
          <ul>
            {categories.map((category) => (
              <li key={category._id}>{category.name}</li>
            ))}
          </ul>
        </div>
        <div className="products">
          <div className="products-grid">
            {products.map((product) => (
              <Link
                key={product._id}
                href={`/products/${product.slug}`}
                className="product"
              >
                <div className="img-container">
                  {product.images && (
                    <Image
                      fill
                      src={product.images[0].url}
                      style={{ objectFit: "cover" }}
                      alt={product.slug}
                    />
                  )}
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>RS.{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="blank" />
      </div>
    </div>
  );
};

export default Products;
