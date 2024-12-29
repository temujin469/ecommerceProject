import React from "react";
import { useDispatch } from "react-redux";
// internal
import { Filter } from "@/svg";
import NiceSelect from "@/ui/nice-select";
import { handleFilterSidebarOpen } from "@/redux/features/shop-filter-slice";

const ShopTopRight = ({ selectHandleFilter }) => {
  const dispatch = useDispatch();
  return (
    <div className="tp-shop-top-right d-sm-flex align-items-center justify-content-xl-end">
      <div className="tp-shop-top-select">
        <NiceSelect
          options={[
            { value: "Default Sorting", text: "Үндсэн эрэмбэлэлт" },
            { value: "Low to High", text: "Үнэ багаас их" },
            { value: "High to Low", text: "Үнэ ихээс бага" },
            { value: "New Added", text: "Шинээр нэмэгдсэн" },
            { value: "On Sale", text: "Хямдралтай" },
          ]}
          defaultCurrent={0}
          onChange={selectHandleFilter}
          name="Default Sorting"
          className="w-100"
        />
      </div>
      <div className="tp-shop-top-filter">
        <button
          onClick={() => dispatch(handleFilterSidebarOpen())}
          type="button"
          className="tp-filter-btn w-100"
        >
          <span>
            <Filter />
          </span>{" "}
          Шүүлтүүр
        </button>
      </div>
    </div>
  );
};

export default ShopTopRight;
