import { Timeline } from "@/components/ui/timeline";
import horizonbanner from "@/assets/horizon-about/horizon-banner-2025.png";

export default function HorizonTimeline() {
  const data = [
    {
      title: "DAY 1",
      date: 'January 31, 2025',
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4 font-bold">
            <p className="text-neutral-200 dark:text-neutral-200 text-lg md:text-xl font-bold mb-8">
              Inauguration  <br />- 5:30 PM <br />- @ AUDI
            </p>
            <p className="text-neutral-200 dark:text-neutral-200 text-lg md:text-xl font-bold mb-8">
              Fireside Chat with Ankur Warikoo <br />- 5:45 PM <br /> - @ LHC5
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "DAY 2 ",
      date: 'February 1, 2025',
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-200 text-xl md:text-3xl font-bold mb-8">
            PANELS
          </p>
          <div className="grid grid-cols-2 gap-4">
            <p className="text-neutral-200 dark:text-neutral-200 text-lg md:text-xl font-bold mb-8">
              All About MBAs <br />- 12:00 PM to 2:00 PM <br />- @ AUDI
            </p>
            <p className="text-neutral-200 dark:text-neutral-200 text-lg md:text-xl font-bold mb-8">
              Breaking Brands <br />- 2:30 PM to 5:30 PM <br />- @ AUDI
            </p>
            <p className="text-neutral-200 dark:text-neutral-200 text-lg md:text-xl font-bold mb-8">
              Million $ Deal Makers’ <br />- 6:00 PM to 8:00 PM <br />- @ AUDI
            </p>
            <p className="text-neutral-200 dark:text-neutral-200 text-lg md:text-xl font-bold mb-8">
              Talk by Dr. A Velumani <br />- 9:00 PM to 11:00 PM <br />- @ LHC5
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "DAY 3",
      date: 'February 2, 2025',
      content: (
        <div className="grid grid-cols-2 gap-4" >
          <div className="">
            <p className="text-neutral-200 dark:text-neutral-200 text-xl md:text-3xl font-bold mb-8">
              SESSIONS
            </p>
            <p className="text-neutral-200 dark:text-neutral-200 text-lg md:text-xl font-bold mb-8">
              Hands on Finance <br />- 5:30 PM to 7:30 PM <br />-@ AUDI
            </p>
          </div>
          <div className="">
            <p className="text-neutral-200 dark:text-neutral-200 text-xl md:text-3xl font-bold mb-8">
              PRONITES
            </p>
            <p className="text-neutral-200 dark:text-neutral-200 text-lg md:text-xl font-bold mb-8">
            - 9:00PM Onwards <br/> - @ Old Mess Lawns
            </p>
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