const fs = require("fs");
const eventPayload = require(process.env.GITHUB_EVENT_PATH ||
  "./github/workflow/event.json");

const event = require("./new-event.json");
const ee = require("./events.json");

event.id = eventPayload.issue.number;

const isEmpty = (event) => {
  return Object.keys(event).length === 0;
};

switch (eventPayload.action) {
  case "opened":
    !isEmpty(event) && ee.events.push(event);
    console.log(event);
    break;
  case "edited":
    if (isEmpty(event)) {
      break;
    }
    const eventIndex = ee.events.findIndex((e) => e.id === event.id);
    if (!eventIndex) {
      ee.events.push(event);
      break;
    }
    ee.events[eventIndex] = event;
  default:
    break;
}

fs.writeFileSync("events.json", JSON.stringify(ee));
