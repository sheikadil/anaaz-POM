import { browser, element, ElementFinder, protractor, ProtractorExpectedConditions } from "protractor";

export class ProtractorBase {

    private ec: ProtractorExpectedConditions = browser.ExpectedConditions;
    private timeOut = 30000;

    /**
     * @description - This function is used to do the click action
     * @param element - The Element to be clickable
     */
    public async click(element: ElementFinder) {
        await browser.wait(this.ec.elementToBeClickable(element),this.timeOut,"Failed to Identify Element")
        await element.click();
    }

    /**
     * @description - This function will entered the value in the element 
     * @param element - Pass the element locator
     * @param value - data to be entered in the element textbox
     */

    public async type(element: ElementFinder,value: string) {
        await this.ec.visibilityOf(element)
        await element.sendKeys(value);
    }

    /**
     * @description - This function will clear the existing value and then entered the value in the element
     * @param element - Pass the element locatore
     * @param value - data to be entered in the element textbox
     */
    public async clearAndType(element: ElementFinder,value: string) {
        await this.ec.visibilityOf(element)
        await element.clear();
        await element.sendKeys(value);
    }

    public async assertText(element: ElementFinder,expectedText: string) {
        await this.ec.visibilityOf(element)
        let actualText = await element.getText();
        expect(actualText.trim()).toBe(expectedText);
    }

    public async assertTrue(element: ElementFinder) {
        await this.ec.visibilityOf(element)
        expect(await element.isDisplayed()).toBe(true);
    }

    public async assertFalse(element: ElementFinder) {
        await this.visibilityOf(element)
        expect(await element.isDisplayed()).toBe(false)
    }
    private async visibilityOf(element: ElementFinder) {
        await browser.wait(this.ec.visibilityOf(element), this.timeOut, "Element is not Visible");
    }

    protected async inVisibilityOf(element: ElementFinder) {
        await browser.wait(this.ec.invisibilityOf(element), this.timeOut, "Element is still Visible");
    }

    public async accpetAlert() {
        await this.waitForAlert();
        await (await browser.switchTo().alert()).accept();
    }

    
    private async waitForAlert() {
        await browser.wait(this.ec.alertIsPresent(), this.timeOut, "Alert is not present");
    }

    public async dismissAlert() {
        await this.waitForAlert();
        await (await browser.switchTo().alert()).dismiss();
    }

    public async typeInAlert(data: string) {
        await this.waitForAlert();
        await (await browser.switchTo().alert()).sendKeys(data);
    }

    public async getTextFromAlert(): Promise<string> {
        await this.waitForAlert();
        let alertText = await (await browser.switchTo().alert()).getText();
        return alertText
    }

    public async switchToFrame(frameNumber: number) {
        await browser.switchTo().frame(frameNumber)
    }

    public async typeAndTab(element: ElementFinder,data: string) {
        await this.visibilityOf(element);
        await element.clear();
        await element.sendKeys(data,protractor.Key.TAB)
    }

    
    public async typeAndEnter(element: ElementFinder,data: string) {
        let capabilities = await browser.getCapabilities();
        let platform = capabilities.get('platform');
        await this.visibilityOf(element);
        await element.clear();
        if(platform === "Mac OS X"){
            await element.sendKeys(data,protractor.Key.RETURN)
        }else {
            await element.sendKeys(data,protractor.Key.ENTER)
        }       
    }

    public async mouseHoverAndClick(element: ElementFinder) {
        this.ec.visibilityOf(element)
        await browser.actions()
            .mouseMove(await element.getWebElement())
            .click()
            .perform()
    }

    public async moveToElement(element: ElementFinder) {
        this.ec.visibilityOf(element)
        await browser.actions()
            .mouseMove(await element.getWebElement())
            .perform()
    }

   


}