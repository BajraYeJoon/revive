import Heading from "@/app/components/Heading/Heading";
import { products } from "@/app/constants";
import Image from "next/image";
import React from "react";

const Products = () => {
  return (
    <div className="main-container">
      <Heading
        title="Products"
        description="Elegant, Sustainable, and Stylish Footwear for Every Occasion"
      />

      <div className=" max-w-9xl mx-auto my-12">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="p-5 cursor-pointer bg-button_green-400/25 rounded-xl"
            >
              <Image
                className="w-full h-72 rounded-t-xl overflow-hidden object-cover hover:scale-105 transition duration-300 ease-in-out"
                src={product.img}
                alt="product image"
              />

              <div className="mt-8 px-2 ">
                <h5 className="text-2xl tracking-wide font-bold  text-white">
                  {product.name}
                </h5>

                <div className="mt-2 mb-5 flex text-gray-300 items-center justify-between">
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
