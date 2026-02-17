const {test , expect }=require("@playwright/test")

test('Testtitle', async({page})=>{
   await page.goto("https://www.saucedemo.com/");

   const pagetitle=await page.title();
   console.log(pagetitle);

   //login the page
   await page.locator("id=user-name").fill("standard_user"); 
   await page.locator("id=password").fill("secret_sauce");

   await page.locator("id=login-button").click();

   //validate the login succefully
   const tit=await page.locator("//span[@class='title']");
   //console.log(tit);
   await expect(tit).toBeVisible();


      //Adding product to the cart 
     await page.locator("id=add-to-cart-sauce-labs-backpack").click();
      
      //Click on the cart page;
     await page.locator("id=shopping_cart_container").click();
      const cart_page=await page.locator("//span[@class='title']");
      await expect(cart_page).toBeVisible();

      //click on the 
     await page.locator("id=checkout").click();
     const checkout=await page.locator("//span[@class='title']");
      await expect(checkout).toBeVisible();


     //await page.locator("id=add-to-cart-sauce-labs-backpack").click();

      await page.locator("id=first-name").fill("shiva"); 
      await page.locator("id=last-name").fill("singh");
      await page.locator("id=postal-code").fill("396001");
      
      await page.locator("id=continue").click();

      
      await page.locator("id=finish").click();

      const success=await page.locator(".complete-header");
      const successful=await success.textContent();
      console.log(successful);
      await expect(success).toBeVisible();





      







   //page.pause();


})