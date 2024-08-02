//ViewRoomList.js
const { expect } = require("@playwright/test")

exports.ViewRoomList = class ViewRoomList {

    constructor(page) {
        this.page = page
    }

    async validate_roomlist() {
        const roomNameElements = await this.page.locator('p[id^="roomName"]').elementHandles();
        const roomTypeElements = await this.page.locator('p[id^="type"]').elementHandles();
        const roomPriceElements = await this.page.locator('p[id^="roomPrice"]').elementHandles();

        const roomCount = roomNameElements.length;
        for (let i = 0; i < roomCount; i++) {
            const roomNotext = await roomNameElements[i].textContent();
            const roomTypetext = await roomTypeElements[i].textContent();
            const roomPricetext = await roomPriceElements[i].textContent();

            console.log(`Room No: ${roomNotext}, Type: ${roomTypetext}, Price: ${roomPricetext}`);
        }
    }
}