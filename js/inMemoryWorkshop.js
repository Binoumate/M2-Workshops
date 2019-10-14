/* eslint-disable require-jsdoc */
inMemoryWorkshop = [];


function getWorkshopList() {
  return new Promise((resolve, reject) => {
    resolve(inMemoryWorkshop);
  });
}

function getWorkshopByName(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject(new Error('name parameter is required'));
    }
    resolve(inMemoryWorkshop.find((workshop) => workshop.name === name));
  });
}

function addWorkshop(name, description) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject(new Error('Workshop name required'));
    }
    if (!description) {
      reject(new Error('Workshop description required'));
    }
    inMemoryWorkshop.push({
      name,
      description,
    });
    resolve();
  });
}

function removeWorkshopByName(name) {
  return new Promise((resolve, reject) => {
    reject(new Error('Not implemented'));
  });
}

function updateWorkshop(oldName, name, description) {
  return new Promise((resolve, reject) => {
    if(!name)
      reject(new Error('Workshop name required'));
    if(!description)
      reject(new Error('Workshop description required'));
    if(!oldName)
      reject(new Error('Workshop old name required'));
    var index = inMemoryWorkshop.findIndex((workshop) => workshop.name === oldName);
    inMemoryWorkshop[index].description = description;
    inMemoryWorkshop[index].name = name;
    resolve();
  });
}

module.exports = {
  getWorkshopList,
  getWorkshopByName,
  addWorkshop,
  removeWorkshopByName,
  updateWorkshop,
};
