# 08 | Initial architecture

[Português](../docs/08-arquitetura.md) · English

> Previous module: `07-design-system.md` · Next: `challenges.md` and `deliverable.md`

This module is aimed mainly at experienced members, but everyone can (and should) read it and start thinking about these questions: even without any coding yet, some decisions start to become clearer now that there are requirements, screens and a design system.

## What it is

**Software architecture** is the way the different parts of a system are organized and communicate with each other. Before writing a line of code, it is already possible (and recommended) to have a first view of how the system will be divided.

We are not talking about advanced architecture yet (complex patterns, microservices, etc.). Just the initial view: which big parts the system will have, and how they talk to each other.

## Why we think about this now

At this point in the week, you already know:
- Which problem the system solves (requirements).
- Who the user is and how they interact with the system (UX/UI, prototype).
- How the system should look (design system).

What is missing is a first idea of **how this will be built behind the screens**. Having that view now, even if simple, avoids last-minute decisions in the coming weeks, when code is already being written.

## The main concepts

### Frontend

It is the part of the system the user sees and interacts with directly: the screens you drew in Figma. It is where the interface, the navigation and the display of information happen.

### Backend

It is the part that is "invisible" to the user, running on a server, responsible for processing data, applying business rules and talking to the database. For example: when the user clicks "Join" on a group, it is the backend that checks whether the group still has room, records the membership, and sends the response back for the frontend to show.

### Database

It is where the system's information is stored persistently: users, groups, messages, whatever is relevant to your project. Unlike a variable in memory, data in a database keeps existing even after the system is restarted.

### Responsibilities

Each part of the system should have a clear responsibility. The frontend should not, for example, decide on its own whether a group is full or not; that is a business rule, the backend's responsibility. Making it clear "who takes care of what" keeps the same logic from being duplicated (and, over time, inconsistent) in different parts of the system.

### Directory organization

Just as you already thought about a folder structure for documentation (`/docs`), the code will also need organization. A simple, common initial structure:

```
project/
├── docs/
├── frontend/          # screen code
├── backend/           # server code / business rules
├── README.md
└── .gitignore
```

This can (and probably will) change as the project moves forward and the chosen technology defines its own conventions, but having a first idea already helps organize your thinking.

### Communication between the parts

Frontend and backend usually talk through requests (for example, the frontend asks "give me the list of groups" and the backend responds with that data). You do not need to know the technical details of this communication yet, just understand that it exists and that it is an architecture decision: how the parts of the system will exchange information.

## A real example

For the study group app:

```
User opens the app
      │
      ▼
  FRONTEND (search screen)
      │  "show me the groups for subject X"
      ▼
   BACKEND (receives the request, queries the database)
      │
      ▼
 DATABASE (returns the groups for that subject)
      │
      ▼
   BACKEND (organizes the response)
      │
      ▼
  FRONTEND (shows the list of groups on screen)
```

Each arrow represents communication between parts. Each box has a clear responsibility: the frontend does not know *how* the data is fetched from the database, it just asks and shows the result; the backend does not know *how* the information will appear on screen, it just delivers the data.

## How to do it

You do not need to (and should not, at this stage) draw a complete, final architecture. The goal is a first view, knowing that it will evolve.

1. **List the big parts of your system**: probably frontend, backend and database, but this can vary depending on the project.
2. **For each part, write one sentence about its main responsibility.**
3. **Draw how these parts communicate** (it can be a simple text diagram, like the example above), considering at least the main flow you already mapped in the UX/UI module.
4. **Think of an initial folder structure** for the code, even if no code exists yet.
5. **Document all of this in `docs/arquitetura.md`.**

Suggested structure for `docs/arquitetura.md`:

```markdown
# Initial Architecture

## Overview

[short description of how the system is divided]

## Parts of the system

### Frontend
Responsibility:

### Backend
Responsibility:

### Database
Responsibility:

## Main flow

[simple text diagram or description of the data flow]

## Folder structure (initial)

\`\`\`
project/
├── docs/
├── frontend/
├── backend/
└── README.md
\`\`\`

## Notes

This is a first view of the architecture and can (and should) change as the project moves forward.
```

## If you are just starting

This module may feel abstract if you have never coded, and that is fine. This week, the most important thing is to understand that a system has different parts with different responsibilities, and that thinking about this before coding helps you organize the work better later. You do not need to write a complete `docs/arquitetura.md`: a simple paragraph describing the parts of your system is already a good start.

## If you already have experience

Go deeper on:

- **Justify your initial technology choices**, if you already have some idea (for example: "we will use React on the frontend because X", "a relational database because the data has clear relationships between users and groups"). It does not need to be final, but it is worth documenting the reasoning.
- **Think about extension points.** If the project grows (for example, adding a mobile app besides the website), would the current architecture hold up, or would it require a lot of rework? You do not need to solve that now, just be aware of it.
- **Consider the communication between frontend and backend in more detail**, even at a high level: will it be a REST API? Will there be authentication? This does not need to be implemented, just sketched.
- **Plan the build order** according to this architecture: what comes first, frontend or backend, knowing that in the next weeks this becomes real work.

## Activity

1. List the parts of your system (frontend, backend, database, or others that make sense for your project).
2. Write each part's responsibility in one sentence.
3. Draw (in text is fine, like in the example) the data flow of your main use case.
4. Propose an initial folder structure for the code.
5. Fill in `docs/arquitetura.md`, then commit and push.

**Module checklist:**

- [ ] Parts of the system listed with clear responsibilities
- [ ] Data flow of the main use case sketched
- [ ] Initial folder structure proposed
- [ ] `docs/arquitetura.md` filled in, committed and pushed
- [ ] Experienced members: initial technology choices justified

---

You have finished all of Week 01's content modules. Now see `challenges.md` for extra challenges and `deliverable.md` for the final checklist before submitting.
