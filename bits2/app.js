// (function() {
//     'use strict';

//     angular.module('bits', [
        
//     ])
    
// })();


import * as ng from 'angular';

import 'angular-ui-router';
import 'angular-toastr';
import 'angular-messages';

const externalDependencies = [
  'ui.router',
  'toastr',
  'ngMessages'
];

export default ng.module('bits', externalDependencies);