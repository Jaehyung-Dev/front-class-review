import { useState } from 'react';

function App() {
  const [names, setNames] = useState(['김민수', '홍길동']);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      return [ ...prevState, input];
    });
  }

  return (
    <>
      <input type='text' value={input} onChange={handleInputChange}/>
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, index) => {
        return <p key={index}>{name}</p>
      })}
    </>
  );
};

export default App;