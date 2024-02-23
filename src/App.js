// src/QRGenerator.js
import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './style.css';

function App() {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="qr-generator-container">
      <div className="qr-generator-content">
        <h2 className="qr-generator-title">QR Code Generator</h2>
        <input
          className="qr-generator-input"
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter text to generate QR code"
        />
        <br />
        {text && <div style={{ textAlign: "center" }}>
          <QRCode value={text} className="qr-code" />
        </div>}
      </div>
    </div>
  );
}

export default App;
