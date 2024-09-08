import React, {useState} from "react";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [inputText, setInputText] = useState("");
  const [countClick, setCountClick] = useState(0);

  const onChangeInputText = (value) => {
    setInputText(value);
  };

  const countButtonClick = () => {
    setCountClick(countClick + 1);
  };
  return (
    <div className="container">
      <Input placeholder="Input text" onChange={onChangeInputText} />
      <h2>{inputText}</h2>

      <Button text={countClick} onClick={countButtonClick} />
    </div>
  )
}

export default App
