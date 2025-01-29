import { Timeline } from "@/components/ui/timeline";
import horizonbanner from "@/assets/horizon-about/horizon-banner-2025.png";

export default function HorizonTimeline() {
  const data = [
    {
      title: "DAY 1",
      date: "January 31, 2025",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EventCard
            title="Inauguration"
            time="5:30 PM"
            venue="Auditorium - A Block torium - A Block "
          />
          <EventCard
            title="Fireside Chat with Ankur Warikoo"
            time="5:45 PM"
            venue="LHC - 5"
          />
        </div>
      ),
    },
    {
      title: "DAY 2",
      date: "February 1, 2025",
      content: (
        <div>
          <h3 className="text-3xl font-bold text-blue-500 mb-8">PANELS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PanelCard
              title="All About MBAs"
              time="12:00 PM to 2:00 PM"
              venue="Auditorium - A Block "
            />
            <PanelCard
              title="Breaking Brands"
              time="2:30 PM to 5:30 PM"
              venue="Auditorium - A Block "
            />
            <PanelCard
              title="Million $ Deal Makers"
              time="6:00 PM to 8:00 PM"
              venue="Auditorium - A Block "
            />
            <PanelCard
              title="Talk by Dr. A Velumani"
              time="9:00 PM to 11:00 PM"
              venue="LHC - 5"
            />
          </div>
        </div>
      ),
    },
    {
      title: "DAY 3",
      date: "February 2, 2025",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-3xl font-bold text-blue-500 mb-8">SESSIONS</h3>
            <EventCard
              title="Hands on Finance"
              time="5:30 PM to 7:30 PM"
              venue="Auditorium - A Block "
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-500 mb-8">PRONITES</h3>
            <ProniteCard
              time="9:00 PM onwards"
              venue="@ Old Mess Lawns"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full my-10">
      <div className="w-full flex justify-center">
        <img src={horizonbanner} alt="" className="w-[90%] md:w-1/2" />
      </div>
      <Timeline data={data} />
    </div>
  );
}



const EventCard = ({ title, time, venue }) => {
  return (
    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg p-6 border border-neutral-700 hover:border-blue-500 transition-all duration-300">
      <h3 className="text-xl font-bold text-blue-500 mb-2">{title}</h3>
      <p className="text-neutral-300 text-lg mb-1">
        <span className="font-semibold">Time:</span> {time}
      </p>
      <p className="text-neutral-300 text-lg">
        <span className="font-semibold">Venue:</span> {venue}
      </p>
    </div>
  );
};

const PanelCard = ({ title, time, venue }) => {
  return (
    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg p-6 border border-neutral-700 hover:border-blue-500 transition-all duration-300">
      <h3 className="text-2xl font-bold text-blue-500 mb-2">{title}</h3>
      <p className="text-neutral-300 text-lg mb-1">
        <span className="font-semibold">Time:</span> {time}
      </p>
      <p className="text-neutral-300 text-lg">
        <span className="font-semibold">Venue:</span> {venue}
      </p>
    </div>
  );
};

const ProniteCard = ({ time, venue }) => {
  return (
    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg p-6 border border-neutral-700 hover:border-blue-500 transition-all duration-300">
      <h3 className="text-2xl font-bold text-blue-500 mb-2">PRONITE</h3>
      <p className="text-neutral-300 text-lg mb-1">
        <span className="font-semibold">Time:</span> {time}
      </p>
      <p className="text-neutral-300 text-lg">
        <span className="font-semibold">Venue:</span> {venue}
      </p>
    </div>
  );
};