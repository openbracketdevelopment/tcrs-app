describe("public website", () => {
  it("shows the homepage, mascot, and direct contact", () => {
    cy.visit("/");

    cy.contains("h1", "One man. One truck. Your to-do list, handled.").should(
      "be.visible",
    );
    cy.get('img[alt^="Tam\'s illustrated mascot"]')
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
    cy.get('a[href="tel:+18178238009"]').should("exist");
    cy.contains("a", "Find Tam on Nextdoor")
      .should("have.attr", "rel")
      .and("include", "noopener");
    cy.title().should(
      "eq",
      "Tam's Commercial & Residential Services | Benbrook, TX",
    );
    cy.get('link[rel="canonical"]').should(
      "have.attr",
      "href",
      "https://calltam.com/",
    );
    cy.get('meta[property="og:title"]').should(
      "have.attr",
      "content",
      "Tam's Commercial & Residential Services | Benbrook, TX",
    );
  });

  it("keeps unconfirmed services out of published pages and the sitemap", () => {
    cy.visit("/services/");
    cy.contains("Service list in review").should("be.visible");
    cy.contains("Heating and cooling").should("not.exist");
    cy.contains("Electrical").should("not.exist");
    cy.contains("Plumbing").should("not.exist");

    cy.request("/sitemap.xml").then(({ body }) => {
      expect(body).to.include("https://calltam.com/services/");
      expect(body).to.include("https://calltam.com/contact/");
      expect(body).not.to.include("dev-preview");
      expect(body).not.to.include("heating-cooling");
    });
  });

  it("makes service previews available in development only", () => {
    cy.visit("/dev-preview/services/heating-cooling/");
    cy.contains("Development preview only").should("be.visible");
    cy.contains("Historical site claim").should("be.visible");
    cy.contains("No heating or cooling work is represented as currently offered").should(
      "be.visible",
    );
  });

  it("provides working primary navigation", () => {
    cy.visit("/");
    cy.get(".primary-navigation").contains("About").click();
    cy.location("pathname").should("eq", "/about/");
    cy.contains("h1", "One person to talk to. A clear plan for what comes next.").should(
      "be.visible",
    );
  });

  it("validates and honestly reports unavailable form delivery", () => {
    cy.visit("/contact/");
    cy.get('input[name="name"]').type("Tam Test");
    cy.get('textarea[name="project"]').type("Checking form behavior.");
    cy.contains("button", "Send project enquiry").click();
    cy.get('input[name="email"]')
      .then(($input) => $input[0].checkValidity())
      .should("eq", false);

    cy.get('input[name="email"]').type("test@example.com");
    cy.contains("button", "Send project enquiry").click();
    cy.get('[role="alert"]')
      .should("be.visible")
      .and("contain.text", "Form delivery is not configured yet");
    cy.get('[role="alert"]').should("not.contain.text", "message has been sent");
  });

  it("validates contact requests on the server", () => {
    cy.request({
      method: "POST",
      url: "/api/contact",
      failOnStatusCode: false,
      body: { name: "A", email: "", phone: "", project: "" },
    }).then((response) => {
      expect(response.status).to.eq(400);
    });

    cy.request({
      method: "POST",
      url: "/api/contact",
      failOnStatusCode: false,
      body: {
        name: "Tam Test",
        email: "test@example.com",
        phone: "",
        city: "Benbrook",
        propertyType: "residential",
        service: "other",
        project: "Checking server-side validation.",
        website: "",
      },
    }).then((response) => {
      expect(response.status).to.eq(503);
      expect(response.body.statusMessage).to.include("not configured");
    });
  });

  it("throttles repeated contact requests", () => {
    const request = {
      method: "POST",
      url: "/api/contact",
      failOnStatusCode: false,
      body: {
        name: "Tam Test",
        email: "test@example.com",
        phone: "",
        preferredContact: "",
        city: "Benbrook",
        propertyType: "residential",
        service: "other",
        project: "Checking request throttling.",
        website: "",
      },
    };

    [503, 503, 429].forEach((status) => {
      cy.request(request).its("status").should("eq", status);
    });
  });
});
