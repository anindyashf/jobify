import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";

const CreateJob = () => {
  const navigate = useNavigate();
  const { authData, clearAuthData } = useContext(AuthContext);
  const [jobData, setJobData] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: 1,
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: "",
    salary_max: "",
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!authData) {
        return alert("Please log in first");
      }

      const res = await axios.post(
        "https://final-project-api-alpha.vercel.app/api/jobs",
        jobData,
        {
          headers: {
            Authorization: `Bearer ${authData.token}`,
          },
        }
      );

      if (res.status === 200 || res.status === 201) {
        alert("Job vacancy created successfully");
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Failed to create job vacancy", err);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Create Job Vacancy</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Job Title
          </label>
          <input
            type="text"
            name="title"
            value={jobData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Job Description */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Job Description
          </label>
          <textarea
            name="job_description"
            value={jobData.job_description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Job Qualification */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Job Qualification
          </label>
          <textarea
            name="job_qualification"
            value={jobData.job_qualification}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Job Type */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Job Type
          </label>
          <input
            type="text"
            name="job_type"
            value={jobData.job_type}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Job Tenure */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Job Tenure
          </label>
          <input
            type="text"
            name="job_tenure"
            value={jobData.job_tenure}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Job Status */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Job Status
          </label>
          <select
            name="job_status"
            value={jobData.job_status}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value={1}>Open</option>
            <option value={0}>Closed</option>
          </select>
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Company Name
          </label>
          <input
            type="text"
            name="company_name"
            value={jobData.company_name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Company Image URL */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Company Image URL
          </label>
          <input
            type="url"
            name="company_image_url"
            value={jobData.company_image_url}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Company City */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Company City
          </label>
          <input
            type="text"
            name="company_city"
            value={jobData.company_city}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Salary Min */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Salary Min
          </label>
          <input
            type="number"
            name="salary_min"
            value={jobData.salary_min}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Salary Max */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Salary Max
          </label>
          <input
            type="number"
            name="salary_max"
            value={jobData.salary_max}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Create Job
        </button>
      </form>
    </div>
  );
};

export default CreateJob;
