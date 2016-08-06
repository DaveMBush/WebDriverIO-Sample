class GooglePage{
    static load(){
        browser.url('https://www.google.com');
    }
    static get title(){
        return browser.getTitle();
    }
    static get searchInput(){
        return browser.element('input[name="q"]');
    }
    static get searchButton(){
        return browser.element('input[name="btnK"]');
    }
    static search(value){
        GooglePage.searchInput.setValue('Node.js');
        browser.pause(1000);
    }
};

module.exports = GooglePage;