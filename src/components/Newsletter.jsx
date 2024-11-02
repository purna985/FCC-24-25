import React from "react";

function Newsletter() {
  return (
    <div>
      <div className="flex flex-row justify-center items-center md-4:hidden md-1:justify-between">
        <div className="m-10 w-1/2 md-1:w-1/3 md-1:mx-12">
          <p className="text-6xl font-semibold py-1 md-1:text-5xl">
            FCC Newsroom
          </p>
          <p className="text-2xl py-1">
            Stay up-to-date with our latest events and activities by subscribing
            to our newsletter.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center m-10 w-1/4 md-1:w-2/3">
          <a href="https://forms.gle/jvmh7v3KbWeAKjDR8">
            <button className="w-auto h-9 mt-4 px-3 rounded-md bg-white text-black text-2xl font-semibold">
              Subscribe
            </button>
          </a>
        </div>
      </div>
      <div className="flex flex-col md-5:hidden">
        <div className="m-10">
          <p className="flex justify-center text-5xl py-1">FCC Newsroom</p>
          <br />
          <p className="text-xl">
            Stay up-to-date with our latest events and activities by subscribing
            to our newsletter.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center m-1">
          <a href="https://forms.gle/jvmh7v3KbWeAKjDR8">
            <button className="w-auto h-9 my-4 px-3 rounded-md bg-white text-black text-2xl font-semibold">
              Subscribe
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
