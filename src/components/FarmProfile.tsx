import React, { useState } from 'react';
import { User, MapPin, Calendar, Check, RotateCcw } from 'lucide-react';
import { FarmProfile as FarmProfileType, Language, FarmingMethod } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { DEFAULT_FARM_PROFILE, saveProfile } from '../utils/storage';
import { INDIAN_TOMATO_DISTRICTS } from '../services/weatherService';

interface FarmProfileProps {
  language: Language;
  profile: FarmProfileType;
  onProfileUpdated: (updated: FarmProfileType) => void;
}

export const FarmProfile: React.FC<FarmProfileProps> = ({
  language,
  profile,
  onProfileUpdated,
}) => {
  const t = TRANSLATIONS[language];
  const [formData, setFormData] = useState<FarmProfileType>(profile);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Auto-align coordinates if known district is chosen
    const districtMatch = INDIAN_TOMATO_DISTRICTS.find(
      (d) => d.name.toLowerCase() === formData.district.toLowerCase()
    );

    const updated: FarmProfileType = {
      ...formData,
      latitude: districtMatch ? districtMatch.latitude : formData.latitude,
      longitude: districtMatch ? districtMatch.longitude : formData.longitude,
    };

    saveProfile(updated);
    onProfileUpdated(updated);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleReset = () => {
    saveProfile(DEFAULT_FARM_PROFILE);
    setFormData(DEFAULT_FARM_PROFILE);
    onProfileUpdated(DEFAULT_FARM_PROFILE);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const methods: { id: FarmingMethod; label: string }[] = [
    { id: 'drip', label: t.profile.methods.drip },
    { id: 'flood', label: t.profile.methods.flood },
    { id: 'polyhouse', label: t.profile.methods.polyhouse },
    { id: 'open_field', label: t.profile.methods.open_field },
    { id: 'organic', label: t.profile.methods.organic },
    { id: 'conventional', label: t.profile.methods.conventional },
  ];

  return (
    <div className="card" style={{ maxWidth: '720px', margin: '0 auto' }}>
      <div className="card-header">
        <div className="card-title-group">
          <div className="card-icon-box">
            <User size={20} />
          </div>
          <div>
            <h2 className="card-title">{t.profile.title}</h2>
            <p className="card-subtitle">{t.profile.subtitle}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="btn btn-secondary"
          style={{ fontSize: '0.78rem', padding: '6px 12px', minHeight: '32px' }}
          title={t.profile.resetDefaults}
        >
          <RotateCcw size={14} />
          <span>{t.profile.resetDefaults}</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Name & Village */}
        <div className="grid-2">
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
              👤 {t.profile.farmerName}
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={t.profile.farmerNamePlaceholder}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                outline: 'none',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
              🏡 {t.profile.village}
            </label>
            <input
              type="text"
              required
              value={formData.village}
              onChange={(e) => setFormData({ ...formData, village: e.target.value })}
              placeholder={t.profile.villagePlaceholder}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* District & State */}
        <div className="grid-2">
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
              📍 {t.profile.district}
            </label>
            <select
              value={formData.district}
              onChange={(e) => {
                const chosen = e.target.value;
                const match = INDIAN_TOMATO_DISTRICTS.find((d) => d.name === chosen);
                setFormData({
                  ...formData,
                  district: chosen,
                  state: match ? match.state : formData.state,
                });
              }}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                outline: 'none',
                background: '#ffffff',
              }}
            >
              {INDIAN_TOMATO_DISTRICTS.map((d) => (
                <option key={d.name} value={d.name}>
                  {d.name} ({d.state})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
              🗺️ {t.profile.state}
            </label>
            <input
              type="text"
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Planting Date */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
            📅 {t.profile.plantingDate}
          </label>
          <input
            type="date"
            required
            value={formData.plantingDate}
            onChange={(e) => setFormData({ ...formData, plantingDate: e.target.value })}
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              outline: 'none',
              fontSize: '1rem',
            }}
          />
          <span style={{ fontSize: '0.74rem', color: 'var(--text-light)', marginTop: '4px', display: 'block' }}>
            Used to accurately estimate your Days After Transplanting (DAT) and current growth stage.
          </span>
        </div>

        {/* Farming Method */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px' }}>
            🚜 {t.profile.farmingMethod}
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px' }}>
            {methods.map((m) => (
              <label
                key={m.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: formData.farmingMethod === m.id ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                  background: formData.farmingMethod === m.id ? 'var(--primary-subtle)' : '#ffffff',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: formData.farmingMethod === m.id ? 'var(--primary-hover)' : 'var(--text-main)',
                }}
              >
                <input
                  type="radio"
                  name="farmingMethod"
                  value={m.id}
                  checked={formData.farmingMethod === m.id}
                  onChange={() => setFormData({ ...formData, farmingMethod: m.id })}
                />
                <span>{m.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Variety & Area */}
        <div className="grid-2">
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
              🍅 {t.profile.variety}
            </label>
            <input
              type="text"
              value={formData.variety}
              onChange={(e) => setFormData({ ...formData, variety: e.target.value })}
              placeholder="e.g. Abhinav, Arka Rakshak, US-440"
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                outline: 'none',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
              📐 {t.profile.farmSize}
            </label>
            <input
              type="number"
              step="0.25"
              min="0.1"
              max="100"
              value={formData.farmSizeAcre}
              onChange={(e) => setFormData({ ...formData, farmSizeAcre: parseFloat(e.target.value) || 1 })}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '8px', fontSize: '1rem', padding: '12px' }}
        >
          <Check size={18} />
          <span>{t.profile.saveButton}</span>
        </button>
      </form>

      {/* Floating Success Toast */}
      {showToast && (
        <div className="toast">
          <Check size={20} />
          <span>{t.profile.savedToast}</span>
        </div>
      )}
    </div>
  );
};
