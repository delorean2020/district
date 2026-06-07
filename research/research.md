# Research — District Care

**Синтез конкурентного аналізу.** Сирі дані — у `raw-data.md`.

---

## Рівень 01 — Конкуренти

*Матриця за осями + 3 спільні патерни ринку, 3 відмінності.*

### Матриця за осями

| | ЕкоЗагроза | SaveEcoBot | FixMyStreet | iNaturalist | District Care |
|---|---|---|---|---|---|
| **Кроків до відправки** | 7+ | 8 | 4 | 3 | **2–3** |
| **Карта як core** | ❌ (моніторинг повітря) | ❌ | ✅ | ✅ | ✅ |
| **Ідентичність** | GOV ID | Анонімно | Email | Реєстрація | **Email + реальне ім'я** |
| **Після відправки** | Номер без пояснень | Тиша | Публічно + статус | "Needs ID" | **"Сигнал активний"** |
| **Одержувач звіту** | Міндовкілля (непрозоро) | Передається (непрозоро) | Рада через API | Наука | **TBD — відкрите питання** |

### 3 спільні патерни ринку

1. **Геолокація — серце продукту.** Всі продукти будують навколо "де" як першого питання. Карта або координати присутні на кожному флоу — навіть Telegram-бот питає локацію.
2. **Фото заохочується, але не блокує.** Жоден продукт не відмовляє в submission без фото. FixMyStreet, iNaturalist, ЕкоЗагроза — всі дають ескейп-хетч.
3. **Після submit — тиша.** Майже всі залишають користувача без feedback. Виняток — FixMyStreet (публічний статус) і SeeClickFix (CRM-трекінг). Постсабміт — найслабше місце ніші.

### 3 ключові відмінності

