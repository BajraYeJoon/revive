import Image from "next/image";
import Shoes from "../../../public/shoes.png";

const Hero = () => {
  return (
    <section className="py-8 mx-auto relative text-left  lg:my-0 md:py-16 h-fit lg:h-screen">
      <div className="hidden sm:block hero-gradient"></div>
      <Image
        src={Shoes}
        className="hidden lg:block md:absolute md:-right-[450px] md:top-28 md:h-[90vh] md:w-[90vw] md:object-contain"
        alt="shoes"
      />
      <div className="flex flex-col space-y-2 md:space-y-6">
        <span className="font-light text-base">Build for Sustainability</span>
        <h1 className="mb-4 text-5xl md:text-8xl lg:text-9xl  max-w-5xl font-extrabold tracking-normal leading-none">
          Step into a <span className="text-button_green-500">Sustainable</span>{" "}
          Future with ReWear
        </h1>
        <p className="mb-8 text-lg font-normal max-w-4xl text-gray-500  dark:text-gray-400">
          Experience premium comfort and cutting-edge design in sneakers made
          with a conscience. Not just sustainability, it&apos;s about pushing
          the boundaries of style with innovative designs and recycled
          materials.
        </p>
        <div className="flex flex-col  items-start mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-start sm:space-y-0 sm:space-x-4">
          <button
            type="button"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Learn more
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex justify-center items-center py-3 px-7 text-base font-medium text-center text-gray-900 rounded-lg border border-button_green-300 bg-button_green-500"
          >
            Shop Sustainable &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
