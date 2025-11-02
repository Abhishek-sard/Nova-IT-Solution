import React from 'react';
import { Link } from 'react-router-dom';
import CCNA from '../../assets/ccna.jpg';
import OZConnection from '../../assets/ozconn.jpg';
import Ramdhhuni from '../../assets/ramdhuni.jpg.jpg';
import Gyme from '../../assets/gyme.jpg';

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "CCNA Care Agency",
      category: "WebSite",
      description: "A responsive website for a healthcare agency offering CCNA training and certification courses.",
      image: CCNA,
      technologies: ["React", "Node.js", "MongoDB", "Express JS"],
      results: {
        revenue: "+45%",
        conversion: "+32%",
        loadTime: "-60%"
      },
      link: "https://ccnacare.com.au/",
      featured: true
    },
    {
      id: 2,
      title: "Government Project - Ramdhuni -1 website",
      category: "WebSite",
      description: "A comprehensive website for the Government of Ramdhuni, providing information and services to citizens.",
      image: Ramdhhuni,
      technologies: ["MERN Stack"],
      results: {
        downloads: "progressing",
        rating: "4.8/5",
        engagement: "+65%"
      },
      link: "https://ramdhhuni.com/",
      featured: false
    },
    {
      id: 3,
      title: "consultancy",
      category: "Web Application",
      description: "A real-time business intelligence dashboard with interactive charts, reports, and data visualization.",
      image: OZConnection,
      technologies: ["MERN Stack"],
      results: {
        efficiency: "+68%",
        decisions: "3x faster",
        insights: "+150%"
      },
      link: "https://ccnacare.com.au/",
      featured: true
    },
    {
      id: 4,
      title: "AB Fitness Gym ",
      category: "SaaS Platform",
      description: "An all-in-one social media management platform with scheduling, booking, payment, analytics, and content creation tools.",
      image: Gyme,
      technologies: ["MERN Stack"],
      results: {
        timeSaved: "15hrs/week",
        engagement: "+85%",
        growth: "2.5x"
      },
      link: "https://gym-mern.vercel.app/",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-5 md:px-10 lg:px-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Projects
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Discover how we've helped businesses transform their digital presence 
          with innovative solutions and cutting-edge technology.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Completed Projects</h2>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Link to={project.link} className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 font-semibold">
                    View Details
                  </Link>
                </div>
              </div>

              <div className="p-6 flex flex-col">
                <span className="text-sm text-green-600 font-medium mb-2">{project.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                  {Object.entries(project.results).map(([key, value]) => (
                    <div key={key} className="text-sm">
                      <span className="font-semibold text-gray-900">{value}</span> <span className="text-gray-500">{key}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Other Projects */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Building Projects</h2>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Link to={project.link} className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 font-semibold">
                    View Details
                  </Link>
                </div>
              </div>

              <div className="p-6 flex flex-col">
                <span className="text-sm text-green-600 font-medium mb-2">{project.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                  {Object.entries(project.results).map(([key, value]) => (
                    <div key={key} className="text-sm">
                      <span className="font-semibold text-gray-900">{value}</span> <span className="text-gray-500">{key}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Project;
