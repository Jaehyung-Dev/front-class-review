import { useEffect, useState } from 'react';

function App() {
  const [showTimer, setShowTimer] = useState(false);

  useEffect(() => {
    let timer;

    if(showTimer) {
       timer = setInterval(() => {
        console.log("타이머 돌아가는중...");
      }, 1000);
    }
    
    // return문으로 컴포넌트가 unMount 될 때 실행할 작업을 지정가능
    return () => {
        clearInterval(timer);
        console.log('타이머가 종료되었습니다.');
    }
}, [showTimer]);

  return (
    <>
      {showTimer && (
        <div>
        <span>타이머를 시작합니다. 콘솔을 보세요</span>
        </div>
      )}
      <button onClick={(() => setShowTimer(!showTimer))}>Toggle Timer</button>
    </>
  );
};

export default App;