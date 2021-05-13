const faker = require("faker");
const { range } = require("ramda");
const { uuid } = require("uuidv4");

const { industries } = require("./industries");

const sources = range(0, 10).map(() => ({
  id: uuid(),
  name: faker.company.companyName(),
  industry: faker.random.arrayElement(industries).name,
}));

module.exports = { sources };
