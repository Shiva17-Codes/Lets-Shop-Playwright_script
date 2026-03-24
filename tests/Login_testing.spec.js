const {test,expect}=require('@playwright/test');
const {POM_manager_s}=require('../pages_n/POM_manager');
const { home_page } = require('../pages_n/Home_page');
require('dotenv').config();

test.skip("Login with valid Testing",async({page})=>{

    const pomanager=new POM_manager_s(page);
    const regtest=pomanager.getregistration()

    await regtest.gotourl();

     //Verify that home page is visible successfully
     const title_page=await page.title();
     await expect(title_page).toContain("Automation Exercise");

    const reg_prod=pomanager.gethome();
    await reg_prod.sign_login();
    await expect(page.locator("//div[@class='signup-form']//h2")).toHaveText("New User Signup!");

    await page.locator("input[placeholder='Email Address'][value='shiva23@gmail.com']");

    const log_page=pomanager.getloginuser();
    await log_page.login_in(process.env.log_email,process.env.password_env);

     const log_user=await page.locator("//li[10]//a[1]").textContent();
    // console.log(log_user);

    // Verify that 'Logged in as username' is visible
    await expect(log_user).toContain(" Logged in as ");
    await page.locator("a[href='/delete_account']").click();
    //Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
     await expect(page.locator("h2[class='title text-center'] b")).toHaveText("Account Deleted!");
});



test("Login with invalid Testing",async({page})=>{

    const pomanager=new POM_manager_s(page);
    const regtest=pomanager.getregistration()

    await regtest.gotourl();

     //Verify that home page is visible successfully
     const title_page=await page.title();
     await expect(title_page).toContain("Automation Exercise");

    const reg_prod=pomanager.gethome();
    await reg_prod.sign_login();
    await expect(page.locator("//div[@class='signup-form']//h2")).toHaveText("New User Signup!");

    await page.locator("input[placeholder='Email Address'][value='shiva23@gmail.com']");

    const log_page=pomanager.getloginuser();
    await log_page.login_in(process.env.log_invalid,process.env.password_env);

    
     await expect(page.locator("//p[normalize-space()='Your email or password is incorrect!']")).toHaveText("Your email or password is incorrect!");
});