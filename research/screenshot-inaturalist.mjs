import { chromium } from 'playwright';

const OUT = '/Users/admin/district/research/screens';
const MOBILE = { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true };

const browser = await chromium.launch({
  headless: false,
  args: ['--disable-blink-features=AutomationControlled'],
});
const ctx = await browser.newContext({
  viewport: MOBILE,
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  locale: 'en-US',
});

const page = await ctx.newPage();

const targets = [
  { id: 'inaturalist_home_mobile',   url: 'https://www.inaturalist.org' },
  { id: 'inaturalist_explore_mobile', url: 'https://www.inaturalist.org/observations' },
  { id: 'inaturalist_signup_mobile',  url: 'https://www.inaturalist.org/users/new' },
];

for (const t of targets) {
  try {
    await page.goto(t.url, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(3000);
    const title = await page.title();
    console.log(`→ ${t.id}: ${title}`);
    await page.screenshot({ path: `${OUT}/${t.id}.png`, fullPage: false });
    console.log(`✓ ${t.id}.png`);
  } catch (e) {
    console.log(`✗ ${t.id} — ${e.message.split('\n')[0]}`);
  }
}

await browser.close();
