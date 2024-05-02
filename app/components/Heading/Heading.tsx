interface InfoSectionProps {
  title: string;
  description: string;
}

const Heading = ({ title, description }: InfoSectionProps) => (
  <div className="flex justify-center flex-col space-y-0 px-4 md:px-8   items-center md:space-y-3">
    <h3 className="mb-4 text-center text-3xl md:text-5xl lg:text-6xl max-w-3xl font-extrabold">
      {title}
    </h3>
    <p className="mb-4 sm:mb-6 md:mb-8 text-center text-base md:text-lg lg:text-3xl font-normal max-w-4xl text-gray-500">
      {description}
    </p>
  </div>
);

export default Heading;
