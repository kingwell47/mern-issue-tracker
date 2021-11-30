import React from "react";

const Project = ({ info }) => {
  const { project, description, issues } = info;
  const pending = issues.filter((item) => item.open === true);

  return (
    <div className="hover:bg-gray-200 rounded-md bg-gray-300 shadow-md p-3 cursor-pointer transition-colors">
      <h2 className="font-bold text-xl text-center">{project}</h2>
      <p className="text-center mt-3">{description}</p>
      <ul className="flex justify-around mt-3">
        <li className="text-blue-500">Issues: {issues.length}</li>
        <li className="text-red-500">Pending: {pending.length}</li>
        <li className="text-green-500">
          Resolved: {issues.length - pending.length}
        </li>
      </ul>
    </div>
  );
};

export default Project;
