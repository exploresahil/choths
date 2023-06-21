"use client";

import {
  CategoriesWatermarkCenter,
  CategoriesWatermarkOuter,
} from "@/components/icons/Icons";

const Shipping = () => {
  return (
    <div className="shipping-main">
      <div className="shipping-watermark-container">
        <CategoriesWatermarkCenter />
        <CategoriesWatermarkOuter />
      </div>
      <div className="shipping-heading">
        <h1>SHIPPING POLICY</h1>
        <p>
          Thank you for choosing The Kapda Project for your upcycled fashion
          needs. We are committed to providing you with a smooth and efficient
          shipping experience. Please read our shipping policy below to
          understand the details of our shipping process.
        </p>
      </div>
      <div className="shipping-content-section">
        <div className="shipping-content">
          <h2>Order Processing</h2>
          <div>
            <p>
              Once an order is received, we will process it within 1 to 2
              working days. This includes verifying the order details, preparing
              the items, and packaging them securely.
            </p>
          </div>
        </div>
        <div className="shipping-content">
          <h2>Shipping Timeframe</h2>
          <div>
            <p>
              After the order has been processed, the shipping of your items
              will take place within 4 to 6 working days across all regions of
              India. Please note that weekends and public holidays are not
              considered working days and may affect the shipping timeframe.
            </p>
          </div>
        </div>
        <div className="shipping-content">
          <h2>Order Tracking</h2>
          <div>
            <p>
              We offer order tracking for your convenience. Once your order has
              been shipped, we will send a tracking link to the registered
              mobile number and email address provided during checkout. You can
              use this tracking link to monitor the progress of your shipment
              and obtain real-time updates on its whereabouts.
            </p>
          </div>
        </div>
        <div className="shipping-content">
          <h2>Non-Delivery</h2>
          <div>
            <p>
              In the rare event that you do not receive your order within the
              allotted shipping timeframe, we apologize for any inconvenience
              caused. If your order has not been delivered within the expected
              timeframe, please reach out to us at Shipping@thekapdaproject.com.
              In the email subject line, kindly mention &quot;Order Not
              Delivered&quot; to ensure a prompt response from our team. Our
              customer support team will investigate the matter and provide you
              with a resolution as soon as possible.
            </p>
          </div>
        </div>
      </div>
      <div className="shipping-additional-points">
        <p>Please note the following additional points:</p>
        <p>
          <span>Shipping fees :</span> The Kapda Project offers free shipping
          for all orders above Rs 1000 across India. For The orders below Rs
          1000, a flat charge of Rs 69 is charged for all the regions in india.
        </p>
        <p>
          <span>Address Accuracy :</span> It is essential to provide accurate
          shipping information during checkout. The Kapda Project will not be
          responsible for any delays or non-delivery caused by incorrect or
          incomplete addresses provided by the customer.
        </p>
        <p>
          <span>International Shipping :</span> Currently, The Kapda Project
          only ships within India. We do not offer international shipping at
          this time.
        </p>
        <p>
          We strive to provide you with the best possible shipping experience.
          If you have any further questions or concerns about our shipping
          policy, please don&apos;t hesitate to contact us at
          Shipping@thekapdaproject.com.
        </p>
        <p>
          Thank you for supporting The Kapda Project, and we hope you enjoy your
          upcycled fashion items!
        </p>
      </div>
      <div className="shipping-sign-off">
        <p>Sincerely,</p>
        <p>The Kapda Project Shipping Team</p>
      </div>
    </div>
  );
};

export default Shipping;
