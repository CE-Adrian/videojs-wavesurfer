/**
 * Update video.js version in demo files.
 *
 * @since 3.0.0
 */

const replace = require('replace-in-file');
const path = require('path');

const OLD_VERSION = "video.js@7.18.1";
const NEW_VERSION = "video.js@7.20.1";

const options = {
  files: path.resolve(__dirname, '..', 'demo') + '/**/*.html',
  from: new RegExp(OLD_VERSION, 'g'),
  to: NEW_VERSION,
  dry: false
};

console.log();
console.log(`Updating from ${OLD_VERSION} to ${NEW_VERSION} in ${path.relative('.', options.files)}`);
console.log();

replace(options)
.then(results => {
    let changes = false;
    results.forEach(item => {
        if (item.hasChanged) {
            console.log("Updated " + path.relative('.', item.file));
            changes = true;
        }
    });
    if (!changes) {
        console.log("No files updated.");
    }
})
.catch(error => {
    console.error('Error occurred:', error);
});
