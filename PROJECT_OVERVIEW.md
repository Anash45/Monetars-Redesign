# Monetars Redesign

## Overview

Monetars is a "get-paid-to" (GPT) rewards platform: a marketing site where visitors learn about earning money through surveys, offers, and app-testing, plus a full member dashboard where signed-up users complete offers, track earnings, climb leaderboards, claim daily/streak rewards, refer friends, and cash out their balance. The project also includes a themed page gallery for reviewing every page of the site in both light and dark mode.

## Tech Stack

- **Frontend:** Next.js 16 (Pages Router) with React 19, styled with Bootstrap 5 utility classes and custom CSS; jQuery-driven interactive widgets (carousels via Slick, dropdowns, sidebar toggles) alongside React components
- **Backend:** Next.js API routes (serverless functions) for authentication, profile management, rewards, and withdrawals
- **Database:** A single JSON file (`data/db.json`) acting as a lightweight file-based data store — no external database service
- **Other tools/services:** `react-hot-toast` for in-app notifications; Chart.js for the earnings chart; Flickity, Select2, and Font Awesome vendored locally; self-hosted Google Fonts (Poppins, Roboto)

## Features

**Public marketing site**
- Homepage, About, Blog (list + detail), FAQ, Contact, Terms, Privacy, and Imprint pages
- Light/dark theme toggle across the whole site, with the theme also settable via a URL query parameter
- Leaderboard, rewards, and "earn money" informational pages
- Account sign-up and sign-in via a modal, with real validation and success/error feedback
- A "page gallery" view listing every page of the site with live screenshots, organized into light-theme, dark-theme, and dashboard sections

**Member dashboard** (`/dashboard/*`)
- Lobby with recently completed offers, an offer wall, and an activity feed
- Offers listing page
- Leaderboard with weekly, monthly, and affiliate-tier rankings
- Profile page showing account details, earnings history, and an earnings chart
- Rewards page with a 7-day claimable streak bonus and redeemable bonus codes
- Affiliate page with a referral link (copy/save), referral history, and promotional tiers/materials
- Withdraw page supporting cash withdrawal (e.g. PayPal/card) and gift-card redemption, with balance validation
- Account settings (display name, email, visibility, language, two-factor toggle, account deletion)
- A live coin balance and user identity shown throughout the dashboard, updated in real time as the user earns or spends

## Architecture

The app follows a fairly conventional Next.js Pages Router layout:

- `pages/` — one file per route; the public site's pages live at the top level, and all member-dashboard routes live under `pages/dashboard/`
- `pages/api/` — serverless API endpoints, grouped by concern (`auth/`, `dashboard/`, plus top-level `profile`, `withdraw`, `rewards/claim`) that read from and write to the JSON data store
- `components/` — shared UI building blocks for the public site (header, footer, modals, chat widget, etc.), with a parallel `components/dashboard/` set for dashboard-specific chrome (sidebar, nav ticker, dashboard modals)
- `context/AuthContext.js` — a React context that holds the signed-in user's session and profile on the client, and exposes sign-up/sign-in/sign-out and profile-update actions used throughout the dashboard
- `lib/db.js` — small helper functions for reading and writing the JSON data store
- `data/db.json` — the file-based "database": user accounts, profiles/balances, leaderboard entries, activity feed, and withdrawal records
- `public/` — static assets, including separate asset trees for the main site and the dashboard, vendored third-party libraries, self-hosted fonts, and pre-generated page screenshots for the gallery view

Data flows client → API route → JSON file and back: dashboard pages call the API routes over `fetch`, which validate the request, read/update `data/db.json`, and return the updated state; the client then reflects that state immediately (updated balances, saved settings, claimed rewards, etc.) with toast notifications confirming success or explaining errors.

## Setup

Prerequisites: Node.js and npm.

```bash
npm install
npm run dev
```

This starts the development server (Next.js default port). Other available scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint the codebase
```

No environment variables or external service credentials are required to run the project locally — all data is stored in and read from the bundled `data/db.json` file.
