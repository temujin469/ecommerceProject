'use client';
import React from "react";
import Image from "next/image";
import payment_option_img from '@assets/img/product/icons/payment-option.png';

const DetailsBottomInfo = ({sku,category,tag}) => {
  return (
    <>
      {/* product-details-query */}
      <div className="tp-product-details-query">
        <div className="tp-product-details-query-item d-flex align-items-center">
          <span>Код: </span>
          <p>{sku}</p>
        </div>
        <div className="tp-product-details-query-item d-flex align-items-center">
          <span>Ангилал: </span>
          <p>{category}</p>
        </div>
        <div className="tp-product-details-query-item d-flex align-items-center">
          <span>Төрөл: </span>
          <p>{tag}</p>
        </div>
      </div>

      {/*  product-details-social*/}

      <div className="tp-product-details-social">
        {/* <span>Хуваалцах </span> */}
        <a href="#">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-vimeo-v"></i>
        </a>
      </div>

      {/* product-details-msg */}

      <div className="tp-product-details-msg mb-15">
        <ul>
          <li>Хэрэглээний баталгаатай</li>
          <li>Хот дотор хүргэлт үнэгүй</li>
        </ul>
      </div>
      {/* product-details-payment */}
      {/* <div className="tp-product-details-payment d-flex align-items-center flex-wrap justify-content-between">
        <p>
          Guaranteed safe <br /> & secure checkout
        </p>
        <Image src={payment_option_img} alt="payment_option_img" />
      </div> */}
    </>
  );
};

export default DetailsBottomInfo;
