#!/usr/bin/env bash
set -euo pipefail
version=8.30.1
digest=551f6fc83ea457d62a0d98237cbad105af8d557003051f41f3e7ca7b3f2470eb
[[ "$(uname -s)/$(uname -m)" == Linux/x86_64 ]] || { echo 'CI installer requires Linux x86_64.' >&2; exit 1; }
target="${1:-$PWD/.audit-tools}"
mkdir -p "$target"
archive="$(mktemp)"
curl --fail --silent --show-error --location --max-time 120 "https://github.com/gitleaks/gitleaks/releases/download/v${version}/gitleaks_${version}_linux_x64.tar.gz" -o "$archive"
printf '%s  %s\n' "$digest" "$archive" | sha256sum --check --status
tar -xzf "$archive" -C "$target" gitleaks
if [[ -n "${GITHUB_PATH:-}" ]]; then printf '%s\n' "$target" >> "$GITHUB_PATH"; fi
