import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ShopistPage from '../pageobjects/ShopistPage';

const shopistPage = new ShopistPage();

Given("access the shopist site", (): void => {
    return shopistPage.accessUrl();
});

When("I click on departments banner", (departmentsName: any): void => {
    return departmentsName.hashes().forEach((element: any): void => {
        shopistPage.clickOndepartmentBanner(element.departments);
    });
});

When("I should see the products for the right departments", (departmentsName: any): void => {
    return departmentsName.hashes().forEach((element: any): void => {
        shopistPage.checkDepartmentsPage(element.departments);
    });
});

When("I click on hero banner", (): void => {
    return shopistPage.clickOnHeroBanner();
});

When("I click on a product", (): void => {
    return shopistPage.clickOnProduct();
});

When("I click on the add to cart button", (): void => {
    return shopistPage.addProductToCart();
});

Then("I should see the right product in the cart", (): void => {
    return shopistPage.checkProductInCart();
});

Then("I click on the checkout button", (): void => {
    return shopistPage.clickOnCheckoutButton();
});

Then("I should been on the success page", (): void => {
    return shopistPage.checkSuccessPage();
});

When("I click on my profile button", (): void => {
    return shopistPage.clickOnProfileButton();
});

When("I click on edit profile button", (): void => {
    return shopistPage.clickOnEditProfileButton();
});

When("I click on the upload photo button", (): void => {
    return shopistPage.clickUploadPhotoButton();
});

Then("I should be able to save the changes", (): void => {
    return shopistPage.clickOnSaveProfileButton();
});

Then("I click on sold out product", (): void => {
    return shopistPage.clickOnSoldOutProduct();
});

Then("I should see the sold out warning message", (): void => {
    return shopistPage.checkSoldOutMessage();
});

When("I click on sign up button", (): void => {
    return shopistPage.clickOnSignUpButton();
});

When("I fill the form with invalid informations", (): void => {
    return shopistPage.fillSignUpWithInvalidInformation();
});

When("I click on sign up button to complete the process", (): void => {
    return shopistPage.clickOnCompleteSignUpButton();
});

Then("I should see an error message", (): void => {
    return shopistPage.checkErrorMessage();
});
