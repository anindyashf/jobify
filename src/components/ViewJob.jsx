import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";

const ViewJob = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const res = await axios.get(
          `https://final-project-api-alpha.vercel.app/api/jobs/${id}`
        );
        setJobDetails(res.data);
      } catch (err) {
        console.error("Failed to fetch job details", err);
      }
    };
    fetchJobDetails();
  }, [id]);

  if (!jobDetails) return <Spinner />;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">{jobDetails.title}</h1>
      <div className="flex items-center space-x-4">
        <img
          src={jobDetails.company_image_url}
          alt={jobDetails.company_name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="text-2xl">{jobDetails.company_name}</h2>
          <p>{jobDetails.company_city}</p>
        </div>
      </div>
      <p className="mt-2">
        <strong>Description:</strong> {jobDetails.job_description}
      </p>
      <p>
        <strong>Qualification:</strong> {jobDetails.job_qualification}
      </p>
      <p>
        <strong>Salary Range:</strong> IDR {jobDetails.salary_min} - IDR{" "}
        {jobDetails.salary_max}
      </p>
      <p>
        <strong>Job Type:</strong> {jobDetails.job_type}
      </p>
      <p>
        <strong>Tenure:</strong> {jobDetails.job_tenure}
      </p>
      <p>
        <strong>Status:</strong>{" "}
        {jobDetails.job_status === 1 ? "Open" : "Closed"}
      </p>
    </div>
  );
};

export default ViewJob;
