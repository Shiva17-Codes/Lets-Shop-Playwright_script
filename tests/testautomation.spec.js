//

const {test , except, expect }=require("@playwright/test")


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

   //const tt=await page.getByTitle("//div[@id=header-inner]/div/h1");

   //await expect(page).toHaveTitle('Automation Testing Practice');
/*

   await page.getByPlaceholder('Enter Name').type("shiva", { delay : 150});
   await page.locator("#email").type("shivasingh@1234gmail.com", {delay : 150});
   await page.locator('id=phone').type("9016405909", { delay : 150});

   await page.locator('//textarea[@id="textarea"]').type("Sai Darshan, gundlav , valsad ",{ delay : 150});

   await page.getByRole('radio', { name:'female'}).check();
    await page.getByRole('radio', { name:'Male',exact:true}).check();
    //selecting single check box at time
    //await page.getByRole('checkbox', { name:'sunday'}).check();
    
        //selecting all checkbox at same time
       const prod_title= await page.$$("#post-body-1307673142697428135 input[type='checkbox']");
        const len=await prod_title.length;
        console.log(len);
           
            for(const prod of prod_title )
            {
               await prod.check();
                
            }

        //selecting multiple check box at same time;
     /*   const mul_prod= await page.$$("//div/input[@type='checkbox']");
        const len=await mul_prod.length;
        console.log(len);
        
        for(var i=0;i<=len-1;i++)
        {
            //console.log("shiva")
            if( == mul_prod)
            {
                await page.check();
            }
        }*/





        //select the country
       // const coun= await page.locator("#country");
        await page.selectOption("#country","uk");
        


     const coun_try= await page.locator("//select/option[@value='uk']").textContent();
        console.log(coun_try);

    
    //clicking the dorpdown the color and you also can do with selectoption
    // await page.selectOption("#color","red");
    await page.locator("//select[@id='colors']/option[2]").click();
    const color_p=await page.locator("//select[@id='colors']/option[2]").textContent();
    console.log(color_p);


    //Selectoption the dropdown in sort list 
    await page.selectOption("#animals","cheetah");


    //selecting the date by filling 
    //await page.locator("id=datepicker").type("12/12/2025",{delay : 150 });
     //await page.locator("#datepicker").click();
    
     //month start with 0-11
       await selectdate(page);


       
    
    //pick the date by using the calender

    await page.locator("#txtDate").click();
    await page.selectOption("//select[@data-handler='selectYear']",'2017');
    await page.locator("//select[@data-handler='selectMonth']").selectOption("4");
    await page.locator("//*[@id='ui-datepicker-div']/table/tbody/tr[3]/td[3]/a").click();

        //RANGE
       await page.locator("#start-date").evaluate(e=>e.showPicker());
       await page.keyboard.press('ArrowRight')
       await page.keyboard.press('ArrowDown');
       await page.keyboard.press('Enter')
    

       await page.locator("#end-date").evaluate(e=>e.showPicker());
       await page.keyboard.press('ArrowRight');
       await page.keyboard.press('ArrowRight');
       await page.keyboard.press('ArrowDown');
       await page.keyboard.press('Enter');


       await page.locator(".submit-btn").click();
       const lab1= await page.locator("id=result");
       const lab_v=await lab1.textContent();
       console.log(lab_v);

    //    await expect(lab1).toHaveText("You selected a range of 1 days.");


       await page.locator("//div[@id='blog-pager']/a").click();


       
    //    await page.getByRole('link',{name:'Comments (Atom)'}).click()

        // await page.goto('https://testautomationpractice.blogspot.com/');
})


