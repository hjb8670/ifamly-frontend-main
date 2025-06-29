// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // urlSrv: 'http://3.129.84.172:8081', //UAT
  // urlSrv: 'http://18.116.89.191:8081', //UAT Miami
  // urlSrv: 'http://localhost:8081',
  urlSrv: 'https://ifmly.com', //PROD

  //IPInfo.io para obtener CountryISO del Device
  urlSrvIPInfo: 'https://ipinfo.io',
  tokenIPInfo: 'a6dba9b2952bf5',

  // Firebase configuration
  firebaseConfig: {
    apiKey: "AIzaSyCczSqPLOZOvONTX32f8_02tydFMrojPX8",
    authDomain: "ifamily-180d6.firebaseapp.com",
    projectId: "ifamily-180d6",
    storageBucket: "ifamily-180d6.firebasestorage.app",
    messagingSenderId: "1008524938992",
    appId: "1:1008524938992:web:c8ffed03da5f32bab13c35",
    measurementId: "G-S1F6DMDELP",
    vapidKey: 'BG-zbPt8nqeh9HiHiFzgdZRshH08fBPTjD_R__JwVM2fAbrPPpCJeFGh_WAyiNAbjBFCAm45L6EDeoNhAeAFD2A' // required for web push
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
