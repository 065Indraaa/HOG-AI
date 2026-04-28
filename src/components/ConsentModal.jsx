import React from 'react';
import { saveSettings } from '../utils/store';

export default function ConsentModal({ onAccept }) {
  return (
    <div className="modal-overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="modal" style={{ maxWidth: 480, margin: '20px', padding: '32px' }}>
        <div className="modal-title" style={{ marginBottom: '16px' }}>Data Privacy & Storage</div>
        <div className="modal-subtitle" style={{ lineHeight: '1.6', marginBottom: '24px' }}>
          <p>
            Welcome to <strong>HOG ai</strong>! To provide you with the best experience, we need to store your chat history and project data locally in your browser.
          </p>
          <p style={{ marginTop: '12px', color: 'var(--text-muted)' }}>
            By continuing, you consent to have this data stored safely in your device's local memory.
            This ensures your conversations and files are preserved between sessions. 
            No project data is submitted to our servers except to query the AI.
          </p>
        </div>
        
        <div className="modal-actions" style={{ justifyContent: 'flex-end', gap: '12px' }}>
          <button 
            className="btn btn-primary" 
            onClick={() => {
              saveSettings({ consentGiven: true });
              onAccept();
            }}
          >
            I Understand and Accept
          </button>
        </div>
      </div>
    </div>
  );
}
