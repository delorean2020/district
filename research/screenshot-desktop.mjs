import { chromium } from 'playwright';

const OUT = '/Users/admin/district/research/screens';
const DESKTOP = { width: 1440, height: 900 };

const targets = [
  // HARD
  { id: 'dt_saveecobot',             url: 'https://t.me/SaveEcoBot' },
  { id: 'dt_diia',                   url: 'https://diia.gov.ua' },
  { id: 'dt_kyivcity',               url: 'https://kyivcity.gov.ua' },
  // ASPIRATIONAL
  { id: 'dt_fixmystreet_home',       url: 'https://www.fixmystreet.com' },
  { id: 'dt_fixmystreet_report',     url: 'https://www.fixmystreet.com/around?pc=SW1A+1AA' },
  { id: 'dt_fixmystreet_reports',    url: 'https://www.fixmystreet.com/reports' },
  { id: 'dt_litterati',              url: 'https://www.litterati.org' },
  { id: 'dt_inaturalist_home',       url: 'https://www.inaturalist.org' },
  { id: 'dt_inaturalist_explore',    url: 'https://www.inaturalist.org/observations' },
  { id: 'dt_inaturalist_map',        url: 'https://www.inaturalist.org/observations?place_id=any&verifiable=any' },
  { id: 'dt_inaturalist_signup',     url: 'https://www.inaturalist.org/users/new' },
  { id: 'dt_seeclickfix_home',       url: 'https://seeclickfix.com' },
];

const browser = await chromium.launch({
  headless: false,
  args: ['--disable-blink-features=AutomationControlled'],
});

for (const t of targets) {
  const ctx = await browser.newContext({
    viewport: DESKTOP,
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    locale: 'en-US',
  });
  const page = await ctx.newPage();
  try {
    await page.goto(t.url, { waitUntil: 'domcontentloaded', timeout: 20000 });
    // wait for Cloudflare challenge to resolve if present
    await page.waitForTimeout(5000);
    const cf = await page.$('text=Verify you are human');
    if (cf) { console.log(`  ⚠ Cloudflare block on ${t.id}`); }
    const title = await page.title();
    await page.screenshot({ path: `${OUT}/${t.id}.png`, fullPage: false });
    console.log(`✓ ${t.id} — ${title.slice(0, 60)}`);
  } catch (e) {
    console.log(`✗ ${t.id} — ${e.message.split('\n')[0]}`);
  }
  await ctx.close();
}

await browser.close();
