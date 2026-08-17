#!/usr/bin/env python3
"""
Generate a 1200x630 JPG OG image for the Shatta Wale Living Legacy site.

Design language mirrors the editorial site:
- Deep black background (#0a0a0a)
- Warm gold accent (#c9a24b)
- Ivory typography (#f5f1e8)
- Serif display type for the name, mono-caps for the eyebrow
- Hero photo as a tinted backdrop for visual richness
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance
import os

OUT_PATH = "/home/z/my-project/public/og-image.jpg"
HERO_PHOTO = "/home/z/my-project/public/images/shatta-wale/hero-stage.jpg"

# Editorial palette
INK = (10, 10, 10)
GOLD = (201, 162, 75)
GOLD_DIM = (140, 113, 53)
IVORY = (245, 241, 232)
IVORY_FADE = (180, 175, 165)

W, H = 1200, 630


def load_font(path, size):
    try:
        return ImageFont.truetype(path, size)
    except Exception:
        return ImageFont.load_default()


def main():
    # --- Canvas ---
    canvas = Image.new("RGB", (W, H), INK)

    # --- Hero photo as backdrop (dimmed + blurred) ---
    if os.path.exists(HERO_PHOTO):
        hero = Image.open(HERO_PHOTO).convert("RGB")
        # cover-fit
        hero_ratio = hero.width / hero.height
        target_ratio = W / H
        if hero_ratio > target_ratio:
            new_h = H
            new_w = int(H * hero_ratio)
            hero = hero.resize((new_w, new_h), Image.LANCZOS)
            left = (new_w - W) // 2
            hero = hero.crop((left, 0, left + W, H))
        else:
            new_w = W
            new_h = int(W / hero_ratio)
            hero = hero.resize((new_w, new_h), Image.LANCZOS)
            top = (new_h - H) // 2
            hero = hero.crop((0, top, W, top + H))

        # Subtle blur to push into background
        hero = hero.filter(ImageFilter.GaussianBlur(radius=8))
        # Darken heavily
        enhancer = ImageEnhance.Brightness(hero)
        hero = enhancer.enhance(0.35)
        canvas.paste(hero, (0, 0))

    # --- Gradient overlays for text legibility ---
    grad = Image.new("L", (W, H), 0)
    gd = ImageDraw.Draw(grad)
    # Left-to-right gradient: darker on left for text
    for x in range(W):
        # Strong on left, fade to mid on right
        alpha = int(255 * (1.0 - (x / W) * 0.6))
        gd.line([(x, 0), (x, H)], fill=alpha)
    black_overlay = Image.new("RGB", (W, H), INK)
    canvas = Image.composite(black_overlay, canvas, grad)

    # Bottom vignette
    bottom_grad = Image.new("L", (W, H), 0)
    bd = ImageDraw.Draw(bottom_grad)
    for y in range(H):
        if y > H * 0.65:
            alpha = int(255 * ((y - H * 0.65) / (H * 0.35)) * 0.85)
            bd.line([(0, y), (W, y)], fill=alpha)
    canvas = Image.composite(Image.new("RGB", (W, H), INK), canvas, bottom_grad)

    draw = ImageDraw.Draw(canvas)

    # --- Fonts ---
    # Display serif (Liberation Serif as Playfair substitute)
    serif_path = "/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf"
    serif_italic = "/usr/share/fonts/truetype/liberation/LiberationSerif-Italic.ttf"
    mono_path = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf"

    font_eyebrow = load_font(mono_path, 18)
    font_name = load_font(serif_path, 124)
    font_tagline = load_font(serif_italic, 32)
    font_meta = load_font(mono_path, 14)

    # --- Layout ---
    left_margin = 80
    right_margin = 80

    # Eyebrow (top-left, gold, mono-caps style)
    eyebrow_y = 70
    eyebrow_text = "A LIVING LEGACY EXPERIENCE"
    draw.text((left_margin, eyebrow_y), eyebrow_text, fill=GOLD, font=font_eyebrow)

    # Gold accent line under eyebrow
    draw.line([(left_margin, eyebrow_y + 28), (left_margin + 80, eyebrow_y + 28)], fill=GOLD, width=2)

    # Main name (huge serif)
    name_y = 180
    draw.text((left_margin, name_y), "SHATTA", fill=IVORY, font=font_name)
    draw.text((left_margin, name_y + 130), "WALE", fill=GOLD, font=font_name)

    # Tagline (italic serif, beneath name)
    tagline_y = name_y + 290
    draw.text((left_margin, tagline_y), "Before History Writes Your Story.", fill=IVORY_FADE, font=font_tagline)

    # Footer meta (bottom-left, mono-caps)
    meta_y = H - 60
    draw.text((left_margin, meta_y), "AN INDEPENDENT DIGITAL ARCHIVE", fill=GOLD_DIM, font=font_meta)
    draw.text((left_margin, meta_y + 22), "CREATED WHILE THE STORY IS STILL BEING WRITTEN", fill=IVORY_FADE, font=font_meta)

    # Right side: gold accent diamond
    cx, cy = W - 100, H // 2
    diamond_size = 16
    draw.polygon(
        [
            (cx, cy - diamond_size),
            (cx + diamond_size, cy),
            (cx, cy + diamond_size),
            (cx - diamond_size, cy),
        ],
        outline=GOLD,
    )
    # Vertical hairlines flanking the diamond
    draw.line([(cx, 0), (cx, cy - diamond_size - 8)], fill=GOLD_DIM, width=1)
    draw.line([(cx, cy + diamond_size + 8), (cx, H)], fill=GOLD_DIM, width=1)

    # Top hairline gold accent (full width, faint)
    draw.line([(0, 4), (W, 4)], fill=GOLD_DIM, width=1)
    draw.line([(0, H - 4), (W, H - 4)], fill=GOLD_DIM, width=1)

    # --- Save ---
    canvas.save(OUT_PATH, "JPEG", quality=88, optimize=True, progressive=True)
    print(f"Saved OG image: {OUT_PATH}")
    print(f"Size: {canvas.size}")


if __name__ == "__main__":
    main()
