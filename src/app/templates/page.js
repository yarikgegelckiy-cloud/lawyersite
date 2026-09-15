"use client";
import { useState } from "react";
import Link from "next/link";
import { documentTemplates } from "../../lib/data";
import { FileText, ShoppingCart, Filter, Search } from "lucide-react";

export default function TemplatesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Всі Категорії");

  const categories = ["Всі Категорії", ...new Set(documentTemplates.map(t => t.category))];

  const filteredTemplates = documentTemplates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Всі Категорії" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            <Link href="/#team">Експертиза</Link>
            <Link href="/templates" style={{ color: 'var(--color-gold)' }}>Магазин Шаблонів</Link>
            <Link href="/login">Особистий Кабінет</Link>
          </div>
          <div>
            <Link href="/contact" className="btn-schedule">
              ЗАМОВИТИ КОНСУЛЬТАЦІЮ
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" style={{ paddingBottom: '60px', paddingTop: '80px', textAlign: 'center' }}>
        <div className="container">
          <h1 className="hero-title font-serif" style={{ fontSize: '56px', marginBottom: '24px' }}>
            ЮРИДИЧНІ ШАБЛОНИ
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto', fontWeight: 300, lineHeight: 1.6 }}>
            Готові договори та документи, розроблені нашими провідними експертами. 
            Захистіть свій бізнес за кілька кліків.
          </p>
        </div>
      </section>

      {/* Store Controls */}
      <section style={{ padding: '40px 0', borderBottom: '1px solid var(--color-gold-hairline)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px', position: 'relative' }}>
            <Search size={18} color="var(--color-text-muted)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              placeholder="Знайти договір..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ 
                width: '100%', 
                background: 'var(--color-bg-secondary)', 
                border: '1px solid var(--color-gold-hairline)', 
                padding: '14px 16px 14px 48px', 
                borderRadius: '8px',
                color: 'var(--color-text-primary)',
                fontSize: '15px',
                outline: 'none'
              }} 
            />
          </div>
          
          <div style={{ display: 'flex', gap: '16px' }}>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{ 
                background: 'var(--color-bg-secondary)', 
                border: '1px solid var(--color-gold-hairline)', 
                padding: '0 24px', 
                borderRadius: '8px',
                color: 'var(--color-text-secondary)',
                fontSize: '14px',
                height: '48px',
                appearance: 'none',
                outline: 'none',
                cursor: 'pointer'
              }} 
              className="hover:text-gold hover:border-gold transition-colors"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <button className="btn-primary" style={{ height: '48px', display: 'flex', alignItems: 'center', gap: '12px', padding: '0 24px' }}>
              <ShoppingCart size={18} /> КОШИК (0)
            </button>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="stats-section" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
            gap: '32px' 
          }}>
            {filteredTemplates.length > 0 ? filteredTemplates.map((template) => (
              <div key={template.id} style={{
                background: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-gold-hairline)',
                borderRadius: '16px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }} className="hover:-translate-y-1 hover:shadow-lg hover:border-gold">
                
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                    <div style={{ background: 'rgba(195, 168, 124, 0.1)', padding: '16px', borderRadius: '12px' }}>
                      <FileText size={32} color="var(--color-gold)" strokeWidth={1.5} />
                    </div>
                    <div style={{ fontSize: '24px', fontWeight: 600, color: 'var(--color-gold)' }}>
                      {template.price}
                    </div>
                  </div>
                  
                  <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-patina)', marginBottom: '8px', fontWeight: 'bold' }}>
                    {template.category}
                  </div>
                  
                  <h3 className="font-serif" style={{ fontSize: '24px', marginBottom: '16px', lineHeight: 1.3 }}>
                    {template.title}
                  </h3>
                  
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                    {template.description}
                  </p>
                </div>
                
                <div>
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', borderTop: '1px solid var(--color-gold-hairline)', paddingTop: '16px' }}>
                    <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                      <span style={{ color: 'var(--color-text-secondary)' }}>Формат:</span> {template.format}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                      <span style={{ color: 'var(--color-text-secondary)' }}>Обсяг:</span> {template.pages} стор.
                    </div>
                  </div>
                  
                  <button className="btn-primary" style={{ width: '100%', textAlign: 'center', padding: '16px 0', fontSize: '13px' }}>
                    ДОДАТИ В КОШИК
                  </button>
                </div>
                
              </div>
            )) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '64px', color: 'var(--color-text-muted)' }}>
                Шаблонів не знайдено
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
