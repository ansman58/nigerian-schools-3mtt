import React from "react";
import SchoolCountCard from "./SchoolCountCard";

const SchoolsCountWrapper = () => {
  const schoolsShortInfo = [
    {
      name: "Aba",
      count: 2134,
    },
    {
      name: "Lagos",
      count: 2134,
    },
    {
      name: "Abuja",
      count: 2134,
    },
    {
      name: "Port Harcourt",
      count: 2134,
    },
    {
      name: "Ibadan",
      count: 2134,
    },
    {
      name: "Kano",
      count: 2134,
    },
  ];

  return (
    <div className="grid justify-center max-w-screen-xl grid-cols-2 gap-2 mb-8 sm:grid-cols-3">
      {schoolsShortInfo.map((school, index: number) => (
        <SchoolCountCard key={index} name={school.name} count={school.count} />
      ))}
    </div>
  );
};

export default SchoolsCountWrapper;
