import React from "react";

const Project = () => {
  return (
    <div className="hover:bg-gray-200 rounded-md bg-gray-300 shadow-md p-3 cursor-pointer transition-colors">
      <h2 className="font-bold text-xl text-center">Project Title</h2>
      <p className="text-center mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste
        nam nihil assumenda laudantium exercitationem inventore expedita autem
        ullam quas!
      </p>
      <ul className="flex justify-around mt-3">
        <li className="text-blue-500">Issues: 100</li>
        <li className="text-red-500">Pending: 50</li>
        <li className="text-green-500">Resolved: 50</li>
      </ul>
    </div>
  );
};

export default Project;
