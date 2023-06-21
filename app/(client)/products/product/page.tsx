import Image from "next/image";
import Link from "next/link";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

import productImg from "@/public/assets/images/products/product-img.png";

const Product = () => {
  return (
    <div className="product-slug-main">
      <div className="product-container">
        <div className="product-info">
          <h2>
            <span>UPCYCLED</span> SHIRT KURTA
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
          <div className="product-info-price-size">
            <p>rs 850</p>
            <button>S</button>
            <button>M</button>
            <button>L</button>
          </div>
          <Link href="#">Size Guide</Link>
        </div>
        <div className="product-images">
          <div className="img-container">
            <Image
              fill
              src={productImg}
              style={{ objectFit: "cover" }}
              alt="logo"
            />
          </div>
          <div className="img-container">
            <Image
              fill
              src={productImg}
              style={{ objectFit: "cover" }}
              alt="logo"
            />
          </div>
        </div>
        <div className="buy-now-container">
          <AiFillPlusCircle />
          <div className="line" />
          <button>
            Buy Now <BsArrowRight />
          </button>
        </div>
      </div>
      <div className="description-container"></div>
    </div>
  );
};

export default Product;
