# 06 | Figma

[Português](../docs/06-figma.md) · English

> Previous module: `05-ux-ui.md` · Next module: `07-design-system.md`

This is a hands-on guide for people who have never opened Figma. The goal is **not** to create a perfect interface; it is to produce a clickable prototype that represents the flow you already mapped in the previous module.

## What it is

Figma is an interface design tool that runs right in the browser (no installation needed). In it, you draw screens, organize elements and can connect those screens to simulate navigating a real app or website, without writing a single line of code.

## Why we use it

Before coding an interface, it is much faster and cheaper to test it visually. If something does not make sense in the flow, it is much easier to notice (and fix) in a Figma prototype than after you have already written code for that screen.

## Creating your account and your first file

1. Go to [figma.com](https://figma.com) and create a free account.
2. On the home panel, click **"Design file"** (or the equivalent button to create a new design file).
3. You will land on a blank screen; that is your workspace (called the **canvas**).

Rename the file (click the name at the top) to something like `Coffee & Code - Prototype`.

## Main concepts and tools

### Frames

A **frame** is the "outline" of a screen: think of it as the shape of a phone or a web page, where everything you draw will sit inside.

**How to create one:** press `F` (Frame shortcut) and pick a preset size, such as "iPhone 14" or "Desktop", in the right panel. Each frame you create will represent one screen of your prototype.

### Text

**How to create it:** press `T`, click on the frame and type. In the right panel you adjust font, size, color and alignment.

Use text for headings, button labels, descriptions and any written content on the screen.

### Shapes

**How to create them:** press `R` for rectangle, `O` for ellipse (circle/oval). Shapes are the base for building buttons, cards, simple icons and any visual block.

You can round the corners of a rectangle by adjusting the "Corner radius" in the right panel; that is how you create the look of a modern button, for example.

### Components (introduction)

A **component** is a reusable element: for example, a button you will use on several screens. Instead of redrawing the button from scratch on every screen, you create it once as a component and reuse it.

**How to create one:** select the element (or group of elements, such as a rectangle + text forming a button) and click the diamond icon (or `Ctrl/Cmd + Alt + K`) to turn it into a component. Copying that component creates an **instance**; if you edit the original component, all instances are updated automatically.

This is extremely useful for keeping visual consistency (remember the previous module?) without repeated work.

### Auto layout (introduction)

**Auto layout** makes elements arrange themselves automatically, in a row (horizontal) or column (vertical), with consistent spacing between them, adjusting automatically when the content changes size.

**How to use it:** select the elements you want to arrange and press `Shift + A`. This is especially useful, for example, for a list of items (like the list of study groups) where each item should be equally spaced from the others, without you having to align each one by hand.

**If you are just starting:** do not worry about mastering Auto Layout this week; just know that it exists and what it solves. We will come back to this topic in more depth later.

### Styles

Styles let you save a color, font or effect to reuse across the whole file: if you change the style, everything that uses it changes along with it. This connects directly to the next module, Design System.

## How to do it: creating the screens of your flow

Take your notes from the previous module (the flow with the listed screens) and follow along:

1. **Create a frame for each screen** of your flow (`F`, pick a size, for example "iPhone 14").
2. **Name each frame** clearly (double-click the frame name in the layers list on the left), for example: "01 - Search", "02 - Group list", "03 - Group details".
3. **Draw the main elements of each screen**, without worrying about refined styling yet: heading, fields, buttons, lists; the essentials to represent what that screen does.
4. **Use real text**, based on the requirements and user stories you already wrote; avoid "lorem ipsum" or generic text whenever possible. That helps you check whether the content makes sense, not just the layout.

## Connecting the screens | Prototype mode

Once the screens are drawn, it is time to make them clickable:

1. At the top of Figma, switch from **Design** mode to **Prototype** mode.
2. Select a clickable element (for example, a button) on the starting screen.
3. A small handle will appear on the element's edge: drag that handle to the destination frame (the next screen in the flow).
4. Set up the interaction: usually "On click" → "Navigate to" the chosen screen.

Repeat this for every connection in your flow, following exactly the path you mapped in the UX/UI module.

## Testing the prototype

With at least one connection made, click the **Play** button (▶) in the top right corner. This opens a preview where you can click on the connected elements and "navigate" between screens as if it were the real app.

## Sharing the project

Click **Share** (top right corner). You can:

- Copy the file link and share it with classmates or with the Coffee & Code team.
- Adjust the permission (view or edit) for whoever receives the link.

Keep that link: it is part of the week's deliverable.

## If you are just starting

You do not need to create icons from scratch or worry about pixel-perfect work. Use rectangles and simple text to represent the elements: this week's goal is **structure and flow**, not visual polish. Visual refinement comes later, including in the next module.

## If you already have experience

Extra challenges for you:

- Use **components** for at least one repeated element (for example, a group card that appears several times in the list).
- Try **Auto Layout** on at least one list or group of buttons.
- Create at least one state variation (for example: what does the list screen look like when no group is found?).
- Organize your layers with clear names; avoid leaving elements with generic names like "Rectangle 34".

## Practice on your own | activity

1. Create a Figma file with a frame for each screen of your flow (mapped in module 05).
2. Draw the main elements of each screen, using real text based on your requirements.
3. Connect the screens in Prototype mode, following the defined flow.
4. Test the navigation using Play mode.
5. Share the file link (set the permission to "anyone with the link can view").
6. Add that link somewhere in your repository. Suggestion: in the main `README.md`, in a "Prototype" section.

**Module checklist:**

- [ ] Figma account created
- [ ] One frame created for each screen of the main flow
- [ ] Main elements drawn on each screen, with real text
- [ ] Screens connected in Prototype mode
- [ ] Prototype tested in Play mode
- [ ] Shareable link generated and saved in the repository
- [ ] Experienced members: at least one component and one use of Auto Layout

---

**Next module:** `07-design-system.md`: now let's make these screens visually consistent.
