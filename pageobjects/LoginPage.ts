import {test, expect,Locator,Page} from '@playwright/test';
import * as OTPAuth from "otpauth";


export class LoginPage {
    signInbutton : Locator;
    userName :Locator;
    password : Locator;
    authToken : Locator;
    continue : Locator;
    page : Page;

constructor(page:Page)
{
    this.page = page;
    this.signInbutton= page.locator("[name='action']"); 
    this.userName = page.locator("#username");
    this.password = page.locator("#password");
    this.authToken = page.getByRole('textbox', { name: 'Enter your one-time code' });
    this.continue= page.getByRole('button', { name: 'Continue' }) ;
    
}

async goTo()
{
    await this.page.goto("https://qahw.kandji.io");
}


async validLogin(username:string,password:string)
{
     
     await  this.userName.fill(username);
     await this.password.fill(password);
     await this.signInbutton.click();
     await this.page.waitForLoadState('networkidle');
     // Instantiate the TOTP class with the secret key from your environment variables
    let totp = new OTPAuth.TOTP({
        issuer: "Microsoft",
        label: process.env.MFA_USERNAME,
        algorithm: "SHA1",
        digits: 6,
        period: 30,
        secret: process.env.MFA_TOTP_SECRET, // Your secret key
    });
    // Generate the current code
     const code = totp.generate();
     await this.authToken.fill(code);
     await this.continue.click();
     await this.page.waitForTimeout(10000);
}

}
module.exports = {LoginPage};



