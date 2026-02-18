const {test , expect }=require("@playwright/test")

test('End-to-End-testing', async({page})=>{
   await page.goto("https://www.saucedemo.com/");

   const pagetitle=await page.title();
   console.log(pagetitle);

   //login the page
   await page.locator("id=user-name").type("standard_user",{delay : 150}); 
   await page.locator("id=password").type("secret_sauce",{delay : 150});

   await page.locator("id=login-button").click();

            //validate the login succefully
            //await page.waitForTimeout(3000);
            const tit=await page.locator("//span[@class='title']");
            //console.log(tit);
            const tit_prd= await tit.textContent();
            console.log(tit_prd);
            await expect(tit).toBeVisible();


      //Adding product to the cart 
     await page.locator("id=add-to-cart-sauce-labs-backpack").click();
      
      //Click on the cart page;
     await page.locator("id=shopping_cart_container").click();
            //validate the cart page 
            const cart_pag=await page.locator("//span[@class='title']");
            //console.log(tit);
            const cart_p=await cart_pag.textContent();
            console.log(cart_p);
            await expect(cart_pag).toBeVisible();


      //click on the checkout button
      await page.locator("id=checkout").click();

               //Validate the checkout page is open
               const check_out=await page.locator("//span[@class='title']");
               //console.log(tit);
                const check_pg=await check_out.textContent();
                console.log(check_pg);
               await expect(check_out).toBeVisible();
                           


    
      //Enter the user detail in the page.
      await page.locator("id=first-name").type("shiva",{delay : 150}); 
      await page.locator("id=last-name").type("singh",{delay : 150});
      await page.locator("id=postal-code").type("396001",{delay : 150});
      await page.locator("id=continue").click();

            //validate the final page is open
            const finla_c=await page.locator("//span[@class='title']");
            //console.log(tit);
            const final_d=await finla_c.textContent();
            console.log(final_d);
            await expect(finla_c).toBeVisible();
                           

      //Click on finish button
      await page.locator("id=finish").click();


      //verify the order of product  is completed
      const success=await page.locator(".complete-header");
      const successful=await success.textContent();
      console.log(successful);
      await expect(success).toBeVisible();





      







   //page.pause();


})