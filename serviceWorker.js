'use strict';

self.addEventListener('push', function (event) {
  if (event.isTrusted) {
    const title = 'sample title';
    const message = event.data.text();
    const options = {
      body: message,
      tag: title
    };
    event.waitUntil(self.registration.showNotification(title, options));
  } else {
    console.log('not trusted.');
  }
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://google.com/')
  );
});
