describe('Home Page', () => {
	it('successfully loads', () => {
		cy.visit(Cypress.env('baseUrl'));
	});
});

// Button
describe('Search button', () => {
	const searchButton = '[data-cy="search-button"]';

	beforeEach(() => {
		cy.visit(Cypress.env('baseUrl'));
	});

	it('should be visible and contain Search text', () => {
		cy.get(searchButton).should('be.visible').should('contain.text', 'Search');
	});

	it('should change color when focused', () => {
		cy.get(searchButton)
			.focus()
			.should('have.css', 'background-color', '#ff6478');
	});
});

// Form
describe('Search form', () => {
	const url = Cypress.env('baseUrl'),
		searchButton = '[data-cy="search-button"]';

	it('Network error, error message gets rendered', () => {
		cy.visit(url);

		cy.intercept(
			'GET',
			'https://api.edamam.com/api/recipes/v2?type=public&q=egg&app_id=548667f6&app_key=2f9fdc0a12e13af8ed2b0ba5c5deb2ef',
			{ statusCode: 400 },
		).as('endpoint');

		cy.get('form').find('[type="search"]').type('egg');
		cy.get(searchButton).click();

		cy.wait('@endpoint').its('response.statusCode').should('be.oneOf', [400]);
		cy.get('[data-testid="message"]').contains('An error occured.');
	});

	it('submits a form, and navigates to the Recipes route', () => {
		cy.visit(url);

		cy.intercept(
			'GET',
			'https://api.edamam.com/api/recipes/v2?type=public&q=egg&app_id=548667f6&app_key=2f9fdc0a12e13af8ed2b0ba5c5deb2ef',
			{ fixture: 'example.json' },
		).as('endpoint');

		cy.get('form').find('[type="search"]').type('egg');
		cy.get(searchButton).click();

		cy.wait('@endpoint').its('response.statusCode').should('be.oneOf', [200]);
		cy.url().should('include', url + '/recipes');
	});
});
