import { useEffect } from "react";
import instalogo from '/src/assets/home/instalogo-white.svg'
const HomeInsta = () => {

  useEffect(() => {
    // Load the Instagram embed script
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process(); // Manually initialize the Instagram embed
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="my-10 pb-10 bg-black w-full z-20" >
      <h1 className=' w-[80%] text-center mx-auto z-20 bg-black font-bold flex justify-center items-center gap-3 md:gap-5'>
        <p className="text-xl md:text-3xl my-5 md:my-10" >FOLLOW US ON <span className='text-blue-500'>INSTAGRAM</span></p>
        <a href="https://www.instagram.com/fcc_iith?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" >
          <img className="w-5 h-5 md:w-8 md:h-8 " src={instalogo} alt="" />
        </a>
      </h1>

      {/* Laptop insta embed */}
      <div className='md:flex justify-evenly items-center gap-5 hidden  mx-auto w-auto z-20 bg-black' >
        <blockquote
          className="instagram-media z-50 "
          data-instgrm-permalink="  https://www.instagram.com/p/C7enuLuSPN0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==
"
          data-instgrm-version="14"
          style={{ maxWidth: '540px', margin: '0 auto', filter: ' brightness(0.8)', display: 'hidden' }}
        />
        <blockquote
          className="instagram-media z-50"
          data-instgrm-permalink="https://www.instagram.com/p/C9AJ8T5SSpB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==
"
          data-instgrm-version="14"
          style={{ maxWidth: '540px', margin: '0 auto', filter: ' brightness(0.8)' }}
        />
        <blockquote
          className="instagram-media z-50 md-1:hidden"
          data-instgrm-permalink=" https://www.instagram.com/p/C8UQ-WsylDA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==
"
          data-instgrm-version="14"
          style={{ maxWidth: '540px', margin: '0 auto', filter: ' brightness(0.8)' }}
        />
      </div>


      {/* Phone insta embed */}
      <div className='flex justify-evenly items-center gap-5 md:hidden  mx-auto w-auto z-20 bg-black' >
        <blockquote
          className="instagram-media z-50"
          data-instgrm-permalink="https://www.instagram.com/p/C9AJ8T5SSpB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==
"
          data-instgrm-version="14"
          style={{ maxWidth: '540px', margin: '0 auto', filter: ' brightness(0.8)' }}
        />
      </div>

    </div>
  )
}

export default HomeInsta