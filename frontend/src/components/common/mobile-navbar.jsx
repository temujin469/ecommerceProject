"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  CiHeart,
  CiHome,
  CiShop,
  CiShoppingCart,
  CiShoppingTag,
  CiStar,
  CiUser,
} from "react-icons/ci";

function MobileNav() {
  const [show, setShow] = useState(true); // To control the visibility of the div
  const [lastScroll, setLastScroll] = useState(0); // To store the last scroll position

  const pathname = usePathname();

  // console.log(router.pathname)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 0) {
        // Scrolling down
        setShow(false);
      } else {
        // Scrolling up
        setShow(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);
  return (
    <nav
      className={`mobile-nav ${
        show ? "navbar-scroll-show" : "navbar-scroll-hide"
      }`}
    >
      <ul className="mobile-nav-items" id="myTab" role="tablist">
        <li role="presentation">
          <Link href={"/"}>
            <button className={` ${pathname === "/" ? "active" : "inactive"}`}>
              <CiHome size={24} strokeWidth={1} />
            </button>
          </Link>
        </li>
        <li role="presentation">
          <Link href={"/shop"}>
            <button
              className={` ${pathname === "/shop" ? "active" : "inactive"}`}
            >
              <CiShop size={24} strokeWidth={1} />
            </button>
          </Link>
        </li>
        <li role="presentation">
          <Link href={"/cart"}>
            <button
              className={` ${pathname === "/cart" ? "active" : "inactive"}`}
            >
              <CiShoppingCart size={24} strokeWidth={1} />
            </button>
          </Link>
        </li>
        <li role="presentation">
          <Link href={"/shop-category"}>
            <button
              className={` ${pathname === "/wishlist" ? "active" : "inactive"}`}
            >
              <CiShoppingTag size={24} strokeWidth={1} />
            </button>
          </Link>
        </li>
        <li role="presentation">
          <Link href={"/profile"}>
            <button
              className={`${
                pathname === "/login" || pathname === "/profile"
                  ? "active"
                  : "inactive"
              }`}
            >
              <CiUser size={24} strokeWidth={1} />
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNav;
