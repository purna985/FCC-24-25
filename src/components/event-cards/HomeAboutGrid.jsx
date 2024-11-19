import { HoverEffect } from "../ui/card-hover-effect";

export default function HomeAboutGrid() {
  return (
    (<div className="max-w-6xl mx-auto px-8 md:flex hidden ">
      <HoverEffect items={data} />
    </div>)
  );
}
const data = [
  {
    title: "Engaging Workshops",
    description:
      " Dive into hands-on workshops that give you real skills in technical and non-technical areas alike. These sessions are all about learning by doing.",
    link: "/"
  },
  {
    title: "Impactful Projects",
    description:
      " Put your knowledge to work on projects that matter, tackling current issues in society and technology to make a real impact.",
    link: "/"
  },
  {
    title: "Industry Lectures",
    description:
      "Hear directly from the pros—industry leaders and experts who bring in fresh perspectives on the latest trends, challenges, and innovations that shape the world today.",
    link: "/"
  },
  {
    title: "Rigorous Competitions",
    description:
      " Push your limits by competing in national and international challenges. Test your skills, spark innovation, and build resilience.",
    link: "/"
  },
  {
    title: "Exciting Sessions",
    description:
      "From emerging tech to professional skills, these interactive sessions are designed to keep you inspired, engaged, and ready for what’s next.",
    link: "/"
  },
  {
    title: "Real World Knowledge",
    description:
      " Get ready to bridge the gap between classroom learning and the real world. We’ll equip you with the insights and tools to make a difference beyond campus.",
    link: "/"
  },
];
