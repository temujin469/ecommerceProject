'use client'
import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useSearchParams } from 'next/navigation';
// internal
import ErrorMsg from "@/components/common/error-msg";
import { useGetAllProductsQuery } from "@/redux/features/productApi";
import { handleFilterSidebarClose } from "@/redux/features/shop-filter-slice";
import ShopColorLoader from "@/components/loader/shop/color-filter-loader";

const ColorFilter = ({setCurrPage,shop_right=false}) => {
  const { data: products, isError, isLoading } = useGetAllProductsQuery();
  const router = useRouter();
  const dispatch = useDispatch()
  const searchParams = useSearchParams();
  const color = searchParams.get('color');

  // handle color 
  const handleColor = (clr) => {
    setCurrPage(1)
    router.push(
      `/${shop_right?'shop-right-sidebar':'shop'}?color=${clr
        .toLowerCase()
        .split(" ")
        .join("-")}`
    )
    dispatch(handleFilterSidebarClose());
  }
  // decide what to render
  let content = null;

  if (isLoading) {
    content = <ShopColorLoader loading={isLoading}/>;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    const product_items = products.data;
    let allColor = [];
    product_items.forEach((product) => {
      let uniqueColor = new Set(product.imageURLs.map((item) => item?.color));
      allColor = [...new Set([...allColor, ...uniqueColor])];
    });

    let uniqueColors = [
      ...new Map(allColor.map((color) => [color?.name, color])).values(),
    ];
    content = uniqueColors.map((item, i) => {
      if (item) {
        return (
          <li key={i}>
            <div className="tp-shop-widget-checkbox-circle">
              <input
                type="checkbox"
                id={item.name}
                checked={
                  color ===
                  item.name.toLowerCase().replace("&", "").split(" ").join("-")
                    ? "checked"
                    : false
                }
                readOnly
              />
              <label
                onClick={() => handleColor(item.name)}
                htmlFor={item.name}
              >
                {item.name}
              </label>
              <span
                style={{ backgroundColor: `${item.clrCode}` }}
                className="tp-shop-widget-checkbox-circle-self"
              ></span>
            </div>
            <span className="tp-shop-widget-checkbox-circle-number">
              {
                product_items
                  .map((p) => p.imageURLs)
                  .flat()
                  .filter((i) => i?.color?.name === item?.name).length
              }
            </span>
          </li>
        );
      }
    });
  }

  return (
    <>
      <div className="tp-shop-widget mb-50">
        <h3 className="tp-shop-widget-title">Өнгө</h3>
        <div className="tp-shop-widget-content">
          <div className="tp-shop-widget-checkbox-circle-list">
            <ul>{content}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorFilter;
