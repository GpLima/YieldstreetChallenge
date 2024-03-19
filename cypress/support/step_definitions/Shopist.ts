import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ShopistPage from '../pageobjects/ShopistPage';

const shopistPage = new ShopistPage();

Given("access the shopist site", (): void => {
    return shopistPage.accessUrl();
});


