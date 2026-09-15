import Link from "next/link";
import { FileText, CheckCircle2, Download } from "lucide-react";

export const metadata = {
  title: 'Завантажити Чек-лист | Юридична Компанія',
}

export default function ChecklistPage() {
  return (
    <main className="min-h-screen">
      {/* Premium Navbar */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <Link href="/" className="nav-logo">
            <span className="nav-logo-icon font-serif">AV</span>
            <div className="nav-logo-text">
              Юридична Компанія
              <span className="nav-logo-subtext">Ваш надійний адвокат</span>
            </div>
          </Link>
          <div className="nav-menu">
            <Link href="/#practice">Послуги</Link>
            <Link href="/cabinet">Особистий Кабінет</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" style={{ paddingBottom: '80px', paddingTop: '80px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          
          <div>
            <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(195, 168, 124, 0.1)', color: 'var(--color-gold)', borderRadius: '50px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px', fontWeight: 'bold' }}>
              Безкоштовний Матеріал
            </div>
            <h1 className="hero-title font-serif" style={{ fontSize: '48px', marginBottom: '24px', lineHeight: 1.1, textTransform: 'none' }}>
              Чек-лист: 10 критичних помилок у договорах
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', marginBottom: '40px', fontWeight: 300, lineHeight: 1.6 }}>
              Дізнайтесь, як захистити свій бізнес від фінансових втрат, судових позовів та недобросовісних партнерів. Цей PDF розроблено нашими старшими партнерами на базі реальних кейсів.
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px', listStyle: 'none' }}>
              {[
                "Приховані штрафні санкції та пені",
                "Нечітко виписаний предмет договору",
                "Відсутність процедури розірвання в односторонньому порядку",
                "Ризики щодо інтелектуальної власності"
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px' }}>
                  <CheckCircle2 color="var(--color-gold)" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ 
            background: 'linear-gradient(135deg, rgba(42, 44, 49, 1), rgba(31, 33, 37, 1))',
            borderRadius: '24px',
            padding: '48px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            position: 'relative'
          }}>
            <h3 className="font-serif" style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--color-gold)' }}>
              Отримати доступ
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
              Залиште свій email, і ми миттєво надішлемо вам PDF-файл.
            </p>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label className="form-label">Ваше Ім'я</label>
                <input type="text" className="form-input" placeholder="Олексій" required />
              </div>
              
              <div>
                <label className="form-label">Email</label>
                <input type="email" className="form-input" placeholder="alex@example.com" required />
              </div>
              
              <button type="button" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '20px', width: '100%', marginTop: '8px' }}>
                <Download size={18} /> ЗАВАНТАЖИТИ PDF
              </button>
              
              <p style={{ fontSize: '11px', color: 'var(--color-text-muted)', textAlign: 'center' }}>
                Ми не надсилаємо спам. Ви можете відписатись у будь-який момент.
              </p>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}
