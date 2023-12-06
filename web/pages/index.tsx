import { useState } from 'react';

type History = {
  input: string;
  output: string;
};

export default function Home() {

  const [inputText, setInputText] = useState('');
  const [reversedText, setReversedText] = useState('');
  const [history, setHistory] = useState<History[]>([]);


  const handleReverseText = async () => {
    try {
    //   const response = await fetch('http://localhost:8000/text/reverse', {
    //     ...
    // }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const handleLoadHistory = async () => {
    try {
      // const response = await fetch('http://localhost:8000/text/history');
      // ...
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div>
      <h1>Test Reverse Text</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text here"
      ></textarea>
      <button onClick={handleReverseText}>Reverse Text</button>
      <textarea
        value={reversedText}
        readOnly
        placeholder="Reversed text will appear here"
      ></textarea>
      <button onClick={handleLoadHistory}>Load History</button>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>{`Input: ${entry.input}, Output: ${entry.output}`}</li>
        ))}
      </ul>
    </div>
  );

}
