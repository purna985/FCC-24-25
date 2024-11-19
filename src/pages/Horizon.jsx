import HorizonSpeakers from '../components/Speakers'
import HorizonLanding from '../components/horizon/HorizonLanding'
import HorizonVideo from '../components/horizon/HorizonVideo'
import HorizonAbout from '../components/horizon/HorizonAbout'
import HorizonPartners from '../components/horizon/HorizonPartners'
import HorizonTimeline  from '../components/horizon/HorizonTimeline'
// import ComingSoon from '../components/ComingSoon'
function Horizon() {

  return (
    <div className='w-full text-white font-rosario z-30'>

      {/* Landing part Horizon */}
      <HorizonLanding />
      
      {/* <ComingSoon /> */}

      {/* About the Event */}
      <hr className="mt-10 w-full opacity-10 mx-auto " />
      <HorizonAbout />

      {/* Horizon glimpse video */}
      <HorizonVideo />

      {/* Horizon timeline */}
      {/* <HorizonTimeline /> */}

      {/* Past Speakers */}
      <hr className="mt-10 w-full opacity-10 mx-auto " />
      <HorizonSpeakers />

      {/* Partners */}
      <hr className="mt-10 w-full opacity-10 mx-auto " />
      <HorizonPartners />

    </div>
  );
}

export default Horizon;


