// import mailsvg from '../assets/mail.svg';

function HomeNewsletter() {
  return (
    <div className="relative md:py-10 bg-black z-50" >
      <div className="flex flex-col justify-around items-center md-1:justify-around">
        <div className="m-10">
          <p className=" text-3xl md:text-5xl font-semibold mt-2 mb-4 text-center">
            <span className="text-blue-500" >FCC</span> Newsroom
          </p>
          <p className="text-lg md:text-2xl text-center mt-2 text-gray-400" >Get the latest Market RIZZ at your fingertips</p>
        </div>
        <div className=" mb-10 flex gap-10">
          <a href="/resources/newsletters" >
            <button className="w-auto hover:bg-blue-500 hover:text-white text-blue-500 font-semibold px-5 md:px-10 py-3 mx-auto border-solid border-blue-500 border-4 text-xl md:text-3xl rounded-full transform duration-500 ">
              Read Now
            </button>
          </a>
          <a href="https://forms.gle/jvmh7v3KbWeAKjDR8" >
            <button className="w-auto hover:bg-blue-500 hover:text-white text-blue-500 font-semibold px-5 md:px-10 py-3 mx-auto border-solid border-blue-500 border-4 text-xl md:text-3xl rounded-full transform duration-500 ">
              Subscribe
            </button>
          </a>
        </div>
      </div>
      <div className='w-[100px] h-[100px] blur-[100px] bg-blue-700 absolute top-0 left-0 ' ></div>
      <div className='w-[100px] h-[100px] blur-[100px] bg-blue-700 absolute bottom-0 right-0 ' ></div>
    </div>
  );
}

export default HomeNewsletter;
