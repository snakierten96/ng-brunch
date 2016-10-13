import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';
import 'angular-sanitize';

import { ngRedux, INgReduxProvider} from 'ng-redux';

// load material basic css
import 'angular-material/angular-material.min.css';
import './styles.css';

import { AppComponent } from './app/app.component';
import { 
  LineupComponent,
  //TableComponent
} from './app/components';
//import { rootReducer } from './app/store';

module TrendyBrunch {
  "use strict";

  angular.module('TrendyBrunch', [ 'ngMaterial', 'ngSanitize' ])
    .config((
      $mdThemingProvider: angular.material.IThemingProvider) => {

      // Set theme
      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('purple',{ default: '700' });

      // Configure store
      //$ngReduxProvider.createStoreWith(rootReducer, []);
    })
    
    // Register all of our components
    .component(AppComponent.componentName, AppComponent.componentConfig)
    .component(LineupComponent.componentName,LineupComponent.componentConfig)
    //.component(TableComponent.componentName, TableComponent.componentConfig)
  ;
}