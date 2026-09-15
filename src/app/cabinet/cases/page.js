export const metadata = {
  title: 'Мої Справи | Особистий Кабінет',
}

export default function CabinetCases() {
  const cases = [
    { id: 'CASE-001', title: 'Реєстрація ТОВ "Альфа"', status: 'В процесі', date: '12 Вересня 2026', progress: 60, lawyer: 'Олександр Коваленко' },
    { id: 'CASE-002', title: 'Оскарження штрафу ТЦК', status: 'Очікує розгляду', date: '05 Вересня 2026', progress: 20, lawyer: 'Марія Мельник' },
    { id: 'CASE-003', title: 'Розробка договору послуг', status: 'Завершено', date: '20 Серпня 2026', progress: 100, lawyer: 'Олександр Коваленко' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="font-serif" style={{ fontSize: '32px', color: 'var(--color-text-primary)' }}>Мої Справи</h1>
        <button className="btn-primary" style={{ padding: '12px 24px', fontSize: '12px' }}>+ НОВА СПРАВА</button>
      </div>

      <div style={{ 
        background: 'var(--color-bg-secondary)', 
        border: '1px solid var(--color-gold-hairline)', 
        borderRadius: '16px', 
        overflow: 'hidden'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: 'rgba(0,0,0,0.2)', borderBottom: '1px solid var(--color-gold-hairline)' }}>
              <th style={{ padding: '16px 24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)', fontWeight: 'normal' }}>ID / Дата</th>
              <th style={{ padding: '16px 24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)', fontWeight: 'normal' }}>Назва Справи</th>
              <th style={{ padding: '16px 24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)', fontWeight: 'normal' }}>Адвокат</th>
              <th style={{ padding: '16px 24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)', fontWeight: 'normal' }}>Прогрес</th>
              <th style={{ padding: '16px 24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)', fontWeight: 'normal' }}>Статус</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((c, idx) => (
              <tr key={c.id} style={{ borderBottom: idx !== cases.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }} className="hover:bg-white hover:bg-opacity-5 transition-colors cursor-pointer">
                <td style={{ padding: '20px 24px' }}>
                  <div style={{ fontSize: '13px', fontFamily: 'monospace', color: 'var(--color-gold)' }}>{c.id}</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{c.date}</div>
                </td>
                <td style={{ padding: '20px 24px', fontSize: '15px', fontWeight: 500 }}>
                  {c.title}
                </td>
                <td style={{ padding: '20px 24px', fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                  {c.lawyer}
                </td>
                <td style={{ padding: '20px 24px' }}>
                  <div style={{ width: '100%', maxWidth: '120px', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
                    <div style={{ width: `${c.progress}%`, height: '100%', background: c.progress === 100 ? 'var(--color-patina)' : 'var(--color-gold)', borderRadius: '2px' }}></div>
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '4px' }}>{c.progress}%</div>
                </td>
                <td style={{ padding: '20px 24px' }}>
                  <span style={{ 
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '50px',
                    fontSize: '12px',
                    background: c.progress === 100 ? 'rgba(19, 85, 78, 0.2)' : 'rgba(195, 168, 124, 0.1)',
                    color: c.progress === 100 ? 'var(--color-patina)' : 'var(--color-gold)',
                    border: `1px solid ${c.progress === 100 ? 'rgba(19, 85, 78, 0.3)' : 'rgba(195, 168, 124, 0.3)'}`
                  }}>
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
