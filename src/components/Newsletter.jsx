// import mailsvg from '../assets/mail.svg';
import rupeeBlur from "/src/assets/home/rupeeblur.svg";

function Newsletter() {
  return (
    <div className="relative md:py-10 bg-black z-50" >
      <div className="flex flex-col justify-around items-center md-1:justify-around">
        <div className="m-10">
          <p className=" text-3xl md:text-5xl font-semibold mt-2 mb-4 text-center">
            <span className="text-blue-500" >FCC</span> Newsroom
          </p>
          <p className="text-lg md:text-2xl text-center mt-2 text-gray-400" >Get the latest Market RIZZ at your fingertips</p>
        </div>
        <div className=" mb-10 ">
          <a href="https://forms.gle/jvmh7v3KbWeAKjDR8" >
            <button className="w-auto hover:bg-blue-500 hover:text-white text-blue-500 font-semibold px-5 md:px-10 py-3 mx-auto border-solid border-blue-500 border-4 text-xl md:text-3xl rounded-full transform duration-500 ">
              Subscribe
            </button>
          </a>
        </div>
      </div>
      <img className="fixed h-10 w-10 top-1/2 right-1/4 z-0 rotate-[60deg] " src={rupeeBlur} alt=""  title="svg" />
      <img className="fixed h-10 w-10 bottom-1/4 left-1/4 z-0 rotate-[-60deg] " src={rupeeBlur} alt=""  title="svg" />
      <img className="fixed h-10 w-10 left-[10%] top-1/4 z-0 rotate-[60deg] " src={rupeeBlur} alt=""  title="svg" />
      <img className="fixed h-10 w-10 right-[10%] bottom-[10%] z-0  " src={rupeeBlur} alt=""  title="svg" />
    </div>
  );
}

export default Newsletter;
