const fs = require('fs');
const path = require('path');

const exercice1 = () => {
  const sequences = [
    () => console.log('First sequence'),
    () => console.log('Second sequence'),
    () => console.log('Third sequence'),
    () => console.log('Fourth sequence'),
    () => console.log('Fifth sequence')
  ];

  // Imagine you have an asynchronous behavior with dependecies so the fifth
  // sequence depends on the fourth which depends on the third ...
  // To simulate asynchronous calls, we'll use the `setTimeout` function with 200
  // miliseconds delays.
  // Now with traditional callbacks, here would be one way to do it
  setTimeout(() => {
    sequences[0](); // Outputs 'First sequence'
    setTimeout(() => {
      sequences[1](); // Outputs 'Second sequence'
      setTimeout(() => {
        sequences[2](); // Outputs 'Third sequence'
        setTimeout(() => {
          sequences[3](); // Outputs 'Fourth sequence'
          setTimeout(() => {
            sequences[4](); // Outputs 'Fifth sequence'
          }, 200);
        }, 200);
      }, 200);
    }, 200);
  }, 200);

  // If you already worked with nodeJS, it's more than likely you have encountered
  // this kind of structure well known as "callback hell" or "callback pyramid of doom".

  // What is expected here is that you create a function which returns a Promise
  // and use it to trigger each sequence in the same order to replace previous code.
}

const exercice2 = () => {
  // Let's now run some promises in parallel.

  // I remember the times when I had to create a counter and update it
  // to wait for multiple parallel async calls to finish (load all assets of an
  // app for example) like the following.

  let loadedAssets = 0;
  const assetsCount = 4;

  const incrementCounter = () => {
    loadedAssets++;
    if (assetsCount === loadedAssets) {
      console.log('All assets are loaded');
    }
  }

  fs.readFile(path.join(__dirname, './promiseAssets/manifest.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    incrementCounter();
  });

  fs.readFile(path.join(__dirname, './promiseAssets/half-life.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    incrementCounter();
  });

  fs.readFile(path.join(__dirname, './promiseAssets/doom.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    incrementCounter();
  });

  fs.readFile(path.join(__dirname, './promiseAssets/mass-effect.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    incrementCounter();
  });

  // It looks quite tedious to maintain wand error handling will repidly become
  // your greatest source of headaches. So refactor this code with Promises.
}

const exercice3 = () => {
  // Okay, once you're done with the previous exercice, it's time to try error handling.
  // We'll use the node `fs.readFile` utility. Its purpose is to read files.
  // To know more about its API, see https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
  // It's an asynchronous function which returns an error object and the content of said file.
  fs.readFile(path.join(__dirname, '../README.md'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data); // this should output the content of README.md
  });

  fs.readFile(path.join(__dirname, 'inexistantFile'), 'utf-8', (err, data) => {
    if (err) throw err; // Stops disgracefully the program with an uncatched ENOENT error
    console.log(data);
  });

  // So it appears here that error handling will be a pain somehow and it will
  // certainly not get better if reading a file depends on reading another file.
  // So, the exercice here is to read `./promiseAssets/manifest.txt`. Each line
  // of manifest points to another file but there are missing files so you'll
  // have to handle errors so the whole manifest shows final file contents or an
  // error message stating that `filename` is not found.
}

exercice1();
// exercice2();
// exercice3();
