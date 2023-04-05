import React, {useState, useEffect} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)

  const countUp = () => {
    setCount(prevState => prevState + 1)
  }
  const countDown = () => {
    setCount(prevState => prevState - 1)
  }

  useEffect(() => {
    console.log('Current count is', count)
  }, [])

  return (
    <div>
      <p>現在のカウント: {count}ヒット</p>
      <button onClick={countUp}>Up</button>
      <button onClick={countDown}>Down</button>
    </div>
  );
};

export default Counter;
