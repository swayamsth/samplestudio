import React from "react";

const Grid = ({ projectItems }) => {
  return (
    <div className="px-8 grid grid-cols-13 grid-rows-4 gap-8">
      <div className="row-start-1 row-span-2 col-start-1 col-span-8">
        <img
          src={projectItems[0].image}
          alt={projectItems[0].title}
          className="object-cover rounded-3xl w-full h-full"
        />
      </div>
      <div className="row-start-1 row-span-3 col-start-9 col-span-5">
        <img
          src={projectItems[1].image}
          alt={projectItems[1].title}
          className="object-cover rounded-3xl w-full h-full"
        />
      </div>
      <div className="row-start-3 row-span-2 col-start-1 col-span-4">
        <img
          src={projectItems[2].image}
          alt={projectItems[2].title}
          className="object-cover rounded-3xl w-full h-full"
        />
      </div>
      <div className="row-stat-3 row-span-2 col-start-5 col-span-4">
        <img
          src={projectItems[3].image}
          alt={projectItems[3].title}
          className="object-cover rounded-3xl w-full h-full"
        />
      </div>
      <div className="row-start-4 row-span-1 col-start-9 col-span-5">
        <img
          src={projectItems[4].image}
          alt={projectItems[4].title}
          className="object-cover rounded-3xl w-full h-full"
        />
      </div>
    </div>
  );
};

export default Grid;
