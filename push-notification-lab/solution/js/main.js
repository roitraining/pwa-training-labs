/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var app = (function() {
  'use strict';

  var isSubscribed = false;
  var swRegistration = null;

  var notifyButton = document.querySelector('.js-notify-btn');

  // TODO 2.1 - check for notification support
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications!');
    return;
  }
  
  // TODO 2.2 - request permission to show notifications
  Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
  });
  
  function displayNotification() {

    // TODO 2.3 - display a Notification
    if (Notification.permission == 'granted') {
      navigator.serviceWorker.getRegistration().then(function(reg) {
    
        // TODO 2.4 - Add 'options' object to configure the notification
        const options = {
          body: 'First notification!',
          icon: 'images/notification-flat.png',
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: 2
          },
        
          // TODO 2.5 - add actions to the notification
          actions: [
            {action: 'explore', title: 'Go to the site',
              icon: 'images/checkmark.png'},
            {action: 'close', title: 'Close the notification',
              icon: 'images/xmark.png'},
          ]
          
          // TODO 5.1 - add a tag to the notification
        
        };
        
        reg.showNotification('Hello world!', options);
      });
    }
    
  }

  function initializeUI() {

  }


  function subscribeUser() {

  }

  function unsubscribeUser() {

  }

  function updateSubscriptionOnServer(subscription) {
    // Here's where you would send the subscription to the application server

    var subscriptionJson = document.querySelector('.js-subscription-json');
    var endpointURL = document.querySelector('.js-endpoint-url');
    var subAndEndpoint = document.querySelector('.js-sub-endpoint');

    if (subscription) {
      subscriptionJson.textContent = JSON.stringify(subscription);
      endpointURL.textContent = subscription.endpoint;
      subAndEndpoint.style.display = 'block';
    } else {
      subAndEndpoint.style.display = 'none';
    }
  }

  function updateBtn() {
    if (Notification.permission === 'denied') {
      pushButton.textContent = 'Push Messaging Blocked';
      pushButton.disabled = true;
      updateSubscriptionOnServer(null);
      return;
    }

    if (isSubscribed) {
      pushButton.textContent = 'Disable Push Messaging';
    } else {
      pushButton.textContent = 'Enable Push Messaging';
    }

    pushButton.disabled = false;
  }

  function urlB64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  notifyButton.addEventListener('click', function() {
    displayNotification();
  });

  if ('serviceWorker' in navigator && 'PushManager' in window) {
    console.log('Service Worker and Push is supported');

    navigator.serviceWorker.register('sw.js')
    .then(function(swReg) {
      console.log('Service Worker is registered', swReg);

      swRegistration = swReg;


    })
    .catch(function(error) {
      console.error('Service Worker Error', error);
    });
  } else {
    console.warn('Push messaging is not supported');
    pushButton.textContent = 'Push Not Supported';
  }

})();
