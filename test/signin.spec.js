const { browser } = require("protractor")
const { Common } = require("../pages/common/common")
const { Header } = require("../pages/header/headerPage")
const { SignIn } = require("../pages/header/signin")

//import testData
const testData = require("../testdata/userinfo.json")
//header 
const header = new Header()
//signin
const signin = new SignIn
//common
const common = new Common()
describe('Sign Up', () => {

    beforeAll(async () => {
        await browser.get("https://letcode.in/")
        await browser.manage().window().maximize()
        await browser.manage().timeouts().implicitlyWait(30000)
    })

    beforeEach(async () => {
        await header.clickLogin()
    })
   
    it('TC005 Verify that user can sign in successfully', async () => {
        await signin.enterEmail("ad143@anaaz.com")
        await signin.enterPassword("ad123336")
        await signin.clickLogin()
        await common.validateToast("Welcome Ad")
        await browser.sleep(5000)
        await header.signOutIsDisplayed()
        await header.clickSignOut()
        await browser.sleep(5000)
    })

    it('TC006 Verify that login fails', async () => {
        await signin.enterEmail("ad143@anaaz.com")
        await signin.enterPassword("fwdffwefwef")
        await signin.clickLogin()
        await common.validateToast("Error: The password is invalid or the user does not have a password.")
        await browser.sleep(5000)    
    })

    it('TC007 Verify that login fails', async () => {
        await signin.enterEmail("ad5245245143@anaaz.com")
        await signin.enterPassword("ad123336")
        await signin.clickLogin()
        await common.validateToast("Error: The email address is badly formatted.")
    })
})