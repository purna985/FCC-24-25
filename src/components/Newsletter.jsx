import React, { useState } from "react";

function Newsletter() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL = "https://script.google.com/macros/s/AKfycbwJ9KuTx9CrQz4Kyt21vQ8G-e6Emb1lVnONf3hqD3TSa1qDnlblkZH-i81ocUNuYkAMhQ/exec";
      
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
      });

      const result = await response.json(); 
      if (result.status === "success") {
        console.log("Data sent successfully!");
      } else {
        console.error("Error:", result.message);
        alert("Failed to send data.");
      }
    } catch (error) {
      console.error("Error:", error);
      console.log("An error occurred.");
    }
  };
  return (
    <div>
      <div className="flex flex-row justify-center items-center md-4:hidden md-1:justify-between">
        <div className="m-10 w-1/2 md-1:w-1/3 md-1:mx-12">
          <p className="text-6xl font-semibold py-1 md-1:text-5xl">FCC Newsroom</p>
          <p className="text-2xl py-1">
            Stay up-to-date with our latest events and activities by subscribing
            to our newsletter.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center m-10 w-1/4 md-1:w-2/3">
          <input
            className="my-2 px-5 w-full rounded-md bg-gray-800 h-10"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={userData.name}
            onChange={handleChange}
            required
          />
          <input
            className="my-2 px-5 w-full rounded-md bg-gray-800 h-10 "
            name="email"
            type="email"
            placeholder="Enter your email"
            value={userData.email}
            onChange={handleChange}
            required
          />
          <input
            className="my-2 px-5 w-full rounded-md bg-gray-800 h-10"
            name="mobile"
            type="text"
            placeholder="Enter your mobile number"
            value={userData.mobile}
            onChange={handleChange}
            required
          />
          <button
            className="w-1/2 h-9 mt-4 rounded-md bg-white text-black text-2xl font-semibold"
            onClick={handleSubmit}
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex flex-col md-5:hidden">
        <div className="m-10">
          <p className="flex justify-center text-5xl py-1">FCC Newsroom</p>
          <br/>
          <p className="text-xl">
            Stay up-to-date with our latest events and activities by subscribing
            to our newsletter.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center m-1">
          <input
            className="my-2 px-5 w-3/4 rounded-md bg-gray-800 h-10"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={userData.name}
            onChange={handleChange}
            required
          />
          <input
            className="my-2 px-5 w-3/4 rounded-md bg-gray-800 h-10"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={userData.email}
            onChange={handleChange}
            required
          />
          <input
            className="my-2 px-5 w-3/4 rounded-md bg-gray-800 h-10"
            name="mobile"
            type="text"
            placeholder="Enter your mobile number"
            value={userData.mobile}
            onChange={handleChange}
            required
          />
          <button
            className="w-1/2 h-9 my-4 rounded-md bg-white text-black text-2xl font-semibold"
            onClick={handleSubmit}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
