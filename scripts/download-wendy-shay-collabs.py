#!/usr/bin/env python3
"""Download the 4 missing collaborator images."""
import json, urllib.request, sys
from pathlib import Path

COLLAB_DIR = Path("/home/z/my-project/public/images/collaborators")
COLLAB_DIR.mkdir(parents=True, exist_ok=True)

mapping = [
    ("kelvyn-boy.jpg", "/tmp/kelvyn.json", 0),
    ("mzvee.jpg",      "/tmp/mzvee.json",   0),
    ("sista-afia.jpg", "/tmp/sista.json",   0),
    ("shatta-wale.jpg","/tmp/shatta.json",  0),
]

for name, src, idx in mapping:
    with open(src) as fh:
        data = json.load(fh)
    results = data.get("results", [])
    if idx >= len(results):
        print(f"SKIP {name}: index out of range")
        continue
    url = results[idx]["original_url"]
    target = COLLAB_DIR / name
    try:
        req = urllib.request.Request(url, headers={"User-Agent":"Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=30) as r:
            target.write_bytes(r.read())
        print(f"✓ {name}: {target.stat().st_size//1024} KB")
    except Exception as e:
        print(f"✗ {name}: {e}", file=sys.stderr)
