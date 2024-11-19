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
      <HorizonAbout />

      {/* Horizon glimpse video */}
      <HorizonVideo />

      {/* Horizon timeline */}
      {/* <HorizonTimeline /> */}

      {/* Past Speakers */}
      <HorizonSpeakers />

      {/* Partners */}
      <HorizonPartners />

    </div>
  );
}

export default Horizon;


