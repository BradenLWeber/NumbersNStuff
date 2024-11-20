import { useEffect, useState } from 'react';

import { Font } from 'styles/Font';
import globalVars from './globalVars';

export function useFont() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [font, setFont] = useState({
    width: undefined,
    height: undefined,
    isMobile: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      let fontSizes = Font.size.laptop;
      if (window.innerWidth <= globalVars.mobileScreenWidth)
        fontSizes = Font.size.mobile;

      setFont({
        ...fontSizes,
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return font;
}
