import React, { useState, useEffect, useRef } from 'react';
import { MessageSquareText, Send, Bot, User, Trash2, Shield, Info, Sparkles, HelpCircle } from 'lucide-react';
import { Language, ChatMessage } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { askAiAssistant } from '../services/aiService';

interface AiAssistantProps {
  language: Language;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    return [
      {
        id: 'welcome-1',
        sender: 'assistant',
        text:
          language === 'hi'
            ? 'नमस्ते! मैं कृषि सलाह का टमाटर विशेषज्ञ सहायक हूँ। आप मुझसे टमाटर की किस्मों, खाद (NPK), सिंचाई, लीफ कर्ल या फल छेदक कीड़े के बारे में पूछ सकते हैं।'
            : language === 'or'
            ? 'ନମସ୍କାର! ମୁଁ କୃଷି ସଲାହର ଟମାଟୋ ଚାଷ ବିଶେଷଜ୍ଞ। ଆପଣ ମୋତେ ଟମାଟୋ କିସମ, ଖତ-ସାର, ଜଳସେଚନ କିମ୍ବା ରୋଗ ବିଷୟରେ ପଚାରିପାରିବେ।'
            : 'Namaste! I am the KrishiSalah Tomato Advisor. Ask me anything about tomato seed varieties, fertilizer schedules (NPK), irrigation, leaf curl prevention, or pest control!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ];
  });

  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async (textToSend?: string) => {
    const prompt = textToSend || inputText;
    if (!prompt.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: prompt,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setLoading(true);

    try {
      const response = await askAiAssistant(prompt, language);
      const botMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: response.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isFallback: response.source === 'offline-knowledge-base',
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: 'assistant',
        text:
          language === 'hi'
            ? 'क्षमा करें, उत्तर प्राप्त करने में समस्या हुई। कृपया पुनः प्रयास करें।'
            : 'Sorry, I could not process that question right now. Please try again.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'assistant',
        text:
          language === 'hi'
            ? 'चैट साफ कर दी गई है। आप नया प्रश्न पूछ सकते हैं।'
            : 'Chat cleared. How can I assist you with your tomato crop today?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <div className="card" style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', height: '680px' }}>
      {/* Header */}
      <div className="card-header" style={{ marginBottom: '10px' }}>
        <div className="card-title-group">
          <div className="card-icon-box" style={{ background: '#f3e8ff', color: '#9333ea' }}>
            <Sparkles size={20} />
          </div>
          <div>
            <h2 className="card-title">{t.ai.title}</h2>
            <p className="card-subtitle">{t.ai.subtitle}</p>
          </div>
        </div>

        <button
          onClick={handleClear}
          className="btn btn-secondary"
          style={{ fontSize: '0.78rem', padding: '6px 10px', minHeight: '32px' }}
          title={t.ai.clearChat}
        >
          <Trash2 size={14} />
          <span className="hidden-mobile">{t.ai.clearChat}</span>
        </button>
      </div>

      {/* Security & Backend Notice Banner */}
      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: 'var(--radius-md)',
          padding: '8px 12px',
          fontSize: '0.76rem',
          color: '#475569',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '10px',
        }}
      >
        <Shield size={16} color="#059669" style={{ flexShrink: 0 }} />
        <span>{t.ai.securityBanner}</span>
      </div>

      {/* Suggested Quick Questions Pills */}
      <div style={{ marginBottom: '10px' }}>
        <div style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-light)', marginBottom: '6px' }}>
          💡 {t.ai.suggestedQuestions}
        </div>
        <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
          {t.ai.quickQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--primary-hover)',
                background: 'var(--primary-subtle)',
                border: '1px solid var(--primary-border)',
                borderRadius: 'var(--radius-full)',
                padding: '4px 10px',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
              }}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Container */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '12px',
          background: 'var(--bg-subtle)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-color)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          marginBottom: '12px',
        }}
      >
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';
          return (
            <div
              key={msg.id}
              style={{
                display: 'flex',
                justifyContent: isUser ? 'flex-end' : 'flex-start',
                alignItems: 'flex-start',
                gap: '8px',
              }}
            >
              {!isUser && (
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-full)',
                    background: '#2e7d32',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Bot size={18} />
                </div>
              )}

              <div
                style={{
                  maxWidth: '82%',
                  padding: '12px 16px',
                  borderRadius: isUser ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                  background: isUser ? 'var(--primary)' : '#ffffff',
                  color: isUser ? '#ffffff' : 'var(--text-main)',
                  boxShadow: 'var(--shadow-sm)',
                  fontSize: '0.9rem',
                  lineHeight: '1.5',
                  whiteSpace: 'pre-line',
                }}
              >
                {msg.text}
                <div
                  style={{
                    fontSize: '0.68rem',
                    color: isUser ? '#c8e6c9' : 'var(--text-light)',
                    marginTop: '4px',
                    textAlign: isUser ? 'right' : 'left',
                  }}
                >
                  {msg.timestamp}
                </div>
              </div>

              {isUser && (
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-full)',
                    background: '#64748b',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <User size={18} />
                </div>
              )}
            </div>
          );
        })}

        {loading && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', fontSize: '0.85rem' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: 'var(--radius-full)',
                background: '#2e7d32',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Bot size={18} />
            </div>
            <div style={{ background: '#ffffff', padding: '10px 16px', borderRadius: '16px 16px 16px 2px', boxShadow: 'var(--shadow-sm)' }}>
              Thinking...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        style={{ display: 'flex', gap: '8px' }}
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={t.ai.placeholder}
          disabled={loading}
          style={{
            flex: 1,
            padding: '12px 16px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-color)',
            outline: 'none',
            fontSize: '0.92rem',
          }}
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading || !inputText.trim()}
          style={{ padding: '0 20px' }}
        >
          <Send size={18} />
          <span className="hidden-mobile">{t.ai.send}</span>
        </button>
      </form>

      {/* Disclaimer */}
      <div style={{ fontSize: '0.72rem', color: 'var(--text-light)', marginTop: '8px', textAlign: 'center' }}>
        {t.ai.disclaimer}
      </div>
    </div>
  );
};
