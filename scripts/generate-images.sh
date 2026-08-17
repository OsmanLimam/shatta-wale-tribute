#!/bin/bash
# generate-images.sh
# Generates an original cinematic image set for the Shatta Wale Living Legacy Experience.
#
# Design principles:
#   - Atmospheric, abstract, editorial — NO photorealistic likenesses of real people.
#   - Deep black + warm metallic gold + ivory palette to match design tokens.
#   - Each image clearly evokes the mood of a chapter/moment, not a specific person.
#   - All images are original AI artwork, attributed as "Artistic interpretation"
#     in the UI per the project's accuracy protocol.

set -e

OUT=/home/z/my-project/public/images
mkdir -p "$OUT"

# Shared style suffix to keep the set visually cohesive.
STYLE="cinematic editorial photograph style, deep black background with warm metallic gold accents, ivory cream highlights, subtle film grain, high contrast, atmospheric, premium documentary aesthetic, no people faces visible, no text, no watermark, museum-quality, art-directed"

echo "==> Generating 11 cinematic images..."
echo

gen () {
  local name="$1"
  local size="$2"
  local prompt="$3"
  echo "  • $name ($size)"
  z-ai image -p "$prompt, $STYLE" -o "$OUT/$name" -s "$size" 2>&1 | tail -1
}

# 1. Hero — atmospheric backdrop (wide)
gen "hero-atmosphere.jpg" "1440x720" \
  "Vast empty dark stage lit by a single warm gold spotlight beam cutting through atmospheric haze and smoke pillars, reverent museum-like atmosphere, cinematic depth, no person, just light and air"

# 2-9. Eight chapter visuals (portrait)
gen "ch-before-the-name.jpg" "864x1152" \
  "Pre-dawn empty street in an old Accra neighborhood, single distant streetlight glowing warm gold through mist, quiet beginning, sense of waiting, atmospheric"

gen "ch-first-dream.jpg" "864x1152" \
  "Small dim recording studio interior at night, single vintage microphone silhouette under warm red and gold light, dust motes in air, intimate creative space"

gen "ch-breakthrough.jpg" "864x1152" \
  "Stadium floodlights blazing through dense haze, suspended gold confetti frozen mid-air, abstract energy of a breakthrough moment, no people"

gen "ch-reinvention.jpg" "864x1152" \
  "Fragmented shards of golden mirror reflecting light in different directions against deep black, abstract concept of reinvention and identity, dramatic"

gen "ch-rise.jpg" "864x1152" \
  "Single spotlight on empty global stage with faint silhouette of a world map behind, gold atmospheric light, sense of international arrival"

gen "ch-controversies.jpg" "864x1152" \
  "Torn pieces of newspaper arranged in dramatic shadow-play, gold light cutting through tears, abstract concept of public friction and headlines"

gen "ch-movement.jpg" "864x1152" \
  "Sea of silhouetted raised hands seen from behind in a stadium, warm gold stage light washing over the crowd, sense of collective movement and devotion"

gen "ch-today.jpg" "864x1152" \
  "Open wooden doorway with warm sunlight streaming through onto a dark floor, sense of continuation and an unwritten future, atmospheric"

# 10. Beyond Headlines — atmospheric
gen "beyond-headlines.jpg" "864x1152" \
  "Blurred abstract human silhouette behind frosted glass, gold light bleeding through, concept of a person obscured by public noise, mysterious and respectful"

# 11. Future Message — time motif
gen "future-message.jpg" "864x1152" \
  "Antique brass hourglass with golden sand falling in slow motion against deep black background, dramatic single light source, time and legacy motif"

echo
echo "==> All images generated."
ls -lh "$OUT"
