import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";

export const metadata = {
  title: 'Огляд | Особистий Кабінет',
}

export default function CabinetOverview() {
  const activeCases = [
    { id: 'CASE-001', title: 'Реєстрація ТОВ "Альфа"', status: 'В процесі', date: '12 Вересня 2026', progress: 60 },
    { id: 'CASE-002', title: 'Оскарження штрафу ТЦК', status: 'Очікує розгляду', date: '05 Вересня 2026', progress: 20 },
  ];

  const documents = [
    { name: 'Статут ТОВ "Альфа".pdf', date: '10 Вересня 2026', size: '2.4 MB' },
    { name: 'Договір про надання послуг.pdf', date: '01 Вересня 2026', size: '1.1 MB' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <div className="cabinet-header">
        <h1 className="font-serif" style={{ fontSize: '32px', color: 'var(--color-text-primary)' }}>Огляд</h1>
        <button className="btn-primary" style={{ padding: '12px 24px', fontSize: '12px' }}>+ НОВА СПРАВА</button>
      </div>

      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)' }}>Активні Справи</h2>
          <Link href="/cabinet/cases" style={{ fontSize: '12px', color: 'var(--color-gold)', display: 'flex', alignItems: 'center', gap: '4px' }}>Усі справи <ArrowRight size={14}/></Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {activeCases.map(c => (
            <div key={c.id} className="cabinet-case-card" style={{ 
              background: 'var(--color-bg-secondary)', 
              border: '1px solid var(--color-gold-hairline)', 
              borderRadius: '12px', 
              padding: '24px'
            }}>
              <div>
                <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '4px' }}>{c.id} • {c.date}</div>
                <div style={{ fontSize: '18px', fontWeight: 500 }}>{c.title}</div>
              </div>
              <div className="cabinet-case-progress">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '12px' }}>
                  <span style={{ color: 'var(--color-gold)' }}>{c.status}</span>
                  <span>{c.progress}%</span>
                </div>
                <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
                  <div style={{ width: `${c.progress}%`, height: '100%', background: 'var(--color-gold)', borderRadius: '2px' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)' }}>Останні Документи</h2>
          <Link href="/cabinet/documents" style={{ fontSize: '12px', color: 'var(--color-gold)', display: 'flex', alignItems: 'center', gap: '4px' }}>Усі документи <ArrowRight size={14}/></Link>
        </div>
        <div style={{ 
          background: 'var(--color-bg-secondary)', 
          border: '1px solid var(--color-gold-hairline)', 
          borderRadius: '12px', 
          overflow: 'hidden'
        }}>
          {documents.map((doc, idx) => (
            <div key={idx} style={{ 
              padding: '20px 24px', 
              borderBottom: idx !== documents.length - 1 ? '1px solid var(--color-gold-hairline)' : 'none',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap'
            }} className="hover:bg-opacity-10 cursor-pointer">
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <FileText size={24} color="var(--color-patina)" strokeWidth={1.5} />
                <div>
                  <div style={{ fontSize: '15px' }}>{doc.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{doc.date} • {doc.size}</div>
                </div>
              </div>
              <button style={{ 
                background: 'none', 
                border: '1px solid var(--color-gold-hairline)', 
                color: 'white', 
                borderRadius: '50%', 
                width: '36px', 
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }} className="hover:border-gold hover:text-gold transition-all">
                ↓
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
