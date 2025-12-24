import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
// import {DashboardPage} from './DashboardPage';
import { Page } from '@playwright/test';

export class POManager {
    loginPage: LoginPage;
    homePage: HomePage;
    page: Page;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.homePage = new HomePage(this.page);

    }

    getLoginPage() {
        return this.loginPage;
    }

    getHomePage() {
        return this.homePage;
    }

}
module.exports = { POManager };