import { useEffect, useRef, useState } from 'react';

function App() {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  return (
    <>
      <input ref={inputRef} type='text' placeholder='username'></input>  
      <button>로그인</button>
    </>
  );
};

export default App;