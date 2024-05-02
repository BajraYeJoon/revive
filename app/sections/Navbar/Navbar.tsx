import { navLists } from "@/app/constants";

const Navbar = () => (
  <nav className="w-full py-5 flex justify-between items-center">
    {/* Logo */}
    <div className="flex items-center justify-center">
      <h3 className="h-16 w-16 text-white text-4xl font-bold tracking-wide">
        Revive<span className="text-button_green-500">.</span>
      </h3>
    </div>

    {/* Navigation Items */}
    <div className="  justify-center hidden lg:flex">
      {navLists.map((nav) => (
        <div
          key={nav}
          className="px-5 text-lg cursor-pointer text-gray hover:text-white transition-all"
        >
          {nav}
        </div>
      ))}
    </div>

    {/* Join Us Button */}
    <div className="flex items-center gap-7">
      <button
        type="button"
        className="text-black bg-button_green-500 hover:bg-button_green-400 font-medium rounded-full text-lg px-6 md:px-10 py-2.5 text-center cursor-pointer"
      >
        Join Us
      </button>
    </div>
  </nav>
);

export default Navbar;