1. **Авторизація = компроміс між friction і довірою.** SaveEcoBot — анонімно (0 friction, 0 довіри). ЕкоЗагроза — GOV ID (висока довіра, великий бар'єр). Ніхто не займає середину (email + реальне ім'я) — там ми.
2. **Одержувач звіту визначає весь продукт.** Там де є чіткий одержувач (FixMyStreet → рада, iNaturalist → наука) — є retention. Там де немає (SaveEcoBot, ЕкоЗагроза) — retention нульовий.
3. **Публічність карти як механізм тиску.** FixMyStreet: публічний звіт одразу → соціальний тиск → 73% тижнева вирішуваність ([fixmystreet.com/reports](https://www.fixmystreet.com/reports)). ЕкоЗагроза: після модерації, і карта взагалі не про звіти.

---

## Рівень 02 — Бенчмарк

*Топ-3 механізми для MVP з обґрунтуванням + 1, що не спрацює.*

### Топ-3 механізми

**1. Миттєва видимість на карті** ← FixMyStreet

Звіт з'являється на публічній карті одразу. Без цього користувач не бачить вплив свого submit і не повертається. FixMyStreet: 7.6M звітів без жодної геймінг-механіки — тільки публічна карта. Для нас це не фіча, це базова умова роботи продукту.

**2. Перефреймінг постсабміт-стану** ← iNaturalist

Замість "скарга на розгляді" → "Сигнал активний — перевіряємо". Семантика змінює очікування: не бюрократична черга, а підтвердження що тебе почули. MVP-реалізація: анімований success-екран + пін зі статусом "🔍 Перевіряється".

**3. Outcome visibility** ← FixMyStreet

Навіть найпростіший статус-апдейт замикає retention loop. В MVP достатньо двох станів на карті: "Перевіряється" → "Підтверджено". Людина повертається перевірити — і бачить результат.

### 1 що не спрацює

**Streak (Duolingo-модель) — не переносити.**

Streak працює для продуктів з щоденною звичкою. Екологічні порушення — event-driven: бачиш → фіксуєш. Вимагати "зафіксуй щось сьогодні" — або провокує фейкові звіти, або відштовхує. Правильний цикл: **тригер → дія → feedback → повернення**.

---

## Рівень 03 — Патерни

*Обраний патерн взаємодії + чому саме він під наш контекст.*

**Map-first + Photo як спонукання (не примус)**

| # | Крок | Обов'язковість |
|---|---|---|
| 1 | Головний екран = карта. CTA "+" завжди видимий | — |
| 2 | Тап → GPS визначає локацію. Можна перетягнути пін | ✅ |
| 3 | Фото — UI пояснює цінність, але не блокує | Спонукання |
| 4 | Категорія — 6 варіантів, один тап | ✅ |
| 5 | Короткий опис (placeholder "Що бачиш?") | Опційно |
| 6 | Submit → "Сигнал прийнято" | ✅ |

**Чому цей патерн:**

- **Карта = серце продукту** (принцип #5 з Product Brief). Якщо перший екран не карта — продукт суперечить своїй ідеї.
- **FixMyStreet підтвердив масштаб** — 7.6M звітів, 73% тижнева вирішуваність. Map-first не гіпотеза, це перевірений патерн civic tech.
- **iNaturalist показав photo-first** — 3 кроки і відчуття "магії" через автозаповнення. Але у нашому контексті фото = доказ, а не ціль. Тому: спонукати, не примушувати.
- **ЕкоЗагроза показала пастку** — stepper з 4+ обов'язковими кроками відчувається як держсервіс. Саме від цього ми відходимо.
- **2 обов'язкових кроки** (локація + категорія). Решта — опційні, але UX заохочує.

---

## Синтез — Висновки

*Gaps і гіпотези у форматі «якщо / то / бо [дані з рісерчу]».*

**Якщо** фото — перший контент-крок (а не поле в кінці форми)  
**То** completeness rate і якість доказів зростуть  
**Бо** iNaturalist: photo-first → 3 кроки vs SaveEcoBot: текст-first → 8 кроків

---

**Якщо** автогеолокація з можливістю ручного коригування  
**То** drop-off на кроці "де" знизиться  
**Бо** ЕкоЗагроза: ручна адреса = найбільший бар'єр мобільного флоу фіксації

---

**Якщо** звіт не з'являється на публічній карті  
**То** мотивація фіксувати повторно падає до нуля  
**Бо** ЕкоЗагроза: карта не про звіти → 3.7★ при 5k завантажень; SaveEcoBot: тиша після submit → нульовий retention

---

**Якщо** немає визначеного одержувача звіту до запуску  
**То** retention зламаний з першого дня  
**Бо** FixMyStreet без ради = мертвий продукт; SaveEcoBot: передається "кудись" → ніхто не повертається

---

**Якщо** категорії містять одиниці виміру (м², тонн, га)  
**То** звичайний мешканець не зможе обрати правильну категорію  
**Бо** ЕкоЗагроза: таксономія орієнтована на інспекторів, не громадян → потрібна спрощена цивільна мова + маппінг на беку

---

**Якщо** модерація вручна без альтернативи  
**То** продукт не масштабується  
**Бо** жоден конкурент не використовує ручну модерацію: FixMyStreet — публікація одразу + flagging; iNaturalist — верифікація спільнотою

---

## Сирі дані

### Competitive Analysis

**Дата:** 2026-06-06
**Метод:** WebFetch + Playwright mobile screenshots (390×844)
**Скріни:** `research/screens/`

---

### HARD — той самий продукт, Україна

| | **[ЕкоЗагроза](https://play.google.com/store/apps/details?id=ua.gov.ecozagroza)** | **[EcoMap](https://play.google.com/store/apps/details?id=ee.ut.ecomap)** (Borysenko) | **[SaveEcoBot](https://t.me/SaveEcoBot)** | **[Kyiv Smart City](https://kyiv.city)** | **[Дія](https://diia.gov.ua)** |
|---|---|---|---|---|---|
| **Розробник** | Міндовкілля + Мінцифри | Студент (Univ. of Tartu) | SaveEco команда | Київська міська рада | Мінцифри |
| **Аудиторія** | Громадяни України | Громадяни | Еко-активісти, журналісти | Мешканці Києва | Всі громадяни |
| **Основа продукту** | Фіксація екологічних загроз | Карта порушень | Telegram-бот | Міський портал | Держпослуги |
| **Механізм фіксації** | Фото/відео → форма → геолокація | Карта + опис + фото | Текст у чат (8 кроків) | Не основна функція | Форми послуг |
| **Кроків до відправки** | **7+** (GOV ID → профіль → фото → форма → категорія → опис → відправити) | ~4–5 | **8** (conversational) | — | Багато |
| **Карта** | Так | Так | Ні | Мінімально | Ні |
| **Ідентичність** | Реєстрація | Реєстрація | Анонімно (Telegram) | — | BankID (верифікований документ) |
| **Після відправки** | Передається до органів | Невідомо | Ніякого feedback | — | Статус послуги |
| **Завантажень** | **5,000+** | 100+ | — | — | Млн |
| **Рейтинг** | 3.7★ (79 відгуків) | — | — | — | 4.7★ |
| **Останнє оновлення** | Лип. 2024 ✅ | Лют. 2023 ⚠️ | Активний ✅ | Активний ✅ | Активний ✅ |
| **Скріни** | `ecozagroza_store.png` | `ecomap_borysenko_store.png` | `saveecobot_01_welcome.png` | `dt_kyivcity_01_home.png` | `dt_diia_01_home.png` |

**Спостереження:**
- **ЕкоЗагроза** — наш головний прямий конкурент. Офіційний державний додаток з тою самою ідеєю. 5k завантажень і рейтинг 3.7★ — люди встановлюють, але не задоволені. Авторизація тільки через GOV ID (не email/пароль) + обов'язкове заповнення профілю до першого звіту = 2 бар'єри до взаємодії з продуктом. reCAPTCHA на формі. Карта показує станції моніторингу якості повітря, **а не звіти користувачів** — користувач не бачить своїх сабмішенів на карті. → `ecozagroza_store.png` · `ecozagroza_02_auth_gate.png` · `ecozagroza_25_map_ukraine.png`
- **[EcoMap (Borysenko)](https://play.google.com/store/apps/details?id=ee.ut.ecomap)** — студентський проект з тою самою ідеєю що і District Care. 100+ завантажень за роки, покинутий. Питання: чому не злетів? Відсутність аудиторії, маркетингу, або продукт був поганий? → `ecomap_borysenko_store.png`
- **SaveEcoBot** — переорієнтувався на воєнні злочини проти довкілля. Не прямий конкурент, але бореться за ту саму еко-аудиторію. Telegram = нульовий бар'єр входу. → `saveecobot_01_welcome.png` · `saveecobot_02_main_menu.png`
- **Дія** — еталон по **ідентифікації та мобільному UX**: градієнт, великий шрифт, мінімум полів, BankID. → `dt_diia_01_home.png`

---

### SOFT — той самий JTBD

> *"Я бачу проблему — хочу швидко зафіксувати і передати далі"*

| | **Telegram-боти міст** | **Google Maps** |
|---|---|---|
| **Аудиторія** | Активні мешканці | Всі зі смартфоном |
| **Основа продукту** | Чат у знайомому додатку | Карта + відгуки |
| **Механізм фіксації** | Текст + фото в чат | Відмітити місце + фото + текст |
| **Кроків до відправки** | **1–2** | **3–4** |
| **Карта** | Ні | Так, центральна |
| **Ідентичність** | Псевдонім Telegram | Google-акаунт |
| **Після відправки** | Зазвичай ніякого | Публікується одразу, публічно |
| **Тон / стиль** | Неформальний, швидкий | Нейтральний, картографічний |

**Спостереження:**
- Telegram виграє за **нульовим тертям**: немає нового додатку, немає реєстрації. Ризик для нас: чому завантажувати/реєструватись у щось нове?
- Google Maps — **де-факто існуючий інструмент фіксації**. *[гіпотеза — не підтверджено інтерв'ю чи аналітикою]* Ми маємо дати значно більше: структуровані дані, адресація до органів влади, спільнота.

---

### ASPIRATIONAL — міжнародні еталони

| | **[FixMyStreet](https://www.fixmystreet.com)** | **[Litterati](https://www.litterati.org)** | **[iNaturalist](https://www.inaturalist.org)** | **[SeeClickFix](https://seeclickfix.com)** | **[Eyesea](https://www.eyesea.org)** |
|---|---|---|---|---|---|
| **Аудиторія** | Громадяни UK + ради | B2G: міста, НКО | Натуралісти, науковці | Міста + мешканці (B2G) | Моряки, прибережні спільноти |
| **Основа продукту** | Civic reporting | Дані про сміття → policy | Науковий моніторинг | CRM для міських запитів (311 API) | Фіксація морського забруднення |
| **Механізм фіксації** | Локація → пін → опис → email | Фото → геотег → датасет | Фото → авто-ідентифікація → наука | Звіт → workflow міста | Фото → on-device AI → offline queue → автосинк |
| **Кроків до відправки** | **4** | ~3 | **3** | ~4 | **~2** |
| **Карта як core** | ✅ Пін = вхідна точка | ❌ Бекенд | ✅ Глобальна | ✅ Є | ✅ Глобальна жива |
| **Ідентичність** | Ім'я + email (анонімне відображення — опція) | Реєстрація | Реєстрація | Реєстрація | Реєстрація |
| **Після відправки** | → Рада автоматично + публічна карта + статуси | → Датасет партнера | → Верифікація спільнотою → research grade | → CRM міста → статус виконання | → Публічна карта + XP + community feed |
| **Офлайн** | ❌ | ❌ | ❌ | ❌ | ✅ черга → автосинк |
| **AI** | ❌ | ❌ | ✅ авто-ідентифікація | ❌ | ✅ on-device |
| **Гейміфікація** | ❌ | ❌ | Частково (research grade) | ❌ | ✅ XP · рівні · бейджі · лідерборд |
| **Статус** | ✅ Зрілий | ✅ B2G | ✅ Зрілий | ✅ B2G | 🆕 Лютий 2026 |
| **Скріни** | `dt_fixmystreet_01_home.png` · `dt_fixmystreet_02_map.png` | `dt_litterati_01_home.png` | `dt_inaturalist_01_home.png` | `dt_seeclickfix_01_home.png` | `eyesea_playstore.png` · `eyesea_website.png` |

---

### Зведена матриця

| | **[ЕкоЗагроза](https://play.google.com/store/apps/details?id=ua.gov.ecozagroza)** | **[SaveEcoBot](https://t.me/SaveEcoBot)** | **[Дія](https://diia.gov.ua)** | **[FixMyStreet](https://www.fixmystreet.com)** | **[iNaturalist](https://www.inaturalist.org)** | **[SeeClickFix](https://seeclickfix.com)** | **[Eyesea](https://www.eyesea.org)** |
|---|---|---|---|---|---|---|---|
| **Аудиторія** | Громадяни України з GOV ID | Еко-активісти, журналісти | Всі громадяни України | Мешканці міст UK | Натуралісти, науковці | Органи міста + мешканці | Моряки, дайвери |
| **Ключовий механізм** | GOV ID → профіль-гейт → фото → категорія → submit | Conversational flow: 8 кроків | Пошук послуги → BankID → форма → статус | Пін на карті → фото → опис → до ради | Фото → auto-fill з EXIF → "Needs ID" → верифікація | Звіт → workflow міста → трекінг | Фото → on-device AI → offline queue → XP |
| **Довіра** | GOV ID, рейтинг 3.7★ | Анонімно — нульова верифікація | BankID — найсильніша верифікація | Ім'я + email, відкритий код | Реєстрація + верифікація спільнотою (63%) | Реєстрація + інституційний workflow | Реєстрація + privacy-first |

**3 спільні патерни**

1. **Геолокація — серце продукту.** Всі без винятку будують навколо "де" як першого питання. → `ecozagroza_12_map_location_edit.png` · `dt_fixmystreet_02_map.png` · `saveecobot_07_location.png`
2. **Фото заохочується, але не блокує.** Жоден продукт не відмовляє в submission без фото. FixMyStreet, iNaturalist, ЕкоЗагроза — всі дають ескейп-хетч. → `ecozagroza_08_add_info_sheet.png` · `dt_fixmystreet_01_home.png`
3. **Після submit — тиша.** Майже всі залишають без feedback. Виняток — FixMyStreet (публічний статус) і SeeClickFix (CRM-трекінг). → `ecozagroza_22_success.png`

**3 відмінності**

1. **Авторизація = компроміс між friction і довірою.** SaveEcoBot — анонімно. ЕкоЗагроза — GOV ID. Дія — BankID. Ніхто не займає середину (email + реальне ім'я) — там ми.
2. **Одержувач звіту визначає весь продукт.** Там де є чіткий одержувач (FixMyStreet → рада) — є retention. Там де немає — retention нульовий.
3. **Публічність карти як механізм тиску.** FixMyStreet публікує одразу → 73% тижнева вирішуваність. ЕкоЗагроза — після модерації, і карта не про звіти.

**3 питання до PM**

1. **Хто одержувач — і чи є домовленість?** FixMyStreet без ради — мертвий продукт. Для District Care: чи є хтось хто взяв зобов'язання отримувати і обробляти сигнали?
2. **Коли звіт з'являється на карті?** Публікація одразу → соціальний тиск → результати. Після модерації → якість, але затримка вбиває мотивацію.
3. **Що відбувається після першого звіту?** Якщо мовчить — повернення малоймовірне. Який мінімальний feedback loop можливий в MVP?

---

### Статистика

| Продукт | Показник | Значення | Джерело | Дата |
|---|---|---|---|---|
| FixMyStreet | Звітів за весь час | 7,613,267 | [fixmystreet.com/reports](https://www.fixmystreet.com/reports) | 2026-06-07 |
| FixMyStreet | Виправлено за весь час | 2,953,361 (39%) | [fixmystreet.com/reports](https://www.fixmystreet.com/reports) | 2026-06-07 |
| FixMyStreet | Нових звітів за тиждень | 27,630 | [fixmystreet.com/reports](https://www.fixmystreet.com/reports) | 2026-06-07 |
| FixMyStreet | Виправлено за тиждень | 20,218 (73%) | [fixmystreet.com/reports](https://www.fixmystreet.com/reports) | 2026-06-07 |
| iNaturalist | Верифікованих спостережень | 250+ млн | [inaturalist.org/stats](https://www.inaturalist.org/stats) | 2025 |
| iNaturalist | Observers | ~4 млн | [inaturalist.org/stats](https://www.inaturalist.org/stats) | 2025 |
| iNaturalist | Нових спостережень/місяць | 5+ млн | [inaturalist.org/stats](https://www.inaturalist.org/stats) | 2025 |
| iNaturalist | Research grade | 157 млн з 252 млн (63%) | [inaturalist.org/stats](https://www.inaturalist.org/stats) | 2025 |

---

### Гіпотези

**H1 — Фото-first entry підвищить якість звітів**
Якщо фото є першим кроком (а не необов'язковим полем у кінці), completeness rate і якість доказів зростуть. Референс: iNaturalist (3 кроки, photo-first) vs SaveEcoBot (8 кроків, текст-first).

**H2 — Автогеолокація знизить drop-off на кроці «де»**
Ручне введення адреси — найбільший бар'єр у мобільному флоу. Автоматична геолокація з можливістю ручного коригування скоротить drop-off.

**H3 — Фреймінг «Сигнал прийнято» підвищить повторне використання**
Користувач, якому показали "ти зробив внесок", матиме вищу мотивацію повернутися. Без A/B тесту — гіпотеза.

**H4 — Категорії з візуальним прикладом знизять помилкову класифікацію**
Якщо додати іконку або приклад до кожної категорії, відсоток «Інше» і помилкових категорій знизиться.

**H5 — Без визначеного одержувача retention буде нижчим за benchmark**
Якщо після подачі звіту нічого не відбувається — retention після 30 днів буде нижчим за загальний benchmark у 7–10%.

**H6 — Вимога реального імені відсіє частину, але підвищить якість**
Реєстрація з ім'ям і прізвищем підвищить відповідальність — менше спаму, детальніші описи. Але знизить конверсію: оцінно 20–40% відмов (гіпотеза).

**H7 — Публічна карта без модерації збільшить кількість звітів, але потребує flagging з дня 1**
Якщо звіти публікуються одразу, кількість нових звітів буде вищою. Але без flagging перші ж спам-звіти підірвуть довіру.

---

### Мотивація: аналіз кращих продуктів

| Критерій | **Waze** | **iNaturalist** | **Duolingo** | **FixMyStreet** | **Google Local Guides** |
|---|:---:|:---:|:---:|:---:|:---:|
| Видимий вплив | **5** | 4 | 2 | **5** | 4 |
| Негайний feedback | **5** | 3 | **5** | 2 | 4 |
| Мотивуючий фреймінг | 4 | **5** | 3 | 4 | 3 |
| Соціальне підкріплення | **5** | 4 | 4 | 4 | 3 |
| Персональний прогрес | 3 | 4 | **5** | 1 | **5** |
| Бар'єр першого внеску | **5** | 4 | **5** | 4 | **5** |
| Петля повернення | **5** | 4 | **5** | 3 | 4 |
| Відчуття причетності | 4 | **5** | 2 | 3 | 2 |
| **Сума** | **36** | **33** | **31** | **26** | **30** |

---

### Детальний аналіз флоу (живі сесії)

#### [SaveEcoBot](https://t.me/SaveEcoBot) — 8 кроків

| Крок | Що відбувається | Скрін |
|---|---|---|
| 1 | Welcome: місія + START | `saveecobot_01_welcome.png` |
| 2 | Головне меню: quick-reply | `saveecobot_02_main_menu.png` |
| 3 | Підтвердження наміру | `saveecobot_03_start_complaint.png` |
| 4 | Вибір категорії (5 варіантів) | `saveecobot_04_categories.png` |
| 5 | Опис + фото + уточнення підтипу | `saveecobot_05_category_noise.png` |
| 6 | Хто порушник? (ЄДРПОУ / "Не знаю") | `saveecobot_06_polluter_search.png` |
| 7 | Локація: геолокація або адреса | `saveecobot_07_location.png` |
| 8 | Підтвердження → submit | `saveecobot_08_category_waste.png` |

**Категорії:** Вода · Повітря · Грунт · Відходи · Шум

#### [iNaturalist](https://www.inaturalist.org) — 3 кроки

| Крок | Що відбувається | Скрін |
|---|---|---|
| 1 | Фото першим (drag & drop) | `inaturalist_01_upload.png` |
| 2 | Форма з auto-fill з EXIF | `inaturalist_02_form.png` |
| 3 | Submit → "Needs ID" → карта одразу | `inaturalist_08_card_preview.png` |

**Ключові UX-інсайти:** фото → автозаповнення дати і локації з EXIF; "Needs ID" як постсабміт-статус замість "на розгляді"; persistent CTA у правому верхньому куті.

#### [FixMyStreet](https://www.fixmystreet.com) — 5 кроків (живий тест)

**Скріни:** `fms_01_my_reports.png` → `fms_13_report_graffiti.png` · авторизований акаунт

| Крок | Що відбувається | Скрін |
|---|---|---|
| 0 | Homepage → поле поштового індексу → Enter | `fms_02_homepage_loggedin.png` |
| 1 | Карта → клік → пін + список 23 категорій (із пошуком) → Continue | `fms_04_report_form.png` · `fms_05_category_selected.png` |
| 2 | Фото (необов'язкове): "Photos get reports fixed faster" + поради "Close-up + wide" | `fms_06_step2_photo_details.png` |
| 3 | Публічні деталі: Title + Description. **Автороутинг до ради** одразу після введення | `fms_07_step3_details.png` |
| 4 | Особисті дані: Email (pre-filled), Name, "Show name publicly" (✓ default), Phone (optional) → Submit | `fms_08_step4_user.png` |

**Публічний репорт після подачі:**

| Елемент | Деталь | Скрін |
|---|---|---|
| Статус | "Fixed" / відкритий — видно одразу | `fms_10_report_page.png` |
| Авторство | "Reported via mobile in X category by Name at HH:MM" | `fms_13_report_graffiti.png` |
| Автороутинг | "Sent to Council less than a minute later" | `fms_13_report_graffiti.png` |
| Фото | Thumbnail + кнопка zoom | `fms_13_report_graffiti.png` |
| Публічні оновлення | Поле: фото + текст + чекбокс "This problem has been fixed" | `fms_13_report_graffiti.png` |
| Timeline | "State changed to: In progress" → "State changed to: Fixed" + ким і коли | `fms_10_report_page.png` |

**Dashboard ([fixmystreet.com/reports](https://www.fixmystreet.com/reports), 2026-06-07):**
- За весь час: **7 614 632** звітів, **2 953 467** виправлено (39%)
- За тиждень: **27 630** нових, **20 218** виправлено **(73%)**
- Топ-категорії: Flytipping (1 479) · Pothole (928) · Graffiti (762)

**⚠️ Тертя:**
- Name не зберігається в акаунті — треба вводити щоразу → `fms_08_step4_user.png`
- Потрібно знати поштовий індекс → не чисто geo-first
- Без мобільного застосунку — повний веб-флоу

**✅ Ключові UX-патерни:**
- Автороутинг до ради < 1 хвилини, автоматично → `fms_07_step3_details.png`
- "Show name publicly" ввімкнено за замовчуванням — transparency default
- Email pre-filled для залогіненого — нульове тертя на останньому кроці
- Будь-хто може додати публічне оновлення до чужого репорту
- Questionnaire система: email "Чи вирішено?" через кілька тижнів
- 23 категорії з пошуком — не перевантажує, але гнучко

#### [ЕкоЗагроза](https://play.google.com/store/apps/details?id=ua.gov.ecozagroza) — 7+ кроків

**Авторизація:**

| Крок | Що відбувається | Скрін |
|---|---|---|
| 1 | GOV ID gate | `ecozagroza_02_auth_gate.png` |
| 2 | Профіль-гейт до першого звіту | `ecozagroza_03_profile_warning.png` |
| 3 | Email обов'язковий, але не передається GOV ID | `ecozagroza_04_profile_empty.png` |

**Флоу звіту:**

| Крок | Що відбувається | Скрін |
|---|---|---|
| 1 | Home → "Повідомити" | `ecozagroza_01_home.png` |
| 2 | Bottom sheet: фото / без фото | `ecozagroza_08_add_info_sheet.png` |
| 3 | Форма: фото + авто-локація | `ecozagroza_09_form_photo_location.png` |
| 4 | Google Maps location picker | `ecozagroza_12_map_location_edit.png` |
| 5 | Категорії + reCAPTCHA | `ecozagroza_10_category_list.png` |
| 6 | Submit | `ecozagroza_11_form_bottom_submit.png` |
| 7 | SUCCESS: "Дякуємо за ваш вклад у перемогу!" + номер | `ecozagroza_22_success.png` |

**⚠️ Проблеми флоу:**
- 7 реальних кроків → `ecozagroza_02_auth_gate.png` · `ecozagroza_03_profile_warning.png`
- reCAPTCHA на мобілі → `ecozagroza_09_form_photo_location.png`
- Номер звіту без пояснення що буде далі → `ecozagroza_22_success.png`
- Карта — НЕ про звіти → `ecozagroza_25_map_ukraine.png`

#### [Eyesea](https://www.eyesea.org) — живий тест, iOS (51 скрін)

**Скріни:** `eyesea_20_splash.png` → `eyesea_51_feed_world_4.png`

**Онбординг і реєстрація:**

| Крок | Що відбувається | Скрін |
|---|---|---|
| Splash | "Empowering communities · Protecting our oceans" — tap to continue | `eyesea_20_splash.png` |
| Login | Email + Password · "Don't have an account? Sign Up" | `eyesea_21_login.png` |
| Sign Up | "Tell us about you": Full Name · Country · **Volunteer / Seafarer toggle** · Organization (optional) · 2 GDPR чекбокси | `eyesea_22_signup_volunteer.png` · `eyesea_23_signup_seafarer.png` |
| Onboarding 1 | "Capture the Evidence" → дозвіл до камери (iOS system dialog) | `eyesea_27_onboarding_camera.png` · `eyesea_28_onboarding_camera_permission.png` |
| Onboarding 2 | "Pinpoint the Pollution" → дозвіл до геолокації | `eyesea_29_onboarding_location_permission.png` · `eyesea_30_onboarding_location.png` |
| Onboarding 3 | "Upload from History" → дозвіл до галереї | `eyesea_31_onboarding_photo_ungrant.png` · `eyesea_32_onboarding_photo_granted.png` |
| Onboarding 4 | "Stay in the Loop" → дозвіл до сповіщень | `eyesea_33_onboarding_notifications.png` |
| Onboarding 5 | Terms + Privacy → "Get Started" | `eyesea_34_onboarding_get_started.png` |

**Флоу подачі звіту:**

| Крок | Що відбувається | Скрін |
|---|---|---|
| 1 | Камера або галерея — photo-first entry | `eyesea_02_camera.png` |
| 2 | Форма: 9 категорій · мітки Nature/Low авто · "Already cleaned up?" тогл · **кредити відразу на кнопці: +45–58 Credits** | `eyesea_03_form_empty.png` · `eyesea_04_form_selected.png` |
| 3 | Локація: Mapbox drag pin · координати | `eyesea_05_location_adjust.png` |
| 4 | Submit → "Report submitted!" → "Report synced! +58 credits" (2 тости) | `eyesea_06_submit_success.png` · `eyesea_07_sync_credits.png` |

**Пост-сабміт:**

| Елемент | Деталь | Скрін |
|---|---|---|
| Картка репорту | Категорія · місце · час · статус Active · вага (~165g) · "Mark as Recovered" | `eyesea_08_report_card_active.png` |
| Mark as Recovered | Діалог: "The original reporter will be notified" | `eyesea_09_mark_recovered_dialog.png` |
| Після Recover | Статус → Recovered · зелений пін | `eyesea_10_report_card_recovered.png` |

**Explore / карта:**
- Пошук за назвою міста (Lviv → автосаджест) → `eyesea_19_search.png`
- Фільтри: Reports (All/My) · Status (Active/Recovered) · Час (24h/3d/7d/15d/30d) → `eyesea_38_explore_map_filters.png` → `eyesea_41_explore_filter_time.png`
- Data layers: Hotspots · Oil · MPA · MARPOL → `eyesea_37_explore_map_layers.png`

**Community Feed:** Nearby / At Sea / World · статус Recovered видно в стрічці → `eyesea_11_feed_atsea.png` · `eyesea_48_feed_world_1.png`

**Leaderboard (Ranks):** Users / Orgs / Ships · 30D/90D/1Y · Rankings + Awards podium
- #24 Mykola: 0 Credits · #1 Lisbon: 584 репорти, 30 063 Credits → `eyesea_13_leaderboard_users.png`
- B2B гравці: Orgs + Ships як окремі сутності у leaderboard → `eyesea_14_leaderboard_orgs.png`

**Профіль:** Overview (Rank · Reports · Thanks · Recoveries · progression bar) · My Reports · Settings → `eyesea_43_profile_overview.png`

**Settings:** Theme · Language · Expert Mode (AI detection boxes) · Log Out · v1.0.0 → `eyesea_45_profile_settings_top.png`

**Events / Cleanups:** "Upcoming — No upcoming events / Check back later" → `eyesea_47_events_empty.png`

**✅ Ключові UX-патерни:**
- AI-оцінка ваги (~165g) — автоматично з фото
- Credits відразу на кнопці Submit, ростуть при додаванні категорій — instant reward loop
- Offline-first: "submitted" → потім "synced" — чесний двохетапний feedback
- "Already cleaned up?" тогл у формі — zero-step recovery flow
- Будь-хто може позначити чужий репорт Recovered, автор сповіщається
- Volunteer / Seafarer toggle на реєстрації → персоналізація з першого екрану
- Expert Mode (AI bounding boxes) — advanced tier без окремого продукту
- Leaderboard для Users + Orgs + Ships → B2B retention через competition

**⚠️ Тертя і обмеження:**
- Морський фокус: всі 9 категорій — морське сміття (Plastic/Fishing Gear/Oil Spill тощо)
- "At Sea" як контекст за замовчуванням — не про міські наземні порушення
- Events — порожні (функціонал є, але контент відсутній)
- 5 onboarding-слайдів з системними дозволами — довгий вхід

---

### Категорії порушень (таксономія ЕкоЗагрози / Міндовкілля)

| Категорія | Підкатегорії |
|---|---|
| **Атмосферне повітря** | Горіння нафти · Лісові пожежі · Загоряння · Неорганізований викид |
| **Земельні ресурси** | Засмічення (м²) · Забруднення ґрунтів (м²) · Самовільне зайняття (га) |
| **Водні ресурси** | Забруднення (тонн) · Засмічення (кг/кв.м) · Самовільне користування |
| **Ліс, Рослинний, Тваринний** | Вирубка (га) · Знищення тварин · Незаконне добування |
| **ПЗФ** | Всі вищезазначені + Побутове засмічення |
| **Надра** | Самовільний видобуток (куб.м/тонн) · Підземні води (куб.м) |

> 💡 Одиниці виміру (м², га, тонн) — для інспекторів. Для громадян потрібна спрощена цивільна мова + маппінг на беку.

---

### UX-патерни: 5 підходів до фіксації порушення

**Патерн 1 — Map-first** (FixMyStreet): Карта → вибрати точку → форма → підтвердження. Просторовий контекст первинний.

**Патерн 2 — Photo-first / AI-assisted** (iNaturalist): Фото → AI аналізує → форма з автозаповненням → submit. 3 кроки замість 8.

**Патерн 3 — Stepper / Wizard** (ЕкоЗагроза): 4+ обов'язкових кроків. Структурований, але відчувається як держсервіс.

**Патерн 4 — Conversational** (SaveEcoBot): Бот ставить питання → 8 кроків у вигляді діалогу. Знайомий контекст, але не скорочує кількість кроків.

**Патерн 5 — Quick-tap / Minimal** (гіпотетичний): CTA → GPS → категорія → фото → submit (< 60 сек). Максимальна швидкість, мінімальні дані.

---

### App Store / Google Play — повний пошук

| Додаток | Платформа | Завант. | Рейтинг | Релевантний | Примітка |
|---|---|---|---|---|---|
| **[ЕкоЗагроза](https://play.google.com/store/apps/details?id=ua.gov.ecozagroza)** | Android + iOS | 5k+ / 18 відг. | 3.7★ / 4.2★ | ✅ HARD | Офіційний Міндовкілля |
| **[EcoMap](https://play.google.com/store/apps/details?id=ee.ut.ecomap)** (Borysenko) | Android | 100+ | — | ✅ HARD | Студент, покинутий лют.2023 |
| **[Eyesea Reporting](https://play.google.com/store/apps/details?id=com.mariussuteu.eyesea.eyeseareporting)** | Android + iOS | 50+ | 0 відг. | ✅ ASPIRATIONAL | Новий (лют.2026), морський фокус |
| **[SeeClickFix](https://seeclickfix.com)** | iOS | — | 4.6★ / 7,887 відг. | ✅ ASPIRATIONAL | Civic reporting |

**Висновок:** Ніша фіксації екологічних порушень в Україні та глобально — **майже порожня**. ЕкоЗагроза є, але занедбана. Eyesea — єдиний свіжий гравець з правильними UX-патернами, але в іншій ніші (море).

---

### Відкриті питання

- **Інспектори:** хто вони (штатні vs волонтерські), як зараз фіксують, які болі?
- **Цикл звіту:** верифікація → який орган → які статуси?
- **Громадяни:** вік, мотивація, бар'єри; чи готові реєструватись з реальним іменем?
- **Інтеграції:** формат і протокол передачі даних до держорганів?

---

### Скріншоти

| Файл | Продукт | Що показує |
|---|---|---|
| `eyesea_20_splash.png` | Eyesea live | Splash: "Empowering communities" |
| `eyesea_21_login.png` | Eyesea live | Login: Email + Password |
| `eyesea_22_signup_volunteer.png` | Eyesea live | Sign Up: Volunteer tab |
| `eyesea_23_signup_seafarer.png` | Eyesea live | Sign Up: Seafarer tab (Organization required) |
| `eyesea_24_signup_name_filled.png` | Eyesea live | Sign Up: ім'я заповнено |
| `eyesea_25_signup_country_picker.png` | Eyesea live | Sign Up: список країн |
| `eyesea_26_signup_org_picker.png` | Eyesea live | Sign Up: список організацій |
| `eyesea_27_onboarding_camera.png` | Eyesea live | Онбординг: Camera slide |
| `eyesea_28_onboarding_camera_permission.png` | Eyesea live | iOS camera permission dialog |
| `eyesea_29_onboarding_location_permission.png` | Eyesea live | iOS location permission dialog |
| `eyesea_30_onboarding_location.png` | Eyesea live | Онбординг: Location slide |
| `eyesea_31_onboarding_photo_ungrant.png` | Eyesea live | Upload from History (не надано) |
| `eyesea_32_onboarding_photo_granted.png` | Eyesea live | Upload from History (надано) |
| `eyesea_33_onboarding_notifications.png` | Eyesea live | Онбординг: Notifications slide |
| `eyesea_34_onboarding_get_started.png` | Eyesea live | Онбординг: Get Started |
| `eyesea_35_explore_map_empty.png` | Eyesea live | Explore: порожня карта Львова |
| `eyesea_36_explore_map_world.png` | Eyesea live | Explore: карта world view |
| `eyesea_37_explore_map_layers.png` | Eyesea live | Explore: layers picker (Hotspots/Oil/MPA/MARPOL) |
| `eyesea_38_explore_map_filters.png` | Eyesea live | Explore: filter bar |
| `eyesea_39_explore_filter_reports.png` | Eyesea live | Filter: Reports (All/My) |
| `eyesea_40_explore_filter_status.png` | Eyesea live | Filter: Status (Active/Recovered) |
| `eyesea_41_explore_filter_time.png` | Eyesea live | Filter: Час (24h/3d/7d/15d/30d) |
| `eyesea_42_notifications_empty.png` | Eyesea live | Notifications: порожній стан |
| `eyesea_43_profile_overview.png` | Eyesea live | Profile: Overview, rank progression bar |
| `eyesea_44_profile_my_reports.png` | Eyesea live | Profile: My Reports, порожній стан |
| `eyesea_45_profile_settings_top.png` | Eyesea live | Settings: Theme/Language |
| `eyesea_46_profile_settings_bottom.png` | Eyesea live | Settings: Expert Mode, Log Out, v1.0.0 |
| `eyesea_47_events_empty.png` | Eyesea live | Events/Cleanups: порожній стан |
| `eyesea_48_feed_world_1.png` | Eyesea live | Feed: World tab |
| `eyesea_01_onboarding_photo.png` | Eyesea live | Онбординг: Upload from History (середина сесії) |
| `eyesea_02_camera.png` | Eyesea live | Камера: photo-first entry |
| `eyesea_03_form_empty.png` | Eyesea live | Форма: 9 категорій, +45 Credits |
| `eyesea_04_form_selected.png` | Eyesea live | Форма: вибрано Plastic/Metal/Cardboard, +58 Credits |
| `eyesea_05_location_adjust.png` | Eyesea live | Локація: drag pin на Mapbox |
| `eyesea_06_submit_success.png` | Eyesea live | "Report submitted successfully!" toast |
| `eyesea_07_sync_credits.png` | Eyesea live | "Report synced! +58 credits" toast |
| `eyesea_08_report_card_active.png` | Eyesea live | Картка: Active, ~165g, Mark as Recovered |
| `eyesea_09_mark_recovered_dialog.png` | Eyesea live | Діалог: Mark as Recovered? |
| `eyesea_10_report_card_recovered.png` | Eyesea live | Картка: Recovered, зелений пін |
| `eyesea_11_feed_atsea.png` | Eyesea live | Feed: At Sea, Plastic reports |
| `eyesea_12_feed_nearby.png` | Eyesea live | Feed: Nearby, Recovered reports |
| `eyesea_13_leaderboard_users.png` | Eyesea live | Leaderboard: Users #24 Mykola |
| `eyesea_14_leaderboard_orgs.png` | Eyesea live | Leaderboard: Orgs |
| `eyesea_17_awards_orgs.png` | Eyesea live | Awards: Top 3 Orgs podium |
| `eyesea_18_awards_users.png` | Eyesea live | Awards: Top 3 Users podium |
| `eyesea_19_search.png` | Eyesea live | Search: Lviv suggestions |
| `dt_fixmystreet_01_home.png` | FixMyStreet | Homepage, 4-крокова інфографіка, CTA |
| `dt_fixmystreet_02_map.png` | FixMyStreet | Карта звітів |
| `dt_fixmystreet_03_map_london.png` | FixMyStreet | Карта Лондона з піном |
| `fms_01_my_reports.png` | FixMyStreet live | Акаунт-сторінка (no reports yet) |
| `fms_02_homepage_loggedin.png` | FixMyStreet live | Homepage залогіненого + live stats |
| `fms_03_map_around.png` | FixMyStreet live | Карта після EC1A 1BB |
| `fms_04_report_form.png` | FixMyStreet live | Крок 1: карта + 23 категорії |
| `fms_05_category_selected.png` | FixMyStreet live | Graffiti вибрано |
| `fms_06_step2_photo_details.png` | FixMyStreet live | Крок 2: фото опційне + підказки |
| `fms_07_step3_details.png` | FixMyStreet live | Крок 3: Title + Description + автороутинг |
| `fms_08_step4_user.png` | FixMyStreet live | Крок 4: особисті дані, email pre-filled |
| `fms_09_dashboard.png` | FixMyStreet live | Dashboard: all-time + 7-day stats |
| `fms_10_report_page.png` | FixMyStreet live | Публічний репорт: статус Fixed + timeline |
| `fms_11_report_citizen.png` | FixMyStreet live | Репорт Pothole від громадянина |
| `fms_12_my_account.png` | FixMyStreet live | Акаунт: сповіщення + questionnaire |
| `fms_13_report_graffiti.png` | FixMyStreet live | Graffiti репорт: фото + update form |
| `dt_seeclickfix_01_home.png` | SeeClickFix | Homepage — B2G pivot, 311 CRM |
| `dt_inaturalist_01_home.png` | iNaturalist | Homepage, community framing |
| `dt_litterati_01_home.png` | Litterati | Homepage — B2G pivot, CONTACT US |
| `dt_diia_01_home.png` | Дія | Homepage, градієнт, пошук послуг |
| `dt_kyivcity_01_home.png` | Kyiv Smart City | Офіційний портал |
| `ecozagroza_01_home.png` | ЕкоЗагроза | Головний екран, CTA "Повідомити" |
| `ecozagroza_02_auth_gate.png` | ЕкоЗагроза | GOV ID auth gate |
| `ecozagroza_22_success.png` | ЕкоЗагроза | SUCCESS: "Дякуємо за ваш вклад" |
| `ecozagroza_25_map_ukraine.png` | ЕкоЗагроза | Карта України зі станціями (не звітами) |
