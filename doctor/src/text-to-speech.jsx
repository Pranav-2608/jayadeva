import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import translate from 'google-translate-api';

const TextToSpeech = () => {
  const [originalText, setOriginalText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const { speak } = useSpeechSynthesis();

  const handleTranslateAndSpeak = async () => {
    try {
      // Translate the original text to English using Google Translate API
      const { text } = await translate(originalText, { to: 'en' });
      setTranslatedText(text);

      // Speak the translated text
      speak({ text });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <textarea
        value={originalText}
        onChange={(e) => setOriginalText(e.target.value)}
        placeholder="Enter text to translate and speak"
        rows={4}
        cols={50}
      />
      <button onClick={handleTranslateAndSpeak}>Translate & Speak</button>
      {translatedText && <p>Translated Text: {translatedText}</p>}
    </div>
  );
};

export default TextToSpeech;
