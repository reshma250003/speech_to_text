import React, { useState } from 'react';
import useSpeechToText from './hook/useSpeechToText';

const SpeechInput = () => {
    const [textInput, setTextInput] = useState('');
    const { isListening, transcript, startListening, stopListening } = useSpeechToText({ continuous: true });

    const startStopListening = () => {
        if (isListening) {
            stopListening();
        } else {
            startListening();
        }
    };

    return (
        <div
            style={{
                display: 'block',
                margin: '0 auto',
                width: '400px',
                textAlign: 'center',
                marginTop: '100px'
            }}
        >
            <button
                onClick={startStopListening}
                style={{
                    backgroundColor: isListening ? '#d9534f' : '#008744',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                }}
            >
                {isListening ? 'Stop Listening' : 'Speak'}
            </button>
            <textarea
                style={{
                    marginTop: '20px',
                    width: '100%',
                    height: '150px',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    transition: 'border-color 0.3s ease',
                    resize: 'none',
                    backgroundColor: '#f8f8f8',
                    color: '#333'
                }}
                disabled={isListening}
                value={isListening ? (textInput + (transcript ? (textInput ? ' ' : '') + transcript : '')) : textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Talk to me..."
            />
        </div>
    );
};

export default SpeechInput;
