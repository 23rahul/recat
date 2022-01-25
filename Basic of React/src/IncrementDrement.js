import React, { useEffect, useState } from "react";

const IncrementDrement = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count <= 0) {
      document.title = "chat";
    } else {
      document.title = `chats(${count})`;
    }
  });//dependecy array.



  const dec = () => {
    if (count <= 0) {
      return count;
    } else {
      setCount(count - 1);
    }
  };

  /*function dec() {
    if (count <= 0) {
      return count;
    } else {
      setCount(count - 1);
    }*/

  return (
    <div>
      <h1>INcrement Decrement</h1>
      <h2>Count : {count}</h2>
      <button onClick={dec}> sub</button>
      <button onClick={() => setCount(count + 1)}> add </button>
    </div>
  );
};

export default IncrementDrement;
