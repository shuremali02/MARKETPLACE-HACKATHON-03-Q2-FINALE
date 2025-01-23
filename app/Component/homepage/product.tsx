"use client"
import { useEffect, useState } from "react";
import JustForYou from "../card";
import Link from "next/link"
import DataFetching, { WatchesXPerfumes } from "@/lib/dataFetching";
import LoadingAnimation from "./loadingAnimation";

function ProductSection() {
  const [product, setProduct] = useState<WatchesXPerfumes[]>([]);
  const [loader,setLoader]=useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true)
      const data: WatchesXPerfumes[] = await DataFetching(); // Fetch data
      const slicedData: WatchesXPerfumes[] = data.slice(3, 11); // Slice data
      setProduct(slicedData);
      setLoader(false);
    };
    fetchData();
  }, []);
  if(!product){return(<div>No product found</div>)}
  if(loader){
    return <LoadingAnimation/>
  }

  return (
    <div className="w-full py-9">
      <div className="flex flex-col items-center md:justify-center">
        <div className="mb-8 flex flex-col w-full text-center md:max-w-[463px]">
          <p>Featured Products</p>
          <h1 className="font-bold text-Text2 text-2xl sm:text-3xl md:text-4xl">
            BESTSELLER PRODUCTS
          </h1>
          <p>Problems trying to resolve the conflict between </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7   md:p-11 px-4"
        >
          {product.map((item, index) => (
            <Link key={index} href={`/productListing/${String(item._id)}`}>
            <JustForYou key={index} {...item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductSection;