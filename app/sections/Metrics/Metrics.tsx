import Heading from "@/app/components/Heading/Heading";
import { metrics } from "@/app/constants";
import React from "react";

const Metrics = () => {
  return (
    <div className="main-container">
      <Heading
        title="What We Are Working For"
        description="At ReWear, we believe you're not just getting a great pair of shoes, you're contributing to a positive environmental impact. For every pair,"
      />
      <div className=" max-w-8xl px-5 mx-auto my-12 md:my-10 lg:my-12  md:mb-16 sm:my-20 ">
        <div className="grid gap-7   sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 justify-start p-5 border-2 border-button_green-400  rounded-2xl shadow-sm"
            >
              <div className="text-base text-gray-200 mx-auto ">
                {item.title}
              </div>
              <div className="flex h-full flex-col justify-between items-center space-y-3">
                <h4 className="text-2xl text-center font-bold text-button_green-500 ">
                  {item.value}
                </h4>
                <p className="ml-1 text-base text-gray-200">{item.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Metrics;
