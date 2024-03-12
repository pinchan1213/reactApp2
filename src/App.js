// 記憶することをstateという
// useStateは特別な関数でコンポーネントから呼び出すことで記憶する
import { useState } from "react";

function Square() {
  // valueは現在の値を格納、setValueはその値を更新するために使う
  // nullは初期値
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue("foo!");
  }
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
