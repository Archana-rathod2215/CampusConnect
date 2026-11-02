const assert = require('node:assert');
const fs = require('node:fs');
const vm = require('node:vm');

const script = fs.readFileSync('script.js', 'utf8');

let alertMessage = '';

const context = {
    alert: (message) => {
        alertMessage = message;
    }
};

vm.createContext(context);
vm.runInContext(script, context);

context.showMessage();

assert.strictEqual(
    alertMessage,
    'Welcome to CampusConnect!'
);

console.log('Automated test passed!');
