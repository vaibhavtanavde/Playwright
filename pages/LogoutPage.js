////LogoutPage.js
exports.LogoutPage = class LogoutPage {

    constructor(page, selectors) {
        this.page = page
        this.selectors = selectors
        this.logout_button = page.locator(`//a[contains(text(), '${this.selectors.logoutButton}')]`)
    }


    async logout() {
        await this.logout_button.click()
    }
}