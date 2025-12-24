import { test, expect } from '@playwright/test';
const { POManager } = require('../pageobjects/POManager');
//Json->string->js object
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")));



for (const data of dataset) {
  test(`@Login Login testfor ${data.username}`, async ({ page }) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(data.username, data.password);



  });
}