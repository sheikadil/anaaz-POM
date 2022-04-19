import { browser, by, element } from "protractor";
import { CommonFunctions } from "../../letbase/common/commonFunctions";

export class Common extends CommonFunctions{

    private toast = element(by.xpath("//div[@role='alertdialog']"))

    async validateToast(message: string) {
        let maxTime = 1000;
        let ec = browser.ExpectedConditions;
        this.assertTrue(this.toast);
        this.assertText(this.toast,message);
        this.inVisibilityOf(this.toast)
        // await browser.wait(ec.visibilityOf(this.toast), maxTime);
        // expect(await this.toast.isDisplayed()).toBe(true)
        // expect(await this.toast.getText()).toBe(message)
        // await browser.wait(ec.invisibilityOf(this.toast), maxTime);
        
    }
}
