import React from "react";
import { useTimer } from "react-timer-hook";

const OfferTimer = ({ expiryTimestamp }) => {
  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp });
  return (
    <div className="tp-coupon-countdown-inner">
      <ul>
        <li>
          <span>{days}</span> Өдөр
        </li>
        <li>
          <span>{hours}</span> Цаг
        </li>
        <li>
          <span>{minutes}</span> Мин
        </li>
        <li>
          <span>{seconds}</span> Сек
        </li>
      </ul>
    </div>
  );
};

export default OfferTimer;
