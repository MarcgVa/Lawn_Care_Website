import video from "../assets/video.mp4"
import { PhoneIcon, PhoneXMarkIcon } from "@heroicons/react/24/outline";
import remmi from "../assets/remmi.png"
import React from 'react'

const Landing = () => {

    const handleClick = async () => {
      console.log("handleClick on Landing Page.");
    };



  return (
    <div className="h-full w-full">
      <video
        className="w-full h-full object-cover"
        src={video}
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute top-0 left-0 w-full h-fit flex flex-col">
        <div className="absolute top-50 right-30  bg-yellow-500 h-100 w-100 rounded-full border-2 border-l-amber-200 border-t-amber-200 border-b-0 border-r-0 drop-shadow-xl/75  flex flex-col justify-start items-center ">
          <p className="mt-10 text-3xl font-bold text-white text-shadow-black text-shadow-md tracking-wider">
            Want more Information?
          </p>
          <button
            className="bg-blue-600 px-2 py-1 mt-5 rounded-md text-white drop-shadow-xl/50 border border-t-0 border-l-0 border-b-blue-300 justify-self-end-end hover:bg-blue-900 hover:text-blue-300"
            onClick={handleClick}
          >
            Request Consultation
          </button>
          <p className="text-lg text-center mt-5 mb-3 mx-10 text-black text-shadow-blue-300 text-shadow-2xs">
            You will receive a callback with available dates we can come out,
            talk with you, and walk the site.
          </p>

          <p className="my-2 font-extrabold text-2xl text-shadow-sm text-shadow-blue-600 tracking-widest">
            {" "}
            OR{" "}
          </p>
          <div className="flex flex-row items-center">
            <PhoneIcon className="h-7 mt-5 mx-4 fill-blue-600 text-blue-600 inline-flex" />
            <p className=" inline-flex text-xl text-blue-600  text-shadow-blue-200 text-shadow-sm mt-4">
              (800) 555-6789
            </p>
          </div>
        </div>
        <div className="h-fit w-dvh bottom-50 flex flex-col  bg-slate-400/50 rounded-xl">
          <div className="flex flex-col ">
            <div className="m-10">
              <p className="mt-20 font-extrabold text-black text-shadow-lg text-shadow-blue-200 text-9xl whitespace-pre-wrap text-center">
                Safer Lawn Care{" "}
                <span className="text-blue-800 text-shadow-blue-200 text-shadow-lg ">
                  and
                </span>{" "}
                <br />A team you can rely on.
              </p>
            </div>
            <div className="m-10 w-full flex flex-col">
              <p className=" m-10 whitespace-pre-wrap  text-blue-200 text-3xl font-bold text-shadow-md text-shadow-black">
                It is our mission to provide the best organic-based lawn care
                service and help our customers understand teh importance of
                environmentally friendly lawn care techniques that don't rely on
                unnecessary or irresponsible pesticide use.
              </p>
              {/* TODO: 
                    1. finish writing off the website about the safety of animals.
                    2. take another look at the page and see how to make the writing look better.
              
              */}
              <img
                src={remmi}
                alt=""
                className=" mx-10 w-50 border-4 border-amber-400 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing
