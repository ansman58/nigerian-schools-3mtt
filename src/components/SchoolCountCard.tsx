import React from "react";

interface Props {
  name: string;
  count: number;
}
const SchoolCountCard = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 text-center border rounded-md hover:bg-primary [&>h3]:hover:text-white [&>p]:hover:text-white hover:cursor-pointer sm:p-10 border-primary">
      <h3 className="text-primary">Schools in {props.name}</h3>
      <p className="text-secondary">{props.count} Schools</p>
    </div>
  );
};

export default SchoolCountCard;
