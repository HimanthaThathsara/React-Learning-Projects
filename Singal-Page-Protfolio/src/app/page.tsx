"use client";

import { useState, useEffect } from "react";

// Modal Component
const Modal = ({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

// Sequential Typewriter Effect Component
const SequentialTypewriter = ({ lines }: { lines: string[] }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentLineText, setCurrentLineText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      // All lines are done, hide cursor
      setShowCursor(false);
      return;
    }

    if (currentCharIndex < lines[currentLineIndex].length) {
      // Type current character
      const timer = setTimeout(() => {
        setCurrentLineText(
          lines[currentLineIndex].slice(0, currentCharIndex + 1)
        );
        setCurrentCharIndex(currentCharIndex + 1);
      }, 70 + Math.random() * 100);

      return () => clearTimeout(timer);
    } else {
      // Current line is complete, move to next line
      const timer = setTimeout(() => {
        setCurrentLineIndex(currentLineIndex + 1);
        setCurrentCharIndex(0);
        setCurrentLineText("");
      }, 500); // Pause before starting next line

      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, currentCharIndex, lines]);

  return (
    <div className="terminal">
      {lines.slice(0, currentLineIndex).map((line, index) => (
        <div key={index}>
          {[0, 1, 2, 3].includes(index) ? (
            <span className="dollar">{line}</span>
          ) : (
            line
          )}
          <br />
        </div>
      ))}
      {currentLineIndex < lines.length && (
        <div>
          {currentLineIndex === 1 ? (
            <span className="dollar">{currentLineText}</span>
          ) : (
            currentLineText
          )}
          {showCursor && <span className="cursor">|</span>}
          <br />
        </div>
      )}
    </div>
  );
};

// Social Links Typewriter Component
const SocialLinksTypewriter = () => {
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    // Show social links after a delay (when terminal lines are done)
    const timer = setTimeout(() => {
      setShowLinks(true);
    }, 20000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  if (!showLinks) return null;

  return (
    <ul className="social-links">
      <li>
        <a
          href="https://www.linkedin.com/in/himantha-thathsara/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </li>
      <li>
        <a
          href="https://github.com/HimanthaThathsara"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </li>
    </ul>
  );
};

// Main Portfolio Component
export default function Portfolio() {
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const terminalLines = [
    " \\[._.]/  Hey there👋 I'm Himantha Thathsara Amaranath",
    ' A "Full Stack" Engineer',
    " Welcome to my world ",
    " find me online on:",
  ];

  return (
    <div className="container">
      <nav>
        <ul>
          <li onClick={() => setAboutModalOpen(true)}>/About</li>
          <li onClick={() => setContactModalOpen(true)}>/Contact</li>
          <li>
            <span
              className="resume"
              style={{ cursor: "pointer" }}
              onClick={() => alert("Resume feature coming soon!")}
            >
              /Resume
            </span>
          </li>
        </ul>
      </nav>

      <main>
        <h1>
          himanthathathsara:$<span className="cursor">|</span>
        </h1>
        <SequentialTypewriter lines={terminalLines} />
        {/* Social links typewriter appears after terminalLines are done */}
        <SocialLinksTypewriter />
      </main>

      {/* About Modal */}
      <Modal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        title="About Me"
      >
        <h2>
          about-me:$<span className="cursor">|</span>
        </h2>
        <p>
          Senior Full Stack Developer with years of software Development
          experience working on Object Oriented analysis and design in the areas
          of designing, implementing and testing enterprise applications in
          Java/J2EE and web services based on large-scale distributed
          applications in the Agile development of software using practices
          including Scrum. Extensive experience in the domains of application
          software, Banking, Government, Healthcare, and custom application
          development.Some of the languages that I am fluent in include Java,
          JavaScript, SQL
        </p>
      </Modal>

      {/* Contact Modal */}
      <Modal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        title="Contact Me"
      >
        <h2>
          contact-me:$<span className="cursor">|</span>
        </h2>
        <p>You can contact me at the email below</p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:himanthathathsara2005@gmail.com">
              himanthathathsara2005@gmail.com
            </a>
          </li>
          <li>
            and reach me on{" "}
            <a
              href="https://www.linkedin.com/in/himantha-thathsara/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </Modal>
    </div>
  );
}
