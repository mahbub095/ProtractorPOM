let homepage = require('../pages/homepage');

describe('demo calculator tests', function() {


    beforeAll(async() => {
        await browser.manage().window().maximize()
        await browser.manage().timeouts().implicitlyWait(10000)
    })
    beforeEach(async() => {
        homepage.get('https://www.delta.com/login/loginPage?staticurl=');

    })



    it('addition test', function() {


        homepage.enterFirstNumber('admin');

        homepage.enterSecondNumber('admin');

        homepage.clickGo();

        // homepage.verifyResult('7');

        browser.sleep(2000)

    });





});