//LoginPage.js
exports.LoginPage = class LoginPage {

    constructor(page, selectors) {
        this.page = page
        this.selectors = selectors
        this.username_button = page.locator(`//input[@placeholder='${this.selectors.username}']`)
        this.password_button = page.locator(`//input[@placeholder='${this.selectors.password}']`)
        this.login_button = page.locator(`//button[contains(text(), '${this.selectors.login}')]`)
    }

    async goto() {
        await this.page.goto('https://automationintesting.online/#/admin')
    }

    async login(username, password) {
        await this.username_button.fill(username)
        await this.password_button.fill(password)
        await this.login_button.click()

    }
}