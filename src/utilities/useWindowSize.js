import { useEffect, useState } from 'react';

import globalVars from './globalVars';

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    isMobile: undefined,
    isSmallMobile: undefined,
    isDesktop: undefined,
    getVal: () => undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth <= globalVars.mobileScreenWidth,
        isSmallMobile: window.innerWidth < globalVars.smallMobileScreenWidth,
        isDesktop: window.innerWidth > globalVars.mobileScreenWidth,
        getVal: (desktop, mobile, smallMobile) => {
          if (window.innerWidth > globalVars.mobileScreenWidth) return desktop;
          if (window.innerWidth < globalVars.smallMobileScreenWidth)
            return smallMobile == undefined ? mobile : smallMobile;
          return mobile;
        },
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
