#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/../.."
# Search this checkout directly. Never delete or install into TEXMFHOME.
export TEXINPUTS="$PWD/latex-packages//:${TEXINPUTS:-}"
# LuaLaTeX must be able to populate its font cache in restricted checkouts.
export TEXMFVAR="$PWD/.audit-tools/texmf-var"
export TEXMFCACHE="$PWD/.audit-tools/texmf-cache"
mkdir -p "$TEXMFVAR" "$TEXMFCACHE"
bash generate/compile.sh
