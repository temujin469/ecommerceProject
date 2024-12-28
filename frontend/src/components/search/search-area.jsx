'use client';
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import NiceSelect from "@/ui/nice-select";
import ErrorMsg from "@/components/common/error-msg";
import SearchPrdLoader from "@/components/loader/search-prd-loader";
import ProductItem from "@/components/products/fashion/product-item";
import { useGetAllProductsQuery } from "@/redux/features/productApi";


export default function SearchArea() {
  const searchParams = useSearchParams();
  const searchText = searchParams.get('searchText');
  const productType = searchParams.get('productType');
  const { data: products, isError, isLoading } = useGetAllProductsQuery();
  const [shortValue, setShortValue] = useState("");
  const perView = 8;
  const [next, setNext] = useState(perView);

  // selectShortHandler
  const shortHandler = (e) => {
    setShortValue(e.value);
  };

  //   handleLoadMore
  const handleLoadMore = () => {
    setNext((value) => value + 4);
  };

  // decide what to render
  let content = null;
  if (isLoading) {
    content = <SearchPrdLoader loading={isLoading} />;
  }

  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }

  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="Бүтээгдэхүүн олдсонгүй!" />;
  }

  if (!isLoading && !isError && products?.data?.length > 0) {
    let all_products = products.data;
    let product_items = all_products;

    if (searchText && !productType) {
      product_items = all_products.filter((prd) =>
        prd.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    if (searchText && productType) {
      product_items = all_products.filter(
        (prd) => prd.productType.toLowerCase() === productType.toLowerCase()
      ).filter(p => p.title.toLowerCase().includes(searchText.toLowerCase()));
    }
     // Price low to high
     if (shortValue === "Price low to high") {
      product_items = product_items
        .slice()
        .sort((a, b) => Number(a.price) - Number(b.price));
    }
    // Price high to low
    if (shortValue === "Price high to low") {
      product_items = product_items
        .slice()
        .sort((a, b) => Number(b.price) - Number(a.price));
    }
    if (product_items.length === 0) {
      content = (
        <div className="text-center pt-80 pb-80">
          <h3>Уучлаарай, тохирох зүйл олдсонгүй <span style={{color:'#0989FF'}}>{searchText}</span> search terms</h3>
        </div>
      );
    }

    else {
      content = ( 
        <>
          <section className="tp-shop-area pb-120">
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="tp-shop-main-wrapper">
                    <div className="tp-shop-top mb-45">
                      <div className="row">
                        <div className="col-xl-6">

                          <div className="tp-shop-top-left d-flex align-items-center ">
                            <div className="tp-shop-top-result">
                              <p>{all_products.length} илэрцээс {product_items.length}-ыг харуулж байна</p>
                            </div>
                          </div>

                        </div>
                        <div className="col-xl-6">
                          <div className="tp-shop-top-right d-sm-flex align-items-center justify-content-xl-end">
                            <div className="tp-shop-top-select">
                              <NiceSelect
                                options={[
                                  { value: "Short By Price", text: "Үнэ" },
                                  { value: "Price low to high", text: "Үнэ багаас их" },
                                  { value: "Price high to low", text: "Үнэ ихээс бага" },
                                ]}
                                defaultCurrent={0}
                                onChange={shortHandler}
                                name="Short By Price"
                              />
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                    
                      <div className="tp-shop-items-wrapper tp-shop-item-primary">
                        <div className="row">
                          {product_items
                            .slice(0, next)
                            ?.map((item) => (
                              <div
                                key={item._id}
                                className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                              >
                                <ProductItem product={item} />
                              </div>
                            ))}
                        </div>
                      </div>

                    {/* load more btn start */}
                    {next < product_items?.length && (
                      <div className="load-more-btn text-center pt-50">
                        <button onClick={handleLoadMore} className="tp-btn tp-btn-2 tp-btn-blue">
                          Цааш үзэх
                        </button>
                      </div>
                    )}
                    {/* load more btn end */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }
  }
  return (
    <>
     {content}
    </>
  )
}