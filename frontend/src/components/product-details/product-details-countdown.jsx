'use client';
import React from "react";
import Timer from "../common/timer";
import dayjs from "dayjs";

const ProductDetailsCountdown = ({ offerExpiryTime }) => {
  return (
    <div className="tp-product-details-countdown d-flex align-items-center justify-content-between flex-wrap mt-25 mb-25">
      <h4 className="tp-product-details-countdown-title">
        <i className="fa-solid fa-fire-flame-curved"></i> Дуусах хугацаа:{" "}
      </h4>
      <div
        className="tp-product-details-countdown-time"
      >
        {dayjs().isAfter(offerExpiryTime) ? (
          <ul>
            <li>
              <span>{0}</span> Өдөр
            </li>
            <li>
              <span>{0}</span> Цаг
            </li>
            <li>
              <span>{0}</span> Мин
            </li>
            <li>
              <span>{0}</span> Сек
            </li>
          </ul>
        ) : (
          <Timer expiryTimestamp={new Date(offerExpiryTime)} />
        )}
      </div>
    </div>
  );
};

export default ProductDetailsCountdown;
