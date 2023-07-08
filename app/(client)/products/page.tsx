"use client";

import Filter from "@/components/client/Filter";
import Image from "next/image";

import ContactArrow from "@/components/icons/ContactArrow";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCategories, getProducts } from "@/sanity/sanity-utils";
import { products } from "@/sanity/types/Products";
import { category } from "@/sanity/types/Category";
import { AiOutlinePlus } from "react-icons/ai";
import { useSearchParams } from "next/navigation";

const Products = () => {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<products[]>([]);
  const [categories, setCategories] = useState<category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("view all");

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
  }, [selectedCategory]);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    setSelectedCategory(categoryParam || "view all");
  }, [searchParams]);

  const handleCategoryClick = (selectedCategory: any) => {
    setSelectedCategory(selectedCategory);
  };

  return (
    <div className="products-main">
      <Filter />
      <div className="products-container">
        <div className="sidebar">
          <ul className="category-container">
            {categories.map((category) => (
              <li
                className={`${
                  selectedCategory === `${category.name}` ? "active" : ""
                }`}
                key={category._id}
                onClick={() => {
                  handleCategoryClick(category.name);
                }}
              >
                {category.name}
                <ContactArrow />
              </li>
            ))}
            <li
              className={`${selectedCategory === "view all" ? "active" : ""}`}
              onClick={() => {
                handleCategoryClick("view all");
              }}
            >
              view all
              <ContactArrow />
            </li>
          </ul>
        </div>
        <div className="products">
          <div className="products-grid">
            {products.map((product) => {
              if (selectedCategory == "view all") {
                console.log(product.size);
                return (
                  <a
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
                      <button type="button">
                        <AiOutlinePlus />
                      </button>
                    </div>
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p>RS.{product.price}</p>
                    </div>
                  </a>
                );
              } else if (
                selectedCategory == product.category.name &&
                product.category.name == product.category.name
              ) {
                return (
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
                );
              }
            })}
          </div>
        </div>
        <div className="blank" />
      </div>
    </div>
  );
};

export default Products;
