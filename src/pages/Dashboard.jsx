import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex min-h-[calc(100vh-56px-68px)]">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-6">
        <ul>
          <li>
            <Link
              to="/dashboard"
              className="block py-2 hover:bg-gray-700 px-4 rounded-md"
            >
              List Job Vacancies
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/create"
              className="block py-2 hover:bg-gray-700 px-4 rounded-md"
            >
              Create Job Vacancy
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Content */}
      <div className="w-3/4 p-6 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
