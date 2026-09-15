"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { allServices, team } from "../lib/data";

export default function Home() {
  const topServices = allServices; // Use all for bento grid
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const pains = [
    "Отримали штраф від ТЦК?",
    "Потрібен договір ще на вчора?",
    "Блокування податкових накладних?"
  ];
  const [currentPainIndex, setCurrentPainIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPainIndex((prev) => (prev + 1) % pains.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* Premium Navbar */}
      <nav className="navbar relative z-50">
        <div className="container navbar-inner">
          <Link href="/" className="nav-logo">
            <span className="nav-logo-icon font-serif">AV</span>
            <div className="nav-logo-text">
              Юридична Компанія
              <span className="nav-logo-subtext">Ваш надійний адвокат</span>
            </div>
          </Link>
          <div className="nav-menu">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link href="#practice">Послуги</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link href="#team">Експертиза</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link href="/templates">Магазин Шаблонів</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link href="/login" style={{ color: 'var(--color-gold)' }}>Особистий Кабінет</Link>
            </motion.div>
          </div>
          <div>
            <Link href="/contact" className="btn-schedule">
              ЗАМОВИТИ КОНСУЛЬТАЦІЮ
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section relative z-20">
        <div className="container hero-grid">
          
          {/* Left Column */}
          <motion.div 
            className="hero-left pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="hero-title font-serif">
              ЕКСКЛЮЗИВНЕ ПРАВОВЕ<br/>ПАРТНЕРСТВО
            </h1>
            
            <p className="hero-desc font-serif">
              Надійний захист та бездоганний результат. Спеціалізуємося на корпоративних змінах, публічних закупівлях та складних справах.
            </p>
            
            <div className="hero-actions" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary" style={{ fontSize: '13px', padding: '16px 32px' }}>
                  ЕКСПРЕС-КОНСУЛЬТАЦІЯ
                </Link>
                <Link href="#practice" className="btn-secondary" style={{ 
                  fontSize: '13px', 
                  padding: '16px 32px', 
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  УСІ ПОСЛУГИ
                </Link>
              </div>
              
              <Link href="/checklist" style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '16px',
                background: 'rgba(195, 168, 124, 0.1)',
                border: '1px solid rgba(195, 168, 124, 0.3)',
                padding: '16px 24px',
                borderRadius: '12px',
                color: 'var(--color-gold)',
                textDecoration: 'none',
                marginTop: '8px',
                maxWidth: 'fit-content',
                transition: 'all 0.3s ease'
              }} className="hover:bg-gold hover:bg-opacity-20 hover:-translate-y-1">
                <div style={{ background: 'var(--color-gold)', color: 'var(--color-bg-main)', borderRadius: '50%', width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </div>
                <div>
                  <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)', marginBottom: '2px' }}>Безкоштовний матеріал</div>
                  <div style={{ fontSize: '15px', fontWeight: 500 }}>Завантажити чек-лист перевірки договорів (PDF)</div>
                </div>
              </Link>
            </div>
          </motion.div>
          
          {/* Right Column - Large Image */}
          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div className="hero-image" style={{ y: yParallax }}></motion.div>
            <div className="hero-image-overlay" style={{ background: 'linear-gradient(90deg, var(--color-bg-main) 0%, transparent 100%)', width: '50%', left: 0, right: 'auto', borderLeft: 'none' }}></div>
          </motion.div>

        </div>

        {/* Horizontal Oval Interactive Pain Block */}
        <div className="container" style={{ marginTop: '40px', paddingBottom: '40px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="pain-block"
          >
            <div className="pain-block-inner">
              <div style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-patina)', fontWeight: 'bold' }}>
                Ваші виклики:
              </div>
              
              <div className="pain-text-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPainIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <span className="font-serif" style={{ fontSize: '24px', color: 'var(--color-gold)' }}>
                      {pains[currentPainIndex]}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <Link href="/contact" className="btn-primary" style={{ padding: '12px 32px', fontSize: '12px', borderRadius: '50px' }}>
              ВИРІШИТИ ПРОБЛЕМУ
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Firm in Numbers - Social Proof Bar */}
      <section className="social-proof-bar">
        <div className="container">
          <div className="numbers-row" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div 
              className="number-item"
              
              
              
              transition={{ delay: 0.1 }}
            >
              <div className="number-val" style={{ color: 'var(--color-gold)' }}>12+</div>
              <div className="number-label">Років Практики</div>
            </motion.div>
            <motion.div 
              className="number-item"
              
              
              
              transition={{ delay: 0.2 }}
            >
              <div className="number-val" style={{ color: 'var(--color-gold)' }}>98%</div>
              <div className="number-label">Успішних Справ</div>
            </motion.div>
            <motion.div 
              className="number-item"
              
              
              
              transition={{ delay: 0.3 }}
            >
              <div className="number-val" style={{ color: 'var(--color-gold)' }}>500+</div>
              <div className="number-label">Довірених Клієнтів</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section id="practice" className="stats-section">
        <div className="container">
          <h2 className="section-title font-serif">Напрямки Практики</h2>
          <div className="bento-grid">
            {topServices.map((service, i) => {
              // Asymmetric layout logic for bento grid
              const isLarge = i === 0;
              const isTall = i === 0;
              const isWide = i === 3;
              const Icon = service.icon;
              
              let classNames = "service-card ";
              if (isLarge) classNames += "bento-cell-large ";
              if (isTall) classNames += "bento-cell-tall ";
              if (isWide && !isLarge) classNames += "bento-cell-large ";

              return (
                <motion.div 
                  key={service.id} 
                  className={classNames} 
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                  
                  
                  
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div>
                    <div className="service-icon" style={{ marginBottom: '24px' }}>
                      <Icon strokeWidth={1.5} size={isLarge ? 48 : 32} />
                    </div>
                    <h3 className="service-title font-serif" style={{ fontSize: isLarge ? '32px' : '20px', marginBottom: '16px' }}>
                      {service.title}
                    </h3>
                    <p className="service-desc" style={{ fontSize: '15px', color: 'var(--color-text-primary)', opacity: 0.8, maxWidth: isLarge ? '80%' : '100%' }}>
                      {service.description}
                    </p>
                  </div>
                  
                  <Link href={`/services/${service.id}`} style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center',
                    gap: '8px',
                    marginTop: '32px', 
                    fontSize: '12px', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em', 
                    color: 'var(--color-gold)',
                    fontWeight: 500
                  }}>
                    Детальніше <span>→</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team and Testimonials Section */}
      <section id="team" className="stats-section">
        <div className="container stats-grid">
          
          {/* Left Side - Team */}
          <div>
            <h2 className="section-title font-serif">Експертиза</h2>
            <div className="expert-grid">
              {team.map((member, i) => (
                <motion.div 
                  className="expert-card" 
                  key={i}
                  
                  
                  
                  transition={{ delay: i * 0.2 }}
                >
                  <img src={member.image} alt={member.name} className="expert-img" />
                  <div>
                    <div className="expert-name font-serif" style={{ fontSize: '18px' }}>{member.name}</div>
                    <div className="expert-role">{member.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Testimonials */}
          <div>
            <div className="testimonials-box">
              <h2 className="section-title font-serif" style={{ color: 'white' }}>Довіра Клієнтів</h2>
              <div className="testimonials-grid" style={{ flexDirection: 'column', gap: '16px' }}>
                <motion.div 
                  className="testimonial-card" 
                  style={{ padding: '32px', height: 'auto', fontSize: '15px', color: 'rgba(255,255,255,0.9)' }}
                  
                  
                  
                >
                  «Звернулися за допомогою у структуруванні бізнесу та розробці складних NDA для розробників. Юристи не просто дали шаблони, а розробили глибоко кастомізовані договори, які надійно захищають нашу інтелектуальну власність на ринках ЄС та США. Абсолютно задоволені рівнем експертизи.»
                  <div style={{ marginTop: '24px', fontWeight: 500, color: 'var(--color-gold)' }}>CEO, FinTech Стартап</div>
                </motion.div>
                
                <motion.div 
                  className="testimonial-card" 
                  style={{ padding: '32px', height: 'auto', fontSize: '15px', color: 'rgba(255,255,255,0.9)' }}
                  
                  
                  
                  transition={{ delay: 0.1 }}
                >
                  «Завдяки адвокатам компанії вдалося оперативно розблокувати податкові накладні на суму понад 2 млн грн та виграти суд проти ДПС у першій інстанції. Дуже імпонує їхній підхід: мінімум води, чіткий план дій та постійний зв'язок на всіх етапах процесу.»
                  <div style={{ marginTop: '24px', fontWeight: 500, color: 'var(--color-gold)' }}>Головний Бухгалтер, Агрохолдинг</div>
                </motion.div>

                <motion.div 
                  className="testimonial-card" 
                  style={{ padding: '32px', height: 'auto', fontSize: '15px', color: 'rgba(255,255,255,0.9)' }}
                  
                  
                  
                  transition={{ delay: 0.2 }}
                >
                  «Мав складне питання з військкоматом щодо незаконного накладення штрафу та ігнорування права на відстрочку. Адвокат супроводжував мене особисто, підготував адвокатські запити та успішно оскаржив штраф. Це зберегло мені купу нервів та часу.»
                  <div style={{ marginTop: '24px', fontWeight: 500, color: 'var(--color-gold)' }}>Олександр, Приватний Клієнт</div>
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* FAQ Section */}
      <section id="faq" className="stats-section" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title font-serif text-center" style={{ marginBottom: '40px', fontSize: '36px' }}>Часті Запитання</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { q: "Скільки коштує первинна консультація?", a: "Експрес-консультація по телефону або онлайн безкоштовна. Детальний аналіз документів та розробка стратегії оцінюється від 1000 грн." },
              { q: "Як швидко ви можете підготувати договір?", a: "Стандартні договори готуються протягом 1-2 робочих днів. Термінові запити можемо обробити за кілька годин." },
              { q: "Чи працюєте ви з клієнтами з інших міст?", a: "Так, ми надаємо юридичні послуги онлайн по всій території України, а також представляємо інтереси в судах дистанційно." },
              { q: "Які гарантії успіху в суді?", a: "Адвокатська етика забороняє гарантувати результат суду. Проте ми гарантуємо професійний підхід та максимальне використання всіх законних засобів для захисту ваших інтересів, про що свідчить наш 98% показник успіху." }
            ].map((faq, i) => (
              <div key={i} style={{ 
                background: 'var(--color-bg-secondary)', 
                border: '1px solid var(--color-gold-hairline)', 
                borderRadius: '12px', 
                padding: '24px',
                transition: 'border-color 0.3s'
              }} className="hover:border-gold">
                <h3 className="font-serif" style={{ fontSize: '20px', marginBottom: '12px', color: 'var(--color-gold)' }}>{faq.q}</h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
