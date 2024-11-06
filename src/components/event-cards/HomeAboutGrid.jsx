import { HoverEffect } from "../ui/card-hover-effect";

export default function HomeAboutGrid() {
  return (
    (<div className="max-w-5xl mx-auto px-8 md:flex hidden ">
      <HoverEffect items={data} />
    </div>)
  );
}
const data = [
  {
    title: "Industry Lectures",
    description:
      "Gain insights directly from industry leaders and professionals, exploring the latest trends, challenges, and innovations shaping today's industries.",
    link: "/"
  },
  {
    title: "Engaging Workshops",
    description:
      "Hands-on learning experiences designed to deepen understanding and build practical skills across various technical and non-technical fields.",
    link: "/"
  },
  {
    title: "Impactful Projects",
    description:
      "Work on real-world projects that address pressing societal and technological issues, allowing you to apply your knowledge to make a tangible difference.",
    link: "/"
  },
  {
    title: "Rigorous Competitions",
    description:
      "Challenge your skills and knowledge by competing against peers in national and international competitions, fostering innovation and resilience.",
    link: "/"
  },
  {
    title: "Exciting Sessions",
    description:
      "Interactive sessions covering a broad range of topics from emerging technologies to professional development, designed to engage and inspire.",
    link: "/"
  },
  {
    title: "Real World Knowledge",
    description:
      "Learning that bridges the gap between academia and industry, equipping you with the skills and insights needed to thrive in real-world environments.",
    link: "/"
  },
];
