import React from "react";
import App from './../App';

const Home = () => {
  return (
    <div className="relative h-screen w-screen bg-slate-500">
      <div
        className="absolute w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/src/Images/Home.jpeg')", backgroundAttachment: "fixed" }}
      ></div>

      <div className="absolute inset-0 text-[#143642] w-full flex justify-between items-start p-4 bg-transparent z-20">
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
      <div className="absolute inset-0 flex flex-col justify-center items-center font-disma text-black">
        <p className="antialiased box-border clear-both text-[#A97959] font-AlexBrush text-[46.08px] font-medium leading-[59.904px] break-words text-center">Welcome to our</p>
        <h1 className="box-border clear-both text-[#143642] font-BebasNeue text-[160px] font-semibold tracking-[50px] leading-[215.04px] break-words text-center mb-16">RESTAURANT</h1>
      </div>
    </div>
  );
};

export default Home;
