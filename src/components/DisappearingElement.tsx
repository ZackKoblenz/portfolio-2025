import React, { useState, useEffect } from 'react';

function DisappearingElement({ children, delay = 1600 }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isVisible ? <div>{children}</div> : null;
}

export default DisappearingElement;