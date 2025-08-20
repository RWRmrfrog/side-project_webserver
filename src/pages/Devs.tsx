import React, { useEffect, useRef } from 'react';
import './styles/Dev.css';
import { FaGithub, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';

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
    name: "Spencer Kotrosa",
    role: "Front-End Developer",
    bio: "I design things that work until they don't.",
    skills: ["HTML", "CSS", "JavaScript", "C++", "Unreal Engine", "Blender", "Blockbench", "Substance", "Photoshop"],
    social: {
      github: "https://github.com/xTear0/",
      linkedin: "https://www.linkedin.com/in/spencer-kotrosa-0a6109266/"
    },
    initials: "SK"
  },
  {
    id: 3,
    name: "Josh Pechan",
    role: "Back-End Developer",
    bio: "I make everything else, and it never works.",
    skills: ["Python", "PostgreSQL", "Redis", "Kubernetes", "GraphQL"],
    social: {
      github: "https://github.com/marcusrodriguez",
      linkedin: "https://linkedin.com/in/marcusrodriguez"
    },
    initials: "JP"
  }
];

const Devs: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Trigger card animations when component mounts
    const cards = document.querySelectorAll('.developer-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate-in');
      }, index * 200); // Stagger the animations
    });
  }, []);

  return (
    <div className="users-container">
      
      <div className="users-header">
        <h1 className="users-title">Developer Team</h1>
        <p className="users-subtitle">
          The talented individuals who make this site possible.
        </p>
      </div>
      
      <div className="developers-grid" ref={cardsRef}>
        {developers.map((developer, index) => (
          <div 
            key={developer.id} 
            className="developer-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
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
                {developer.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
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
                    <FaGithub size="25" className="nav-icons"/>
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
                    <FaLinkedinIn size="25" className="nav-icons"/>
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
                    <FaXTwitter size="25" className="nav-icons"/>
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