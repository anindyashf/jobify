import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Vacancy from "./pages/Vacancy";
import { AuthProvider } from "./utils/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import JobList from "./components/JobList";
import CreateJob from "./components/CreateJob";
import ViewJob from "./components/ViewJob";
import EditJob from "./components/EditJob";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen" id="page-container">
          <Navbar />

          <div className="flex-grow" id="content-wrap">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vacancy" element={<Vacancy />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              >
                {/* Relative paths for nested routes */}
                <Route path="create" element={<CreateJob />} />
                <Route path="view/:id" element={<ViewJob />} />
                <Route path="edit/:id" element={<EditJob />} />
                <Route path="" element={<JobList />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          <Footer className="absolute bottom-0 w-full h-10 bg-gray-800 text-white p-2" />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
