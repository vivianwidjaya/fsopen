//  counter

import { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);
  // const [clicks, setClicks] = useState({
  // left:0, right: 0
  // })

  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increase} text="plus" />
      <Button onClick={reset} text="reset" />
      <Button onClick={decrease} text="minus" />
    </div>
  );
};

export default App;
