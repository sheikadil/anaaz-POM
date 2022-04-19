import { by, element } from "protractor"
import { CommonFunctions } from "../../letbase/common/commonFunctions"


export class SignUp extends CommonFunctions{

    private nameInput = element(by.id("name"))
    private emailInput = element(by.id("email"))
    private passwordInput = element(by.id("pass"))
    private agreeChkBx = element(by.id("agree"))
    private signUpBtn = element(by.buttonText("SIGN UP"))

    async enterName(name) {
        // await this.nameInput.sendKeys(name)
        await this.clearAndType(this.nameInput,name);
    }

    async enterEmail(email) {
        // await this.emailInput.sendKeys(email)
        await this.clearAndType(this.emailInput,email)
    }

    async enterPassword(password) {
        // await this.passwordInput.sendKeys(password)
        await this.clearAndType(this.passwordInput,password)
    }

    async clickAgree() {
        // await this.agreeChkBx.click()
        await this.click(this.agreeChkBx);
    }

    async clickSignUpBtn() {
        // await this.signUpBtn.click()
        await this.click(this.signUpBtn);
    }
}
