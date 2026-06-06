import { chromium } from 'playwright';
import path from 'path';

const MOBILE = { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true };
const OUT = '/Users/admin/district/research/screens';

const targets = [
  // HARD
  { id: 'ecomap_home',       url: 'https://ecomap.org.ua',                          label: 'EcoMap — home' },
  { id: 'ecomap_map',        url: 'https://ecomap.org.ua/map',                      label: 'EcoMap — map' },
  { id: 'saveecobot',        url: 'https://t.me/SaveEcoBot',                        label: 'SaveEcoBot — Telegram' },
  // SOFT
  { id: 'diia_home',         url: 'https://diia.gov.ua',                            label: 'Дія — home' },
  { id: 'kyivcity_home',     url: 'https://kyivcity.gov.ua',                        label: 'Kyiv Smart City — home' },
  // ASPIRATIONAL
  { id: 'fixmystreet_home',  url: 'https://www.fixmystreet.com',                    label: 'FixMyStreet — home' },
  { id: 'fixmystreet_report',url: 'https://www.fixmystreet.com/around?pc=SW1A+1AA', label: 'FixMyStreet — map/report' },
  { id: 'litterati_home',    url: 'https://www.litterati.org',                      label: 'Litterati — home' },
  { id: 'inaturalist_home',  url: 'https://www.inaturalist.org',                    label: 'iNaturalist — home' },
  { id: 'inaturalist_obs',   url: 'https://www.inaturalist.org/observations/new',   label: 'iNaturalist — new obs [?login]' },
  { id: 'seeclickfix_home',  url: 'https://seeclickfix.com',                        label: 'SeeClickFix — home' },
  { id: 'seeclickfix_map',   url: 'https://seeclickfix.com/open311',                label: 'SeeClickFix — map' },
];

const browser = await chromium.launch({ headless: true });

for (const t of targets) {
  const ctx = await browser.newContext({ viewport: MOBILE, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' });
  const page = await ctx.newPage();
  try {
    await page.goto(t.url, { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(2500);
    const file = path.join(OUT, `${t.id}.png`);
    await page.screenshot({ path: file, fullPage: false });
    console.log(`✓ ${t.label} → ${t.id}.png`);
  } catch (e) {
    console.log(`✗ ${t.label} — ${e.message.split('\n')[0]}`);
  }
  await ctx.close();
}

await browser.close();
