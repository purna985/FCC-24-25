import { Timeline } from "@/components/ui/timeline";

export default function HorizonTimeline() {
  const data = [
    {
      title: "DAY 1",
      date:'January 31, 2025',
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div>
            <p className="text-neutral-200 dark:text-neutral-200 text-2xl md:text-3xl font-normal mb-8">
              Inauguration
            </p>
            <p className="text-neutral-200 dark:text-neutral-200 text-2xl md:text-3xl font-normal mb-8">
              All about MBAs...
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
          <p className="text-neutral-200 dark:text-neutral-200 text-2xl md:text-3xl font-normal mb-8">
            Legends Night
          </p>
          <p className="text-neutral-200 dark:text-neutral-200 text-2xl md:text-3xl font-normal mb-8">
            Breaking bands
          </p>
          <p className="text-neutral-200 dark:text-neutral-200 text-2xl md:text-3xl font-normal mb-8">
            Chai pe charcha
          </p>
          <p className="text-neutral-200 dark:text-neutral-200 text-2xl md:text-3xl font-normal mb-8">
            Million dollar ideas
          </p>
        </div>
      ),
    },
    {
      title: "DAY 3",
      date: 'February 2, 2025',
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-200 text-2xl md:text-3xl font-normal mb-8">
            Finfluencer
          </p>
          <p className="text-neutral-200 dark:text-neutral-200 text-2xl md:text-3xl font-normal mb-8">
            Consulting panel
          </p>
          <p className="text-neutral-200 dark:text-neutral-200 text-2xl md:text-3xl font-normal mb-8">
            Finance workshop
          </p>
          <p className="text-neutral-200 dark:text-neutral-200 text-2xl md:text-3xl font-normal mb-8">
            Standup
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className=" w-full my-10">
      <Timeline data={data} />
    </div>
  );
}
