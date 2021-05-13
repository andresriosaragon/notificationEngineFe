const faker = require("faker");
const { range } = require("ramda");
const { uuid } = require("uuidv4");

const sources = range(0, 10).map(() => ({
  id: uuid(),
  name: faker.company.companyName(),
  description: "a description of the company",
}));

module.exports = { sources };
