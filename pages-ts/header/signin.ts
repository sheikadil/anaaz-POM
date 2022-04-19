import { by, element } from "protractor"
import { CommonFunctions } from "../../letbase/common/commonFunctions"


export class SignIn extends CommonFunctions{

    // signBtn = element(by.linkText("Log in"))
    private emailInput = element(by.name("email"))
    private passwordInput = element(by.name("password"))
    private loginBtn = element(by.buttonText("LOGIN"))

    async enterEmail(email: string) {
        // await this.emailInput.sendKeys(email)
        await this.clearAndType(this.emailInput,email)
    }

    async enterPassword(password: string) {
        // await this.passwordInput.sendKeys(password)
        await this.clearAndType(this.passwordInput,password);
    }

    async clickLogin() {
        // await this.loginBtn.click()
        await this.click(this.loginBtn);
    }
}
