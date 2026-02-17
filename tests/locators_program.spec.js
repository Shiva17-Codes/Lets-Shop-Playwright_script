
 const {test , expect} = require("@playwright/test");

test('Locator element', async({page})=>{

    await page.goto("https://www.demoblaze.com/");
    const pagetitle=await page.title();
    console.log(pagetitle);

    //click on the login 
    await page.locator('id=login2').click();

    //filling the username field --css
    //await page.locator('#loginusername').fill("shiva122singh");
    await page.fill('#loginusername','shiva122singh');
   


    //await page.locator("#loginpassword").fill("12345678");
    await page.fill("#loginpassword","12345678");


    //Clicking on the login button
    await page.locator("button[onclick='logIn()']").click();

   const welcome_title=await page.locator("//a[@id='nameofuser']");
   //only verify the page

         await expect(welcome_title).toBeVisible();

//getting the text and verify the page
const wel=await welcome_title.textContent();
console.log(wel);
await expect(wel).toContain('Welcome shiva122singh');







})