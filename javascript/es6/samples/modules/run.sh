#!/bin/bash

echo Installing Babel transpiler.

npm install babel-cli babel-preset-node6

./node_modules/babel-cli/bin/babel-node.js --presets node6 ./pos.js
