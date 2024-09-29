import { useEffect, useRef, useState } from 'react';

function App() {
  const [count, setCount] = useState(1);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>올려</button>
    </>
  );
};

export default App;