import React from "react";

function Newsletter() {
  return (
    <div className="md:py-10" >
      <div className="flex flex-col justify-around items-center md-1:justify-around">
        <div className="m-10">
          <p className="text-5xl font-semibold mt-2 mb-4 md-1:text-5xl text-center">
            <span className="text-blue-500" >FCC</span> Newsroom
          </p>
          <p className="text-2xl text-center mt-2 text-gray-400" >Get the latest Market RIZZ at your fingertips .</p>
        </div>
        <div className=" mb-10 ">
          <a href="https://forms.gle/jvmh7v3KbWeAKjDR8" >
            <button className="w-auto hover:bg-blue-500 hover:text-white text-blue-500 font-semibold px-10 py-3 mx-auto border-solid border-blue-500 border-4 text-3xl rounded-full transform duration-500 ">
              Subscribe
            </button>
          </a>
        </div>
      </div>

    </div>
  );
}

export default Newsletter;
