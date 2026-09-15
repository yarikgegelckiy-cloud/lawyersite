export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/cabinet/', '/api/'], // Забороняємо індексувати особистий кабінет
    },
    sitemap: 'https://law-platform.ua/sitemap.xml',
  }
}
