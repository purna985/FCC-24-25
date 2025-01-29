import HorizonSpeakers from '../components/Speakers'
import HorizonLanding from '../components/horizon/HorizonLanding'
import HorizonVideo from '../components/horizon/HorizonVideo'
import HorizonAbout from '../components/horizon/HorizonAbout'

function Horizon() {

  return (
    <div className='w-full text-white font-rosario z-30'>

      {/* Landing part Horizon */}
      <HorizonLanding />

      {/* About the Event */}
      <hr className="mt-10 w-full opacity-10 mx-auto " />
      <HorizonAbout />

      {/* Horizon glimpse video */}
      <HorizonVideo />

      {/* Past Speakers */}
      <hr className="mt-10 w-full opacity-10 mx-auto " />
      <HorizonSpeakers />
    </div>
  );
}

export default Horizon;


