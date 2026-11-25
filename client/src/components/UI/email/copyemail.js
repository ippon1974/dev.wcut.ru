"use client"; // Must be the very first line
import React, { useState } from 'react';
import './CopyEmail.css';

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const email = 'dev@wcut.ru';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 5500);
  };

  return (

    <div className="email-box">
      <p>Электропочта: <span className="email-text">{email}</span></p>
      <button
        onClick={handleCopy} 
        className="copy-btn" 
        aria-label="Скопировать почту"
        title="Скопировать почту"
      >
        {copied ? (
          /* Иконка галочки */
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          /* Иконка копирования */
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </button>
    </div>
  );
}
