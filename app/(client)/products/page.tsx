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
  const [_products, set_Products] = useState<products[] | any[]>([]);
  const [categories, setCategories] = useState<category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("view all");

  useEffect(() => {
    async function fetchProducts() {
      const products = await getProducts();
      setProducts(products);
      set_Products(products);
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
  //====
  const [selectedFilters, setSelectedFilters] = useState<any[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<any[]>([]);
  //====
  useEffect(() => {
    set_Products((pro) => {
      console.log(pro);
      let sort = products.map((v) => {
        if (v.type && v.size) {
          console.log(v.type, selectedFilters);

          console.log(selectedFilters.some((s) => v.type.indexOf(s) >= 0));

          if (
            selectedSizes.some((s) => v.size.indexOf(s) >= 0) ||
            selectedFilters.some((s) => v.type.indexOf(s) >= 0)
          )
            return v;
        }
      });

      return sort.filter(Boolean);
    });

    // return () => {};
  }, [selectedFilters, selectedSizes]);
  console.log("log ->>", _products, products);
  return (
    <div className="products-main">
      <Filter
        {...{
          selectedSizes,
          setSelectedSizes,
          selectedFilters,
          setSelectedFilters,
        }}
      />
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
            {_products.length !== 0
              ? _products.map((product) => {
                  if (selectedCategory == "view all") {
                    // console.log(product.size);
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
                })
              : products.map((product) => {
                  if (selectedCategory == "view all") {
                    // console.log(product.size);
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
