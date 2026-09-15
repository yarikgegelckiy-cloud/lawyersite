import Link from "next/link";

export const metadata = {
  title: 'Реєстрація | Особистий Кабінет',
}

export default function RegisterPage() {
  return (
    <div>
      <h1 className="font-serif" style={{ fontSize: '28px', textAlign: 'center', marginBottom: '8px' }}>Реєстрація</h1>
      <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', textAlign: 'center', marginBottom: '40px' }}>
        Станьте нашим клієнтом та отримайте доступ
      </p>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <label className="form-label">ПІБ / Назва Компанії</label>
          <input type="text" className="form-input" placeholder="Олексій Петренко" />
        </div>

        <div>
          <label className="form-label">Email</label>
          <input type="email" className="form-input" placeholder="contact@example.com" />
        </div>
        
        <div>
          <label className="form-label">Пароль</label>
          <input type="password" className="form-input" placeholder="Створіть надійний пароль" />
        </div>

        <Link href="/cabinet" className="btn-primary" style={{ width: '100%', textAlign: 'center', marginTop: '16px' }}>
          ЗАРЕЄСТРУВАТИСЯ
        </Link>
      </form>

      <div style={{ textAlign: 'center', marginTop: '32px', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
        Вже маєте акаунт? <Link href="/login" style={{ color: 'var(--color-gold)' }}>Увійти</Link>
      </div>
    </div>
  );
}
