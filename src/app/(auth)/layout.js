import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: 'var(--color-bg-main)',
      position: 'relative'
    }}>
      {/* Back to Home */}
      <Link href="/" style={{ 
        position: 'absolute', 
        top: '40px', 
        left: '40px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: 'var(--color-text-secondary)',
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
      }} className="hover:text-gold transition-colors">
        <ArrowLeft size={16} /> На Головну
      </Link>

      <div style={{ 
        width: '100%', 
        maxWidth: '480px', 
        background: 'var(--color-bg-secondary)', 
        border: '1px solid var(--color-gold-hairline)', 
        borderRadius: '24px', 
        padding: '64px 48px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Shimmer effect inside the auth card */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '1px', 
          background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' 
        }}></div>

        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="font-serif" style={{ fontSize: '40px', color: 'var(--color-gold)', lineHeight: 1 }}>AV</div>
          <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--color-text-muted)', marginTop: '8px' }}>
            Юридична Компанія
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}
