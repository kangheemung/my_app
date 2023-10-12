import './App.css';
import { ColoredMessage } from "./components/ColoredMessage";
import { useState, useEffect } from "react";

export const App = () => {
  useEffect(() => {
    console.log("レンダリング");
  }, []);
  const [num, setNum] = useState(0);
  const [title, setTitle] = useState("Appのタイトル!!");

  const onClickButton = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <div>{title}</div>
      <div className="container">
        <p>エリア1です。</p>
        <button onClick={onClickButton}>ボタン</button>
      </div>
      <div className="container">
        <p>エリア2です。</p>
      </div>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColoredMessage color="blue">こんにちは！</ColoredMessage>
      <ColoredMessage color="pink">お元気ですか？</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </div>
  );
};

export default App;
