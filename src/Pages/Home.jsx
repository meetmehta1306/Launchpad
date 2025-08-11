import React from "react";
import Hero from "../components/Home/Hero";
import HomeStats from "../components/Home/HomeStats";
import LogoSlider from "../components/Home/LogoSlider";
import HomeRecruiters from "../components/Home/HomeRecruiters";
import JobSeekers from "../components/Home/JobSeekers";
import Footer from "../components/Home/Footer";

function Home() {
  return (
    <div className="font-Poppins">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <div className="bg-gray-100 py-10">
        <HomeStats />
      </div>

      {/* Logo Slider Section */}
      <div className="bg-white py-10">
        <LogoSlider />
      </div>

      {/* Recruiters Section */}
      <div className="bg-gray-50 py-10">
        <HomeRecruiters />
      </div>

      {/* Job Seekers Section */}
      <div className="bg-white py-10">
        <JobSeekers />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Home;
