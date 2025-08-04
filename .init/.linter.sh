#!/bin/bash
cd /home/kavia/workspace/code-generation/image-gallery-platform-127405-127415/frontend_react_gallery
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

