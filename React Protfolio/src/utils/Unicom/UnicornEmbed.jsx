import { useEffect, useState } from "react";

const UnicornEmbed = ({ projectId }) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const loadScript = () => {
      if (!window.UnicornStudio) {
        window.UnicornStudio = { isInitialized: 0 };
        const script = document.createElement("script");
        script.src = "https://cdn.unicorn.studio/v1.4.1/unicornStudio.umd.js";
        script.loading = "lazy";
        script.onload = () => {
          setIsScriptLoaded(true);
          if (!window.UnicornStudio.isInitialized) {
            window.UnicornStudio.init();
            window.UnicornStudio.isInitialized = 1;
            setIsInitialized(true); // Mark as initialized
          }
        };
        document.head.appendChild(script);
      } else {
        setIsScriptLoaded(true);
        if (window.UnicornStudio.isInitialized) {
          setIsInitialized(true); // If it's already initialized
        }
      }
    };

    loadScript();

    return () => {
      // Cleanup to avoid loading the script multiple times
      const script = document.querySelector(
        `script[src="https://cdn.unicorn.studio/v1.4.1/unicornStudio.umd.js"]`
      );
      if (script) script.remove();
    };
  }, []);

  useEffect(() => {
    if (
      isInitialized &&
      window.UnicornStudio &&
      typeof window.UnicornStudio.embed === "function"
    ) {
      window.UnicornStudio.embed(projectId);
    }
  }, [isInitialized, projectId]);

  return (
    <div
      data-us-project={projectId}
      style={{
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
};

export default UnicornEmbed;
