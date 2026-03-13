# GEMINI.md

AI agent operating instructions for this repository.

This file defines behavior rules for AI agents (Gemini / Antigravity IDE) working in this codebase.

The goal is to reduce hallucinations, prevent breaking changes, and maintain architectural consistency.

Agents must follow this file strictly.

---

# Project Overview

Project: BYCI – Build Your Career Institute  
Type: Professional Training Institute Website  
Target Users: Professionals, Students, Corporate Organizations  
Target Regions: Kuwait, GCC Countries, India  

Platform Goals:
- Showcase training programs
- Promote flagship programs (e.g., AI Mastery Bootcamp)
- Support corporate training inquiries
- Provide bilingual experience (English + Arabic)

The system must remain **clean, professional, and scalable**.

---

# Tech Stack

Frontend Framework:
React + Vite

Language:
TypeScript

Styling:
TailwindCSS

Package Manager:
npm

IDE Environment:
Google Antigravity IDE

Deployment:
Static frontend (no backend currently)

Future CMS Plan:
Content may be managed through **Notion API as CMS**.

---

# Critical Architectural Principles

1. The site is **frontend-only**.
2. Avoid introducing backend dependencies.
3. Keep architecture **simple and static-first**.
4. All components must remain **reusable**.
5. Maintain **clean separation of UI components and content data**.

---

# Bilingual System (Very Important)

The website supports:

English (LTR)
Arabic (RTL)

Rules:

- Do NOT break RTL layouts.
- Arabic layout must mirror English layout properly.
- Avoid hardcoded direction styles.
- Use conditional direction logic when necessary.

Example:

English

direction: ltr


Arabic

direction: rtl


Text alignment must adapt automatically.

Never hardcode left/right spacing that breaks RTL.

---

# UI / UX Principles

Design style must remain:

- Professional
- Minimal
- Corporate
- Clean
- High readability
- No flashy UI

Avoid:

- Over-animations
- Excessive gradients
- Random color changes
- Non-professional fonts

Maintain consistent spacing and typography.

---

# Color System

The website already has an established color palette.

Agents must **not modify existing colors unless explicitly instructed by the user**.

Never change theme colors automatically.

---

# Tailwind Usage Rules

Use Tailwind utility classes only.

Avoid:

- Inline CSS
- Random custom CSS files
- Style duplication

Prefer reusable components instead of repeated style blocks.

---

# Component Structure Rules

Components must remain:

- Small
- Focused
- Reusable

Preferred pattern:

components/
ui/
sections/
layout/


Never create overly large components.

Split logic when component exceeds reasonable size.

---

# Routing Rules

Agents must not break routing.

Always verify routes before modifying navigation.

Main routes include:

Home  
Programs  
Certifications  
Corporate Training  
About  
Contact

Never rename routes without explicit instruction.

---

# Content Management Strategy (Future)

The project may later use **Notion as CMS**.

Prepare code in a way that:

- Content can be easily replaced with API data later
- Avoid hardcoding large blocks of content inside components
- Prefer storing content in structured objects

Example:

data/programs.ts


instead of embedding program text inside JSX.

---

# Performance Rules

Agents must ensure:

- Images are optimized
- No unnecessary dependencies added
- Avoid large UI libraries
- Keep bundle size minimal

Prefer lightweight solutions.

---

# Safety Rules for Code Changes

Before modifying anything, the agent must:

1. Understand existing component structure.
2. Avoid deleting working logic.
3. Avoid rewriting entire files unless necessary.
4. Prefer incremental changes.

Never refactor large sections without confirmation.

---

# SEO Guidelines

Maintain proper HTML structure:

- Use semantic tags
- Use proper heading hierarchy
- Avoid skipping heading levels

Example:

H1 → H2 → H3

Never use multiple H1 elements on a page.

---

# Self-Correcting Rules Engine

This file contains a growing ruleset that improves over time.

At session start, read the entire "Learned Rules" section before doing anything.

---

## How it works

When the user corrects the AI or a mistake occurs:

Immediately append a new rule to the "Learned Rules" section.

Rules are numbered sequentially.

Format:

N. [CATEGORY] Always/Never do X - because Y.

Categories:

STYLE  
CODE  
ARCH  
TOOL  
PROCESS  
DATA  
UX  
OTHER  

If rules conflict, the **newest rule wins**.

Never delete rules.

If a rule becomes outdated, append a new rule superseding it.

---

## When to Add a Rule

Add rules when:

- The user corrects the AI
- The AI breaks something
- A pattern preference is established
- A structural rule becomes clear

---

## Rule Format Example

1. [CODE] Always use TypeScript types for props - ensures type safety.

2. [STYLE] Never add emojis inside production UI text - maintain professional tone.

3. [ARCH] Store program data in data files instead of hardcoding in components.

---

# Learned Rules

<!-- New rules must always be appended below this line -->
