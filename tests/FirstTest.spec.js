"use strict";
var GooglePage = require('../pages/GooglePage');
describe('First test',()=>{
    beforeEach(()=>{
        GooglePage.load();
    });
    it('should display "Google" in the title',()=>{
        expect(GooglePage.title).toBe('Google');
    });
    describe('and I search for "Node.JS"',()=>{
        beforeEach(()=>{
            GooglePage.search('Node.JS');
        });
        it('should display "Node.JS" in the title',()=>{
            expect(GooglePage.title).toBe('node.js - Google Search');
        });
    })

});