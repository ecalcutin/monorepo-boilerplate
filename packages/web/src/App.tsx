import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log('Hello');
    }, 1000);
  });
  return (
    <div>
      <h1>My App</h1>
      <p>State is: {state}</p>
      <button onClick={() => setState(10)}>Click</button>
    </div>
  );
};
