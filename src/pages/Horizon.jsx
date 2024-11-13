import HorizonSpeakers from '../components/Speakers'
import HorizonLanding from '../components/horizon/HorizonLanding'
import HorizonVideo from '../components/horizon/HorizonVideo'
import HorizonAbout from '../components/horizon/HorizonAbout'
import HorizonPartners from '../components/horizon/HorizonPartners'
// import ComingSoon from '../components/ComingSoon'
function Horizon() {

  return (
    <div className='w-full text-white font-rosario z-30'>

      {/* Landing part Horizon */}
      <HorizonLanding />
      
      {/* <ComingSoon /> */}

      {/* Horizon glimpse video */}
      <HorizonVideo />

      {/* About the Event */}
      <HorizonAbout />

      {/* Past Speakers */}
      <HorizonSpeakers />

      {/* Partners */}
      <HorizonPartners />

    </div>
  );
}

export default Horizon;


