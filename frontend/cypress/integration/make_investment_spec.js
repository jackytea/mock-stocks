// end to end test - full flow from logging in to buying stock
describe('make investment', () => {
  let credentials;

  before(() => {
    credentials = Cypress.env("credentials")
  })

  it('user can invest in a stock', () => {
    // initial visit
    cy.visit('http://localhost:3000/');

    // login with guest account
    cy.findByRole('link', { name: /login \/ register/i }).click();
    cy.findByRole('button', { name: /try with guest account/i }).click();

    // go to market
    cy.findByRole('link', {  name: /browse markets/i}).click();

    // look up stock
    cy.findByRole('textbox').type("Shopify");

    // press buy
    cy.findByRole('link', {  name: /buy/i}).click()

    // enter < 100 shares of stock
    cy.findByRole('spinbutton').type(1);

    // purchase stock
    cy.findByRole('button', {  name: /buy \/ sell more/i}).click();

    // check if invested
    cy.contains("Investing");
    cy.contains("Shopify");
  });
});
