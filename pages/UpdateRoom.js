////UpdateRoom.js
const { expect } = require("@playwright/test")

exports.UpdateRoom = class UpdateRoom {

    constructor(page, selectors) {
        this.page = page
        this.selectors = selectors
        this.roomDetails = page.locator('p[id^="roomName"]')
        this.edit_button = page.locator(`//button[contains(text(), '${this.selectors.editButton}')]`)
        this.roomNo = page.locator("//input[@id='roomName']")
        this.roomType = page.locator("//select[@id='type']")
        this.roomPrice = page.locator("//input[@id='roomPrice']")
        this.refreshments = page.locator("//input[@id='refreshCheckbox']")
        this.description = page.locator("//textarea[@id='description']")
        this.update_button = page.locator(`//button[contains(text(), '${this.selectors.updateButton}')]`)
        this.rooms_button = page.locator(`//a[contains(text(), '${this.selectors.roomsButton}')]`)
        this.error_message = page.locator("//div[@class='alert alert-danger']") //Negative Test

    }

    async updateroom() {
        const roomNameElements = await this.page.locator('p[id^="roomName"]').elementHandles();
        for (const element of roomNameElements) {
            const textContent = await element.textContent();
            if (textContent.includes('106')) {
                await element.click();
                break;
            }
        }
        await this.edit_button.click()
        await this.roomNo.clear() //Negative Test
        await this.roomPrice.clear() //Negative Test
        await this.update_button.click() //Negative Test
        const errortext = await this.error_message.textContent() //Negative Test
        console.log("Error Message is:" + errortext)
        await this.roomNo.fill('107')
        await this.roomType.selectOption({ label: 'Single' })
        await this.roomPrice.fill('800')
        await this.refreshments.click()
        await this.description.fill('Test for Myra')
        await this.update_button.click()
        await this.rooms_button.click()

    }

    async validate_updateroom() {
        const roomNameElements = await this.page.locator('p[id^="roomName"]').elementHandles()
        for (const element of roomNameElements) {
            const textContent = await element.textContent();
            if (textContent.includes('107')) {
                console.log('Found room with name 107');
                break;
            } else {
                console.log('Room name does not contain 107');
            }
        }
    }
}