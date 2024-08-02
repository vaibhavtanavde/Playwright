//CreateRoom.js
const { expect } = require("@playwright/test")

exports.CreateRoom = class CreateRoom {

  constructor(page, selectors) {
    this.page = page
    this.selectors = selectors
    this.roomNo = page.locator("//input[@id='roomName']")
    this.roomType = page.locator("//select[@id='type']")
    this.accessible = page.locator("//select[@id='accessible']")
    this.roomPrice = page.locator("//input[@id='roomPrice']")
    this.wifi = page.locator("//input[@id='wifiCheckbox']")
    this.tv = page.locator("//input[@id='tvCheckbox']")
    this.safe = page.locator("//input[@id='safeCheckbox']")
    this.create_button = page.locator(`//button[contains(text(), '${this.selectors.createButton}')]`)
    this.error_message = page.locator("//div[@class='alert alert-danger']") //Negative Test

  }

  async createroom() {
    await this.create_button.click() //Negative Test
    const errortext = await this.error_message.textContent() //Negative Test
    console.log("Error Message is:" + errortext)
    await this.roomNo.fill('106')
    await this.roomType.selectOption({ label: 'Family' })
    await this.accessible.selectOption({ label: 'true' })
    await this.roomPrice.fill('700')
    await this.wifi.click()
    await this.tv.click()
    await this.safe.click()
    await this.create_button.click()

  }

  async validate_room() {
    const roomNameElements = await this.page.locator('p[id^="roomName"]').elementHandles()
    for (const element of roomNameElements) {
      const textContent = await element.textContent();
      if (textContent.includes('106')) {
        console.log('Found room with name 106');
      } else {
        console.log('Room name does not contain 106');
      }
    }
  }
}