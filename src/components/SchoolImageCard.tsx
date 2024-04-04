import React from "react";

interface Props {
  imgSrc: string;
  schoolName: string;
  location: string;
}
const SchoolImageCard = (props: Props) => {
  return (
    <div className="border rounded-b-md border-noghreiSilver hover:cursor-pointer">
      <img src={props.imgSrc} alt="School" className="max-w-full" />
      <div className="p-2">
        <h3 className="mb-2 font-semibold sm:text-lg text-primary">
          {props.schoolName}
        </h3>
        <p className="text-secondary">{props.location}</p>
      </div>
    </div>
  );
};

export default SchoolImageCard;
