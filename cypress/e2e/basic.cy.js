describe("public website", () => {
  it("shows the homepage, hero illustration, and direct contact", () => {
    cy.visit("/");

    cy.get(".home-hero h1")
      .should("be.visible")
      .and(
        "have.attr",
        "aria-label",
        "One man. One truck. Big or small. We do it all!",
      );
    cy.get('img[src="/assets/illustrations/hero-truck-mascot.webp"]')
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
    cy.get('img[src="/assets/illustrations/hero-truck-mascot.webp"]')
      .should("have.attr", "alt")
      .and("include", "short-hood utility truck")
      .and("include", "separate cab")
      .and("include", "visible storage doors")
      .and("include", "overhead ladder rack");
    cy.get(".home-hero h1 > span").should("have.length", 4);
    cy.get(".contact-mascot img").scrollIntoView().should(($img) => {
      expect($img[0].naturalWidth).to.eq(1053);
      expect($img[0].naturalHeight).to.eq(1456);
      expect(getComputedStyle($img[0]).objectFit).to.eq("contain");
    });
    cy.get(".home-hero-lead")
      .should("contain.text", "Done right the first time.")
      .and("contain.text", "We diagnose. We fix. You relax.");
    cy.contains("h2", "What We Do").should("be.visible");
    cy.get(".home-category").should("have.length", 3);
    cy.get(".home-category img")
      .should("have.length", 3)
      .each(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
    cy.get(".brand-badge")
      .should("have.css", "border-radius", "50%")
      .find("img")
      .should("have.attr", "src", "/assets/brand/calltam-mark-light-bg.png");
    cy.get(".footer-brand .brand-badge img").should(
      "have.attr",
      "src",
      "/assets/brand/calltam-mark-light-bg.png",
    );
    cy.get('a[href="tel:+18178238009"]').should("exist");
    cy.get('.social-links a[aria-label="Facebook"]').should(
      "have.attr",
      "href",
      "https://www.facebook.com/people/Tams-Commercial-Residential-Services/61554329678792/#",
    );
    cy.get('.social-links a[aria-label="Nextdoor"]')
      .should("have.attr", "href")
      .and("include", "nextdoor.com");
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

  it("shows downloadable logo variants on the brand page", () => {
    cy.visit("/brand/");
    cy.contains("h1", "Logo and mascot artwork.").should("be.visible");
    cy.get(".brand-card").should("have.length", 10);
    cy.get('a[download="calltam-logo-horizontal-light-bg.png"]').should("exist");
    cy.contains(".brand-card h2", "Mascot badge logo · horizontal · light").should(
      "exist",
    );
    cy.contains(".brand-card h2", "Full-body logo · horizontal").should("exist");
    cy.contains(".brand-card h2", "Full-body logo · stacked").should("exist");
    cy.contains(".brand-card h2", "Mascot badge · light background").should("exist");
    cy.get('a[download="calltam-mark-one-color.png"]').should("not.exist");
  });

  it("keeps the mobile badge square and the hero illustration uncropped", () => {
    cy.viewport(390, 844);
    cy.visit("/");
    cy.document().then((document) =>
      document.fonts.ready.then(() => {
        expect(document.fonts.check('800 48px "Barlow Condensed"')).to.eq(true);
        expect(document.fonts.check('400 16px "DM Sans Variable"')).to.eq(true);
        expect(getComputedStyle(document.body).fontFamily).to.include(
          "DM Sans Variable",
        );
        expect(document.documentElement.scrollWidth).to.be.at.most(390);
      }),
    );
    cy.get(".brand .brand-badge img").should(($img) => {
      const image = $img[0];
      const bounds = image.getBoundingClientRect();
      const badgeBounds = image.parentElement.getBoundingClientRect();
      expect(image.naturalWidth).to.eq(512);
      expect(image.naturalHeight).to.eq(512);
      expect(bounds.width).to.eq(bounds.height);
      expect(bounds.width).to.eq(badgeBounds.width);
      expect(getComputedStyle(image).objectFit).to.eq("contain");
    });
    cy.get(".home-hero-art img").should(($img) => {
      const image = $img[0];
      expect(image.naturalWidth).to.eq(1595);
      expect(image.naturalHeight).to.eq(986);
      expect(getComputedStyle(image).objectFit).to.eq("contain");
    });
  });

  it("keeps unconfirmed services out of published pages and the sitemap", () => {
    cy.visit("/services/");
    cy.contains("Let’s talk about your project").should("be.visible");
    cy.contains("Heating and cooling").should("not.exist");
    cy.contains("Electrical").should("not.exist");
    cy.contains("Plumbing").should("not.exist");

    cy.request("/sitemap.xml").then(({ body }) => {
      expect(body).to.include("https://calltam.com/services/");
      expect(body).to.include("https://calltam.com/contact/");
      expect(body).to.include("https://calltam.com/brand/");
      expect(body).not.to.include("dev-preview");
      expect(body).not.to.include("heating-cooling");
    });
  });

  it("omits the removed service-scope notice from public pages", () => {
    ["/", "/services/", "/about/", "/contact/"].forEach((path) => {
      cy.visit(path);
      cy.get(".service-scope-note").should("not.exist");
      cy.contains("General property help, with clear limits.").should("not.exist");
    });
  });

  it("separates the approach and service-area sections with relaxed type", () => {
    cy.visit("/");
    cy.get(".home-area-art").should("be.visible");
    cy.get(".home-about-copy h2").should(($heading) => {
      const style = getComputedStyle($heading[0]);
      expect(style.fontWeight).to.eq("700");
      expect(parseFloat(style.letterSpacing)).to.be.greaterThan(0);
    });
    cy.get(".home-area").should(($area) => {
      const about = $area[0].previousElementSibling.getBoundingClientRect();
      expect($area[0].getBoundingClientRect().top - about.bottom).to.be.at.least(40);
    });
  });

  it("makes service previews available in development only", () => {
    cy.visit("/dev-preview/services/heating-cooling/");
    cy.contains("Development preview only").should("be.visible");
    cy.contains("Historical site claim").should("be.visible");
    cy.contains("No heating or cooling work is represented as currently offered").should(
      "be.visible",
    );

    cy.visit("/dev-preview/services/remodeling/");
    cy.get(".draft-illustration").should("be.visible");
  });

  it("shows all unapproved service artwork only in the development design preview", () => {
    cy.visit("/dev-preview/homepage/");
    cy.contains("Development-only design preview").should("be.visible");
    cy.get(".preview-service-card").should("have.length", 3);
    cy.get(".preview-service-card img").should("have.length", 3);
    cy.contains("Recent work").should("be.visible");
    cy.contains("No approved before-and-after project photos have been provided").should(
      "be.visible",
    );
    cy.contains("No approved reviews have been provided for publication").should(
      "be.visible",
    );
  });

  it("provides working primary navigation", () => {
    cy.visit("/");
    cy.get(".primary-navigation").contains("About").click();
    cy.location("pathname").should("eq", "/about/");
    cy.contains("h1", "Practical help. Personal service.").should(
      "be.visible",
    );
    cy.get(".page-intro h1").should(($heading) => {
      expect(getComputedStyle($heading[0]).fontFamily).to.include("Barlow Condensed");
    });
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
