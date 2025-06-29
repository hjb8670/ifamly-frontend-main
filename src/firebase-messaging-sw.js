// This is needed for background notifications
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCczSqPLOZOvONTX32f8_02tydFMrojPX8",
    authDomain: "ifamily-180d6.firebaseapp.com",
    projectId: "ifamily-180d6",
    storageBucket: "ifamily-180d6.firebasestorage.app",
    messagingSenderId: "1008524938992",
    appId: "1:1008524938992:web:c8ffed03da5f32bab13c35",
});

const messaging = firebase.messaging();

// messaging.onBackgroundMessage(payload => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
