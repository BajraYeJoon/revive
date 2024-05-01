import Image from "next/image";
import mission from "@/public/mission.jpg";
import { RiGogglesLine } from "react-icons/ri";
import vision from "@/public/vision.jpg";
import Heading from "@/app/components/Heading/Heading";

const About = () => {
  return (
    <div className="main-container">
      <Heading
        title="About Us"
        description="Redefining Style, One Recycled Step at a Time"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-6 md:gap-4 sm:gap-12   ">
        <div className="">
          <Image
            className="h-96 w-full object-cover rounded-3xl"
            src={mission}
            alt=""
          />
        </div>
        <div className="about-section">
          <RiGogglesLine size={50} color="white" />
          <h3 className="text-2xl font-bold tracking-normal text-white">
            Vision
          </h3>
          <p className="text-base font-normal text-gray-400">
            We envision ourselves at the forefront of sustainable footwear,
            sparking a global movement towards fashion with purpose. Our goal is
            to inspire conscious choices that benefit both your style and the
            planet. By leading the way in recycled materials and responsible
            practices, we strive to leave a lighter footprint and create a
            healthier world, one step at a time.
          </p>
        </div>
        <div className="about-section">
          <RiGogglesLine size={50} color="white" />
          <h3 className="text-2xl font-bold tracking-normal text-white">
            Our Mission
          </h3>
          <p className="text-base font-normal text-gray-400">
            At ReWear, our mission is to shake up the sneaker industry. We craft
            stylish, high-performing sneakers from recycled materials, pushing
            the boundaries of sustainable fashion. We&apos;re committed to
            responsible practices across the board, minimizing our environmental
            footprint. Our goal is to empower you, the conscious consumer, to
            make a difference with every step.
          </p>
        </div>
        <div>
          <Image
            // height={800}
            // width={800}
            className="h-96 w-full object-cover rounded-3xl"
            src={vision}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
