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
/*jshint esversion: 6*/

var app = (function() {

  function getImageName(country) {
    // TODO 2.1 - create a promise
  }

  function isSpain(country) {
    // TODO - Optional
  }

  function flagChain(country) {
    // TODO 2.2 - use the promise
  }

  function spainTest(country) {
    // TODO - Optional
  }

  function allFlags(promiseList) {
    // TODO
  }

  function promiseA() {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, 500, 'one');
    });
  }

  function promiseB() {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, 500, 'two');
    });
  }

  function promiseC() {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, 500, 'three');
    });
  }
  
  function nestedPromises() {
    let answer;
    return promiseA().then(arg => {
      if (arg === 'one') {
        promiseB().then(arg => {
          if (arg === 'two') {
            promiseC().then(arg => {
              answer =  arg;
              console.log(`answer = ${answer}`);
            })
          }
          else {
            answer = 'not two';
            console.log(`answer = ${answer}`);

          }
        })
      }
      else {
        answer = 'not one';
        console.log(`answer = ${answer}`);
      }
    });

  }

  // TODO 3.1 - call nestedPromises();

  // TODO 4.1 - Promise.all

  // TODO 4.2 - Promise.race

  /* Helper functions */

  function logSuccess(result) {
    console.log('Success!:\n' + result);
  }

  function logError(err) {
    console.log('Oh no!:\n' + err);
  }

  function returnTrue() {
    return true;
  }

  function returnFalse() {
    return false;
  }

  function fetchFlag(imageName) {
    return fetch('flags/' + imageName); // fetch returns a promise
  }

  function processFlag(flagResponse) {
    if (!flagResponse.ok) {
      throw Error('Bad response for flag request!'); // This will implicitly reject
    }
    return flagResponse.blob(); // blob() returns a promise
  }

  function appendFlag(flagBlob) {
    var flagImage = document.createElement('img');
    var flagDataURL = URL.createObjectURL(flagBlob);
    flagImage.src = flagDataURL;
    document.body.appendChild(flagImage);
  }

  function fallbackName() {
    return 'chile.png';
  }

  // Don't worry if you don't understand this, it's not part of Promises.
  // We are using the JavaScript Module Pattern to enable unit testing of
  // our functions.
  return {
    getImageName: (getImageName),
    flagChain: (flagChain),
    isSpain: (isSpain),
    spainTest: (spainTest),
    fetchFlag: (fetchFlag),
    processFlag: (processFlag),
    appendFlag: (appendFlag),
    allFlags: (allFlags)
  };

})();
