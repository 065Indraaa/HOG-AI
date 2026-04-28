import React, { useState } from 'react';
import { saveSettings, getSettings, getProjects, deleteProject, ROLES, hashApiKey, MODELS } from '../utils/store';

export default function SettingsModal({ onSave, onClose, onClearData }) {
  const settings = getSettings();
  const [saving, setSaving] = useState(false);
  
  const [conceptModel, setConceptModel] = useState(settings.conceptModel || ROLES.concept.model);
  const [builderModel, setBuilderModel] = useState(settings.builderModel || ROLES.builder.model);

  const projects = getProjects();

  const handleSave = () => {
    setSaving(true);
    saveSettings({ conceptModel, builderModel });
    setTimeout(() => {
      setSaving(false);
      onSave();
    }, 200);
  };

  const handleClearCurrentKey = () => {
    if (projects.length === 0) { alert('No projects found.'); return; }
    if (confirm(`Delete all ${projects.length} project(s)?`)) {
      projects.forEach(p => deleteProject(p.id));
      onClearData();
    }
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()} style={{ overflowY: 'auto', padding: '20px 0' }}>
      <div className="modal" style={{ maxWidth: 520, margin: 'auto' }}>
        <div className="modal-title">⚙ Settings</div>
        <div className="modal-subtitle">Configure preferred models for each AI Role.</div>

        {/* Models per role */}
        <div className="settings-section">
          <div className="settings-section-title">AI Models Per Role</div>
          <div className="role-model-row" style={{ alignItems: 'center' }}>
            <div className="role-model-label" style={{ color: ROLES.concept.color }}>
              {ROLES.concept.icon} {ROLES.concept.short}
            </div>
            <select
              value={conceptModel}
              onChange={e => setConceptModel(e.target.value)}
              className="settings-input"
              style={{ width: '250px', padding: '6px 10px', fontSize: '13px' }}
            >
              {Array.from(new Set(MODELS.map(m => m.category))).map(cat => (
                <optgroup key={cat} label={cat}>
                  {MODELS.filter(m => m.category === cat).map(m => (
                    <option key={m.id} value={m.id}>{m.label}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
          <div className="role-model-row" style={{ alignItems: 'center' }}>
            <div className="role-model-label" style={{ color: ROLES.builder.color }}>
              {ROLES.builder.icon} {ROLES.builder.short}
            </div>
            <select
              value={builderModel}
              onChange={e => setBuilderModel(e.target.value)}
              className="settings-input"
              style={{ width: '250px', padding: '6px 10px', fontSize: '13px' }}
            >
              {Array.from(new Set(MODELS.map(m => m.category))).map(cat => (
                <optgroup key={cat} label={cat}>
                  {MODELS.filter(m => m.category === cat).map(m => (
                    <option key={m.id} value={m.id}>{m.label}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        </div>

        {/* Data Management */}
        <div className="settings-section">
          <div className="settings-section-title">Data Management</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {apiKey && projectsForKey.length > 0 && (
              <button className="btn btn-ghost btn-sm" onClick={handleClearCurrentKey}>
                🗑 Clear Current Key's Projects ({projectsForKey.length})
              </button>
            )}
            <button className="btn btn-danger btn-sm" onClick={handleClearAll}>
              ⚠ Delete All Data
            </button>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
            {saving ? 'Saving...' : 'Save Settings'}
          </button>
        </div>
      </div>
    </div>
  );
}
