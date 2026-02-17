//import {test,expect} from ("@playwright/tests")


const {test , expect }=require("@playwright/test");

test("Home page",async({page})=>{

    await page.goto("https://www.saucedemo.com/");
    const pagetitle=await page.title();
    console.log(pagetitle);

    await expect(page).toHaveTitle('Swag Labs');

    const pageurl= await page.url();

    console.log(pageurl);
    await expect(page).toHaveURL("https://www.saucedemo.com/");

    await page.close();






})