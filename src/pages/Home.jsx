import React, { useState } from 'react';

const Home = () => {
  const [jobs, setJobs] = useState([
    { title: 'Software Engineer', category: 'Engineering', description: 'Develop and maintain software applications.' },
    { title: 'Marketing Manager', category: 'Marketing', description: 'Lead marketing campaigns and strategies.' },
    { title: 'UX Designer', category: 'Design', description: 'Design user-centered interfaces for websites and apps.' },
    { title: 'Sales Representative', category: 'Sales', description: 'Generate leads and close deals.' },
    { title: 'Financial Analyst', category: 'Finance', description: 'Analyze financial data and provide insights.' },
    { title: 'Registered Nurse', category: 'Healthcare', description: 'Provide direct patient care.' },
    { title: 'Data Scientist', category: 'Technology', description: 'Extract knowledge and insights from data.' },
    { title: 'Teacher', category: 'Education', description: 'Educate and inspire students.' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredJobs = jobs.filter((job) => {
    return job.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center leading-tight">
          Find Your Dream Job
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 text-center max-w-3xl px-4">
          Explore thousands of opportunities and take your career to the next level. 
        </p>
        <div className="flex flex-col md:flex-row items-center w-full md:w-3/4 lg:w-1/2">
          <input 
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={handleSearch}
            className="p-3 md:p-4 rounded-l-full md:rounded-l-md md:rounded-r-none shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-auto 
                   bg-black"
          />
          <button className="bg-white text-blue-600 font-semibold py-3 md:py-4 px-6 md:px-8 rounded-r-full md:rounded-r-md md:rounded-l-none shadow-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4 md:mt-0">
            Search
          </button>
        </div>
      </section>

      {/* Featured Job Categories */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 lg:mb-12">
          Explore Top Jobs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredJobs.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105"
            >
              <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-3">
                {job.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Top Recent Jobs Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 lg:mb-12">
          Top Recent Jobs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Recent Job Card */}
          {[
            { title: 'Software Engineer', company: 'Tech Corp', location: 'San Francisco, CA' },
            { title: 'Product Manager', company: 'Innovate Ltd', location: 'New York, NY' },
            { title: 'UX Designer', company: 'Creative Inc', location: 'Austin, TX' },
            { title: 'Data Scientist', company: 'DataWorks', location: 'Remote' },
          ].map((job, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                {job.title}
              </h3>
              <p className="text-gray-700 text-base mb-1">{job.company}</p>
              <p className="text-gray-500 text-sm">{job.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 lg:mb-12 text-blue-800">
          About Us
        </h2>
        <div className="max-w-4xl mx-auto text-center text-gray-700 space-y-6">
          <p className="text-lg md:text-xl lg:text-2xl">
            JobFinder is dedicated to connecting job seekers with employers across various industries, providing a seamless and efficient way to explore career opportunities.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl">
            Our mission is to empower individuals to find meaningful employment by offering a platform that makes the job search process intuitive and accessible for everyone.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl">
            We believe that finding your dream job should be a rewarding journey, and we are here to support you every step of the way.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center mt-12">
        <p className="text-sm">© {new Date().getFullYear()} JobFinder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;


