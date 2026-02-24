const {test , expect }=require("@playwright/test")
 
 
async function selectdate(page)
{
     await page.locator("#datepicker").click();
     await page.locator("//*[@id='ui-datepicker-div']/div/div/span[1]");
     await page.locator("//*[@id='ui-datepicker-div']/div/div/span[2]");
     await page.locator("//*[@id='ui-datepicker-div']/table/tbody/tr[2]/td[1]").click();
}    
 
test("Test Automation ",async({page})=>{
 
    await page.goto("https://testautomationpractice.blogspot.com/");
    const pagetitle=await page.title();
    console.log(pagetitle);
 
        //validation of title
        await expect(page).toHaveTitle("Automation Testing Practice");
 
   
 
    //Fill the detail
    await page.getByPlaceholder('Enter Name').pressSequentially("shiva", { delay : 150});
    await page.locator("#email").pressSequentially("shivasingh@1234gmail.com", {delay : 150});
    await page.locator('id=phone').pressSequentially("9016405909", { delay : 150});
 
    await page.locator('//textarea[@id="textarea"]').pressSequentially("Sai Darshan, gundlav , valsad ",{ delay : 150});
 
    //selecting radio button
    await page.getByRole('radio', { name:'female'}).check();
    await page.getByRole('radio', { name:'Male',exact:true}).check();
 
 
    //selecting single check box at time
    //await page.getByRole('checkbox', { name:'sunday'}).check();
   
    //selecting all checkbox at same time
  /*  const prod_title= await page.$$("#post-body-1307673142697428135 input[pressSequentially='checkbox']");
    const len=await prod_title.length;
    console.log(len);
           
        for(const prod of prod_title )
        {
             await prod.check();
               
        }
*/
        //selecting multiple check box at same time;
       const mul_prod= ['#sunday','#monday'];
 
       for(const locators of mul_prod)
       {
            await page.locator(locators).check();
       }
       
       //Unselecting multiple check box at same time
        for(const locators of mul_prod)
        {
            if(await page.locator(locators).isChecked())
            {
                 await page.locator(locators).uncheck();
            }
        }
 
    await page.waitForTimeout(2000);
 
    //select the country
    const coun_try= await page.locator("//select/option[@value='uk']").textContent();
    console.log(coun_try);
    await page.selectOption("#country","uk");
   
    //clicking the dorpdown the color and you also can do with selectoption
    //await page.selectOption("#colors","white");
    await page.locator("//select[@id='colors']/option[2]").click();
    const color_p=await page.locator("//select[@id='colors']/option[2]").textContent();
    console.log(color_p);
 
    //Selectoption the dropdown in sort list
    await page.selectOption("#animals",["cheetah","rabbit"]);
 
    //selecting the date by filling
    //await page.locator("id=datepicker").pressSequentially("12/12/2025");
     //await page.locator("#datepicker").click();
   
     //selecting date by function(month start with 0-11)
    await selectdate(page);   
   
    //pick the date by using the calender
    await page.locator("#txtDate").click();
    await page.selectOption("//select[@data-handler='selectYear']",'2017');
    await page.locator("//select[@data-handler='selectMonth']").selectOption("4");
    await page.locator("//*[@id='ui-datepicker-div']/table/tbody/tr[3]/td[3]/a").click();


    //await page.getByPlaceholder("Start Date").fill("11/11/2026");
    await page.locator("#start-date").pressSequentially("11/11/2026", {delay : 150});
    await page.locator("#end-date").pressSequentially("11/20/2026", {delay : 150});
 
    
       //clicking the submit button to check
       await page.locator(".submit-btn").click();
       const lab1= await page.locator("id=result");
       const lab_v=await lab1.textContent();
       console.log(lab_v);
       //validation of date range
       await expect(lab1).toHaveText("You selected a range of 9 days.")
 
       //clicking on the home link
       // await page.locator("//div[@id='blog-pager']/a").click();
 
       //clicking on the link go the other page
       const pagePromise = page.context().waitForEvent('page');   //i am expecting a new page is open 
       const newpage=await page.getByRole('link',{name:'Comments (Atom)'}).click();    //the link open a new tab
       const newPage = await pagePromise;   //capture the newly opened tab 
 
       await newPage.waitForLoadState(); //  ensure it's loaded
       await newPage.close();
   
     /*
       //Enabling the alert box 
       await page.on("dialog",async dialog=>{

               await expect(dialog.type()).toContain("alert");
               await expect(dialog.message()).toContain("I am an alert box!");
               await dialog.accept();


       })

       await page.locator("#alertBtn").click();  
       */
      /*
        //Enabling the Confirmation  box 
       await page.on("dialog",async dialog=>{

               await expect(dialog.type()).toContain("confirm");
               await expect(dialog.message()).toContain("Press a button!");
               await dialog.accept();   //close the alert with ok button
               //await dialog.dismiss();   //close the alert with cancel button


       })

       await page.locator("#confirmBtn").click();
       await expect(page.locator('#demo')).toHaveText("You pressed OK!");
     */

       //Enabling the prompt  box 
       await page.on("dialog",async dialog=>{

               await expect(dialog.type()).toContain("prompt");
               await expect(dialog.message()).toContain("Please enter your name:");
               await expect(dialog.defaultValue()).toContain("Harry Potter");
               await dialog.accept("shiva");   //close the alert with ok button
               //await dialog.dismiss();   //close the alert with cancel button


       })

       await page.locator("#promptBtn").click();
       await expect(page.locator('#demo')).toHaveText("Hello shiva! How are you today?");
 


 
      
})