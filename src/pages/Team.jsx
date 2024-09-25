import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  {FaInstagram, FaLinkedin} from 'react-icons/fa';

import img1 from "../assets/team/consulting/5.jpg";

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
      <h1 className="text-5xl font-semibold text-center mt-20 mb-10">Head</h1>
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
      <h1 className="text-5xl font-semibold text-center mt-20 mb-10">Coordinators</h1>
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

function Team() {
  const consHead = {
    name: "Pritesh Singh",
    photo: "",
  };
  const finHead = {
    name: "Samuel John",
    photo: "",
  };
  const multHead = {
    name: "Snehil Singh",
    photo: "src/assets/team/multimedia/1.jpg",
  };
  const opraHead = {
    name: "Nishant",
    photo: "src/assets/team/operations/1.jpg",
  };
  const prHead = {
    name: "Arsh Arora",
    photo: "src/assets/team/pr/1.jpg",
  };
  const webHead = {
    name: "",
    photo: "src/assets/team/web/1.jpeg",
  };
  const designHead={
    name: "Radhika Bondre",
    photo: "src/assets/team/design/1.jpg",
  }
  const cpgHead = {
    name: "Raghav Gupta",
    photo: "src/assets/team/CP_and_growth/1.jpg",
  };

  const coordinators = [
    { name: "Garvit Khedar", photo: "src/assets/team/finance/2.jpg" },
    { name: "Ankita Sri", photo: "src/assets/team/finance/3.jpg" },
    { name: "Disha Daga", photo: "src/assets/team/finance/4.jpg" },
    { name: "Soham Mapara", photo: "src/assets/team/finance/5.jpg" },
    { name: "Faheem Arif", photo: "src/assets/team/finance/6.jpg" },
    { name: "Shravan", photo: "src/assets/team/finance/7.jpeg" },
    { name: "Parth Dawar", photo: "src/assets/team/finance/8.jpg" },
  ];
  const consCoords = [
    { name: "Ayaan Ashraf", photo: "src/assets/team/consulting/2.jpeg" },
    { name: "Surya Tarun", photo: "src/assets/team/consulting/3.JPG" },
    { name: "Gaurang Joshi", photo: "src/assets/team/consulting/4.jpg" },
    { name: "Hiba Muhammed", photo: "src/assets/team/consulting/5.jpg" },
    { name: "Harsha Vardhan", photo: "src/assets/team/consulting/6.jpeg" },
    { name: "Malakar", photo: "src/assets/team/consulting/7.jpg" },
    { name: "Sidhartha", photo: "src/assets/team/consulting/8.jpeg" },
    // Add more coordinators as needed
  ];
  const multCoords = [
    { name: "Coordinator 1", photo: "src/assets/team/multimedia/2.jpg" },
    { name: "Coordinator 2", photo: "src/assets/team/multimedia/3.jpg" },
    { name: "Coordinator 3", photo: "src/assets/team/multimedia/4.jpg" },
    // Add more coordinators as needed
  ];
  const opraCoords = [
    { name: "Harshita", photo: "src/assets/team/operations/2.jpg" },
    { name: "Kartik Kumar", photo: "src/assets/team/operations/3.jpg" },
    { name: "Shubham Nare", photo: "src/assets/team/operations/4.jpg" },
    { name: "Krishna", photo: "src/assets/team/operations/5.jpg" },
    { name: "Yogesh Kumar", photo: "src/assets/team/operations/6.jpg" },
  ];
  const prCoords = [
    { name: "Aashi Ranja", photo: "src/assets/team/pr/2.jpg" },
    { name: "Atharv Lohare", photo: "src/assets/team/pr/3.jpg" },
    { name: "Abhignya Gogula", photo: "src/assets/team/pr/4.jpg" },
    { name: "Pranay Ragi", photo: "src/assets/team/pr/5.jpg" },
    { name: "Aakarsh Varshney", photo: "src/assets/team/pr/6.jpg" },
    { name: "Labdhi Anand", photo: "src/assets/team/pr/7.jpeg" },
    { name: "Rohan Holikatti", photo: "src/assets/team/pr/8.jpg" },
    { name: "Panshul Jindal", photo: "src/assets/team/pr/9.jpg" },
  ];
  const webCoords = [
    { name: "Coordinator 1", photo: "src/assets/team/web/5.jpg" },
    { name: "Coordinator 2", photo: "src/assets/team/web/3.JPG" },
    { name: "Coordinator 3", photo: "src/assets/team/web/4.png" },
    { name: "Coordinator 3", photo: "src/assets/team/web/2.jpg" },
  ];
  const cpgCoords = [
    { name: "Ananya Dutpal", photo: "src/assets/team/CP_and_growth/2.jpg" },
    { name: "Dheeraj Kurapati", photo: "src/assets/team/CP_and_growth/3.jpg" },
    { name: "Harshit", photo: "src/assets/team/CP_and_growth/4.jpg" },
    { name: "Manav Rathi", photo: "src/assets/team/CP_and_growth/5.jpeg" },
    { name: "Meghana", photo: "src/assets/team/CP_and_growth/6.jpg" },
    { name: "Jayant Kumar", photo: "src/assets/team/CP_and_growth/7.jpg" },
    { name: "Sai Charan", photo: "src/assets/team/CP_and_growth/8.jpg" },
    { name: "Suniras", photo: "src/assets/team/CP_and_growth/9.png" },
  ];
  const designCoords = [
    { name: "Coordinator 1", photo: "src/assets/team/design/2.jpg" },
    { name: "Coordinator 2", photo: "src/assets/team/design/3.jpg" },
    { name: "Coordinator 3", photo: "src/assets/team/design/4.jpg" },
    { name: "Coordinator 3", photo: "src/assets/team/design/5.jpg" },
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
            src="src/assets/team/1.jpeg"
            alt="overall head"
            className="w-45 h-45 rounded-full object-cover mb-2"
            style={{ height: "180px", width: "180px", objectFit: "cover" }}
          />
          <h2 className="text-3xl font-normal text-white mt-5">Aryan Bhubna</h2>
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
            src="src/assets/team/2.jpg"
            alt="overall head"
            className="w-45 h-45 rounded-full object-cover mb-2"
            style={{ height: "180px", width: "180px", objectFit: "cover" }}
          />
          <h2 className="text-3xl font-normal text-white mt-5">Omkar Nikanth</h2>
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
        title="Consulting"
        head={consHead}
        coordinators={consCoords}
      />
      <TeamPic
        title="Finance"
        head={finHead}
        coordinators={coordinators}
      />
      <TeamPic
        title="Multimedia"
        head={multHead}
        coordinators={multCoords}
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
        title="Corporate Partnership and Growth"
        head={cpgHead}
        coordinators={cpgCoords}
      />
      <TeamPic
        title="Design"
        head={cpgHead}
        coordinators={cpgCoords}
      />
      <TeamPic
        title="Web Development"
        head={webHead}
        coordinators={webCoords}
      />
    </div>
  );
}

export default Team;
