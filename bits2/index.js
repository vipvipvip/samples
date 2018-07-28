// entry point of our application
// just import the pages we need

import _ from 'lodash';
import * as inflection from 'lodash-inflection';
_.mixin(inflection);

import './app.js';
import './components';
import './services';
import './data';