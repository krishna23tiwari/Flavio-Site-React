import React from "react";

const Home = () => {
  return (
    <div className="relative h-screen w-screen bg-slate-500">
      <div
        className=" absolute w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/src/Images/Home.jpeg')", backgroundAttachment:"fixed" }}
      ></div>

      <div className="fixed font-[Bebas Neue] text-[#143642] top-0 left-0 w-full flex justify-between items-center p-4 bg-transparent z-20">
        <div className="flex space-x-6">
          <a href="#home" className="text-xl">
            Home
          </a>
          <a href="#menu" className="text-xl">
            Our Menu
          </a>
          <a href="#history" className="text-xl">
            History
          </a>
          <a href="#contact" className="text-xl">
            Contact
          </a>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
          <img src="./src/Images/logo.png" className="max-w-40"></img>
        </div>

        <div>
          <button
            className="px-4 py-3 font-[Bebas Neue] text-white font-semibold gap-2 leading-loose p-5"
            style={{ backgroundColor: "#815D45", color: "white" }}
          >
            Make Reservation
          </button>
        </div>
        
      </div>
<div className="absolute "><h1>RESTAURANT BY DEVESH Changed 2nd Time</h1></div>
      {/* <div className="relative z-10 text-white p-8 pt-24"> */}
      {/* <h1 className="text-center text-[#143642] font-[Bebas Neue] text-9xl font-medium tracking-[0.2em] leading-[179.2px] mt-10">
                RESTAURANT
            </h1> */}
      {/* <div style={{ height: '150vh' }}></div> */}
      {/* </div> */}
    </div>
  );
};

export default Home;
