#!/usr/bin/env python3
"""Download real Wendy Shay photos to replace misidentified images."""
import os
import urllib.request
import json
from pathlib import Path

DEST = Path("/home/z/my-project/public/images/wendy-shay")
DEST.mkdir(parents=True, exist_ok=True)

# Curated mapping of (source_url, local_filename) — each chosen because VLM
# captions explicitly confirm the image is Wendy Shay or her album art.
IMAGES = [
    # ---- Stage performances ----
    # Red jumpsuit on stage (CitiNewsroom — concert shot)
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c742f5e4e4e2.jpeg",
     "stage-red-jumpsuit.jpg"),
    # Sparkly dress performing for large night crowd (CitiNewsroom — concert shot)
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/6637d3e5a316.jpeg",
     "stage-sparkly-dress.jpg"),
    # Sequined dress on stage (Pulse Ghana, HYPE LENS AFRICA watermark)
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b8dffad04abb.jpg",
     "stage-sequined-dress.jpg"),
    # Gold outfit performance with dancers (YouTube — rakil tv / TGM 27)
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2d0d79b1b6ba.jpg",
     "stage-gold-outfit-dancers.jpg"),
    # Three-photo collage of female singer performing (Yen News)
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c2407e9151a7.jpeg",
     "stage-perf-collage.jpg"),

    # ---- Portraits ----
    # Blonde dreadlocks brown off-shoulder top (Graphic Online — official-looking portrait)
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/485756ff563d.jpg",
     "portrait-blonde-dreads-brown.jpg"),
    # Black fur top dreadlocks (Ghanamusicblog)
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1f5211bd834b.jpg",
     "portrait-black-fur-top.jpg"),
    # Blonde dreadlocks gold choker outdoor (Get The Artiste)
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/754911ca364e.jpg",
     "portrait-blonde-outdoor.jpg"),
    # Strapless green dress on brown bg (LagosJump Radio)
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d994647a4005.jpg",
     "portrait-green-dress.jpg"),
    # Embellished pink gown blonde dreadlocks (Twitter)
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/264bebd19662.jpg",
     "portrait-pink-gown.jpg"),
    # Yellow ruffled blouse graffiti wall (Ghana Web / AfroFusion Spot)
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e8b146686572.jpg",
     "portrait-yellow-blouse.jpg"),
    # Gold embellished gown by window (Twitter)
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7591cfe3631e.jpg",
     "portrait-gold-gown-window.jpg"),
    # B&W portrait with bucket hat and dreadlocks (Ghana News Agency)
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/22ba9c1f562e.jpg",
     "portrait-bw-bucket-hat.jpg"),
    # Driving a car with blonde dreadlocks (YouTube — Uber Driver music video)
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f12c8c6da38a.jpg",
     "uber-driver-driving.jpg"),

    # ---- Red carpet / event ----
    # Black gown in hallway with orange carpet (Pulse Ghana)
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d48e7f8e8bfb.jpg",
     "redcarpet-black-gown.jpg"),
    # Ornate golden dress with blue veil on waterfront (CitiNewsroom)
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/73a169760bc8.jpg",
     "redcarpet-golden-veil.jpg"),

    # ---- Album / single artwork (verified) ----
    # Survivor single cover (Deezer — WENDY SHAY SURVIVOR)
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d689dde6a31f.jpg",
     "cover-survivor.jpg"),
    # Enigma EP album cover (YouTube — Wendy Shay Enigma)
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/39777e54cd92.jpg",
     "cover-enigma.jpg"),
    # H.I.T Haters In Tears featuring Shatta Wale (Deezer)
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/42199fd7bc62.jpg",
     "cover-hit-shatta-wale.jpg"),

    # ---- Shay Concert promo ----
    # SHAY CONCERT 2025 promo poster — Westhills Mall, Nov 22 (YouTube)
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/64939d39dbf7.jpg",
     "shay-concert-2025-poster.jpg"),
    # SHAY CONCERT 2023 collage with HYPELENS AFRICA (Celebrities Ho Konkonsa)
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/6fcccd87cec4.webp",
     "shay-concert-2023-collage.webp"),
]


def download(url: str, dest: Path) -> bool:
    try:
        req = urllib.request.Request(
            url, headers={"User-Agent": "Mozilla/5.0 (compatible; wendy-archive/1.0)"}
        )
        with urllib.request.urlopen(req, timeout=30) as r:
            data = r.read()
        dest.write_bytes(data)
        print(f"✓ {dest.name}: {len(data)} bytes")
        return True
    except Exception as e:
        print(f"✗ {dest.name}: {e}")
        return False


def main() -> int:
    ok = 0
    for url, name in IMAGES:
        dest = DEST / name
        if download(url, dest):
            ok += 1
    print(f"\n{ok}/{len(IMAGES)} downloaded successfully")
    return 0 if ok == len(IMAGES) else 1


if __name__ == "__main__":
    raise SystemExit(main())
