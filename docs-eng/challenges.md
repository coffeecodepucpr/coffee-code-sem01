# Challenges | Week 01

[Português](../docs/desafios.md) · English

These challenges are optional. They are here for people who finished the main modules and want to go further, or who want to make the week's deliverable more robust. None of them is required for the basic submission (see `deliverable.md` for what is required).

The challenges are organized by the same modules as the week, and marked by track.

---

## Git & GitHub

**If you are just starting**
- Revert a change using `git log` to find the commit and `git checkout <hash> -- file` to recover an earlier version of a specific file.
- For each commit you have already made, write a better message than the original one (without actually rewriting the history), just as an exercise in judging good commit messages.

**If you already have experience**
- Create a branch, make a change on it, and practice a `merge` back into `main`, including resolving an intentional merge conflict (edit the same line of a file on two different branches and try to combine them).
- Set up an Issue template in the repository (`.github/ISSUE_TEMPLATE`) to standardize how bugs and features are reported.
- Research and write, in your `README.md`, a "How to contribute" section explaining the expected branch → commit → Pull Request flow for anyone who wants to collaborate on the project.

---

## Markdown

**If you are just starting**
- Add a table of contents at the top of your `README.md`, with internal links to each section of the document.
- Include an image (it can be a screenshot of your Figma prototype) somewhere in the documentation, using the image syntax.

**If you already have experience**
- Create a `docs/decisoes.md` file (a "technical decision log") documenting at least one decision you made this week and why; this is a common practice in real projects, usually called an ADR (Architecture Decision Record).

---

## Requirements

**If you are just starting**
- Write 2 more user stories besides the ones you already have, covering a secondary use case of the project (not the main one).

**If you already have experience**
- Prioritize all your functional requirements using the MoSCoW method (Must / Should / Could / Won't have for now) and document that prioritization in `docs/requisitos.md`.
- For each functional requirement, add a clear acceptance criterion (a sentence describing exactly when that requirement can be considered "met").

---

## UX/UI & Figma

**If you are just starting**
- Draw a "loading" state for at least one screen of your prototype.
- Draw an "empty" state: for example, what the group list screen looks like if the search finds nothing.

**If you already have experience**
- Turn at least two repeated elements of your prototype into real Figma components (not just copies).
- Use Auto Layout on at least one list, making sure it adjusts automatically when an item is added or removed.
- Create a component variant (for example, a button with a "normal" state and a "disabled" state) using Figma's Variants feature.

---

## Design System

**If you are just starting**
- Manually check the contrast between text and background on your main screens; does it look readable even on a small screen or in low light?

**If you already have experience**
- Research "design tokens" and rewrite your `docs/design-system.md` naming each value as a variable (`color-primary`, `spacing-sm`, etc.) instead of loose values.
- Use a free contrast checker (search for "WCAG contrast checker") and confirm that your main palette meets the AA accessibility level.

---

## Architecture

**If you already have experience** (mainly)
- Briefly research the difference between a relational and a non-relational database, and write in `docs/arquitetura.md` which one would make more sense for your project and why.
- Sketch, at a high level (no code yet), what the communication between frontend and backend would look like for your main use case: for example, what information would be sent and what information would come back.

---

## General challenge (everyone)

Present your project to another person from Coffee & Code using **only** your `/docs` folder and the Figma link, with no additional verbal explanation. If the person can understand the problem and the requirements and navigate the prototype on their own, your documentation is doing its job. If they cannot, look at what was missing and adjust it.

In practice, this is the real test of "self-contained documentation": the same principle behind how Coffee & Code works.
