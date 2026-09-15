import { Send } from "lucide-react";

export const metadata = {
  title: 'Повідомлення | Особистий Кабінет',
}

export default function CabinetMessages() {
  const messages = [
    { sender: 'Олександр Коваленко', time: '10:45', content: 'Доброго дня! Я підготував чорновик статуту вашого ТОВ. Будь ласка, перегляньте його в розділі документів.', isOwn: false },
    { sender: 'Ви', time: '11:15', content: 'Доброго дня. Дякую, зараз перегляну і напишу свої коментарі.', isOwn: true },
    { sender: 'Олександр Коваленко', time: '11:30', content: 'Чудово, чекаю на ваш фідбек. Зверніть особливу увагу на пункт 4.2 щодо повноважень директора.', isOwn: false },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="font-serif" style={{ fontSize: '32px', color: 'var(--color-text-primary)' }}>Повідомлення</h1>
      </div>

      <div style={{ 
        flex: 1,
        background: 'var(--color-bg-secondary)', 
        border: '1px solid var(--color-gold-hairline)', 
        borderRadius: '16px', 
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Chat Header */}
        <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold', fontSize: '18px' }}>
            ОК
          </div>
          <div>
            <div style={{ fontSize: '16px', fontWeight: 500 }}>Олександр Коваленко</div>
            <div style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>Ваш адвокат • Онлайн</div>
          </div>
        </div>

        {/* Chat Messages */}
        <div style={{ flex: 1, padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '24px', minHeight: '400px' }}>
          {messages.map((msg, idx) => (
            <div key={idx} style={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: msg.isOwn ? 'flex-end' : 'flex-start' 
            }}>
              <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '8px' }}>
                {msg.sender} • {msg.time}
              </div>
              <div style={{ 
                background: msg.isOwn ? 'var(--color-gold)' : 'rgba(255,255,255,0.05)',
                color: msg.isOwn ? '#000' : 'white',
                padding: '16px 20px',
                borderRadius: '12px',
                borderBottomRightRadius: msg.isOwn ? '4px' : '12px',
                borderBottomLeftRadius: msg.isOwn ? '12px' : '4px',
                maxWidth: '70%',
                fontSize: '15px',
                lineHeight: 1.5
              }}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div style={{ padding: '24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <input type="text" placeholder="Напишіть повідомлення..." style={{ 
              flex: 1,
              background: 'rgba(0,0,0,0.2)', 
              border: '1px solid rgba(255,255,255,0.1)', 
              padding: '16px 20px', 
              borderRadius: '8px',
              color: 'white',
              outline: 'none',
              fontSize: '15px'
            }} />
            <button className="btn-primary" style={{ padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
