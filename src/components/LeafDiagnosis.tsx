import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Upload, X, AlertTriangle, ShieldCheck, Info, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface LeafDiagnosisProps {
  language: Language;
}

interface CommonSymptomGuide {
  name: { en: string; hi: string; or: string };
  characteristic: { en: string; hi: string; or: string };
  action: { en: string; hi: string; or: string };
  urgency: 'high' | 'medium' | 'info';
  colorTag: string;
}

export const LeafDiagnosis: React.FC<LeafDiagnosisProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClearImage = () => {
    setSelectedImage(null);
    setFileName('');
  };

  const SYMPTOM_LIBRARY: CommonSymptomGuide[] = [
    {
      name: {
        en: 'Early Blight (Alternaria solani)',
        hi: 'अगेती झुलसा (अल्टरनेरिया)',
        or: 'ଅଗୁଆ ଝାଉଁଳା ରୋଗ',
      },
      characteristic: {
        en: 'Concentric brown target rings on older lower leaves. Yellowing halo around spots.',
        hi: 'निचली पत्तियों पर गोल छल्लेदार (Target board) भूरे धब्बे और चारों ओर पीलापन।',
        or: 'ତଳ ପତ୍ରରେ ଧୂସର ରଙ୍ଗର ଗୋଲାକାର ରିଙ୍ଗ୍ ଦାଗ ଏବଂ ଚାରିପାଖେ ହଳଦିଆ ପଡ଼ିବା।',
      },
      action: {
        en: 'Prune infected lower foliage. Avoid wetting leaves during irrigation. Consult KVK for certified copper sprays.',
        hi: 'जमीन से लगी रोगी पत्तियां काटें। शाम को पानी न छिड़कें। केवीके से अनुमोदित कवकनाशी की सलाह लें।',
        or: 'ରୋଗାକ୍ରାନ୍ତ ପତ୍ର କାଟି ଦିଅନ୍ତୁ। ପତ୍ର ଉପରେ ପାଣି ପକାନ୍ତୁ ନାହିଁ।',
      },
      urgency: 'high',
      colorTag: '#d32f2f',
    },
    {
      name: {
        en: 'Late Blight (Phytophthora infestans)',
        hi: 'पछेती झुलसा (फाइटोफ्थोरा)',
        or: 'ପଛୁଆ ଝାଉଁଳା ରୋଗ',
      },
      characteristic: {
        en: 'Water-soaked irregular dark spots with fine white mould on the underside during humid mornings.',
        hi: 'पत्तियों पर गीले अनियमित काले धब्बे और सुबह के समय पत्ती के नीचे सफेद रुई जैसी फफूंद।',
        or: 'ପତ୍ରରେ ପାଣିଆ କଳା ଦାଗ ଏବଂ ସକାଳେ ପତ୍ର ତଳେ ଧଳା ଫିମ୍ପି।',
      },
      action: {
        en: 'High alert! Spreads rapidly in cool wet weather. Ensure fast field drainage. Contact local agriculture office.',
        hi: 'अत्यंत गंभीर! ठंडे नम मौसम में तेजी से फैलता है। पानी की निकासी करें। कृषि अधिकारी से संपर्क करें।',
        or: 'ଅତି ସମ୍ବେଦନଶୀଳ! ଶୀତଳ ପାଗରେ ଖୁବ୍ ଶୀଘ୍ର ବ୍ୟାପେ। କୃଷି ଅଧିକାରୀଙ୍କୁ ଜଣାନ୍ତୁ।',
      },
      urgency: 'high',
      colorTag: '#b71c1c',
    },
    {
      name: {
        en: 'Tomato Yellow Leaf Curl Virus (ToLCV)',
        hi: 'पर्ण कुंचन विषाणु (लीफ कर्ल)',
        or: 'ପତ୍ର ମୋଡ଼ା ଭୂତାଣୁ ରୋଗ',
      },
      characteristic: {
        en: 'Upward cupping and curling of new young leaves, stiff leathery texture, yellow veins, stunted plant.',
        hi: 'नई पत्तियों का ऊपर की ओर मुड़ना, कड़ा होना, शिराओं का पीला पड़ना और पौधे का बौना रहना।',
        or: 'ନୂଆ ପତ୍ର ଉପରକୁ ମୋଡ଼ି ହୋଇ କଠିନ ହେବା ଏବଂ ଗଛ ଛୋଟ ରହିବା।',
      },
      action: {
        en: 'Transmitted by whiteflies. Place yellow sticky traps. Spray neem oil. Remove badly curled stunted plants.',
        hi: 'सफेद मक्खी द्वारा फैलता है। पीले चिपचिपे ट्रैप लगाएं। नीम तेल छिड़कें और ग्रसित पौधा उखाड़ें।',
        or: 'ଧଳାମାଛି ଦ୍ୱାରା ବ୍ୟାପେ। ହଳଦିଆ ଟ୍ରାପ୍ ଲଗାନ୍ତୁ ଓ ନିମ୍ବ ତେଲ ସ୍ପ୍ରେ କରନ୍ତୁ।',
      },
      urgency: 'medium',
      colorTag: '#f57c00',
    },
    {
      name: {
        en: 'Leaf Miner (Liriomyza spp.)',
        hi: 'लीफ माइनर (सुरंग कीट)',
        or: 'ପତ୍ର ସୁଡଙ୍ଗ କୀଟ (ଲିଫ୍ ମାଇନର)',
      },
      characteristic: {
        en: 'White or translucent serpentine winding tunnels mined inside leaf tissue by tiny larvae.',
        hi: 'पत्तियों के भीतर छोटी सुंडी द्वारा बनाई गई सफेद टेढ़ी-मेढ़ी सुरंग जैसी लकीरें।',
        or: 'ପତ୍ର ଭିତରେ କୀଟ ଦ୍ୱାରା ଧଳା ରଙ୍ଗର ବଙ୍କା ଟେଙ୍କା ସୁଡଙ୍ଗ ଦାଗ।',
      },
      action: {
        en: 'Crush larvae inside tunnels gently or remove heavily mined leaves. Spray 3ml/L Neem oil.',
        hi: 'शुरुआत में सुरंग वाली पत्तियां तोड़कर नष्ट करें। 3ml/L नीम के तेल का छिड़काव करें।',
        or: 'ଆକ୍ରାନ୍ତ ପତ୍ର ନଷ୍ଟ କରନ୍ତୁ ଏବଂ ନିମ୍ବ ତେଲ ସ୍ପ୍ରେ କରନ୍ତୁ।',
      },
      urgency: 'info',
      colorTag: '#0284c7',
    },
    {
      name: {
        en: 'Healthy Tomato Leaf',
        hi: 'स्वस्थ टमाटर की पत्ती',
        or: 'ସୁସ୍ଥ ଟମାଟୋ ପତ୍ର',
      },
      characteristic: {
        en: 'Deep green colour, smooth edges, no spots, uniform leaf veins, crisp foliage.',
        hi: 'गहरा हरा रंग, बिना किसी धब्बे या मुड़ाव के साफ पत्तियां और सामान्य शिराएं।',
        or: 'ଗାଢ଼ ସବୁଜ ରଙ୍ଗ, କୌଣସି ଦାଗ ବା ମୋଡ଼ି ହୋଇ ନଥିବା ସୁସ୍ଥ ପତ୍ର।',
      },
      action: {
        en: 'Continue balanced fertigation and regular scouting twice a week.',
        hi: 'संतुलित खाद देते रहें और सप्ताह में दो बार खेत का नियमित निरीक्षण करें।',
        or: 'ନିୟମିତ ସାର-ପାଣି ଦିଅନ୍ତୁ ଏବଂ ସପ୍ତାହରେ ଦୁଇଥର ଜମି ଦେଖନ୍ତୁ।',
      },
      urgency: 'info',
      colorTag: '#2e7d32',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Upload Card */}
      <div className="card">
        <div className="card-header">
          <div className="card-title-group">
            <div className="card-icon-box" style={{ background: '#ecfdf5', color: '#059669' }}>
              <Camera size={20} />
            </div>
            <div>
              <h2 className="card-title">{t.leafDiagnosis.title}</h2>
              <p className="card-subtitle">{t.leafDiagnosis.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Upload Action Area */}
        {!selectedImage ? (
          <div
            style={{
              border: '2px dashed #a5d6a7',
              borderRadius: 'var(--radius-lg)',
              padding: '36px 20px',
              textAlign: 'center',
              background: '#f9fbf9',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: 'var(--radius-full)',
                background: '#e8f5e9',
                color: '#2e7d32',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Upload size={28} />
            </div>

            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>
                {t.leafDiagnosis.uploadTitle}
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-light)', maxWidth: '400px', margin: '4px auto 0' }}>
                {t.leafDiagnosis.uploadInstructions}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '6px' }}>
              <label className="btn btn-primary" style={{ cursor: 'pointer' }}>
                <ImageIcon size={18} />
                <span>{t.leafDiagnosis.selectImageBtn}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
              </label>

              <label className="btn btn-secondary" style={{ cursor: 'pointer' }}>
                <Camera size={18} />
                <span>{t.leafDiagnosis.takePhotoBtn}</span>
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
              </label>
            </div>
          </div>
        ) : (
          /* Preview of Selected Image */
          <div
            style={{
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              padding: '16px',
              background: '#ffffff',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} color="#2e7d32" />
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{t.leafDiagnosis.selectedImageTitle}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>({fileName})</span>
              </div>
              <button
                onClick={handleClearImage}
                className="btn btn-secondary"
                style={{ padding: '4px 10px', minHeight: '30px', fontSize: '0.78rem' }}
              >
                <X size={14} />
                <span>Remove</span>
              </button>
            </div>

            <div style={{ textAlign: 'center', background: '#000000', borderRadius: 'var(--radius-md)', overflow: 'hidden', maxHeight: '360px' }}>
              <img
                src={selectedImage}
                alt="Selected Tomato Leaf"
                style={{ maxWidth: '100%', maxHeight: '360px', objectFit: 'contain', display: 'block', margin: '0 auto' }}
              />
            </div>
          </div>
        )}

        {/* AI Integration Transparency Notice */}
        <div
          style={{
            marginTop: '16px',
            background: '#eff6ff',
            border: '1px solid #bfdbfe',
            borderRadius: 'var(--radius-md)',
            padding: '14px 16px',
            display: 'flex',
            gap: '12px',
          }}
        >
          <Info size={20} style={{ color: '#2563eb', flexShrink: 0, marginTop: '2px' }} />
          <div style={{ fontSize: '0.84rem', color: '#1e3a8a', lineHeight: '1.45' }}>
            <strong>{t.leafDiagnosis.statusTitle}:</strong> {t.leafDiagnosis.aiStatusMessage}
          </div>
        </div>
      </div>

      {/* Visual Reference Symptom Library */}
      <div className="card">
        <div style={{ marginBottom: '16px' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>
            🔬 {t.leafDiagnosis.manualChecklistTitle}
          </h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-light)' }}>
            {t.leafDiagnosis.compareWithSymptoms}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
          {SYMPTOM_LIBRARY.map((item, idx) => (
            <div
              key={idx}
              style={{
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '14px',
                background: '#ffffff',
                boxShadow: 'var(--shadow-sm)',
                borderTop: `4px solid ${item.colorTag}`,
              }}
            >
              <div style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--text-main)', marginBottom: '6px' }}>
                {item.name[language] || item.name.en}
              </div>

              <div style={{ fontSize: '0.84rem', color: '#4b5563', lineHeight: '1.45', marginBottom: '8px' }}>
                <strong>Signs:</strong> {item.characteristic[language] || item.characteristic.en}
              </div>

              <div style={{ fontSize: '0.82rem', color: '#15803d', background: 'var(--primary-subtle)', padding: '8px 10px', borderRadius: '6px' }}>
                <strong>What to do:</strong> {item.action[language] || item.action.en}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '16px', fontSize: '0.8rem', color: 'var(--text-light)', textAlign: 'center' }}>
          💡 {t.leafDiagnosis.consultKvkNote}
        </div>
      </div>
    </div>
  );
};
