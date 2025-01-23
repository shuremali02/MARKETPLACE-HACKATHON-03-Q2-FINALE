"use client"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BreadCrumb from "../../../../Component/breadcrumb";
import { useRouter } from "next/navigation";
import TopSection from "@/app/Component/productListPage/productTop";
import Navbar from "@/app/Component/header";
import { useCart } from "@/app/context/cartContext";
import CartTable from "@/app/Component/cart/cartItem";
import { useEffect, useState } from "react";


export default function Cart() {
  const [total,setTotal]=useState(0);
  const {totalPrice} = useCart()
  const router = useRouter()
 useEffect(()=>{
  setTotal(totalPrice)
 },[totalPrice])
  return (
    <>
    <TopSection />
    <Navbar />
    <div className="max-w-7xl w-full mx-auto p-7">
     <BreadCrumb route1={"Cart"} route1Link="/shop/wishlist/cart"/>

      {/* Table section */}
     <CartTable />

      {/* botton section */}
      <div className="flex flex-col md:flex-row justify-between md:gap-[173px]  md:p-6 py-6">

        <div className="w-full ">
          <div className="py-4">
            <Card className="rounded-none border  border-black ">
              <CardHeader>
                <CardTitle>Card Total</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                  <p>subtotal:</p>
                  <p>${total}</p>
                </div>
                <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                  <p>Shipping:</p>
                  <p>Free</p>
                </div>
                <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                  <p>Total:</p>
                  <p>${total}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                onClick={()=>router.push("/shop/wishlist/cart/checkout")}
                  className="p-6 px-9  rounded-none bg-Secondary2 text-Button"
                  variant={"outline"}
                >
                  Proceed to Checkout
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
