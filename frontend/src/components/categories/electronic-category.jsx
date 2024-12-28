"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// internal
import ErrorMsg from "../common/error-msg";
import { useGetProductTypeCategoryQuery } from "@/redux/features/categoryApi";
import HomeCateLoader from "../loader/home/home-cate-loader";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation, Autoplay } from "swiper/modules";

// slider setting
const slider_setting = {
  slidesPerView: 5,
  spaceBetween:12,
  navigation: {
    nextEl: ".tp-related-slider-button-next",
    prevEl: ".tp-related-slider-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 4,
    },
    576: {
      slidesPerView: 3,
    },
    0: {
      slidesPerView: 2,
    },
  },
};

const ElectronicCategory = () => {
  const {
    data: categories,
    isLoading,
    isError,
  } = useGetProductTypeCategoryQuery("electronics");
  const router = useRouter();

  // handle category route
  const handleCategoryRoute = (title) => {
    router.push(
      `/shop?category=${title
        .toLowerCase()
        .replace("&", "")
        .split(" ")
        .join("-")}`
    );
  };
  // decide what to render
  let content = null;

  if (isLoading) {
    content = <HomeCateLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && categories?.result?.length === 0) {
    content = <ErrorMsg msg="No Category found!" />;
  }
  if (!isLoading && !isError && categories?.result?.length > 0) {
    const category_items = categories.result;

    content = (
      <Swiper
        {...slider_setting}
        modules={[Autoplay, Navigation]}
        className="swiper-container"
      >
        {category_items?.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="tp-product-category-item text-center mb-30">
              <div className="tp-product-category-thumb fix">
                <a
                  className="cursor-pointer"
                  onClick={() => handleCategoryRoute(item.parent)}
                >
                  <Image
                    src={item.img}
                    alt="product-category"
                    width={76}
                    height={98}
                  />
                </a>
              </div>
              <div className="tp-product-category-content">
                <h3 className="tp-product-category-title">
                  <a
                    className="cursor-pointer"
                    onClick={() => handleCategoryRoute(item.parent)}
                  >
                    {item.parent}
                  </a>
                </h3>
                {/* <p>{item.products.length} Бараа</p> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  return (
    <section className="tp-product-category pt-30">
      <div className="container">
          {content}
      </div>
    </section>
  );
};

export default ElectronicCategory;

// <div className="col" key={item._id}>
// <div className="tp-product-category-item text-center mb-40">
//   <div className="tp-product-category-thumb fix">
//     <a
//       className="cursor-pointer"
//       onClick={() => handleCategoryRoute(item.parent)}
//     >
//       <Image
//         src={item.img}
//         alt="product-category"
//         width={76}
//         height={98}
//       />
//     </a>
//   </div>
//   <div className="tp-product-category-content">
//     <h3 className="tp-product-category-title">
//       <a
//         className="cursor-pointer"
//         onClick={() => handleCategoryRoute(item.parent)}
//       >
//         {item.parent}
//       </a>
//     </h3>
//     {/* <p>{item.products.length} Бараа</p> */}
//   </div>
// </div>
// </div>
