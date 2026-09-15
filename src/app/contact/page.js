import Link from "next/link";
import { allServices } from "../../lib/data";

export const metadata = {
  title: 'Контакти | Запис на консультацію | Юридична Компанія',
}

export default function ContactPage() {
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
      <section className="hero-section" style={{ paddingBottom: '40px', paddingTop: '60px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="hero-title font-serif" style={{ marginBottom: '24px', fontSize: '56px' }}>
            ЗАПИС НА КОНСУЛЬТАЦІЮ
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto', fontWeight: 300, lineHeight: 1.8 }}>
            Залиште заявку, і наші адвокати зв'яжуться з вами найближчим часом для вирішення вашого юридичного питання.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="stats-section">
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1.2fr', 
            gap: '64px',
            background: 'linear-gradient(135deg, rgba(42, 44, 49, 1), rgba(31, 33, 37, 1))',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            overflow: 'hidden'
          }}>
            
            {/* Left Column - Contact Info */}
            <div style={{ padding: '64px', background: 'linear-gradient(180deg, #13554e, #0d3b36)', color: 'white', position: 'relative' }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 className="font-serif" style={{ fontSize: '32px', marginBottom: '40px', color: 'var(--color-gold)' }}>Наші Контакти</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <div>
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7, marginBottom: '8px' }}>Телефон</div>
                    <div style={{ fontSize: '24px', fontWeight: 500 }}>+38 (044) 123-45-67</div>
                  </div>
                  
                  <div>
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7, marginBottom: '8px' }}>Email</div>
                    <div style={{ fontSize: '20px' }}>info@law-platform.ua</div>
                  </div>
                  
                  <div>
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7, marginBottom: '8px' }}>Офіс</div>
                    <div style={{ fontSize: '18px', lineHeight: 1.6 }}>вул. Хрещатик, 15, офіс 42<br/>Київ, 01001</div>
                  </div>

                  <div>
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7, marginBottom: '8px' }}>Години Роботи</div>
                    <div style={{ fontSize: '16px', lineHeight: 1.6 }}>Пн-Пт: 09:00 - 19:00<br/>Сб-Нд: За попереднім записом</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Circle */}
              <div style={{
                position: 'absolute',
                bottom: '-100px',
                left: '-100px',
                width: '300px',
                height: '300px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                zIndex: 0
              }}></div>
              
              {/* Map Placeholder */}
              <div style={{ position: 'relative', zIndex: 1, marginTop: '48px', borderRadius: '12px', overflow: 'hidden', height: '200px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <div style={{ textAlign: 'center', opacity: 0.7 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 8px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span style={{ fontSize: '13px' }}>Київ, вул. Хрещатик, 15</span>
                 </div>
              </div>
            </div>
            
            {/* Right Column - Form */}
            <div style={{ padding: '64px 64px 64px 0' }}>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                <div style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)' }}>Ваше Ім'я</label>
                    <input type="text" placeholder="Олександр Іванов" style={{ 
                      width: '100%', 
                      background: 'rgba(255,255,255,0.03)', 
                      border: '1px solid rgba(255,255,255,0.1)', 
                      padding: '16px 20px', 
                      borderRadius: '8px',
                      color: 'white',
                      outline: 'none',
                      fontSize: '15px'
                    }} />
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)' }}>Телефон</label>
                    <input type="tel" placeholder="+38 (000) 000-00-00" style={{ 
                      width: '100%', 
                      background: 'rgba(255,255,255,0.03)', 
                      border: '1px solid rgba(255,255,255,0.1)', 
                      padding: '16px 20px', 
                      borderRadius: '8px',
                      color: 'white',
                      outline: 'none',
                      fontSize: '15px'
                    }} />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)' }}>Послуга</label>
                  <select style={{ 
                      width: '100%', 
                      background: 'rgba(255,255,255,0.03)', 
                      border: '1px solid rgba(255,255,255,0.1)', 
                      padding: '16px 20px', 
                      borderRadius: '8px',
                      color: 'var(--color-text-primary)',
                      outline: 'none',
                      fontSize: '15px',
                      appearance: 'none'
                    }}>
                    <option value="" style={{ background: 'var(--color-bg-secondary)' }}>Оберіть послугу...</option>
                    {allServices.map(service => (
                      <option key={service.id} value={service.id} style={{ background: 'var(--color-bg-secondary)' }}>{service.title}</option>
                    ))}
                    <option value="other" style={{ background: 'var(--color-bg-secondary)' }}>Інше запитання</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)' }}>Повідомлення (необов'язково)</label>
                  <textarea placeholder="Опишіть коротко вашу ситуацію..." rows="4" style={{ 
                    width: '100%', 
                    background: 'rgba(255,255,255,0.03)', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    padding: '16px 20px', 
                    borderRadius: '8px',
                    color: 'white',
                    outline: 'none',
                    fontSize: '15px',
                    resize: 'vertical'
                  }}></textarea>
                </div>

                <button type="button" className="btn-primary" style={{ marginTop: '16px', padding: '20px', fontSize: '14px', width: '100%' }}>
                  ВІДПРАВИТИ ЗАЯВКУ
                </button>
                <p style={{ fontSize: '11px', color: 'var(--color-text-muted)', textAlign: 'center', marginTop: '8px' }}>
                  Натискаючи кнопку, ви погоджуєтесь з політикою конфіденційності.
                </p>

              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
