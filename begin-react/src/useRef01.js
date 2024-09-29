import { useRef, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const increaseCountState = () => {
    setCount(count + 1);
  }

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
  }

  return (
    <>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State++</button>
      <button onClick={increaseCountRef}>Ref++</button>
    </>
  );
};

export default App;