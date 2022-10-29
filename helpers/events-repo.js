const fs = require('fs');

// events in JSON file for simplicity, store in a db for production applications
let events = require('../data/events.json');

export const eventsRepo = {
  getAll: () => events,
  getById: (id) => events.find((x) => x.id.toString() === id.toString()),
  find: (x) => events.find(x),
  create,
  update,
  delete: _delete,
};

function create(event) {
  // generate new event id
  event.id = events.length ? Math.max(...events.map((x) => x.id)) + 1 : 1;

  // add and save event
  events.push(event);
  saveData();
}

function update(id, params) {
  const event = events.find((x) => x.id.toString() === id.toString());
  // update and save
  Object.assign(event, params);
  saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
  // filter out deleted event and save
  events = events.filter((x) => x.id.toString() !== id.toString());
  saveData();
}

// private helper functions

function saveData() {
  fs.writeFileSync('data/events.json', JSON.stringify(events, null, 4));
}
