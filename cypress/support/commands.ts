/// <reference types="cypress" />
// ***********************************************

import '@testing-library/cypress/add-commands';

declare global {
	namespace Cypress {
		interface Chainable {
			submitIntercept(statusCode: number, fixture?: string): Chainable<Element>;
		}
	}
}

Cypress.Commands.add('submitIntercept', (statusCode, fixture) => {
	cy.intercept('GET', 'https://api.edamam.com/api/recipes/*', {
		statusCode: statusCode,
		fixture: fixture,
	}).as('endpoint');
});
