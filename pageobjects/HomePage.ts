import { test, expect, Locator, Page } from '@playwright/test';

export class HomePage {
    page: Page;
    search: Locator;
    devices: Locator;
    logo: Locator;
    alerts: Locator;



    constructor(page: Page) {
        this.page = page;
        this.logo = page.getByRole('img', { name: 'Kandji Logo' });
        this.search = page.getByText('Search');
        this.alerts = page.getByRole('heading', { name: 'Alerts' });
        this.devices = page.getByRole('link', { name: 'Devices' })

    }

    async verifyPageTitle() {
        const title = await this.page.title();
        console.log(`The page title is: ${title}`);
        // You can also use it in an assertion:
        expect(title).toBe('Kandji');
    }

    async verifyCompanyLogoVisible() {
        await expect(this.logo).toBeVisible();

    }

    async verifyAlltabsVisibility() {
        // All component visibility check
      //  await expect(this.alerts).toBeVisible();
        //await expect(this.search).toBeVisible();
    }


    async VerifyAlltabsClickable() {
        // all links are clickable
        await this.search.click();
        await this.page.locator('.c-fMtdhe').click();
        await this.devices.click();
    }

}
module.exports = { HomePage };
