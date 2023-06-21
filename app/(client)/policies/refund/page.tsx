"use client";

import {
  CategoriesWatermarkCenter,
  CategoriesWatermarkOuter,
} from "@/components/icons/Icons";

const Refund = () => {
  return (
    <div className="refund-main">
      <div className="refund-watermark-container">
        <CategoriesWatermarkCenter />
        <CategoriesWatermarkOuter />
      </div>
      <div className="refund-heading">
        <h1>Refund & Return Policy</h1>
        <p>
          At The Kapda Project, we strive to provide you with the best possible
          shopping experience. If you are not entirely satisfied with your
          purchase, we offer a refund and return policy outlined below. Please
          read the policy carefully to understand the conditions and process for
          returns and refunds.
        </p>
      </div>
      <div className="refund-content-section">
        <div className="refund-content">
          <h2>Returns/Exchange on Discounted Merchandise</h2>
          <div>
            <p>
              a. Returns or exchanges are not applicable to discounted
              merchandise. We do not accept returns or exchanges for items
              purchased at a discounted price, including sale items or items
              purchased using a promotional code.
            </p>
          </div>
        </div>
        <div className="refund-content">
          <h2>Refunds for Order Cancellation</h2>
          <div>
            <p>
              a. You are eligible for a refund if you cancel your order within
              the first two days after placing it.
            </p>
            <p>
              b. To request a cancellation and refund, please contact our
              customer support team through mail as soon as possible with your
              order details.
            </p>
            <p>
              c. The refund will be credited back to the original source of
              payment within 7 working days after cancellation.
            </p>
          </div>
        </div>
        <div className="refund-content">
          <h2>Returns for Non-Delight</h2>
          <div>
            <p>
              a. If you are not entirely delighted with the products you have
              chosen, you may return them to us within 7 days of receipt.
            </p>
            <p>
              b. To initiate a return, please contact our customer support team
              with your order details and reason for the return.
            </p>
            <p>c. The return shipping address is as follows:</p>
            <p>2/b Dongre Layout,</p>
            <p>Shraddhanand Peth,</p>
            <p>Madhav Nagar,</p>
            <p>Nagpur 440010</p>
          </div>
        </div>
        <div className="refund-content">
          <h2>Return Conditions</h2>
          <div>
            <p>
              a. Products must be returned complete, in perfect condition,
              unused, and with the original packaging.
            </p>
            <p>
              b. We accept returns only for standard sizes. Customized or
              tailored items are not eligible for return unless there is a
              manufacturing defect or an error on our part.
            </p>
          </div>
        </div>
        <div className="refund-content">
          <h2>Exchange</h2>
          <div>
            <p>a. We offer exchanges only for standard sizes.</p>
            <p>
              b. If you wish to exchange an item for a different size, please
              contact our customer support team with your order details and size
              preference.
            </p>
            <p>
              c. Exchanges are subject to availability. If the requested size is
              not available, we will provide you with alternative options or
              process a refund.
            </p>
          </div>
        </div>
        <div className="refund-content">
          <h2>Return Shipping</h2>
          <div>
            <p>
              a. The cost of return shipping is the responsibility of the
              customer unless there is a manufacturing defect or an error on our
              part.
            </p>
            <p>
              b. We recommend using a trackable shipping method and retaining
              proof of postage until the return process is completed.
            </p>
          </div>
        </div>
        <div className="refund-content">
          <h2>Refund Process</h2>
          <div>
            <p>
              a. Once we receive the returned items and verify their condition,
              we will process the refund.
            </p>
            <p>
              b. Refunds will be credited back to the original source of payment
              within 7 working days after receiving the returned items.
            </p>
          </div>
        </div>
        <div className="refund-content">
          <h2>Exceptions</h2>
          <div>
            <p>
              a. The accessories purchased are not considered under return or
              exchange. The orders for accessories can only be cancelled within
              the first two days of order placement.
            </p>
          </div>
        </div>
        <div className="refund-content">
          <h2>Contact Us</h2>
          <div>
            <p>
              If you have any questions, concerns, or requests regarding our
              refund and return policy, please contact our customer support team
              at Team@thekapdaproject.com Please note that this policy applies
              to purchases made directly from The Kapda Project website and not
              from our partnered offline stores. For offline stores, we request
              you to kindly co-ordinate with the respective store partners
              directly.
            </p>
          </div>
        </div>
      </div>
      <div className="refund-updated">
        <p>Last updated: 18th June 2023</p>
      </div>
    </div>
  );
};

export default Refund;
