/// <reference types="Cypress" />

import ShopElements from '../elements/ShopistElements';

let productName: string;

class ShopistPage {
    private shopElements: ShopElements;

    constructor() {
        this.shopElements = new ShopElements();
    }

    public accessUrl(): void {
        cy.visit('/');
    }

    public clickOndepartmentBanner(departments: string): void {
        this.shopElements.heroBanner()
        cy.get(this.shopElements.departmentBanner() + `[href='/department/${departments}']`).click();   
    }

    public checkDepartmentsPage(departments: string): void {
        cy.url().should('include', departments);
        cy.get(this.shopElements.menuButtonActive()).should('have.class', departments);
    }

    public clickOnHeroBanner(): void {
        cy.get(this.shopElements.heroBanner()).contains("Shop now").click();
    }

    public clickOnProduct(): void {
        cy.get(this.shopElements.productTitle()).eq(0).invoke('text').then((text) => {
            productName = text;
        });
        cy.get(this.shopElements.productCard()).eq(0).click();
    }
    
    public addProductToCart(): void {
        cy.get(this.shopElements.addToCartButton()).click();
    }

    public checkProductInCart(): void {
        cy.visit('/cart');
        cy.url().should('include', '/cart');
        cy.get(this.shopElements.productDescription()).children().first().contains(productName);
    }

    public clickOnCheckoutButton(): void {
        cy.get(this.shopElements.checkoutButton()).click();
    }

    public checkSuccessPage(): void {
        cy.url().should('include', '/checkout');
        cy.get(this.shopElements.checkoutTitle()).contains('Thank you!');
    }

    public clickOnProfileButton(): void {
        cy.get(this.shopElements.profileButton()).click();
        cy.url().should('include', '/profile');
    }

    public clickOnEditProfileButton(): void {
        cy.get(this.shopElements.editProfileButton()).click();
        cy.url().should('include', '/profile-edit');
    }

    public clickUploadPhotoButton(): void {
        cy.get(this.shopElements.uploadImageButton()).selectFile('cypress/fixtures/testimage.png').then((fileContent) => {
            cy.get(this.shopElements.firstNameInputEditProfile()).clear().type('IMAGEM ATUALIZADA');
        });
    }

    public clickOnSaveProfileButton(): void {
        cy.contains('button', 'Save profile').click();
        cy.get(this.shopElements.successMessage()).contains('Profile successfully saved.');
        cy.get(this.shopElements.successMessageLink()).click();
    }

    public clickOnSoldOutProduct(): void {
        cy.get(this.shopElements.souldOutProductCard()).eq(0).click();
    }

    public checkSoldOutMessage(): void {
        cy.get(this.shopElements.soldOutWarningModal()).should('be.visible');
        cy.get(this.shopElements.soldOutWarningMessage()).contains('Oops! This item is sold out.');
    }

    public clickOnSignUpButton(): void {
        cy.get(this.shopElements.signUpButton()).click();
        cy.url().should('include', '/signup');
    }

    public fillSignUpWithInvalidInformation(): void {
        cy.get(this.shopElements.firstNameInputSignUp()).type('Teste');
        cy.get(this.shopElements.lastNameInputSignUp()).type('Teste');
        cy.get(this.shopElements.emailInputSignUp()).type('	invalidemail@test.com');
    }

    public clickOnCompleteSignUpButton(): void {
        cy.get(this.shopElements.CompleteSignUpButton()).eq(0).click();
    }

    public checkErrorMessage(): void {
        cy.get(this.shopElements.errorModal()).should('be.visible');
        cy.get(this.shopElements.errorModalTitle()).contains('Something went wrong. Please try again.');

    }

}

export default ShopistPage;