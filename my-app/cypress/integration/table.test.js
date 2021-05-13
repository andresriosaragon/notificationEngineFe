import { sources } from "../../mockData/sources/sources";

describe("Table page", () => {
  before(() => {});

  beforeEach(() => {
    // cy.wait(["@sourcesAPI"]);
  });

  it("shows the table, filters and preset container", () => {
    cy.intercept("GET", "/sources", sources).as("sources");
    cy.server();
    cy.visit("/table");
    cy.log("WHEN user visits the sources table");
    cy.log("THEN table is visible");
    cy.log(
      "AND the first row should contain the data from the first api result"
    );
    const { id, name } = sources[0];
    const firstCellId = `${id}-${name}`;
    cy.log(firstCellId);
    cy.getByTestId(firstCellId).should("be.visible");
  });
});
