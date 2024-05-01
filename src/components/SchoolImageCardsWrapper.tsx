import React from "react";
import SchoolImageCard from "./SchoolImageCard";
import School1 from "../assets/school1.jpg";
import School2 from "../assets/school2.jpg";
import School3 from "../assets/school3.jpg";
import School4 from "../assets/school4.jpg";
import School7 from "../assets/school7.jpg";
import School6 from "../assets/school6.jpg";

const SchoolImageCardsWrapper = () => {
  const schools = [
    {
      name: "Corinthia Villa School",
      location: "VI, Lagos",
      image: School1,
    },
    {
      name: "Leads School",
      location: "VI, Lagos",
      image: School2,
    },
    {
      name: "Grace School",
      location: "VI, Lagos",
      image: School3,
    },
    {
      name: "Learning Field School",
      location: "VI, Lagos",
      image: School4,
    },
    {
      name: "Progressives intl",
      location: "VI, Lagos",
      image: School7,
    },
    {
      name: "Progressives intl",
      location: "VI, Lagos",
      image: School7,
    },
    {
      name: "Progressives intl",
      location: "VI, Lagos",
      image: School7,
    },
    {
      name: "Progressives intl",
      location: "VI, Lagos",
      image: School7,
    },
    {
      name: "Progressives intl",
      location: "VI, Lagos",
      image: School7,
    },
    {
      name: "Progressives intl",
      location: "VI, Lagos",
      image: School7,
    },
    {
      name: "Progressives intl",
      location: "VI, Lagos",
      image: School7,
    },
    {
      name: "Progressives intl",
      location: "VI, Lagos",
      image: School7,
    },
    {
      name: "Progressives intl",
      location: "VI, Lagos",
      image: School7,
    },
    {
      name: "Progressives intl",
      location: "VI, Lagos",
      image: School7,
    },
    {
      name: "Progressives intl",
      location: "VI, Lagos",
      image: School7,
    },
    {
      name: "Progressives intl",
      location: "VI, Lagos",
      image: School7,
    },
    {
      name: "Progressives intl",
      location: "VI, Lagos",
      image: School7,
    },
    {
      name: "Progressives intl",
      location: "VI, Lagos",
      image: School7,
    },
    {
      name: "Progressives intl",
      location: "VI, Lagos",
      image: School7,
    },
  
  ];
  
  return (
    <div className="text-center">
      <div className="mb-6">
        <h1 className="mb-4 font-semibold">Today's Top Schools</h1>
        <p className="mb-2 text-lightBlack">
          A selection of the best schools, discount only available today
        </p>
        <div className="flex justify-center">
          <hr className="w-10 h-[2px] bg-primary" />
        </div>
      </div>
      <div className="grid justify-center grid-cols-2 gap-2 md:gap-4 sm:grid-cols-3">
        {schools.map((school, index) => (
          <SchoolImageCard
            key={index}
            imgSrc={school.image}
            schoolName={school.name}
            location={school.location}
          />
        ))}
      </div>
    </div>
  );
};

export default SchoolImageCardsWrapper;
