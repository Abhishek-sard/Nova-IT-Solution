import React from 'react';

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A full-featured e-commerce solution with advanced inventory management, payment processing, and customer analytics.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      results: {
        revenue: "+45%",
        conversion: "+32%",
        loadTime: "-60%"
      },
      link: "#"
    },
    {
      id: 2,
      title: "Health & Fitness Tracker",
      category: "Mobile App",
      description: "A comprehensive fitness application with workout plans, nutrition tracking, and progress analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["React Native", "Firebase", "Redux"],
      results: {
        downloads: "50K+",
        rating: "4.8/5",
        engagement: "+65%"
      },
      link: "#"
    },
    {
      id: 3,
      title: "Business Analytics Dashboard",
      category: "Web Application",
      description: "A real-time business intelligence dashboard with interactive charts, reports, and data visualization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["Vue.js", "D3.js", "Python", "AWS"],
      results: {
        efficiency: "+68%",
        decisions: "3x faster",
        insights: "+150%"
      },
      link: "#"
    },
    {
      id: 4,
      title: "Social Media Management Tool",
      category: "SaaS Platform",
      description: "An all-in-one social media management platform with scheduling, analytics, and content creation tools.",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["Angular", "Express", "PostgreSQL", "Redis"],
      results: {
        timeSaved: "15hrs/week",
        engagement: "+85%",
        growth: "2.5x"
      },
      link: "#"
    }
  ];

  const caseStudy = {
    title: "Enterprise SaaS Platform Transformation",
    challenge: "Our client needed a scalable SaaS solution to manage their growing customer base and streamline internal operations. Their existing system was outdated, slow, and couldn't handle increasing user load.",
    solution: "We designed and built a modern cloud-based platform with microservices architecture, real-time data processing, and an intuitive user interface.",
    technologies: ["React.js", "Node.js", "MongoDB", "AWS", "Docker", "Jest"],
    stats: [
      { value: "68%", label: "Faster Processing" },
      { value: "42%", label: "Cost Reduction" },
      { value: "3.5x", label: "User Growth" },
      { value: "99.9%", label: "Uptime" }
    ],
    testimonial: {
      text: "The team delivered beyond our expectations. The new platform has transformed how we do business and has been instrumental in our recent growth.",
      author: "Sarah Johnson",
      position: "CTO at Enterprise Corp"
    }
  };

  return (
    <div className="project-showcase">
      {/* Hero Section */}
      <section className="project-hero">
        <div className="project-hero-content">
          <h1 className="project-hero-title">Our Projects</h1>
          <p className="project-hero-subtitle">
            Discover how we've helped businesses transform their digital presence 
            with innovative solutions and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>Explore our recent work across various industries and technologies</p>
          </div>

          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <button className="view-details-btn">View Details</button>
                  </div>
                </div>
                
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-results">
                    {Object.entries(project.results).map(([key, value]) => (
                      <div key={key} className="result-item">
                        <span className="result-value">{value}</span>
                        <span className="result-label">{key}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="case-study-section">
        <div className="container">
          <div className="section-header">
            <h2>Project Case Study</h2>
            <p>An in-depth look at how we delivered exceptional results</p>
          </div>

          <div className="case-study">
            <div className="case-study-header">
              <h3>{caseStudy.title}</h3>
            </div>
            
            <div className="case-study-content">
              <div className="case-study-text">
                <div className="case-study-block">
                  <h4>The Challenge</h4>
                  <p>{caseStudy.challenge}</p>
                </div>
                
                <div className="case-study-block">
                  <h4>Our Solution</h4>
                  <p>{caseStudy.solution}</p>
                </div>
                
                <div className="technologies-used">
                  <h4>Technologies Used</h4>
                  <div className="tech-stack">
                    {caseStudy.technologies.map(tech => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="case-study-stats">
                <h4>Results Delivered</h4>
                <div className="stats-grid">
                  {caseStudy.stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="testimonial">
                  <div className="testimonial-content">
                    <p>"{caseStudy.testimonial.text}"</p>
                    <div className="testimonial-author">
                      <strong>{caseStudy.testimonial.author}</strong>
                      <span>{caseStudy.testimonial.position}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Development Process</h2>
            <p>We follow a structured approach to ensure project success</p>
          </div>

          <div className="process-timeline">
            {[
              { phase: "Discovery & Planning", description: "We analyze requirements, define scope, and create detailed project plans." },
              { phase: "Design & Prototyping", description: "Our designers create wireframes and prototypes to visualize the final product." },
              { phase: "Development", description: "We build solutions using agile methodology with regular updates and iterations." },
              { phase: "Testing & QA", description: "Thorough testing ensures quality standards and correct functionality." },
              { phase: "Deployment & Support", description: "We deploy solutions and provide ongoing support and optimization." }
            ].map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">0{index + 1}</div>
                <div className="step-content">
                  <h4>{step.phase}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;