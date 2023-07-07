"use client";

import Image from "next/image";
import { useState } from "react";
import productImage from "@/public/assets/images/products/product-img.png";

const User = () => {
  const [activeTab, setActiveTab] = useState("order");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="user-main-container">
      <div className="user-menu">
        <button
          onClick={() => handleTabClick("order")}
          className={activeTab === "order" ? "active" : ""}
        >
          Orders
        </button>
        <button
          onClick={() => handleTabClick("account")}
          className={activeTab === "account" ? "active" : ""}
        >
          Account
        </button>
        <button
          onClick={() => handleTabClick("settings")}
          className={activeTab === "settings" ? "active" : ""}
        >
          Settings
        </button>
      </div>
      {activeTab === "order" && (
        <div className="order-container menu-section">
          <h2>SANYUKTA ADHIKARY</h2>
          <div className="product-main-container">
            <div className="product-info">
              <div className="image-container">
                <Image
                  fill
                  src={productImage}
                  style={{ objectFit: "cover" }}
                  alt="footer-logo"
                />
              </div>
              <div className="item-info">
                <div className="info">
                  <h3>striped shirt kurta</h3>
                  <p>rs 850</p>
                </div>
                <div className="item-filter">
                  <p>M</p>
                  <p>1</p>
                </div>
              </div>
            </div>
            <div className="product-info">
              <div className="image-container">
                <Image
                  fill
                  src={productImage}
                  style={{ objectFit: "cover" }}
                  alt="footer-logo"
                />
              </div>
              <div className="item-info">
                <div className="info">
                  <h3>striped shirt kurta</h3>
                  <p>rs 850</p>
                </div>
                <div className="item-filter">
                  <p>M</p>
                  <p>1</p>
                </div>
              </div>
            </div>
            <div className="product-info">
              <div className="image-container">
                <Image
                  fill
                  src={productImage}
                  style={{ objectFit: "cover" }}
                  alt="footer-logo"
                />
              </div>
              <div className="item-info">
                <div className="info">
                  <h3>striped shirt kurta</h3>
                  <p>rs 850</p>
                </div>
                <div className="item-filter">
                  <p>M</p>
                  <p>1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === "account" && (
        <div className="account-container menu-section">Account</div>
      )}
      {activeTab === "settings" && (
        <div className="settings-container menu-section">Settings</div>
      )}
    </div>
  );
};

export default User;
