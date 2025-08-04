import { useState, useEffect, useRef } from 'react';
import './styles/Home.css';

const Home = () => {
  const [titleText, setTitleText] = useState('');
  const [subtitleText, setSubtitleText] = useState('');
  const [ctaText, setCtaText] = useState('');
  const [showAccentUnderline, setShowAccentUnderline] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const fullTitle = "Welcome to Side Project";
  const fullSubtitle = "/* A place where you can share your best work */";
  const fullCta = "Check out some of our projects and get the latest developments here";

  useEffect(() => {
    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as percentage from center
      const xPercent = (clientX - innerWidth / 2) / (innerWidth / 2);
      const yPercent = (clientY - innerHeight / 2) / (innerHeight / 2);
      
      // Move background opposite direction with reduced intensity
      const moveX = xPercent * -200;
      const moveY = yPercent * -200;
      
      backgroundRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    // Add mouse move listener
    window.addEventListener('mousemove', handleMouseMove);

    // Initial fade in
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    // Title typing effect
    const titleTimer = setTimeout(() => {
      let i = 0;
      const titleInterval = setInterval(() => {
        if (i < fullTitle.length) {
          setTitleText(fullTitle.slice(0, i + 1));
          i++;
        } else {
          clearInterval(titleInterval);
          // Show accent underline after title is complete
          setTimeout(() => setShowAccentUnderline(true), 300);
        }
      }, 50);
    }, 500);

    // Subtitle typing effect
    const subtitleTimer = setTimeout(() => {
      let i = 0;
      const subtitleInterval = setInterval(() => {
        if (i < fullSubtitle.length) {
          setSubtitleText(fullSubtitle.slice(0, i + 1));
          i++;
        } else {
          clearInterval(subtitleInterval);
        }
      }, 40);
    }, 2000);

    // CTA typing effect
    const ctaTimer = setTimeout(() => {
      let i = 0;
      const ctaInterval = setInterval(() => {
        if (i < fullCta.length) {
          setCtaText(fullCta.slice(0, i + 1));
          i++;
        } else {
          clearInterval(ctaInterval);
        }
      }, 30);
    }, 4500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(initialTimer);
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(ctaTimer);
    };
  }, []);

  const renderTitleWithAccent = (text: string) => {
    const parts = text.split('Side Project');
    if (parts.length === 2) {
      return (
        <>
          {parts[0]}
          <span className={`accent-text ${showAccentUnderline ? 'visible' : ''}`}>
            Side Project
          </span>
          {parts[1]}
        </>
      );
    }
    return text;
  };

  return (
    <div className="home-container">
      {/* SVG Background Layer */}
      <div className="svg-background-layer" ref={backgroundRef}></div>
      
      {/* Gradient Overlay */}
      <div className="gradient-overlay"></div>
      
      <div className={`home-content ${isVisible ? 'visible' : ''}`}>
        <h1 className="home-title">
          {renderTitleWithAccent(titleText)}
          <span className="typing-cursor">|</span>
        </h1>
        
        <p className="home-subtitle">
          {subtitleText}
          {subtitleText && subtitleText.length < fullSubtitle.length && (
            <span className="typing-cursor">|</span>
          )}
        </p>
        
        <div className="home-cta-section">
          <p className="home-cta-text">
            {ctaText}
            {ctaText && ctaText.length < fullCta.length && (
              <span className="typing-cursor">|</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;