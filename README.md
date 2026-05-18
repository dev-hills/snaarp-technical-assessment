# Snaarp Analytics Dashboard Assessment

Production-style analytics dashboard built for the Snaarp technical assessment using React, Vite, TypeScript, Tailwind CSS, Recharts, and dnd-kit.

## Assessment Overview

This project recreates a dense admin dashboard experience from a provided design reference and focuses on production-oriented frontend concerns:

- scalable component architecture
- responsive dashboard layout
- reusable cards and section primitives
- accessible interactions
- persistent drag-and-drop layout customization
- submission-ready code quality and documentation

## Tech Stack

- React 19
- Vite 8
- TypeScript
- Tailwind CSS 4
- Lucide React
- Recharts
- dnd-kit
- ESLint

## Features

- responsive dashboard shell with fixed desktop sidebar and mobile drawer
- reusable sidebar, navbar, cards, sections, and page container components
- hardcoded assessment data for all dashboard views
- widget-level drag-and-drop reordering within dashboard sections
- group-level drag-and-drop for major dashboard sections
- collapsible dashboard groups
- persistent layout state using `localStorage`
- subtle reset layout action for clearing saved order/collapse state
- keyboard-accessible drag handles for sortable items

## Drag-and-Drop Behavior

The dashboard uses dnd-kit in two layers:

- group-level sorting for `Cloud Network`, `Device Management Dashboard`, and `Productivity Report`
- widget-level sorting inside each expanded dashboard group

Saved state is persisted independently for:

- dashboard group order
- collapsed/expanded group state
- widget order inside each sortable widget collection

The reset layout action clears persisted dashboard layout keys and restores the default assessment arrangement.

## Accessibility Notes

- interactive controls include accessible labels
- sortable drag handles are keyboard focusable
- focus-visible styles are applied to key controls such as drag handles, menu buttons, collapse controls, and reset layout
- search input includes an accessible label

## How to Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown by Vite in your terminal.

## Build Command

```bash
npm run build
```

## Final QA Status

- TypeScript build passes
- ESLint passes
- persisted layout state works across refreshes
- group collapse state persists across refreshes
- sidebar remains scrollable on shorter desktop screens

## Deployment Note

The project is ready for standard Vite deployment targets such as Vercel or Netlify. No extra deployment configuration is required for a basic static deployment.

Build output is generated in:

```bash
dist/
```

## Challenges Faced

- preserving widget sizing while sorting across mixed-width dashboard sections
- layering group-level drag-and-drop on top of widget-level drag-and-drop without event conflicts
- keeping drag interactions keyboard accessible while maintaining the existing visual design
- ensuring desktop sidebar scrolling worked correctly on shorter laptop-height viewports

## Live Demo

- Live demo: `https://snaarp-technical-assessment.vercel.app`

## Repository

- GitHub repo: `https://github.com/dev-hills/snaarp-technical-assessment`
