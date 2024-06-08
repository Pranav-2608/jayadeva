import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyA6m9jIeuJy0ZOsZtuZF7tqduVhK387YK4');

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [simplifiedText, setSimplifiedText] = useState('');
  const [speaking, setSpeaking] = useState(false);

  const simplifyText = async (inputText) => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `Simplify the following text to easy-to-understand English: "${inputText}"`;
      const result = await model.generateContent(prompt);
  
      console.log("Result:", result);
  
      if (!result || !result.candidates || result.candidates.length === 0) {
        throw new Error("Invalid response from API");
      }
  
      const simplified = result.candidates[0].output.trim();
      setSimplifiedText(simplified);
      return simplified;
    } catch (error) {
      console.error('Error simplifying text:', error);
      alert('Failed to simplify the text. Please try again.');
      return inputText;
    }
  };
  

  const handleSpeak = async () => {
    if (!window.speechSynthesis) {
      alert('Your browser does not support Text-to-Speech');
      return;
    }

    const textToSpeak = await simplifyText(text);

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.onstart = () => {
      setSpeaking(true);
    };
    utterance.onend = () => {
      setSpeaking(false);
    };
    utterance.onerror = (event) => {
      console.error('SpeechSynthesisUtterance.onerror', event);
      setSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleStop = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    }
  };

  return (
    <div className="text-to-speech">
      <h1>Text to Simple English Speech Converter</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to simplify and speak"
        rows="10"
        cols="50"
      />
      <div>
        <button onClick={handleSpeak} disabled={speaking}>
          {speaking ? 'Speaking...' : 'Simplify and Speak'}
        </button>
        <button onClick={handleStop} disabled={!speaking}>
          Stop
        </button>
      </div>
      {simplifiedText && (
        <div className="simplified-text">
          <h2>Simplified Text</h2>
          <p>{simplifiedText}</p>
        </div>
      )}
    </div>
  );
};

export default TextToSpeech;
