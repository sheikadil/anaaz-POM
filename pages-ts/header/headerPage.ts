import { by, element } from "protractor"
import { CommonFunctions } from "../../letbase/common/commonFunctions"


export class Header extends CommonFunctions{

    private signUpBtn = element(by.linkText("Sign up"))
    private loginBtn = element(by.linkText("Log in"))
    private signOut = element(by.xpath("//a[text()='Sign out']"))

    async clickSignUp() {
        // await this.signUpBtn.click()
        await this.click(this.signUpBtn);
    }

    async clickLogin() {
        // await this.loginBtn.click()
        await this.click(this.loginBtn)
    }

    async clickSignOut() {
        // await this.signOut.click()
        await this.click(this.signOut)
    }

    async signOutIsDisplayed() {
        // expect(await this.signOut.isDisplayed()).toBe(true) 
        await this.assertTrue(this.signOut)
    }
       
    
}
