const {test,expect}=require('@playwright/test');
const {POM_manager_s}=require('../pages_n/POM_manager');
const { home_page } = require('../pages_n/Home_page');
require('dotenv').config();
const j_data=JSON.parse(JSON.stringify(require('../util/reg_data.json')));


test.only("Registration with valid Testing",async({page})=>{

    const pomanager=new POM_manager_s(page);
    const regtest=pomanager.getregistration()

    await regtest.gotourl();

     //Verify that home page is visible successfully
     const title_page=await page.title();
     await expect(title_page).toContain("Automation Exercise");

    const reg_prod=pomanager.gethome();
    await reg_prod.sign_login();
    await expect(page.locator("//div[@class='signup-form']//h2")).toHaveText("New User Signup!");

    const home_page=pomanager.getloginuser();
    //const name1="shiva";
    await home_page.sign_up(j_data.f_name,process.env.email_ID);

    //Verify that 'ENTER ACCOUNT INFORMATION' is visible
     //const entera_acc=await page.locator('//div[@class="login-form"]//b').nth(0).textContent();
     await expect(page.locator('//div[@class="login-form"]//b').nth(0)).toBeVisible("Enter Account Information");

    // //verify the email id 
    await expect(page.locator('//input[@id="email"]')).toBeVisible(process.env.email_ID);

    regtest.filldetail(j_data.f_name,process.env.password_env,j_data.ex_date,j_data.ex_month,j_data.ex_year);


    await page.waitForTimeout(1000);

    //Fill address information
    await regtest.address_information(j_data.f_name,j_data.l_name,j_data.company,j_data.address_1,j_data.address_2,j_data.country_n,j_data.state_name,j_data.city_name,j_data.pincode,j_data.mobile_no);

    // //Verify that 'ACCOUNT CREATED!' is visible
    await expect(page.locator("//h2[@class='title text-center']// b")).toHaveText("Account Created!");

     const account_page=pomanager.getaccount();
     await account_page.cont_fun();

     const log_user=await page.locator("//li[10]//a[1]").textContent();
    // console.log(log_user);

    // Verify that 'Logged in as username' is visible
    await expect(log_user).toContain(" Logged in as ");
    
    
    await page.locator("a[href='/delete_account']").click();
    //Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
     await expect(page.locator("h2[class='title text-center'] b")).toHaveText("Account Deleted!");
    // await page.locator('//a[@data-qa="continue-button"]').click();
    await account_page.cont_fun();
    
    // await page.waitForTimeout(2000);



});


test("Registration with invalid Testing",async({page})=>{
    const pomanager=new POM_manager_s(page);
    const regtest=pomanager.getregistration()

    await regtest.gotourl();

     //Verify that home page is visible successfully
     const title_page=await page.title();
     await expect(title_page).toContain("Automation Exercise");

    const reg_prod=pomanager.gethome();
    await reg_prod.sign_login();
    await expect(page.locator("//div[@class='signup-form']//h2")).toHaveText("New User Signup!");
    const home_page=pomanager.getloginuser();

    await home_page.sign_up(j_data.f_name,process.env.email_ID);

    // Verify error 'Email Address already exist!' is visible
    await expect(page.locator('//p[@style="color: red;"]')).toHaveText("Email Address already exist!");

});