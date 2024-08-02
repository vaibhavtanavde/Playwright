////DeleteRoom.js
const { expect } = require("@playwright/test")

exports.DeleteRoom = class DeleteRoom {

    constructor(page) {
        this.page = page
        this.roomListings = page.locator("//div[@data-testid='roomlisting']")

    }

    async deleteroom() {
        const roomListingCount = await this.roomListings.count();

        for (let i = 0; i < roomListingCount; i++) {
            const roomNameLocator = this.roomListings.nth(i).locator('p[id^="roomName"]');
            const roomNameText = await roomNameLocator.textContent();

            if (roomNameText.includes('107')) {
                const deleteButton = this.roomListings.nth(i).locator('span.fa.fa-remove.roomDelete');
                await deleteButton.click();
                console.log("Room Deleted suucessfully")
                break;
            }
        }
    }

    async validate_deleteroom() {
        const roomListingCount = await this.roomListings.count();
        let found = false;
        for (let i = 0; i < roomListingCount; i++) {
            const roomNameLocator = this.roomListings.nth(i).locator('p[id^="roomName"]');
            const roomNameText = await roomNameLocator.textContent();

            if (roomNameText.includes('107')) {
                found = true;
                break;
            }
        }
        expect(found).toBeFalsy();
        console.log("Deleted Room not found in List")
    }
}