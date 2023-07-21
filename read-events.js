const fs = require('fs');
const event = require('./new-event.json');
const ee = require('./events.json');

ee.events.push(event)

fs.writeFileSync('events.json', JSON.stringify(ee));
