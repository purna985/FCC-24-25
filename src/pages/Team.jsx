import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';




function TeamPic({ title, head, coordinators }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="overflow-x-hidden p-6 mb-20">
      <h1 className="text-5xl font-semibold text-center mb-10 mt-20">{title}</h1>
      <h1 className="text-4xl font-semibold text-center mt-20 mb-10">Domain Head</h1>
      {head && (
        <div className="flex flex-col items-center mb-8">
          <div
            className="flex flex-col items-center p-6 relative group"
            style={{
              backgroundColor: "#153556",
              borderRadius: "12px",
              width: "264px",
              height: "319px",
              transition: "background-color 0.3s ease",
            }}
          >
            <img
              src={head.photo}
              alt={head.name}
              className="w-45 h-45 rounded-full object-cover mb-2"
              style={{ height: "180px", width: "180px", objectFit: "cover" }}
            />
            <h2 className="text-3xl font-normal text-white mt-5">{head.name}</h2>
            <div
              className="absolute inset-0 flex items-center justify-center bg-[#153556] bg-opacity-0 group-hover:bg-opacity-80 transition-opacity duration-300"
            >
              <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-white text-4xl" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-white text-4xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <h1 className="text-4xl font-semibold text-center mt-20 mb-10">Coordinators</h1>
      <div className="mt-8">
        <Carousel responsive={responsive}
        >
          {coordinators.map((coordinator, index) => (
            <div key={index} className="flex flex-col items-center p-6">
              <div
                className="flex flex-col items-center p-6 relative group"
                style={{
                  backgroundColor: "#153556",
                  borderRadius: "12px",
                  width: "239px",
                  height: "289px",
                  transition: "background-color 0.3s ease",
                }}
              >
                <img
                  src={coordinator.photo}
                  alt={coordinator.name}
                  className="w-40 h-40 rounded-full object-cover mb-2"
                />
                <h2 className="text-2xl font-normal text-white mt-5">{coordinator.name}</h2>
                <div
                  className="absolute inset-0 flex items-center justify-center bg-[#153556] bg-opacity-0 group-hover:bg-opacity-80 transition-opacity duration-300"
                >
                  <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="text-white text-4xl" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-white text-4xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

TeamPic.propTypes = {
  title: PropTypes.string.isRequired,
  head: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  coordinators: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    })
  ).isRequired,
};

import Head1 from "/src/assets/team/1.jpeg";
import Head2 from "/src/assets/team/2.jpg";

import PriteshSingh from "/src/assets/team/consulting/Pritesh_Singh.jpeg";
import Samuel from "/src/assets/team/finance/1.jpg";
import Snehil from "/src/assets/team/multimedia/1.jpg";
import Nishant from "/src/assets/team/operations/1.jpg";
import Anand from "/src/assets/team/web/1.jpeg";
import Radhika from "/src/assets/team/design/Radhika_Rajesh_Bondre.jpg";
import Arin from "/src/assets/team/CP_and_growth/1.jpg";

import Garvit from "/src/assets/team/finance/2.jpg";
import Ankita from "/src/assets/team/finance/3.jpg";
import Disha from "/src/assets/team/finance/4.jpg";
import Soham from "/src/assets/team/finance/5.jpg";
import Faheem from "/src/assets/team/finance/6.jpg";
import Shravan from "/src/assets/team/finance/7.jpeg";
import Parth from "/src/assets/team/finance/8.jpg";

import Ayaan from "/src/assets/team/consulting/2.jpeg";
import Surya from "/src/assets/team/consulting/3.jpg";
import Gaurang from "/src/assets/team/consulting/4.jpg";
import Hiba from "/src/assets/team/consulting/5.jpg";
import Harsha from "/src/assets/team/consulting/6.jpeg";
import Malakar from "/src/assets/team/consulting/7.jpg";
import Sidhartha from "/src/assets/team/consulting/8.jpeg";

import Adil_multi from "/src/assets/team/multimedia/2.jpg";
import Praful_multi from "/src/assets/team/multimedia/3.jpg";
import Vedant_multi from "/src/assets/team/multimedia/4.jpg";

import Harshita from "/src/assets/team/operations/2.jpg";
import Kartik from "/src/assets/team/operations/3.jpg";
import Shubham from "/src/assets/team/operations/4.jpg";
import Krishna from "/src/assets/team/operations/5.jpg";
import Yogesh from "/src/assets/team/operations/6.jpg";

import Aashi from "/src/assets/team/pr/2.jpg";
import Atharv from "/src/assets/team/pr/3.jpg";
import Abhignya from "/src/assets/team/pr/4.jpg";
import Pranay from "/src/assets/team/pr/5.jpg";
import Aakarsh from "/src/assets/team/pr/6.jpg";
import Labdhi from "/src/assets/team/pr/7.jpeg";
import Rohan from "/src/assets/team/pr/8.jpg";
import Panshul from "/src/assets/team/pr/9.jpg";

import Vishank from "/src/assets/team/web/5.jpg";
import Dhawal from "/src/assets/team/web/3.jpg";
import Rithvik from "/src/assets/team/web/4.png";
import Mahesh from "/src/assets/team/web/2.jpg";

import Ananya from "/src/assets/team/CP_and_growth/2.jpg";
import Dheeraj from "/src/assets/team/CP_and_growth/3.jpg";
import Harshit from "/src/assets/team/CP_and_growth/4.jpg";
import Manav from "/src/assets/team/CP_and_growth/5.jpeg";
import Meghana from "/src/assets/team/CP_and_growth/6.jpg";
import Jayant from "/src/assets/team/CP_and_growth/7.jpg";
import Sai from "/src/assets/team/CP_and_growth/8.jpg";
import Suniras from "/src/assets/team/CP_and_growth/9.png";

import Anay from "/src/assets/team/design/2.jpg";
import Bhumi from "/src/assets/team/design/3.jpg";
import Adhyant from "/src/assets/team/design/4.jpg";
import Azeem from "/src/assets/team/design/5.jpeg";



function Team() {
  const consHead = {
    name: "Pritesh Singh",
    photo: PriteshSingh,
  };
  const finHead = {
    name: "Samuel John",
    photo: Samuel,
  };
  const multHead = {
    name: "Snehil",
    photo: Snehil,
  };
  const opraHead = {
    name: "Nishant",
    photo: Nishant,
  };
  const prHead = {
    name: "Arsh Arora",
    photo: "src/assets/team/pr/1.jpg",
  };
  const webHead = {
    name: "Anand",
    photo: Anand,
  };
  const designHead = {
    name: "Radhika",
    photo: Radhika,
  }
  const cpgHead = {
    name: "Arin",
    photo: Arin,
  };

  const coordinators = [
    { name: "Garvit Khedar", photo: Garvit },
    { name: "Ankita Sri", photo: Ankita },
    { name: "Disha Daga", photo: Disha },
    { name: "Soham Mapara", photo: Soham },
    { name: "Faheem Arif", photo: Faheem },
    { name: "Shravan", photo: Shravan },
    { name: "Parth Dawar", photo: Parth },
  ];
  const consCoords = [
    { name: "Ayaan Ashraf", photo: Ayaan },
    { name: "Surya Tarun", photo: Surya },
    { name: "Gaurang Joshi", photo: Gaurang },
    { name: "Hiba Muhammed", photo: Hiba },
    { name: "Harsha Vardhan", photo: Harsha },
    { name: "Malakar", photo: Malakar },
    { name: "Sidhartha", photo: Sidhartha },
    // Add more coordinators as needed
  ];
  const multCoords = [
    { name: "Adil Anwar", photo: Adil_multi },
    { name: "Praful", photo: Praful_multi },
    { name: "Vedant", photo: Vedant_multi },
    // Add more coordinators as needed
  ];
  const opraCoords = [
    { name: "Harshita", photo: Harshita },
    { name: "Kartik Kumar", photo: Kartik },
    { name: "Shubham Nare", photo: Shubham },
    { name: "Krishna", photo: Krishna },
    { name: "Yogesh Kumar", photo: Yogesh },
  ];
  const prCoords = [
    { name: "Aashi Ranjan", photo: Aashi },
    { name: "Atharv Lohare", photo: Atharv },
    { name: "Abhignya Gogula", photo: Abhignya },
    { name: "Pranay Ragi", photo: Pranay },
    { name: "Aakarsh Varshney", photo: Aakarsh },
    { name: "Labdhi Anand", photo: Labdhi },
    { name: "Rohan Holikatti", photo: Rohan },
    { name: "Panshul Jindal", photo: Panshul },
  ];
  const webCoords = [
    { name: "Vishank", photo: Vishank },
    { name: "Dhawal", photo: Dhawal },
    { name: "Rithvik", photo: Rithvik },
    { name: "Mahesh", photo: Mahesh },
  ];
  const cpgCoords = [
    { name: "Ananya Dutpal", photo: Ananya },
    { name: "Dheeraj Kurapati", photo: Dheeraj },
    { name: "Harshit", photo: Harshit },
    { name: "Manav Rathi", photo: Manav },
    { name: "Meghana", photo: Meghana },
    { name: "Jayant Kumar", photo: Jayant },
    { name: "Sai Charan", photo: Sai },
    { name: "Suniras", photo: Suniras },
  ];
  const designCoords = [
    { name: "Anay", photo: Anay },
    { name: "Bhumi", photo: Bhumi },
    { name: "Adhyant", photo: Adhyant },
    { name: "Azeem", photo: Azeem },
  ];


  return (
    <div className="overflow-x-hidden">
      {/* <TeamPic title="Core Team" head={head} coordinators={coordinators} /> */}
      {/* meet the team heading */}
      <h1 className="text-7xl font-semibold text-center mb-20 mt-20">
        Meet The Team
      </h1>

      <h2 className="text-5xl font-semibold text-center mb-10 mt-20">Overall Coordinators</h2>

      <div className="flex flex-row justify-evenly items-center mb-20 mt-20">

        <div className="flex flex-col items-center mb-8">
          <div
            className="flex flex-col items-center p-6 relative group"
            style={{
              backgroundColor: "#153556",
              borderRadius: "12px",
              width: "264px",
              height: "319px",
              transition: "background-color 0.3s ease",
            }}
          >
            <img
              src={Head1}
              alt="overall head"
              className="w-45 h-45 rounded-full object-cover mb-2"
              style={{ height: "180px", width: "180px", objectFit: "cover" }}
            />
            <h2 className="text-3xl font-normal text-white mt-5">Aryan Bubna</h2>
            <div
              className="absolute inset-0 flex items-center justify-center bg-[#153556] bg-opacity-0 group-hover:bg-opacity-80 transition-opacity duration-300"
            >
              <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-white text-4xl" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-white text-4xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mb-8">
          <div
            className="flex flex-col items-center p-6 relative group"
            style={{
              backgroundColor: "#153556",
              borderRadius: "12px",
              width: "264px",
              height: "319px",
              transition: "background-color 0.3s ease",
            }}
          >
            <img
              src={Head2}
              alt="overall head"
              className="w-45 h-45 rounded-full object-cover mb-2"
              style={{ height: "180px", width: "180px", objectFit: "cover" }}
            />
            <h2 className="text-3xl font-normal text-white mt-5">Omkar Nilkanth</h2>
            <div
              className="absolute inset-0 flex items-center justify-center bg-[#153556] bg-opacity-0 group-hover:bg-opacity-80 transition-opacity duration-300"
            >
              <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-white text-4xl" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-white text-4xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TeamPic
        title="Finance"
        head={finHead}
        coordinators={coordinators}
      />
      <TeamPic
        title="Consulting"
        head={consHead}
        coordinators={consCoords}
      />
      <TeamPic
        title="Corporate Partnership and Growth"
        head={cpgHead}
        coordinators={cpgCoords}
      />
      <TeamPic
        title="Operations"
        head={opraHead}
        coordinators={opraCoords}
      />
      <TeamPic
        title="Public Relations"
        head={prHead}
        coordinators={prCoords}
      />
      <TeamPic
        title="Web"
        head={webHead}
        coordinators={webCoords}
      />
      <TeamPic
        title="Design"
        head={designHead}
        coordinators={designCoords}
      />
      <TeamPic
        title="Multimedia"
        head={multHead}
        coordinators={multCoords}
      />
    </div>
  );
}

export default Team;
