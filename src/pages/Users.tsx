import React from 'react';
import './Styles/Users.css';

interface Developer {
  id: number;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  social: { 
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  initials: string;
}

const developers: Developer[] = [
  {
    id: 1,
    name: "Devion",
    role: "Devy Developer",
    bio: "Passionate about creating scalable web applications with modern technologies. Loves solving complex problems and mentoring junior developers.",
    skills: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
    social: {
      github: "https://github.com/alexjohnson",
      linkedin: "https://linkedin.com/in/alexjohnson",
      twitter: "https://twitter.com/alexjohnson"
    },
    initials: "D1"
  },
  {
    id: 2,
    name: "Devarion",
    role: "Devy Developer",
    bio: "UI/UX enthusiast with a keen eye for design and user experience. Specializes in creating beautiful, responsive interfaces that users love.",
    skills: ["React", "Vue.js", "CSS3", "Figma", "JavaScript"],
    social: {
      github: "https://github.com/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen"
    },
    initials: "D2"
  },
  {
    id: 3,
    name: "Danny Devito Deverino",
    role: "Devy Developer",
    bio: "Database optimization expert and API architect. Enjoys building robust, secure backend systems that can handle massive scale.",
    skills: ["Python", "PostgreSQL", "Redis", "Kubernetes", "GraphQL"],
    social: {
      github: "https://github.com/marcusrodriguez",
      linkedin: "https://linkedin.com/in/marcusrodriguez"
    },
    initials: "D3"
  },
  {
    id: 4,
    name: "Devan Dequarius Devo",
    role: "Devy Engineer",
    bio: "Cloud infrastructure specialist focused on automation and continuous deployment. Passionate about making development workflows seamless.",
    skills: ["AWS", "Terraform", "Jenkins", "Monitoring", "Linux"],
    social: {
      github: "https://github.com/emilypark",
      linkedin: "https://linkedin.com/in/emilypark",
      twitter: "https://twitter.com/emilypark"
    },
    initials: "D4"
  },
  {
    id: 5,
    name: "Devolicious",
    role: "Devy Developer",
    bio: "Passionate about developing developers development dev.",
    skills: ["React Native", "Swift", "Kotlin", "Flutter", "Firebase"],
    social: {
      github: "https://github.com/davidkim",
      linkedin: "https://linkedin.com/in/davidkim"
    },
    initials: "D5"
  },
  {
    id: 6,
    name: "Devolina",
    role: "Devy Engineer",
    bio: "Quality assurance specialist with expertise in automated testing. Ensures our products meet the highest standards before release.",
    skills: ["Selenium", "Jest", "Cypress", "TestRail", "Python"],
    social: {
      github: "https://github.com/lisathompson",
      linkedin: "https://linkedin.com/in/lisathompson"
    },
    initials: "D6"
  }
];

const Users: React.FC = () => {
  return (
    <div className="users-container">
      <div className="users-header">
        <h1 className="users-title">Meet Our Development Team</h1>
        <p className="users-subtitle">
          Talented individuals working together to build amazing digital experiences. 
          Each team member brings unique skills and perspectives to create innovative solutions.
        </p>
      </div>
      
      <div className="developers-grid">
        {developers.map((developer) => (
          <div key={developer.id} className="developer-card">
            <div className="developer-image-container">
              <div className="developer-image">
                {developer.initials}
              </div>
            </div>
            
            <div className="developer-info">
              <h3 className="developer-name">{developer.name}</h3>
              <p className="developer-role">{developer.role}</p>
              <p className="developer-bio">{developer.bio}</p>
              
              <div className="developer-skills">
                {developer.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="developer-social">
                {developer.social.github && (
                  <a 
                    href={developer.social.github} 
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    GH
                  </a>
                )}
                {developer.social.linkedin && (
                  <a 
                    href={developer.social.linkedin} 
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                  >
                    LI
                  </a>
                )}
                {developer.social.twitter && (
                  <a 
                    href={developer.social.twitter} 
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter"
                  >
                    TW
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;