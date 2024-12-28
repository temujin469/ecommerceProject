import React from "react";
import useCartInfo from "@/hooks/use-cart-info";

const RenderCartProgress = () => {
  const { total } = useCartInfo();
  const freeShippingThreshold = 100000;
  const progress = (total / freeShippingThreshold) * 100;
  if (total < freeShippingThreshold) {
    const remainingAmount = freeShippingThreshold - total;
    return (
      <>
        <p>{`${remainingAmount}₮ дээш худалдан авалт хийвэл хүргэлт үнэгүй`}</p>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            data-width={`${progress}%`}
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </>
    );
  }
  return (
    <>
      <p>Та үнэгүй хүргэлт хийлгэх эрхтэй боллоо</p>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          data-width={`${progress}%`}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </>
  );
};

export default RenderCartProgress;
