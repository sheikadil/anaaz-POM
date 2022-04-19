import { browser } from "protractor";
import { Common } from "../pages-ts/common/common";
import { Header } from "../pages-ts/header/headerPage";
import { SignIn } from "../pages-ts/header/signin";
//import testData
import testData from "../testdata/userinfo.json";

const header = new Header();
const signin = new SignIn();
const common = new Common()

describe('Sign Up', () => {

    beforeAll(async () => {
        
        await browser.manage().window().maximize()
        await browser.manage().timeouts().implicitlyWait(30000)
    })

    beforeEach(async () => {
        await browser.get(browser.params.env)
        await header.clickLogin()
    })
   
    it('TC005 Verify that user can sign in successfully', async () => {
        await signin.enterEmail(testData.login.email)
        await signin.enterPassword(testData.login.password)
        await signin.clickLogin()
        await common.validateToast(testData.login.welcome_message)
        await browser.sleep(5000)
        await header.signOutIsDisplayed()
        await header.clickSignOut()
        await browser.sleep(5000)
    })

    it('TC006 Verify that login fails', async () => {
        await signin.enterEmail(testData.login.email)
        await signin.enterPassword(testData.login.passwordInvalid)
        await signin.clickLogin()
        await common.validateToast(testData.login.invalid_password)
        await browser.sleep(5000)    
    })

    it('TC007 Verify that login fails', async () => {
        await signin.enterEmail(testData.login.emailInvalid)
        await signin.enterPassword(testData.login.password)
        await signin.clickLogin()
        await common.validateToast(testData.login.invalid_email)
    })
})