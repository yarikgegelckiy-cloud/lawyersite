import Link from "next/link";
import { allServices } from "../../../lib/data";

// Generate static params for all services so they are prerendered
export async function generateStaticParams() {
  return allServices.map((service) => ({
    id: service.id,
  }));
}

export default async function ServicePage({ params }) {
  const resolvedParams = await params;
  const service = allServices.find((s) => s.id === resolvedParams.id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gold font-serif">Послугу не знайдено</h1>
      </div>
    );
  }

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
            <Link href="/#practice">Усі Послуги</Link>
            <Link href="/#contact" className="btn-schedule">ЗАМОВИТИ КОНСУЛЬТАЦІЮ</Link>
          </div>
        </div>
      </nav>

      {/* Service Hero */}
      <section className="hero-section" style={{ paddingBottom: '40px', paddingTop: '60px' }}>
        <div className="container">
          <Link href="/#practice" style={{ 
            color: 'var(--color-text-secondary)', 
            fontSize: '12px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em', 
            display: 'inline-block', 
            marginBottom: '32px',
            transition: 'color 0.3s ease'
          }} className="hover:text-gold">
            ← Повернутися до всіх послуг
          </Link>
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '32px', marginBottom: '40px' }}>
            <div style={{ 
              color: 'var(--color-gold)',
              background: 'linear-gradient(135deg, rgba(42, 44, 49, 1), rgba(31, 33, 37, 1))',
              padding: '24px',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              lineHeight: 1
            }}>
              <service.icon strokeWidth={1.5} size={56} />
            </div>
            <div>
              <h1 className="hero-title font-serif" style={{ marginBottom: '16px', fontSize: '48px', textTransform: 'none' }}>
                {service.title}
              </h1>
              <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', maxWidth: '600px', fontWeight: 300 }}>
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="stats-section">
        <div className="container stats-grid">
          
          {/* Left Column - Info */}
          <div>
            <div className="numbers-card" style={{ padding: '48px', marginBottom: '40px', background: 'linear-gradient(135deg, #1d1f23, #15161a)' }}>
              <h3 className="section-label" style={{ textAlign: 'left', marginBottom: '32px', color: 'var(--color-gold)' }}>Детальний опис</h3>
              <p style={{ fontSize: '16px', lineHeight: '2', color: 'var(--color-text-primary)', fontWeight: 300 }}>
                {service.longDescription}
              </p>
              
              <div style={{ marginTop: '48px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '32px' }}>
                <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Бартість послуги</div>
                <div style={{ fontSize: '32px', color: 'var(--color-gold)', fontWeight: 500 }}>
                  {service.price}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Sidebar */}
          <div>
             <div className="testimonials-box" style={{ borderRadius: '24px', minHeight: 'auto', padding: '40px', background: 'linear-gradient(180deg, #191b1f, #15161a)', border: '1px solid rgba(195, 168, 124, 0.2)' }}>
              <h3 className="section-label" style={{ color: 'var(--color-gold)', marginBottom: '24px', textAlign: 'left' }}>Що ви отримуєте?</h3>
              <ul style={{ fontSize: '15px', lineHeight: '2.5', color: 'rgba(255,255,255,0.9)', listStyle: 'none' }}>
                <li style={{ display: 'flex', gap: '16px', alignItems: 'center' }}><span style={{ color: 'var(--color-gold)', fontSize: '18px' }}>✓</span> Індивідуальний підхід до вашої справи</li>
                <li style={{ display: 'flex', gap: '16px', alignItems: 'center' }}><span style={{ color: 'var(--color-gold)', fontSize: '18px' }}>✓</span> 100% конфіденційність інформації</li>
                <li style={{ display: 'flex', gap: '16px', alignItems: 'center' }}><span style={{ color: 'var(--color-gold)', fontSize: '18px' }}>✓</span> Оперативне вирішення питань</li>
                <li style={{ display: 'flex', gap: '16px', alignItems: 'center' }}><span style={{ color: 'var(--color-gold)', fontSize: '18px' }}>✓</span> Результат, закріплений договором</li>
              </ul>

              <div style={{ marginTop: '40px' }}>
                <Link href="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', width: '100%', padding: '20px' }}>
                  ОТРИМАТИ КОНСУЛЬТАЦІЮ
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
