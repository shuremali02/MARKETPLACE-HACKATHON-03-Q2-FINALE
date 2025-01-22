import TopSection from "./Component/top";
import Banner from "./Component/homepage/banner";
import Editor from "./Component/homepage/editor";
import CategoryImage from "./Component/homepage/saleBanner";
import ProductSection from "./Component/homepage/product";
import FlashSale from "./Component/homepage/flashSale";
import Category from "./Component/homepage/browseByCategory";
import Bottom from "./Component/homepage/bottom";
import Navbar from "./Component/header";

export default function Home() {
  
  return (
  <div className="">
    <TopSection />
   <Navbar/>
    <Banner />
    <div className="hidden md:flex">
    <Editor />
    </div>
    
    <FlashSale />
    <CategoryImage />
    <Category />
    <ProductSection />
    <Bottom />
    {/* <SardiSection /> */}
    {/* <BlogSection /> */}
    
  </div>
  );
}
