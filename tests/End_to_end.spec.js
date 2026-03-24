const {test,expect}=require('@playwright/test');
const {POM_manager_s}=require('../pages_n/POM_manager');
const { home_page } = require('../pages_n/Home_page');
require('dotenv').config();
const j_data=JSON.parse(JSON.stringify(require('../util/reg_data.json')));

test("End to End testing",async({page})=>{

    const pomanager=new POM_manager_s(page);
    const regtest=pomanager.getregistration()

    await regtest.gotourl();

     //Verify that home page is visible successfully
     const title_page=await page.title();
     await expect(title_page).toContain("Automation Exercise");

     const home_prod=pomanager.gethome()
     await home_prod.prod_fun();
     

     await expect(page.locator("//li[@class='active']")).toBeVisible();

     

     await page.locator("//a[normalize-space()='Proceed To Checkout']").click();
     await page.locator("//u[normalize-space()='Register / Login']").click();

    //  const check_page=pomanager.getcheckout();
    //  await check_page.cont_fun();

    
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

    const account_page1 = pomanager.getaccount();

    //  await account_page.cont_fun1();
    await page.locator('//a[@data-qa="continue-button"]').click();

      const log_user=await page.locator("//li[10]//a[1]").textContent();
    // console.log(log_user);

    // Verify that 'Logged in as username' is visible
    await expect(log_user).toContain(" Logged in as ");

    await page.locator("//body[1]/header[1]/div[1]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[3]/a[1]").click();
    await page.locator("//a[normalize-space()='Proceed To Checkout']").click();

    await expect(page.locator("ul[id='address_delivery'] li[class='address_firstname address_lastname']")).toBeVisible();

    await page.locator("//textarea[@name='message']").fill("shasughwlehjg;as;df");

    await page.locator("//a[normalize-space()='Place Order']").click();
    

    await page.locator("//input[@name='name_on_card']").fill("sbi");
    await page.locator("//input[@name='card_number']").fill("1234556798765");
    await page.locator("//input[@placeholder='ex. 311']").fill("jhsdfg");
    await page.locator("//input[@placeholder='MM']").fill("11");
    await page.locator("//input[@placeholder='YYYY']").fill("2022");
    await page.locator("//button[@id='submit']").click();
    
    await expect(page.locator("div[class='col-sm-9 col-sm-offset-1'] p")).toHaveText("Congratulations! Your order has been confirmed!");

     await account_page1.cont_fun();
    await page.locator("a[href='/delete_account']").click();
    //Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
     await expect(page.locator("h2[class='title text-center'] b")).toHaveText("Account Deleted!");
    await account_page1.cont_fun();
         
});