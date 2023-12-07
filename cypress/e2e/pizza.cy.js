describe("pizza test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("disabled test", () => {
    cy.get("#order-pizza > .aciktim-link").click();
    cy.get("#siparisver-div > .btn").should("be.disabled");
  });

  it("pass test", () => {
    cy.get("#order-pizza > .aciktim-link").click();
    cy.get("#size-radio > :nth-child(3) > .form-check-input").click();
    cy.get("[data-cy=hamur]").select("Orta");
    cy.get(":nth-child(1) > .me-2").check();
    cy.get(":nth-child(6) > .me-2").check();
    cy.get(":nth-child(8) > .me-2").check();
    cy.get(":nth-child(11) > .me-2").check();
    cy.get(":nth-child(13) > .me-2").check();
    cy.get(":nth-child(4) > .mb-3 > .form-control").type("Aytekin");
    cy.get("#siparisborder > .mb-3 > .form-control").type("pizza notu");
    cy.get("#counter > :nth-child(3)").click();
    cy.get("#siparisver-div > .btn").click();
    cy.get("#order-sum").contains("Aytekin");
    cy.get("#order-sum").contains("Boyut");
    cy.get("#order-sum").contains("Ek Malzemeler");
    cy.get("#order-sum").contains("Hamur");
    cy.get("#order-sum").contains("Not");
  });
});
