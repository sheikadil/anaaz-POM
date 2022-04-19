const { browser } = require("protractor")
const { Common } = require("../pages/common/common")
const { Header } = require("../pages/header/headerPage")
const { SignUp } = require("../pages/header/signUpPage")

//import testData
const testData = require("../testdata/userinfo.json")
//header 
const header = new Header()
//signup
const signup = new SignUp()
//common
const common = new Common()
describe('Sign Up', () => {

    beforeAll(async () => {
        
        await browser.manage().window().maximize()
        await browser.manage().timeouts().implicitlyWait(30000)
    })

    beforeEach(async () => {
        await browser.get("https://letcode.in/")
        await header.clickSignUp()
    })
    xit('TC001 Verify that user can sign up successfully', async () => {        
        await signup.enterName(testData.signUp.name)
        await signup.enterEmail(testData.signUp.email)
        await signup.enterPassword(testData.signUp.password)
        await signup.clickAgree()
        await signup.clickSignUpBtn()
        await browser.sleep(5000)
        await header.signOutIsDisplayed()
    }) 

    it('TC002 To Verify that Sign Up Fails', async () => {        
        await signup.clickSignUpBtn()
        await common.validateToast(testData.signUp.invalid_email)
    })

    it('TC003 To Verify that Sign Up Fails', async () => {        
        await signup.clickSignUpBtn()
        await signup.enterEmail(testData.signUp.email)
        await common.validateToast(testData.signUp.invalid_password) 
    })

    it('TC004 To Verify that Sign Up Fails', async () => {        
        await signup.clickSignUpBtn()
        await signup.enterPassword(testData.signUp.password)
        await common.validateToast(testData.signUp.invalid_email) 
    })


})