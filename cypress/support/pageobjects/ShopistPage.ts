/// <reference types="Cypress" />

import ShopElements from '../elements/Shopist';

class ShopistPage {
    private shopElements: ShopElements;

    constructor() {
        this.shopElements = new ShopElements();
    }

    public accessUrl(): void {
        cy.visit('/');
    }
}

export default ShopistPage;