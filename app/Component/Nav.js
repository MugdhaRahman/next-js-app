export default function Nav() {
  return (
    <div className=" flex mt-4 mr-[80px] ml-[80px]">
      <div className="flex justify-center items-center">
        <img src="/logo.svg" alt="Logo" />
      </div>
      <div className="flex ms-auto">
        <a
          className="text-white mr-[40px] text-lg font-semibold font-poppins"
          href="#"
        >
          Solutions
        </a>

        <a
          className="text-white mr-[40px] text-lg font-semibold font-poppins"
          href="#"
        >
          Partners
        </a>

        <a
          className="text-white mr-[40px] text-lg font-semibold font-poppins"
          href="#"
        >
          Careers
        </a>

        <a
          className="text-white mr-[40px] text-lg font-semibold font-poppins"
          href="#"
        >
          Updates
        </a>

        <a
          className="text-white mr-[40px] text-lg font-semibold font-poppins"
          href="#"
        >
          About Us
        </a>
        <a className="text-white text-lg font-semibold font-poppins" href="#">
          Contact Us
        </a>
      </div>
    </div>
  );
}
