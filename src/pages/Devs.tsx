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
    name: "Ryan Radcliffe",
    role: "Project Lead",
    bio: "I only make cool stuff yo",
    skills: ["React", "Node.js", "TypeScript", "AWS", "C++", "Java", "Python", "Javascript", "C#", "HTML", "CSS", "Modding Games"],
    social: {
      github: "https://github.com/RWRmrfrog",
      linkedin: "",
      twitter: "https://x.com/RWRmrfrog"
    },
    initials: "RR"
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
  }
];

const Devs: React.FC = () => {
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

export default Devs;