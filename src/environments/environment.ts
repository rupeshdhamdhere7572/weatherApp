// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApiBaseUrl: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
  XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
  XRapidAPIHostHeaderValue: 'weatherbit-v1-mashape.p.rapidapi.com',
  XRapidAPIkeyHeaderName: 'X-RapidAPI-Key',
  XRapidAPIkeyHeaderValue:'75fe861882msh0f8a209adaaf9f4p1619cfjsnf89af9c8d9d6'


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
