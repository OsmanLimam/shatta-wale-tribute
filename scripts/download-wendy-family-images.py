#!/usr/bin/env python3
"""Download Wendy Shay kids and mom images for the Family section."""
import urllib.request
from pathlib import Path

DEST = Path("/home/z/my-project/public/images/wendy-shay")
DEST.mkdir(parents=True, exist_ok=True)

# Curated from the kids + mom search results — verified captions explicitly
# mention "Korkor Shay", "Tracy Shay", "Wendy Shay mother", or show
# Wendy Shay with children / older female family member.
IMAGES = [
    # Collage with text: "Korkor Shay story" + "I thank you for the love
    # you've shown my daughter, God bless you." — explicit Korkor reference
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/64a87f490297.jpg",
     "korkor-shay-story.jpg"),
    # Collage of woman and girl with text: "WENDY SHAY, TRACY, Ghana flag, heart"
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/73b5e502db39.jpg",
     "tracy-shay-collage.jpg"),
    # "Tracy Shay - Biography" promotional image with woman, child, inset
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/910851c318e4.jpg",
     "tracy-shay-bio.jpg"),
    # Collage of woman and young girl at playground, bench, kiosk
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/90db0ac7b5f4.jpeg",
     "wendy-with-estranged-daughter.jpg"),
    # Collage of woman and girl dancing and hugging in a store
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/df862bdb40bb.jpeg",
     "wendy-shay-with-estranged-daughter.jpg"),
    # Collage of multiple photos showing woman and girl on stage and posing
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5a4649bcca50.jpg",
     "shay-family-on-stage.jpg"),
    # Mom: Two smiling women pose for a selfie — likely Wendy and her mother
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b104874ed3e8.jpeg",
     "wendy-shay-mom-selfie.jpg"),
    # Mom: Collage of a woman with dreadlocks in different outfits and an
    # inset photo of another woman (older)
    ("https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/79eb32f54e33.jpeg",
     "wendy-shay-mom-collage.jpg"),
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
