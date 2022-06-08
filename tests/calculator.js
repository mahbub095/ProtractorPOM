let homepage = require('../pages/homepage');

describe('demo calculator tests', function() {


    beforeAll(async() => {
        await browser.manage().window().maximize()
        await browser.manage().timeouts().implicitlyWait(10000)
    })
    beforeEach(async() => {
        homepage.get('https://juliemr.github.io/protractor-demo/');

    })



    it('addition test', function() {


        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('7');

        homepage.clickGo();

        homepage.verifyResult('11');

        browser.sleep(2000)

    });





});