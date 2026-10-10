# 03 | Markdown

[Português](../docs/03-markdown.md) · English

> Previous module: `02-github.md` · Next module: `04-requirements.md`

## What it is

Markdown is a simple way of writing formatted text using only keyboard symbols, without needing a visual editor like Word. You are already reading a Markdown file right now: this `.md` uses `#` for headings, `-` for lists and `**text**` for bold.

Behind the scenes, these symbols are turned into visual formatting (bigger headings, bulleted lists, bold text) whenever the file is shown somewhere that "understands" Markdown, such as GitHub, Discord (partially) or editors like VS Code.

## Why we use it

Project documentation needs three things: to be easy to write, easy to version (remember Git?) and easy to read both formatted and as plain text. Markdown meets all three:

- **Easy to write**: you do not need to learn a programming language, just a few symbols.
- **Easy to version**: it is plain text, so Git can show exactly what changed between one version and another (unlike a `.docx` file, which Git treats as a black box).
- **Easy to read**: even without formatting, a `.md` file is still readable, because the symbols used are subtle.

That is why GitHub uses Markdown as the default for `README.md` and for all project documentation.

## A real example

A poorly written README:

```
app project
does login and shows profile
run with npm start
```

The same README in Markdown, formatted:

```markdown
# Coffee & Code App

App to connect students in study groups.

## Features

- User login
- Profile view

## How to run

\`\`\`bash
npm install
npm start
\`\`\`
```

The second one, when viewed on GitHub, shows a big heading, a bulleted list and the command highlighted in a code box; all of that just with the right symbols, without clicking any formatting button.

## How to do it | the syntax

### Headings

```markdown
# Main heading (H1)
## Subheading (H2)
### Sub-subheading (H3)
```

Use only one `#` per document for the main heading. The other levels (`##`, `###`) organize sections and subsections.

### Lists

Simple (bulleted) list:

```markdown
- Item 1
- Item 2
- Item 3
```

Numbered list:

```markdown
1. First step
2. Second step
3. Third step
```

### Links

```markdown
[link text](https://example.com)
```

Example: `[Coffee & Code website](https://example.com)` becomes → [Coffee & Code website](https://example.com)

### Images

Almost the same as a link, with a `!` in front:

```markdown
![alternative text](image-path-or-url.png)
```

The "alternative text" shows up if the image does not load, and it is also used by screen readers for accessibility; always fill it in with a real description of the image.

### Inline code

To highlight a command or a short piece of code inside a sentence, use single backticks:

```markdown
Use the `git status` command to see what changed.
```

That becomes: Use the `git status` command to see what changed.

### Code blocks

For longer snippets, use three backticks before and after, and you can name the language:

````markdown
```bash
git init
git add .
git commit -m "first commit"
```
````

This creates a code box with syntax highlighting (if the language is recognized).

### Tables

```markdown
| Name | Role |
|---|---|
| Ana | Frontend |
| Bruno | Backend |
```

Which becomes:

| Name | Role |
|---|---|
| Ana | Frontend |
| Bruno | Backend |

### Checklists

```markdown
- [ ] Task not done yet
- [x] Task completed
```

On GitHub, these become real clickable boxes, widely used in Issues and Pull Requests to track progress.

## Setting up the /docs folder

Now that you know how to write Markdown, it is time to start the project's real documentation. Inside the repository you created in the previous module, create these files inside the `docs/` folder:

```
docs/
├── requisitos.md
├── historias-de-usuario.md
├── arquitetura.md
└── design-system.md
```

**Important:** you do not need to fill in all of these files now. At this stage, the goal is just to create the structure. Each of these files will be filled in as you move through the next modules:

- `requisitos.md` (requirements) → module 04
- `historias-de-usuario.md` (user stories) → also module 04
- `design-system.md` → module 07
- `arquitetura.md` (architecture) → module 08 (mainly experienced members, but everyone can start theirs)

## If you are just starting

There is no "wrong Markdown" that breaks anything important: at worst, the formatting does not look the way you expected, and you just adjust it. Feel free to try the syntax in a scratch file before using it in the project's official files. Most code editors (such as VS Code) have a preview mode (`Ctrl+Shift+V` in VS Code) that shows how the Markdown will look once formatted.

## If you already have experience

Some extra features worth knowing, especially for more robust technical documentation:

- **Quotes:** `> text` creates a quote block.
- **Horizontal rules:** `---` creates a divider line between sections (like the ones that separate the modules of this material).
- **Internal links between files:** `[see the requirements](./requisitos.md)`, essential for connecting the files inside the `/docs` folder to each other, creating navigable documentation.
- Consider adding a table of contents at the top of longer files, with links to each section.

## Practice on your own

1. Inside your repository, create the `docs/` folder (if it does not exist yet) with the four empty files listed above.
2. In the repository's main `README.md`, write a first version using at least: a heading, a list, and a link to the `docs/` folder.
3. Commit and push these changes.

**Module checklist:**

- [ ] I know how to use headings, lists, links, inline code and code blocks
- [ ] `docs/` folder created with the four files (even if empty)
- [ ] Project README.md updated with basic formatting
- [ ] Commit and push done

---

**Next module:** `04-requirements.md`: now let's define what the project really needs to do.
