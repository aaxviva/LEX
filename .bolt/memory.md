# Project memory

## Product intent & audience

- Multilingual portfolio site (EN, RU, HE) for a creative professional, showcasing commercial projects, courses, podcasts, reels, and an "Derector AI" product.
- Audience: prospective clients and collaborators evaluating work and requesting a presentation/contact.

## Brand personality & voice

- Professional but creative; emphasizes visual media (video/reels).
- Supports RTL layout for Hebrew alongside LTR for English and Russian.

## Visual design & UX direction

- Stack: Vite + React (JSX), Tailwind CSS, Lucide React icons, Unsplash imagery.
- Sections: Hero/Get Presentation → Portfolio (Commercial Projects, Courses & Podcasts) → Reels carousel → Derector AI → Contact.
- Portfolio/reels cards use an always-visible centered play icon (white Lucide `Play` inside semi-transparent dark circle) to signal clickability on both desktop and mobile; desktop keeps hover zoom.
- Each portfolio card has a localized "Watch →" text link under the title (EN: "Watch →", RU: "Смотреть →", HE: "← לצפייה").
- Section spacing normalized to ~80px desktop / ~48px mobile; sections sized to content (no full-screen min-height) to reduce excess gaps.
- Multilingual i18n with RTL support; verify layout across EN/RU/HE on desktop and mobile.

## Decisions, constraints & rationale

- Do not install extra UI/icon packages beyond what the template provides (lucide-react, Tailwind).
- Keep existing links and click behavior unchanged when adding affordances.
- Play icon always visible (not hover-only) because mobile users have no hover state.
- Removed section min-heights to let content drive height and tighten spacing.

## Open questions & assumptions

- Visual QA across languages/breakpoints not yet browser-verified; user asked to confirm EN/RU/HE on desktop and mobile.
- Assuming the i18n/translation dictionaries and RTL direction handling already exist in the codebase.