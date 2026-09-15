import { allServices } from "../lib/data";

export default function sitemap() {
  const baseUrl = 'https://law-platform.ua'; // Тимчасовий домен

  // Основні сторінки
  const routes = [
    '',
    '/contact',
    '/templates',
    '/checklist',
    '/login',
    '/register',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Динамічні сторінки послуг
  const serviceRoutes = allServices.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [...routes, ...serviceRoutes];
}
