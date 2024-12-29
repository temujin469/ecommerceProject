import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import Footer from "@/layout/footers/footer";
import ShopBreadcrumb from "@/components/breadcrumb/shop-breadcrumb";
import ShopCategoryArea from "@/components/categories/shop-category-area";

export const metadata = {
  title: "Ангилалууд",
};

export default function CategoryPage() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <ShopBreadcrumb title="Ангилалууд" subtitle="Ангилалууд" />
      <ShopCategoryArea />
      {/* <Footer primary_style={true} /> */}
    </Wrapper>
  );
}
