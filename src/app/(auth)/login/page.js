import Link from "next/link";

export const metadata = {
  title: 'Вхід | Особистий Кабінет',
}

export default function LoginPage() {
  return (
    <div>
      <h1 className="font-serif" style={{ fontSize: '28px', textAlign: 'center', marginBottom: '8px' }}>Вхід до Кабінету</h1>
      <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', textAlign: 'center', marginBottom: '40px' }}>
        Керуйте своїми справами та документами
      </p>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <label className="form-label">Email</label>
          <input type="email" className="form-input" placeholder="admin@example.com" />
        </div>
        
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label className="form-label">Пароль</label>
            <Link href="#" style={{ fontSize: '11px', color: 'var(--color-gold)', marginBottom: '8px' }}>Забули пароль?</Link>
          </div>
          <input type="password" className="form-input" placeholder="••••••••" />
        </div>

        <Link href="/cabinet" className="btn-primary" style={{ width: '100%', textAlign: 'center', marginTop: '16px' }}>
          УВІЙТИ
        </Link>
      </form>

      <div style={{ textAlign: 'center', marginTop: '32px', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
        Немає акаунту? <Link href="/register" style={{ color: 'var(--color-gold)' }}>Зареєструватися</Link>
      </div>
    </div>
  );
}
