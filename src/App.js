import "./App.css";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");
  const [show, setShow] = useState(false);

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const handleChange =(e)=>{
    const text = e.target.value;
    setInputText(text);

    if (!text) {
      setShow(false);
      return;
    }

    let words =  text.split(" ")
    
    const correctedWords = words.map((word)=>{
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    })

    for(let i=0; i<words.length; i++){
      if(correctedWords[i] !== words[i]){
        setSuggestedText(correctedWords[i]);
        return;
      }
    }


    setSuggestedText("");

  }




  return (
    <div className="App">
      <h1>Spell Check</h1>
      <textarea rows={5} cols={40} value={inputText} placeholder="Enter text..." onChange={(e) => handleChange(e)}></textarea>
      {suggestedText && <p>
        Did you mean: <strong>{suggestedText}</strong>?
      </p>}
    </div>
  );
}

export default App;

//create a text area
//collect it's data
// Did you mean: should be shown when the data is wrong
// if text area is clear it must now show did you mean
//while checking it must check for case sensitive as well
