import React, { useState } from "react";

import YearTile from "./YearTile.jsx";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { SpeakersData_2024 } from "../assets/data/speakers/speakerData.js";
import { SpeakersData_2023 } from "../assets/data/speakers/speakerData.js";
import HorizonSpeakerCard from "./horizon/HorizonSpeakerCard.jsx";

function HorizonSpeakers() {
  const [year, setYear] = useState(localStorage.getItem("year") || "2024");

  const handleYearChange = (selectedYear) => {
    setYear(selectedYear);
    localStorage.setItem("year", selectedYear);
  };

  return (
    <div>
      <div className="relative flex flex-col w-full items-center justify-center my-6">
        <div className="flex items-center justify-center w-90p my-6">
          <p className="font-rosario mt-0 mb-4 text-4xl md:text-6xl md-1:w-full md-1:text-center">
            Previous Speakers
          </p>
        </div>

        <Tabs defaultValue="2024" className="w-full mx-auto text-center">
          <TabsList className="w-1/2 md:w-1/3 px-6 py-7 bg-[#1e1d1d5c] mb-4 ">
            <TabsTrigger
              className="w-1/2 hover:scale-105 text-lg text-white data-[state=active]:text-white data-[state=active]:bg-[#0B418B] "
              value="2023"
            >
              2023
            </TabsTrigger>
            <TabsTrigger
              className="w-1/2 hover:scale-105 text-lg text-white data-[state=active]:text-white data-[state=active]:bg-[#0B418B] "
              value="2024"
            >
              2024
            </TabsTrigger>
          </TabsList>
          <TabsContent value="2023" className=" mx-auto">
            <div className="md:w-3/4 mx-auto">
              <div className="flex justify-evenly flex-wrap gap-3 md-1:gap-3 ">
              {SpeakersData_2023.map((data) =>
                  HorizonSpeakerCard({
                    image: data.image,
                    name: data.name,
                    description: data.description,
                  })
                )}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="2024" className=" mx-auto">
            <div className="md:w-3/4 mx-auto">
              <div className="flex justify-evenly flex-wrap gap-3 md-1:gap-3  ">
                {SpeakersData_2024.map((data) =>
                  HorizonSpeakerCard({
                    image: data.image,
                    name: data.name,
                    description: data.description,
                  })
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="w-20 h-20  md:w-48 md:h-48 bg-blue-500 absolute top-0 left-0 blur-[5rem] md:blur-[8rem] z-10"></div>
        <div className="w-20 h-20  md:w-48 md:h-48 bg-blue-500 absolute right-0 bottom-0 blur-[4rem] md:blur-[8rem] z-10"></div>
      </div>
    </div>
  );
}

export default HorizonSpeakers;


