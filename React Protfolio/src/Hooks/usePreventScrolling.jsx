import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

let scrollBlockCount = 0;

// Hook to prevent scrolling
export const usePreventScrolling = () => {
  useEffect(() => {
    scrollBlockCount += 1;

    const body = document.body;
    const hasScrollbar = body.scrollHeight > window.innerHeight;

    if (scrollBlockCount === 1) {
      body.style.overflow = 'hidden';

      // Apply paddingRight only if the page has a visible scrollbar
      if (hasScrollbar) {
        console.log('has scrollbar');
        body.style.paddingRight = `${'17px'}`;
      }
    }

    return () => {
      scrollBlockCount -= 1;

      if (scrollBlockCount === 0) {
        body.style.overflow = 'auto';
        body.style.paddingRight = '0';
      }
    };
  }, []);
};

// Hook to scroll to the top on route change
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top on route change
  }, [pathname]);

  return null; // This component doesn't render anything
};
