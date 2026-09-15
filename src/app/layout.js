import { Albert_Sans, Alumni_Sans } from "next/font/google";
import "./globals.css";

const albert = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const alumni = Alumni_Sans({
  variable: "--font-alumni",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata = {
  title: "Сучасні Юридичні Рішення | Ваш Адвокат",
  description: "Отримайте кваліфіковану юридичну допомогу. Реєстрація бізнесу, супровід договорів, публічні закупівлі, кадри та захист ваших прав.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" className={`${albert.variable} ${alumni.variable}`}>
      <body className="antialiased text-base bg-background text-text-primary">
        {children}
      </body>
    </html>
  );
}
