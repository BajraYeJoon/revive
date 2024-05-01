import Heading from "@/app/components/Heading/Heading";
import Image from "next/image";
import React from "react";
import mission from "@/public/mission.jpg";
import { materialsLists } from "@/app/constants/index";

const Materials = () => {
  return (
    <div className="main-container">
      <Heading
        title="What Goes Into Our Recycled Sneaks"
        description="From Waste to Wow: How We Make Eco-Conscious Sneakers"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {materialsLists.map((material, index) => (
          <div
            key={index}
            className="flex flex-col max-w-2xl h-96 overflow-hidden bg-gray-900 border border-gray-700 rounded-3xl"
          >
            <div className="h-48 overflow-hidden">
              <Image
                className="object-cover h-full w-full"
                src={material.img}
                alt=""
              />
            </div>

            <div className="px-8 py-6">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                {material.title}
              </h5>

              <p className="mb-3 font-normal text-gray-400">
                {material.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Materials;
