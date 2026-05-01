#!/bin/bash
export PATH="/tmp/nodebin:$PATH"
mkdir -p /tmp/nodebin
ln -sf /Applications/Cursor.app/Contents/Resources/app/resources/helpers/node /tmp/nodebin/node
cd "$(dirname "$0")"
exec /tmp/nodebin/node /tmp/npm-pkg/package/bin/npm-cli.js run dev
