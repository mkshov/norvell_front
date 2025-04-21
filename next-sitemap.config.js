/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://grand-hill.ru", // Укажите ваш домен
  generateRobotsTxt: true, // Создаёт robots.txt
  sitemapSize: 7000, // Максимум URL в одном файле sitemap
  exclude: ["/private/*", "/admin/*"], // Исключить страницы
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/private", "/admin"] },
    ],
  },
};
