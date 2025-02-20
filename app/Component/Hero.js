export default function Hero() {
  return (
    <div className=" flex flex-col mt-[140px] justify-center items-center">
      <h1 className="text-white text-[58px] font-extrabold font-Manrope text-center">
        Empowering <br /> telecoms to Lead the <br /> gaming revolution
      </h1>

      <p className="text-[#D8C4FD] text-[24px] mt-[32px] font-semibold font-Manrope text-center">
        Unlock new revenue streams and engage your customers <br /> with
        Swarmio’s telco-grade gaming solutions – Swarmio <br /> Play, Edge, and
        Store – designed to elevate your brand in <br /> the gaming ecosystem.
      </p>

      <a href="/" className="flex items-center space-x-2 mt-[160px]">
        <img src="/white-dot.svg" alt="Logo" className="w-[32pz] h-[19px]" />
        <span className="text-white text-[16px] font-extrabold">Discover our solutions</span>
      </a>
    </div>
  );
}
