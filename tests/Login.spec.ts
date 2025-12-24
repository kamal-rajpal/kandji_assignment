import { test, expect } from '@playwright/test';
const {POManager} = require('../pageobjects/POManager');
 //Json->string->js object
const dataset =  JSON.parse(JSON.stringify(require("../utils/TestData.json")));



for(const data of dataset)
{
 test(`@Login Login testfor ${data.username}`, async ({page})=>
 {
   const poManager = new POManager(page);
    //js file- Login js, DashboardPage
   //  const products = page.locator(".card-body");
     const loginPage = poManager.getLoginPage();
     await loginPage.goTo();
     await loginPage.validLogin(data.username,data.password);

  // await page.goto('https://qahw.kandji.io/devices?sort_by=&filter=%7B%7D&view_id=25535baf-31e4-427c-9e00-21cf970b5b42');
  // await page.getByRole('link', { name: 'devices Devices' }).click();
  // await page.getByRole('link', { name: 'library-grid-light Library' }).click();
  // await page.getByTestId('am-li-search').click();
  // await page.getByRole('link', { name: 'shield-halved Threats' }).click();
  // await page.getByRole('link', { name: 'shield-magnifying-glass-virus' }).click();
  // await page.getByRole('link', { name: 'wave-pulse Activity sparkles' }).click();
  // await page.getByRole('link', { name: 'bell Alerts' }).click();
  // await page.getByRole('link', { name: 'circle-plus Enrollment' }).click();
  // await page.getByRole('link', { name: 'Resources' }).click();
  // await page.getByText('Kamal Rajpal').click();
  // await page.locator('html').click();
  // const page1Promise = page.waitForEvent('popup');
  // await page.locator('html').click();
  // const page1 = await page1Promise;
  

 });
}