import React, { useState, useEffect } from 'react';

function AppearingElement({ children, delay = 1600 }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isVisible ? <div>{children}</div> : null;
}

export default AppearingElement;