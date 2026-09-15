"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Briefcase, FileText, MessageSquare, LogOut } from "lucide-react";

export default function CabinetLayout({ children }) {
  const pathname = usePathname();
  
  const navItems = [
    { name: "Головна", path: "/cabinet", icon: LayoutDashboard },
    { name: "Мої Справи", path: "/cabinet/cases", icon: Briefcase },
    { name: "Документи", path: "/cabinet/documents", icon: FileText },
    { name: "Повідомлення", path: "/cabinet/messages", icon: MessageSquare, badge: 2 },
  ];

  return (
    <div className="min-h-screen" style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-bg-main)' }}>
      {/* Navbar */}
      <nav className="navbar" style={{ padding: '20px 0', borderBottom: '1px solid var(--color-gold-hairline)', backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container navbar-inner">
          <Link href="/" className="nav-logo">
            <span className="nav-logo-icon font-serif" style={{ fontSize: '28px' }}>AV</span>
            <div className="nav-logo-text" style={{ fontSize: '11px' }}>
              Кабінет Клієнта
            </div>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '14px', fontWeight: 500 }}>Олексій Петренко</div>
              <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>Клієнт ID: 9482</div>
            </div>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              background: 'var(--color-gold)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'var(--color-bg-main)',
              fontWeight: 'bold',
              fontSize: '14px'
            }}>
              ОП
            </div>
          </div>
        </div>
      </nav>

      <div className="container cabinet-layout-wrapper">
        {/* Sidebar */}
        <aside className="cabinet-sidebar">
          <div style={{ 
            background: 'var(--color-bg-secondary)', 
            borderRadius: '16px', 
            padding: '24px',
            border: '1px solid var(--color-gold-hairline)',
            position: 'sticky',
            top: '40px'
          }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link href={item.path} style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 16px', 
                      color: isActive ? 'var(--color-gold)' : 'var(--color-text-secondary)', 
                      backgroundColor: isActive ? 'rgba(195, 168, 124, 0.1)' : 'transparent', 
                      borderRadius: '8px', 
                      fontSize: '14px', 
                      fontWeight: isActive ? 600 : 400,
                      transition: 'all 0.3s' 
                    }} className="hover:text-gold">
                      <item.icon size={18} strokeWidth={isActive ? 2 : 1.5} />
                      {item.name}
                      {item.badge && (
                        <span style={{ 
                          marginLeft: 'auto', 
                          background: 'var(--color-patina)', 
                          color: 'white', 
                          padding: '2px 8px', 
                          borderRadius: '12px', 
                          fontSize: '10px', 
                          fontWeight: 'bold' 
                        }}>{item.badge}</span>
                      )}
                    </Link>
                  </li>
                );
              })}
              <li style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--color-gold-hairline)' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', color: 'var(--color-text-muted)', borderRadius: '8px', fontSize: '14px', transition: 'all 0.3s' }} className="hover:text-white">
                  <LogOut size={18} strokeWidth={1.5} />
                  Вийти
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content Area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
