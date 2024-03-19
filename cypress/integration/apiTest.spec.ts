/// <reference types="Cypress" />

const API_URL = 'https://omgvamp-hearthstone-v1.p.rapidapi.com';
const API_KEY = '55c6c452c6mshe10c6261a35199fp15c867jsn9f38ff8a2547';
const API_HOST = 'omgvamp-hearthstone-v1.p.rapidapi.com';

const headers = {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': API_HOST
};

describe('Hearthstone API Tests', () => {
    it('should return all Totem race cards', () => {
        cy.request({
            method: 'GET',
            url: `${API_URL}/cards/races/Totem`,
            headers
        })
            .should((response) => {
                expect(response.body).to.have.length(62);
                expect(response.body.every((item: { race: string; }) => item.race === 'Totem')).to.be.true;
            });
    });

    it('should return the correct card by name', () => {
        const cardName = 'Fire Fly';
        cy.request({
            method: 'GET',
            url: `${API_URL}/cards/search/${cardName}`,
            headers
        })
            .should((response) => {
                expect(response.status).to.eq(200);
                expect(response.body[0].name).to.eq('Fire Fly');
                expect(response.body[0].cardSet).to.eq('Journey to Un\'Goro');
                expect(response.body[0].type).to.eq('Minion');
            });
    });

    it('should return a 404 for an invalid card name', () => {
        const cardName = 'card test';
        cy.request({
            method: 'GET',
            url: `${API_URL}/cards/search/${cardName}`,
            headers,
            failOnStatusCode: false
        })
            .should((response) => {
                expect(response.status).to.eq(404);
                expect(response.body.message).to.eq('Card not found.');
            });
    });

    it('should return the correct card and compare with fixture', () => {
        const cardName = 'Armagedillo';
        cy.request({
            method: 'GET',
            url: `${API_URL}/cards/search/${cardName}`,
            headers
        })
            .then((response) => {
                cy.fixture('hearthstoneArmagedillo.json').then((expectedResponseBody) => {
                    expect(response.status).to.eq(200);
                    expect(response.body).to.deep.equal(expectedResponseBody);
                });
            });
    });

    it('should return the correct card by class getting the class name from a previous request', () => {
        cy.request({
            method: 'GET',
            url: `${API_URL}/info`,
            headers
        })
            .its('body.classes.0').as('firstClasses')
            .then(() => {
                cy.get('@firstClasses').then((firstClasses) => {
                    cy.request({
                        method: 'GET',
                        url: `${API_URL}/cards/classes/${firstClasses}`,
                        headers
                    })
                        .should((response) => {
                            expect(response.status).to.eq(200);
                            expect(response.body[0].playerClass).to.eq(firstClasses);
                        });
                });
            });
    });
});