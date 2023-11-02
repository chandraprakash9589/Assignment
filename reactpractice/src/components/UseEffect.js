import React, { useState, useEffect } from 'react';

export function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      setCount(count + 1);
    };

    window.addEventListener('click', handleClick);

    return () => {
        console.log('abs', count)
      window.removeEventListener('click', handleClick);
    };
  }, [count]);

  return (
    <div>
      Count: {count}
    </div>
  );
}