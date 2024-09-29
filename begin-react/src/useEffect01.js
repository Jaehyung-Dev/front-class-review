import { useEffect, useState } from 'react';

// 어떤 컴포넌트가 Mount, Update, Unmount 될 때 
// 특정 작업을 처리할 코드를 실행하고 싶다면 useEffect이용
// 기본적으로 useEffect는 콜백함수를 인자로 받는다. => 콜백함수란 다른 함수에 인자로 전달된 함수
function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 화면이 렌더링 될 때 마다 실행 
  useEffect(() => {
    console.log('렌더링!');
  });

  // Mount + count가 변할 때만 렌더링
  useEffect(() => {
    console.log('count렌더링!');
  }, [count]);

  // 처음 렌더링 될 때만 실행
  useEffect(() => {
    console.log('첫 렌더링!');
  }, []);

  return (
    <>
      <button onClick={handleCountUpdate}>Update</button>
      <span>Count: {count}</span>  
      <input type='text' value={name} onChange={handleInputChange}></input>
      <span>name: {name}</span>
    </>
  );
};

export default App;