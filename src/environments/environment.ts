// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyAFeW43euRgvot659k6ZIAdaOi1IU85VIc',
    authDomain: 'ng-track-skills.firebaseapp.com',
    databaseURL: 'https://ng-track-skills.firebaseio.com',
    projectId: 'ng-track-skills',
    storageBucket: 'ng-track-skills.appspot.com',
    messagingSenderId: '693807014508'
  },
  apiServerPath: 'https://ng-track-skills.firebaseio.com',
  USER_LIST_JSON: '/userList.json',
  USER_LIST: '/userList'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
