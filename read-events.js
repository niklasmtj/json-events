const fs = require('fs');
const event = require('./new-event.json');
const ee = require('./events.json');

const isEmpty = (event) => {
  return Object.keys(event).length === 0
}

!isEmpty(event) && ee.events.push(event)

fs.writeFileSync('events.json', JSON.stringify(ee));
