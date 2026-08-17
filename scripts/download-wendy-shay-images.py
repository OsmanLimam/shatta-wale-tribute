#!/usr/bin/env python3
"""Download all Wendy Shay image-search results and map them to specific project paths."""

import json
import os
import sys
import urllib.request
from pathlib import Path

SEARCH_DIR = Path("/home/z/my-project/scripts/wendy-shay-search")
PUBLIC_DIR = Path("/home/z/my-project/public/images/wendy-shay")
COLLAB_DIR = Path("/home/z/my-project/public/images/collaborators")

# Ensure target directories exist
for d in [PUBLIC_DIR, COLLAB_DIR]:
    d.mkdir(parents=True, exist_ok=True)

# Load all search results
search_results = {}
for f in SEARCH_DIR.glob("*.json"):
    name = f.stem
    with open(f) as fh:
        data = json.load(fh)
    search_results[name] = data.get("results", [])

# Mapping: target_path -> (search_key, result_index)
# Picked based on captions reviewed earlier.
MAPPING = [
    # Hero — woman in sparkly dress performing on stage (CitiNewsroom, 762x1080)
    (PUBLIC_DIR / "hero-stage.jpg",        "hero",       0),
    # Journey 1 (Accra) — accra image 0
    (PUBLIC_DIR / "journey-01-accra.jpg",  "accra",      0),
    # Journey 2 (Return to Ghana / signing) — portrait 8 colorful headwrap
    (PUBLIC_DIR / "journey-02-return.jpg", "portrait",   8),
    # Journey 3 (Uber Driver breakout) — hero image 1 woman in gold outfit singing
    (PUBLIC_DIR / "journey-03-uber-driver.jpg", "hero",   1),
    # Journey 4 (Bedroom Commando era) — hero image 3 red dress crowd
    (PUBLIC_DIR / "journey-04-commando.jpg",   "hero",   2),
    # Journey 5 (Awards recognition) — awards 0
    (PUBLIC_DIR / "journey-05-awards.jpg",     "awards", 0),
    # Journey 6 (Surviving the industry / controversies) — empowerment 0
    (PUBLIC_DIR / "journey-06-controversies.jpg", "empowerment", 0),
    # Journey 7 (Survivor era) — portrait 5 woman in gold embellished gown (800x1199)
    (PUBLIC_DIR / "journey-07-survivor.jpg", "portrait", 5),
    # Journey 8 (Today) — hero image 5 female performer red outfit outdoor
    (PUBLIC_DIR / "journey-08-today.jpg",    "hero",     5),
    # Moments 1-14 — use a mix
    (PUBLIC_DIR / "moment-01.jpg", "hero",     3),   # two women on stage
    (PUBLIC_DIR / "moment-02.jpg", "portrait", 0),   # stylish woman black blazer red highlights
    (PUBLIC_DIR / "moment-03.jpg", "hero",     6),   # collage Wendy Shay stage
    (PUBLIC_DIR / "moment-04.jpg", "awards",   1),
    (PUBLIC_DIR / "moment-05.jpg", "hero",     7),   # female singer gold outfit stage dancers
    (PUBLIC_DIR / "moment-06.jpg", "portrait", 1),   # leopard-print bodysuit
    (PUBLIC_DIR / "moment-07.jpg", "concert",  0),
    (PUBLIC_DIR / "moment-08.jpg", "awards",   2),
    (PUBLIC_DIR / "moment-09.jpg", "portrait", 2),   # blonde buns peach background
    (PUBLIC_DIR / "moment-10.jpg", "concert",  1),
    (PUBLIC_DIR / "moment-11.jpg", "hero",     8),   # red dress SO background
    (PUBLIC_DIR / "moment-12.jpg", "portrait", 3),   # blonde hair brown dress
    (PUBLIC_DIR / "moment-13.jpg", "concert",  2),
    (PUBLIC_DIR / "moment-14.jpg", "awards",   3),
    # Beyond headlines — empowerment 1
    (PUBLIC_DIR / "beyond-headlines.jpg", "empowerment", 1),
    # Future message — empowerment 2
    (PUBLIC_DIR / "future-message.jpg", "empowerment", 2),
    # Concert/atmospheric shots
    (PUBLIC_DIR / "concert-crowd.jpg",      "concert",  3),
    (PUBLIC_DIR / "concert-stage.jpg",      "concert",  4),
    (PUBLIC_DIR / "concert-performer.jpg",  "concert",  5),
    (PUBLIC_DIR / "movement-fans.jpg",      "concert",  6),
    (PUBLIC_DIR / "concert-collage.jpg",    "concert",  7),
    (PUBLIC_DIR / "accra-music-scene.jpg",   "accra",    1),
    # Collaborator: Bullet (RuffTown)
    (COLLAB_DIR / "bullet.jpg", "bullet", 0),
    # Beyoncé collab analogy image (uses award)
    (PUBLIC_DIR / "beyonce-collab.png", "awards", 4),
    # Shattafest equivalent — Shay On You concert
    (PUBLIC_DIR / "shay-on-you-concert.png", "hero", 9),
]

def download(url: str, target: Path) -> bool:
    """Download URL to target. Returns True on success."""
    try:
        req = urllib.request.Request(
            url,
            headers={"User-Agent": "Mozilla/5.0 (compatible; tribute-site-builder/1.0)"}
        )
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
        target.write_bytes(data)
        # Convert extension if needed — file extension from target name
        ext = target.suffix.lower()
        # Verify it's a real image (basic magic byte check)
        if data[:4] == b'\xff\xd8\xff\xe0' or data[:4] == b'\xff\xd8\xff\xe1':
            # JPEG
            if ext not in ['.jpg', '.jpeg']:
                # rename to .jpg
                pass  # keep target name; browser will detect via header
        elif data[:4] == b'\x89PNG':
            if ext == '.png':
                pass
        return True
    except Exception as e:
        print(f"  ! Failed: {e}", file=sys.stderr)
        return False


def main():
    success_count = 0
    fail_count = 0
    for target_path, search_key, idx in MAPPING:
        results = search_results.get(search_key, [])
        if idx >= len(results):
            print(f"SKIP {target_path.name}: index {idx} out of range for {search_key}")
            fail_count += 1
            continue
        url = results[idx].get("original_url")
        if not url:
            print(f"SKIP {target_path.name}: no URL")
            fail_count += 1
            continue
        print(f"↓ {target_path.relative_to('/home/z/my-project/public')}")
        if download(url, target_path):
            size_kb = target_path.stat().st_size // 1024
            print(f"  ✓ {size_kb} KB")
            success_count += 1
        else:
            fail_count += 1

    print(f"\n=== DONE: {success_count} downloaded, {fail_count} failed ===")


if __name__ == "__main__":
    main()
