# Still: Icon Set

106 line icons for the Still app. Open [`preview.html`](preview.html) to see them all.

| Spec | Value |
|---|---|
| Size | 24 × 24 viewBox (scale to 16, 20, 24, 32 or 48 px) |
| Stroke | 2px, round caps, round joins |
| Fill | none |
| Colour | `currentColor`: the icon takes the text colour around it |
| Style | Lucide-style line icons ([lucide.dev](https://lucide.dev), ISC licence). Many shapes follow Lucide, so the app can use `lucide-react-native` and get matching icons. |

Colour rules are in [`docs/brand-colors.md`](../../docs/brand-colors.md#11-icons).

## Naming

Files are named for **what they mean in Still**, not what they look like (for example `fit-to-trade.svg` is a target, `coach-system.svg` is a snowflake). Some shapes are reused under several names so screens can refer to the meaning.

## Icons by group

| Group | Icons |
|---|---|
| **Navigation** (15) | home, today, path, inventory, profile, settings, chevron-left, chevron-right, chevron-down, chevron-up, arrow-right, close, more, search, filter |
| **Actions** (14) | check, plus, minus, edit, trash, share, download, refresh, play, pause, skip, eye, eye-off, log-out |
| **Status & feedback** (11) | info, help, warning, success, error, not-today, too-easy, about-right, too-hard, bell, bell-off |
| **Game** (16) | quest, streak, xp, stat-up, stat-down, rank, star, badge, trophy, boss, gate, bonus, milestone, recovery, no-trade-week, hard-mode |
| **Daily training** (11) | mind-check, news-scan, event-calendar, market-map, fit-to-trade, session-close, rule-check, life-habit, sleep, exercise, timer |
| **Urge & triggers** (9) | urge-pause, breathe, green-candle, after-loss, social-media, bored, late-night, leverage, fomo |
| **Learning & tools** (10) | research, lesson, journal, checklist, rules-card, idea, chart, fact, assumption, unknown |
| **Coach** (4) | coach-system, coach-sergeant, message, sound |
| **Account, safety & payment** (16) | lock, unlock, key, secure-base, privacy, help-support, helpline, calm-heart, email, language, dark-mode, light-mode, payment, membership, community, reminder-time |

## Where they are used (UI v1)

| Screen | Icons |
|---|---|
| Tab bar | today, path, inventory, profile |
| Today | quest, streak, timer, stat-up, mind-check, news-scan, event-calendar, fit-to-trade, urge-pause |
| Questionnaire / Your Path | chevron-left, fomo, leverage, timer, reminder-time, coach-system |
| Quest / Quest clear | close, fact, assumption, unknown, xp, stat-up, too-easy, about-right, too-hard |
| Pause (urge) | urge-pause, breathe, green-candle, social-media, after-loss, bored, plus |
| Fit-to-Trade Gate | fit-to-trade, not-today, check |
| Coach | coach-system, coach-sergeant |

## Using them

**Web / prototype**

```html
<img src="images/icons/streak.svg" width="24" height="24" alt="">
<!-- or inline the SVG so it picks up the text colour -->
```

**React Native (Expo)**: install `react-native-svg` and `react-native-svg-transformer`, then:

```tsx
import Streak from '@/assets/icons/streak.svg';
<Streak width={24} height={24} color={colors.gold} />
```

## Adding a new icon

1. Prefer an existing Lucide icon so the style matches.
2. 24×24, 2px stroke, round caps and joins, no fill, `stroke="currentColor"`.
3. Name it by meaning (`kebab-case.svg`) and add it to the table above.
