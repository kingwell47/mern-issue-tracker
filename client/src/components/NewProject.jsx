import React, { useState } from "react";

const NewProject = () => {
  const [newIssue, setNewIssue] = useState(false);
  return (
    <form className="p-3 pt-20 flex flex-col">
      <label htmlFor="project_title">Project: </label>
      <input
        className="bg-gray-100 text-center rounded-md p-2 font-bold"
        type="text"
        placeholder="Title here..."
        required
        id="project_title"
        name="project"
      />
      <label className="mt-2" htmlFor="project_desc">
        Description:{" "}
      </label>
      <textarea
        className="bg-gray-100 rounded-md p-2"
        placeholder="Describe here..."
        required
        name="description"
        id="project_desc"
      />
      <div className="flex mt-2 items-center gap-1">
        <input
          type="checkbox"
          name="new-issue-check"
          id="new-issue-check"
          onChange={() => setNewIssue(!newIssue)}
        />
        <label htmlFor="new-issue-check">Create New Issue?</label>
      </div>
      {newIssue && (
        <div className="flex flex-col">
          <label className="mt-2" htmlFor="issue_title">
            New Issue:{" "}
          </label>
          <input
            className="bg-gray-100 rounded-md p-2"
            type="text"
            placeholder="New issue..."
            name="issue_title"
            id="issue_title"
          />
          <label className="mt-2" htmlFor="issue_desc">
            Describe Issue:{" "}
          </label>
          <textarea
            className="bg-gray-100 rounded-md p-2"
            placeholder="Describe here..."
            name="issue_text"
            id="issue_desc"
          />
          <label className="mt-2" htmlFor="assign_to">
            Assign to:{" "}
          </label>
          <input
            className="bg-gray-100 rounded-md p-2"
            type="text"
            placeholder="Assign to..."
            name="assign_to"
            id="assign_to"
          />
        </div>
      )}
      <input
        className="font-bold bg-blue-600 text-white rounded-md p-2 mt-3"
        type="submit"
        value="Create New Project"
      />
    </form>
  );
};

export default NewProject;
