import { hits } from '../fixtures/response.json';

describe('Home Page', () => {
	const header = '[data-cy="header"]';

	it('successfully loads', () => {
		cy.visit(Cypress.env('baseUrl'));
		cy.get(header)
			.should('be.visible')
			.should('contain.text', 'Find Your Food');
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

	it('should change color on hover', () => {
		cy.get(searchButton)
			.realHover()
			.should('have.css', 'background-color', 'rgb(255, 100, 120)');
	});

	it('should change color when focused', () => {
		cy.get(searchButton)
			.focus()
			.should('have.css', 'background-color', 'rgb(255, 100, 120)');
	});
});

// Form
describe('Search form', () => {
	const url = Cypress.env('baseUrl'),
		searchButton = '[data-cy="search-button"]',
		form = 'form';

	beforeEach(() => {
		cy.visit(url);
	});

	it('API call returns a network error; error message gets rendered', () => {
		cy.submitIntercept(400);

		cy.get(form).find('[type="search"]').type('test');
		cy.get(searchButton).click();

		cy.wait('@endpoint').its('response.statusCode').should('be.oneOf', [400]);
		cy.url().should('include', url + '/recipes');

		cy.get('[data-testid="message"]')
			.should('be.visible')
			.should('contain.text', 'An error occured.');
	});

	it('Search submission navigates to the Recipes route, and renders the data', () => {
		cy.submitIntercept(200, 'response.json');

		cy.get(form).find('[type="search"]').type('test');
		cy.get(searchButton).click();
		cy.wait('@endpoint').its('response.statusCode').should('be.oneOf', [200]);

		cy.url().should('include', url);

		hits.forEach((hit) => {
			const { label, images, mealType, totalTime, uri } = hit.recipe,
				{ url } = images.REGULAR,
				uniqueKey = uri.slice(-32);

			cy.findByTestId(label).should('contain.text', label).should('be.visible');

			cy.findByAltText(label)
				.should('have.attr', 'src', url)
				.should('be.visible');

			cy.findByTestId(`meal-type-${uniqueKey}`)
				.should('contain.text', mealType)
				.should('be.visible');

			cy.findByTestId(`total-time-${uniqueKey}`)
				.should('contain.text', totalTime)
				.should('be.visible');
		});
	});
});
