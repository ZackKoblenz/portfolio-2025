import React, { useState, useEffect } from 'react';

function DisappearingElement({ children, delay = 3000 }) {
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