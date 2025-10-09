const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { Readable } = require('stream');

// Justera denna till exakt URL för din sajt om du har www eller inte
const hostname = 'https://lillaköpenhamn.se';

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/startSida', changefreq: 'monthly', priority: 0.8 },
  { url: '/bokaBord', changefreq: 'monthly', priority: 0.7 },
  { url: '/meny', changefreq: 'monthly', priority: 0.7 },
  { url: '/hittaHit', changefreq: 'monthly', priority: 0.6 },
  { url: '/omOss', changefreq: 'monthly', priority: 0.6 },
  { url: '/personUppgifter', changefreq: 'yearly', priority: 0.5 },
];

const stream = new SitemapStream({ hostname });

streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
  createWriteStream('./public/sitemap.xml').end(data);
  console.log('✅ sitemap.xml skapad i /public');
}).catch((err) => {
  console.error('❌ Fel vid skapande av sitemap:', err);
});
