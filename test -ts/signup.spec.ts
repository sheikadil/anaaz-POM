import { Common } from "../pages-ts/common/common";
import { Header } from "../pages-ts/header/headerPage"
import { SignUp } from "../pages-ts/header/signUpPage";
import { browser } from "protractor";
//import testData
import testData from "../testdata/userinfo.json";


const header = new Header();
const signup = new SignUp();
const common = new Common()


describe('Sign Up', () => {

    beforeAll(async () => {
        
        await browser.manage().window().maximize()
        await browser.manage().timeouts().implicitlyWait(30000)
    })

    beforeEach(async () => {
        await browser.get(browser.params.env)
        await header.clickSignUp()
    })
    it('TC001 Verify that user can sign up successfully', async () => {        
        await signup.enterName(testData.signUp.name)
        await signup.enterEmail(testData.signUp.email)
        await signup.enterPassword(testData.signUp.password)
        await signup.clickAgree()
        await signup.clickSignUpBtn()
        await common.validateToast(`You have logged in ${testData.signUp.name}`)
        await header.signOutIsDisplayed()
        await header.clickSignOut()
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