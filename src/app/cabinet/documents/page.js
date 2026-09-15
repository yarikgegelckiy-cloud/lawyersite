import { FileText, Download, MoreVertical, Folder } from "lucide-react";

export const metadata = {
  title: 'Документи | Особистий Кабінет',
}

export default function CabinetDocuments() {
  const documents = [
    { name: 'Статут ТОВ "Альфа".pdf', type: 'pdf', date: '10 Вересня 2026', size: '2.4 MB' },
    { name: 'Виписка з ЄДР.pdf', type: 'pdf', date: '08 Вересня 2026', size: '0.8 MB' },
    { name: 'Договір про надання послуг.docx', type: 'word', date: '01 Вересня 2026', size: '1.1 MB' },
    { name: 'Рахунок-фактура #42.pdf', type: 'pdf', date: '28 Серпня 2026', size: '0.3 MB' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="font-serif" style={{ fontSize: '32px', color: 'var(--color-text-primary)' }}>Документи</h1>
        <button className="btn-primary" style={{ padding: '12px 24px', fontSize: '12px' }}>ЗАВАНТАЖИТИ ДОКУМЕНТ</button>
      </div>

      <div className="docs-layout">
        {/* Sidebar Folders */}
        <div className="docs-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ padding: '12px 16px', background: 'rgba(195, 168, 124, 0.1)', color: 'var(--color-gold)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontWeight: 500 }}>
            <Folder size={18} /> Усі документи
          </div>
          <div style={{ padding: '12px 16px', color: 'var(--color-text-secondary)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }} className="hover:bg-white hover:bg-opacity-5 cursor-pointer transition-colors">
            <Folder size={18} /> Реєстрація ТОВ
          </div>
          <div style={{ padding: '12px 16px', color: 'var(--color-text-secondary)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }} className="hover:bg-white hover:bg-opacity-5 cursor-pointer transition-colors">
            <Folder size={18} /> Договори
          </div>
          <div style={{ padding: '12px 16px', color: 'var(--color-text-secondary)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }} className="hover:bg-white hover:bg-opacity-5 cursor-pointer transition-colors">
            <Folder size={18} /> Рахунки
          </div>
        </div>

        {/* File List */}
        <div style={{ 
          flex: 1,
          background: 'var(--color-bg-secondary)', 
          border: '1px solid var(--color-gold-hairline)', 
          borderRadius: '16px', 
          overflow: 'hidden'
        }}>
          {documents.map((doc, idx) => (
            <div key={idx} style={{ 
              padding: '20px 24px', 
              borderBottom: idx !== documents.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }} className="hover:bg-white hover:bg-opacity-5 transition-colors">
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '8px' }}>
                  <FileText size={24} color={doc.type === 'pdf' ? '#e74c3c' : '#3498db'} strokeWidth={1.5} />
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 500 }}>{doc.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '4px' }}>{doc.date} • {doc.size}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button style={{ 
                  background: 'none', 
                  border: '1px solid var(--color-gold-hairline)', 
                  color: 'var(--color-text-primary)', 
                  borderRadius: '50%', 
                  width: '36px', 
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }} className="hover:border-gold hover:text-gold transition-all">
                  <Download size={16} />
                </button>
                <button style={{ 
                  background: 'none', 
                  border: '1px solid transparent', 
                  color: 'var(--color-text-secondary)', 
                  borderRadius: '50%', 
                  width: '36px', 
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }} className="hover:bg-white hover:bg-opacity-10 transition-all">
                  <MoreVertical size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
