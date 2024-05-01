import React from "react";

const Cta = () => {
  return (
    <section className=" bg-button_green-500 rounded-3xl py-16 text-center font-medium text-gray-700 lg:py-24">
      <div className="mx-auto w-full px-8 sm:px-4 md:px-0 py-0 text-gray-700 md:py-16">
        <div className="lg:w-3/5 flex justify-center items-center  flex-col gap-3 mx-auto w-full   text-gray-700   ">
          <h2 className="mt-0 mb-3 font-bold tracking-normal text-3xl text-gray-800 md:text-4xl">
            Join the Movement
          </h2>
          <p className="mt-0 mb-5 text-base md:text-lg  md:px-24 lg:px-3">
            Be a part of the change! By choosing ReWear, you&apos;re not just
            walking in style, you&apos;re walking towards a cleaner future.
            Explore our collection and discover the difference recycled
            materials can make.
          </p>
          <button
            type="button"
            className="rounded-md inline-block w-fit border-slate-800 border-2 px-12 py-4 text-base font-bold text-black  hover:bg-slate-900 hover:text-white "
          >
            Join Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
