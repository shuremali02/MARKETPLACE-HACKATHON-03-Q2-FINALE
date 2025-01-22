"use client"
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import DataFetching, { WatchesXPerfumes } from "@/lib/dataFetching";
import { Button } from "@/components/ui/button";
function Editor() {
  const [product, setProduct] = useState<WatchesXPerfumes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const final: WatchesXPerfumes[] = []
      const data: WatchesXPerfumes[] = await DataFetching(); // Fetch data
      const slicedData1: WatchesXPerfumes[] = data.slice(2, 4); // watches
      const slicedData2: WatchesXPerfumes[] = data.slice(13, 15); // perfumes
      final.push(...slicedData1, ...slicedData2)
      setProduct(final);
    };
    fetchData();
  
  }, []);
  
  const images=product?.map((p)=>p.imageUrl)
    console.log("images",images)
  return (
    <div className="mx-auto w-full h-auto max-w-7xl md:py-12">
      <div className="py-4 flex items-center justify-center flex-col">
        <div className="mb-8 flex flex-col w-full text-center  md:max-w-[463px]">
          <h1 className="font-bold text-Text2 text-3xl">EDITOR’S PICK</h1>
          <p>Problems trying to resolve the conflict between </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-7 md:gap-[30px]">
          <div className="grid border-2 border-gray-900 col-span-2 row-span-2 bg-black relative">
            <Image
              src={images[2]||""}
              alt="Box 1"
              fill
              className="object-cover"
            />
            <Button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-md shadow-md">
              MEN
            </Button>
          </div>
          <div className="grid col-span-1 border-2 border-gray-900 row-span-2 bg-black relative">
            <Image
               src={images[0]||""}
              alt="Box 2"
              fill
              className="object-cover"
            />
            <Button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-md shadow-md">
              WOMEN
            </Button>
          </div>
          <div className="grid col-span-1 border-2 border-gray-900 row-span-1 bg-black relative">
            <Image
               src={images[1]||""}
              alt="Box 3"
              width={210}
              height={222}
              className="object-cover"
            />
            <Button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-md shadow-md">
              MEN
            </Button>
          </div>
          <div className="grid col-span-1 border-2 border-gray-900 row-span-1 bg-black relative">
            <Image
               src={images[3]||""}
              alt="Box 4"
              width={210}
              height={222}
              className="object-cover"
            />
            <Button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-md shadow-md">
              MEN
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
