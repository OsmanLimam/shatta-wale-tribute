#!/bin/bash
# Fetch collaborator images via z-ai image-search and download to public/images/collaborators/
# Sequential to avoid 429 rate limits.
set -e

OUT=/home/z/my-project/public/images/collaborators
mkdir -p "$OUT"
TMP=/tmp/img-search
mkdir -p "$TMP"

fetch_one() {
  local name="$1"
  local query="$2"
  local outfile="$TMP/${name}.json"
  if [ -f "$outfile" ] && grep -q '"success": true' "$outfile"; then
    echo "  skip ${name} (cached)"
    return
  fi
  echo "  searching ${name}..."
  z-ai image-search -q "${query}" --count 5 --gl us --no-rank > "$outfile" 2>&1
  sleep 4
}

# Parse JSON results and download first URL for each
download_first() {
  local name="$1"
  local outfile="$TMP/${name}.json"
  local url
  url=$(grep -oE 'https://[^"]+\.(jpg|jpeg|png)' "$outfile" | head -1)
  if [ -z "$url" ]; then
    echo "  ERROR: no URL found in $outfile"
    return 1
  fi
  # Determine extension
  local ext="${url##*.}"
  case "$ext" in
    jpg|jpeg|png) ;;
    *) ext="jpg" ;;
  esac
  local dest
  case "$name" in
    wendy-shay) dest="$OUT/wendy-shay.jpg" ;;
    burna-boy) dest="$OUT/burna-boy.jpg" ;;
    shaggy) dest="$OUT/shaggy.jpg" ;;
    davido) dest="$OUT/davido.jpg" ;;
    *) dest="$OUT/${name}.${ext}" ;;
  esac
  echo "  downloading $url -> $dest"
  curl -sSL -o "$dest" "$url"
  ls -la "$dest"
}

echo "=== Searching ==="
fetch_one medikal "Medikal Ghanaian rapper portrait photo single person stage performance"
fetch_one efya "Efya Ghanaian singer songstress portrait photo"
fetch_one mugeez "Mugeez R2Bees Ghanaian afrobeats singer portrait photo"
fetch_one wendy-shay "Wendy Shay Ghanaian female singer portrait photo"
fetch_one burna-boy "Burna Boy Nigerian afrobeats singer portrait photo"
fetch_one shaggy "Shaggy Jamaican dancehall reggae singer portrait photo"
fetch_one davido "Davido Nigerian afrobeats singer portrait photo"

echo ""
echo "=== Downloading ==="
download_first medikal
download_first efya
download_first mugeez
download_first wendy-shay
download_first burna-boy
download_first shaggy
download_first davido

echo ""
echo "=== Final ==="
ls -la "$OUT"
