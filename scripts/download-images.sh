#!/bin/bash
# Download curated Shatta Wale images and save them with semantic names.
set -e
DEST=/home/z/my-project/public/images/shatta-wale
mkdir -p "$DEST"

# Format: URL  filename  description
declare -a IMAGES=(
  # Hero — powerful wide stage shot
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2826a5640eb8.jpg|hero-stage.jpg|Hero performance"
  # Journey Ch1 — Before the Name (Accra context)
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/100089d23110.png|journey-01-accra.png|Accra Ghana scene"
  # Journey Ch2 — Bandana / first dream (early career)
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4538465c5fbf.jpg|journey-02-bandana.jpg|Early career"
  # Journey Ch3 — Breakthrough Dancehall King
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/171de6718724.jpg|journey-03-breakthrough.jpg|Dancehall King era"
  # Journey Ch4 — Reinvention Kakai
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/934ccad406d4.jpg|journey-04-reinvention.jpg|Reinvention era portrait"
  # Journey Ch5 — Beyoncé Lion King Already
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/69a2d5b79655.jpg|journey-05-beyonce.jpg|Beyoncé collaboration"
  # Journey Ch6 — Controversies (press shot)
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e1111920c907.jpg|journey-06-controversies.jpg|Press shot"
  # Journey Ch7 — The Movement / SM fans
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e6a9e95efa09.jpg|journey-07-movement.jpg|SM Movement fans"
  # Journey Ch8 — Today
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/295781d5b424.jpg|journey-08-today.jpg|Recent photo"
  # Moments carousel — 8 immersive shots
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/fe4710ff8b7f.jpg|moment-01.jpg|Moment 1"
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/30ba77075df9.jpg|moment-02.jpg|Moment 2"
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f2d711bc6f50.jpg|moment-03.jpg|Moment 3"
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4ee41674f7b0.jpg|moment-04.jpg|Moment 4"
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/631146a761b0.jpg|moment-05.jpg|Moment 5"
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/54df192cb53e.jpg|moment-06.jpg|Moment 6"
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7be1ae303911.jpg|moment-07.jpg|Moment 7"
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c8195100dda4.jpg|moment-08.jpg|Moment 8"
  # BeyondHeadlines — intimate portrait
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/83de3e60ed15.png|beyond-headlines.png|Beyond headlines portrait"
  # FutureMessage — reflective wide shot
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/9090904e302f.jpg|future-message.jpg|Future reflective"
  # Additional context images
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/bf6eb7a8b0a1.jpg|accra-music-scene.jpg|Accra music scene"
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b186cf3a230a.jpeg|movement-fans.jpeg|Movement fans"
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1a99a198bfca.png|beyonce-collab.png|Beyoncé collab context"
)

count=0
total=${#IMAGES[@]}
for line in "${IMAGES[@]}"; do
  IFS='|' read -r url filename desc <<< "$line"
  count=$((count+1))
  echo "[$count/$total] Downloading $filename ($desc)..."
  curl -sSL -o "$DEST/$filename" "$url" || echo "  WARN: failed $filename"
done

echo ""
echo "=== Downloaded files ==="
ls -la "$DEST"
