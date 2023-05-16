describe("Admin page", () => {
    it("should add new projects", () => {

        // Intercept API calls to avoid making them
        cy.intercept("GET", "/api/projects", []);

        // Start from the index page
        cy.visit("/admin");

        cy.contains("button", "Add New Project").click();
        
        cy.get("input[name='name']").clear().type("My Project");

        cy.get("textarea[name='description']").clear().type("My description");

        cy.get("textarea[name='overview']").clear().type("My overview");

        let imageUrl = "https://micoach.itj.com/assets/micoach_logo.png"
        cy.get("input[name='imageUrl'").clear().type(imageUrl);

        cy.get("input[name='tools']").parent().click();
        cy.contains("li", "Next").click();
        cy.contains("li", "HTML").click().type("{esc}");

        cy.contains("button", "Add Project").click();

        // Expect
        cy.contains("My Project");
        cy.contains("My description");
        cy.get("img")
            .filter(`[src="${imageUrl}"]`)
            .first()
            .should("exist");
    })
})