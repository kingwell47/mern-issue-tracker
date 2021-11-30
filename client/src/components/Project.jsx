import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DUMMY_DATA from "../dummy_data.json";

const Project = () => {
  const { id } = useParams();
  const [projectData, setProjectData] = useState({
    project: "",
    description: "",
    issues: [],
  });

  useEffect(() => {
    let project = DUMMY_DATA.filter((item) => item._id === parseInt(id));
    setProjectData(project[0]);
  }, []);

  return (
    <div className="pt-20 px-3">
      <h2 className="text-center font-bold text-xl">{projectData.project}</h2>
      <p>{projectData.description}</p>
      <ul>
        {projectData.issues.map((item, index) => (
          <li key={index}>
            <div className="bg-blue-200 mt-2 rounded-md p-2">
              <h3 className="text-center font-bold">{item.issue_title}</h3>
              <p>{item.issue_text}</p>
              <p>Created by: {item.created_by}</p>
              <p>Assigned to: {item.assigned_to}</p>
              <p>Open: {item.open.toString()}</p>
              <p>Status text: {item.status_text}</p>
              <p>Created on: {item.created_on}</p>
              <p>Last updated: {item.updated_on}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
