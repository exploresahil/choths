import Image from "next/image";

import productImg from "@/public/assets/images/products/product-img.png";
import Link from "next/link";

const Products = () => {
  return (
    <div className="products-main">
      <div className="products-container">
        <div className="sidebar">
          <ul>
            <li>shirt kurta</li>
            <li>crop tops</li>
            <li>co-ords</li>
            <li>samosa tote bag</li>
            <li>laptop sleeves</li>
            <li>view all</li>
          </ul>
        </div>
        <Link href="#" className="products">
          <div className="products-grid">
            <div className="product">
              <div className="img-container">
                <Image
                  fill
                  src={productImg}
                  style={{ objectFit: "cover" }}
                  alt="logo"
                />
              </div>
              <div className="product-info">
                <h3>PRODUCT NAME</h3>
                <p>RS.1200</p>
              </div>
            </div>
            <div className="product">
              <div className="img-container">
                <Image
                  fill
                  src={productImg}
                  style={{ objectFit: "cover" }}
                  alt="logo"
                />
              </div>
              <div className="product-info">
                <h3>PRODUCT NAME</h3>
                <p>RS.1200</p>
              </div>
            </div>
            <div className="product">
              <div className="img-container">
                <Image
                  fill
                  src={productImg}
                  style={{ objectFit: "cover" }}
                  alt="logo"
                />
              </div>
              <div className="product-info">
                <h3>PRODUCT NAME</h3>
                <p>RS.1200</p>
              </div>
            </div>
            <div className="product">
              <div className="img-container">
                <Image
                  fill
                  src={productImg}
                  style={{ objectFit: "cover" }}
                  alt="logo"
                />
              </div>
              <div className="product-info">
                <h3>PRODUCT NAME</h3>
                <p>RS.1200</p>
              </div>
            </div>
            <div className="product">
              <div className="img-container">
                <Image
                  fill
                  src={productImg}
                  style={{ objectFit: "cover" }}
                  alt="logo"
                />
              </div>
              <div className="product-info">
                <h3>PRODUCT NAME</h3>
                <p>RS.1200</p>
              </div>
            </div>
            <div className="product">
              <div className="img-container">
                <Image
                  fill
                  src={productImg}
                  style={{ objectFit: "cover" }}
                  alt="logo"
                />
              </div>
              <div className="product-info">
                <h3>PRODUCT NAME</h3>
                <p>RS.1200</p>
              </div>
            </div>
            <div className="product">
              <div className="img-container">
                <Image
                  fill
                  src={productImg}
                  style={{ objectFit: "cover" }}
                  alt="logo"
                />
              </div>
              <div className="product-info">
                <h3>PRODUCT NAME</h3>
                <p>RS.1200</p>
              </div>
            </div>
            <div className="product">
              <div className="img-container">
                <Image
                  fill
                  src={productImg}
                  style={{ objectFit: "cover" }}
                  alt="logo"
                />
              </div>
              <div className="product-info">
                <h3>PRODUCT NAME</h3>
                <p>RS.1200</p>
              </div>
            </div>
          </div>
        </Link>
        <div className="blank" />
      </div>
    </div>
  );
};

export default Products;
