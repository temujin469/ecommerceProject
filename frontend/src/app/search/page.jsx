import Wrapper from "@/layout/wrapper";
// import HeaderTwo from "@/layout/headers/header-2";
import CommonBreadcrumb from "@/components/breadcrumb/common-breadcrumb";
import SearchArea from "@/components/search/search-area";
import Footer from "@/layout/footers/footer";
import Header from "@/layout/headers/header";


export const metadata = {
  title: "Shofy - Search Page",
};

export default function SearchPage() {
  return (
    <Wrapper>
      {/* <HeaderTwo style_2={true} /> */}
      <Header/>
      <CommonBreadcrumb title="Бүтээгдэхүүн хайх" subtitle="Бүтээгдэхүүн хайх" />
      <SearchArea />
      <Footer primary_style={true} />
    </Wrapper>
  );
}
