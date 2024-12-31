import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";
import Spinner from "./Spinner";

const JobList = () => {
  const { authData, clearAuthData } = useContext(AuthContext);
  const [jobVacancies, setJobVacancies] = useState();

  useEffect(() => {
    const fetchJobVacancies = async () => {
      try {
        const res = await axios.get(
          "https://final-project-api-alpha.vercel.app/api/jobs"
        );
        setJobVacancies(res.data);
      } catch (error) {
        console.error("Failed to fetch job vacancies:", error);
        alert("Failed to load job vacancies.");
      }
    };

    fetchJobVacancies();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://final-project-api-alpha.vercel.app/api/jobs/${id}`,
        {
          headers: {
            Authorization: `Bearer ${authData.token}`,
          },
        }
      );
      if (response.status === 200) {
        alert("Job vacancy deleted successfully.");
        setJobVacancies(jobVacancies.filter((job) => job._id !== id));
      }
    } catch (error) {
      console.error("Failed to delete job vacancy:", error);
      alert("Failed to delete job vacancy.");
    }
  };

  if (!jobVacancies) return <Spinner />;

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Job Vacancies</h1>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Job Title</th>
            <th className="border p-2">Company</th>
            <th className="border p-2">Type | Tenure</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobVacancies.map((job) => (
            <tr key={job._id}>
              <td className="border p-2">{job.title}</td>
              <td className="border p-2">{job.company_name}</td>
              <td className="border p-2">
                {job.job_type} | {job.job_tenure}
              </td>
              <td className="border p-2 space-x-2">
                <Link
                  to={`/dashboard/view/${job._id}`}
                  className="inline-block text-blue-500 hover:bg-blue-100 hover:text-blue-700 px-4 py-2 rounded-md transition ease-in duration-200"
                >
                  View
                </Link>
                <Link
                  to={`/dashboard/edit/${job._id}`}
                  className="inline-block text-yellow-500 hover:bg-yellow-100 hover:text-yellow-700 px-4 py-2 rounded-md transition ease-in duration-200"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(job._id)}
                  className="inline-block text-red-500 hover:bg-red-100 hover:text-red-700 px-4 py-2 rounded-md transition ease-in duration-200"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobList;
