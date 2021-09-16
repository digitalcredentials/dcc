#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const context = require('../js/context');
const constants = require('../js/constants');

// Serialize the context as JSON-LD
fs.writeFileSync(
  path.join(__dirname, '..', 'v1', constants.CONTEXT_FILENAME),
  JSON.stringify(context, null, 2) + '\n'
);
