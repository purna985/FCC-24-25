

import simg1 from '/src/assets/sponsors/abhibus-min.png'
import simg2 from '/src/assets/sponsors/decathalon-min.png'
import simg3 from '/src/assets/sponsors/easemytrip-min.png'
import simg4 from '/src/assets/sponsors/edufabrica-min.png'
import simg5 from '/src/assets/sponsors/elearnmarkets-min.png'
import simg6 from '/src/assets/sponsors/finlarics-min.png'
import simg7 from '/src/assets/sponsors/grabon-min.png'
import simg8 from '/src/assets/sponsors/monster-min.png'
import simg9 from '/src/assets/sponsors/plum-min.png'
import simg10 from '/src/assets/sponsors/preplounge-min.png'
import simg11 from '/src/assets/sponsors/product-min.png'
import simg12 from '/src/assets/sponsors/sid farm-min.png'
import simg13 from '/src/assets/sponsors/startupnews-min.png'
import simg14 from '/src/assets/sponsors/stockgro-min.png'

const HorizonPartners = () => {

    const s_images = [
        { img_id: simg1 }, { img_id: simg2 }, { img_id: simg3 }, { img_id: simg4 }, { img_id: simg5 },
        { img_id: simg6 }, { img_id: simg7 }, { img_id: simg8 }, { img_id: simg9 }, { img_id: simg10 },
        { img_id: simg11 }, { img_id: simg12 }, { img_id: simg13 }, { img_id: simg14 }
      ]
  return (
    <div className='flex flex-col justify-center items-center overflow-hidden relative my-6'>
    <div className='flex items-center justify-center mb-6'>
      <p className='font-rosario text-center mb-5 text-4xl md:text-6xl'>Partners</p>
    </div>
    <div className='flex w-full gap-3p animate-scroll-1'>
      <div className='flex basis-1/6 md-1:flex md-1:basis-1/4 gap-3p'>
        {s_images.map((image, index) => (
          <img src={image.img_id} key={index} alt={`Image ${index + 1}`}></img>
        ))}
      </div>
    </div>
  </div>  )
}

export default HorizonPartners