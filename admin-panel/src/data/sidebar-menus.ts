import { ISidebarMenus } from "./../types/menu-types";
import {
  Dashboard,
  Categories,
  Coupons,
  Orders,
  Pages,
  Products,
  Profile,
  Reviews,
  Setting,
  Leaf,
  StuffUser,
} from "@/svg";

const sidebar_menu: Array<ISidebarMenus> = [
  {
    id: 1,
    icon: Dashboard,
    link: "/dashboard",
    title: "Удирдлагын самбар",
  },
  {
    id: 2,
    icon: Products,
    link: "/product-list",
    title: "Бүтээгдэхүүн",
    subMenus: [
      { title: "Бүтээгдэхүүний жагсаалт", link: "/product-list" },
      { title: "Бүтээгдэхүүнүүд", link: "/product-grid" },
      { title: "Бүтээгдэхүүн нэмэх", link: "/add-product" },
    ],
  },
  {
    id: 3,
    icon: Categories,
    link: "/category",
    title: "Ангилал",
  },
  {
    id: 4,
    icon: Orders,
    link: "/orders",
    title: "Захиалгууд",
  },
  {
    id: 5,
    icon: Leaf,
    link: "/brands",
    title: "Брэнд",
  },
  {
    id: 6,
    icon: Reviews,
    link: "/reviews",
    title: "Сэтгэгдлүүд",
  },
  {
    id: 7,
    icon: Coupons,
    link: "/coupon",
    title: "Купонууд",
  },
  {
    id: 8,
    icon: Profile,
    link: "/profile",
    title: "Хувийн мэдээлэл",
  },
  {
    id: 9,
    icon: Setting,
    link: "#",
    title: "Онлайн дэлгүүр",
  },
  {
    id: 10,
    icon: StuffUser,
    link: "/our-staff",
    title: "Манай баг",
  },
  {
    id: 11,
    icon: Pages,
    link: "/dashboard",
    title: "Хуудаснууд",
    subMenus: [
      { title: "Бүртгүүлэх", link: "/register" },
      { title: "Нэвтрэх", link: "/login" },
      { title: "Нууц үгээ мартсан", link: "/forgot-password" },
    ],
  },
];

export default sidebar_menu;
