#!/usr/bin/env python3
"""Generate illustrative Obsidian UI screenshots for the blog post."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

OUT_DIR = Path(__file__).resolve().parent.parent / "src/content/posts/how-i-structure-obsidian"
OUT_DIR.mkdir(parents=True, exist_ok=True)

try:
    FONT = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 14)
    FONT_BOLD = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 14)
    FONT_H1 = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 20)
    FONT_H2 = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 15)
    FONT_SM = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 11)
    FONT_XS = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 13)
except OSError:
    FONT = ImageFont.load_default()
    FONT_BOLD = FONT
    FONT_H1 = FONT
    FONT_H2 = FONT
    FONT_SM = FONT
    FONT_XS = FONT


def round_rect(draw, xy, radius, fill):
    x0, y0, x1, y1 = xy
    draw.rounded_rectangle([x0, y0, x1, y1], radius=radius, fill=fill)


def draw_window_chrome(draw, w, h, title, dark=False):
    bg = "#1a1a1a" if dark else "#f0f0f0"
    bar = "#252525" if dark else "#e8e8e8"
    round_rect(draw, (0, 0, w, h), 12, bg)
    draw.rectangle([0, 0, w, 36], fill=bar)
    for i, color in enumerate(["#ff5f57", "#febc2e", "#28c840"]):
        draw.ellipse([16 + i * 18 - 6, 12, 16 + i * 18 + 6, 24], fill=color)
    draw.text((w // 2, 12), title, fill="#999" if dark else "#666", font=FONT_SM, anchor="mt")


def draw_sidebar(draw, x, y, w, h, items, active, dark):
    bg = "#1e1e1e" if dark else "#fafafa"
    draw.rectangle([x, y, x + w, y + h], fill=bg)
    draw.text((x + 14, y + 10), "NOTEBOOKS", fill="#888", font=FONT_SM)
    for i, item in enumerate(items):
        iy = y + 38 + i * 30
        is_active = item == active
        if is_active:
            round_rect(draw, (x + 8, iy - 16, x + w - 8, iy + 10), 6, "#2d2d2d" if dark else "#ececec")
        color = ("#e8e8e8" if dark else "#111") if is_active else ("#b0b0b0" if dark else "#555")
        draw.text((x + 16, iy - 4), item, fill=color, font=FONT_BOLD if is_active else FONT)


def draw_note_content(draw, x, y, w, h, lines, dark):
    bg = "#1a1a1a" if dark else "#ffffff"
    draw.rectangle([x, y, x + w, y + h], fill=bg)
    cy = y + 36
    colors = {
        "todo": "#888",
        "done": "#4caf50",
        "forward": "#2196f3",
        "schedule": "#9c27b0",
        "cancel": "#f44336",
        "important": "#ff9800",
        "question": "#00bcd4",
        "star": "#ffc107",
        "incomplete": "#607d8b",
    }
    icons = {
        "todo": "☐",
        "done": "✓",
        "forward": "→",
        "schedule": "◷",
        "cancel": "✕",
        "important": "!",
        "question": "?",
        "star": "★",
        "incomplete": "/",
    }
    for line in lines:
        if line["type"] == "h1":
            draw.text((x + 28, cy), line["text"], fill="#e8e8e8" if dark else "#1a1a1a", font=FONT_H1)
            cy += 36
        elif line["type"] == "h2":
            draw.text((x + 28, cy), line["text"], fill="#e8e8e8" if dark else "#1a1a1a", font=FONT_H2)
            cy += 28
        elif line["type"] == "checkbox":
            style = line["style"]
            draw.text((x + 28, cy), f"{icons[style]}  {line['text']}", fill=colors[style], font=FONT)
            cy += 24
        elif line["type"] == "link":
            draw.text((x + 28, cy), f"[[{line['text']}]]", fill="#7eb8da" if dark else "#2563eb", font=FONT)
            cy += 24
        elif line["type"] == "insight":
            draw.text((x + 28, cy), f"★  {line['text']}", fill="#ffc107", font=FONT)
            cy += 24
        else:
            draw.text((x + 28, cy), line["text"], fill="#777" if dark else "#999", font=FONT_XS)
            cy += 22


def draw_note_list(draw, x, y, w, h, notes, active, dark):
    bg = "#222" if dark else "#f5f5f5"
    draw.rectangle([x, y, x + w, y + h], fill=bg)
    draw.line([(x + w, y), (x + w, y + h)], fill="#333" if dark else "#e0e0e0", width=1)
    draw.text((x + 14, y + 10), "NOTES", fill="#888", font=FONT_SM)
    for i, note in enumerate(notes):
        ny = y + 38 + i * 52
        is_active = note["title"] == active
        if is_active:
            round_rect(draw, (x + 8, ny - 14, x + w - 8, ny + 30), 6, "#2a3a4a" if dark else "#e3edf7")
        title_color = ("#e8e8e8" if dark else "#111") if is_active else ("#aaa" if dark else "#555")
        draw.text((x + 14, ny - 2), note["title"], fill=title_color, font=FONT_BOLD if is_active else FONT)
        draw.text((x + 14, ny + 14), note["preview"], fill="#666", font=FONT_SM)


def save(name, w, h, render):
    img = Image.new("RGB", (w, h), "#ffffff")
    draw = ImageDraw.Draw(img)
    render(draw)
    path = OUT_DIR / name
    img.save(path, "PNG", optimize=True)
    print(f"Wrote {path}")


save("minimal-light.png", 900, 520, lambda d: (
    draw_window_chrome(d, 900, 520, "Obsidian — Minimal (light)"),
    draw_sidebar(d, 0, 36, 200, 484, ["Inbox", "Daily Notes", "Projects", "Areas", "Resources"], "Projects", False),
    draw_note_content(d, 200, 36, 700, 484, [
        {"type": "h1", "text": "Blog post series"},
        {"type": "h2", "text": "Overview"},
        {"type": "text", "text": "A practical note-taking setup that scales."},
        {"type": "h2", "text": "Tasks"},
        {"type": "checkbox", "style": "important", "text": "Write Obsidian structure post"},
        {"type": "checkbox", "style": "done", "text": "Research Minimal theme features"},
        {"type": "checkbox", "style": "forward", "text": "Schedule social promotion"},
    ], False),
))

save("minimal-dark.png", 900, 520, lambda d: (
    draw_window_chrome(d, 900, 520, "Obsidian — Minimal (dark)", True),
    draw_sidebar(d, 0, 36, 200, 484, ["Inbox", "Daily Notes", "Projects", "Areas", "Resources"], "Projects", True),
    draw_note_content(d, 200, 36, 700, 484, [
        {"type": "h1", "text": "Blog post series"},
        {"type": "h2", "text": "Overview"},
        {"type": "text", "text": "A practical note-taking setup that scales."},
        {"type": "h2", "text": "Tasks"},
        {"type": "checkbox", "style": "important", "text": "Write Obsidian structure post"},
        {"type": "checkbox", "style": "done", "text": "Research Minimal theme features"},
        {"type": "checkbox", "style": "forward", "text": "Schedule social promotion"},
    ], True),
))

save("notebook-navigator.png", 960, 540, lambda d: (
    draw_window_chrome(d, 960, 540, "Obsidian — Notebook Navigator"),
    draw_sidebar(d, 0, 36, 180, 504, ["Inbox", "Daily Notes", "Projects", "Areas", "Resources", "Archive"], "Projects", False),
    draw_note_list(d, 180, 36, 260, 504, [
        {"title": "Blog post series", "preview": "Write Obsidian structure post…"},
        {"title": "Site redesign", "preview": "Scroll progress + favicon…"},
        {"title": "React app structure", "preview": "Folder layout for components…"},
        {"title": "Weekly review", "preview": "Sunday planning template…"},
    ], "Blog post series", False),
    draw_note_content(d, 440, 36, 520, 504, [
        {"type": "h1", "text": "Blog post series"},
        {"type": "h2", "text": "Resources"},
        {"type": "link", "text": "Article — Note-taking best practices"},
        {"type": "link", "text": "Book Notes — Building a Second Brain"},
        {"type": "h2", "text": "Notes"},
        {"type": "insight", "text": "Structure should serve thinking, not constrain it"},
    ], False),
))

save("checkbox-styles.png", 720, 480, lambda d: (
    draw_window_chrome(d, 720, 480, "Alternate checkboxes — Minimal theme"),
    draw_note_content(d, 0, 36, 720, 444, [
        {"type": "h1", "text": "Checkbox legend"},
        {"type": "text", "text": "Task states I use in project notes:"},
        {"type": "checkbox", "style": "todo", "text": "[ ]  Regular task"},
        {"type": "checkbox", "style": "done", "text": "[x]  Completed"},
        {"type": "checkbox", "style": "incomplete", "text": "[/]  In progress"},
        {"type": "checkbox", "style": "forward", "text": "[>]  Forwarded"},
        {"type": "checkbox", "style": "schedule", "text": "[<]  Scheduled"},
        {"type": "checkbox", "style": "cancel", "text": "[-]  Cancelled"},
        {"type": "checkbox", "style": "important", "text": "[!]  Important"},
        {"type": "checkbox", "style": "question", "text": "[?]  Question"},
        {"type": "checkbox", "style": "star", "text": "[*]  Key insight"},
    ], False),
))
