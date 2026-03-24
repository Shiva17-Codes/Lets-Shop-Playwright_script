class registration{
    constructor(page)
    {
        this.page=page;
        
        
        this.reg_gender=page.locator('//div[@class="radio-inline"]//label').nth(0);
        this.reg_pass= page.locator('//input[@id="password"]');
        this.reg_date= page.locator('//select[@id="days"]');
        this.reg_month= page.locator('//select[@id="months"]');
        this.reg_year= page.locator('//select[@id="years"]');

        this.reg_new =page.getByRole('checkbox',{name:'Sign up for our newsletter!'});
        this.reg_receive= page.getByRole('checkbox',{name:'Receive special offers from our partners!'});

        this.reg_firname= page.locator('input[id="first_name"]');
        this.reg_lastname= page.locator('input[id="last_name"]');
         this.reg_company= page.locator('input[id="company"]');
        this.reg_add1= page.locator('input[id="address1"]');
        this.reg_add2= page.locator('input[id="address2"]');
        this.reg_country= page.locator('select[id="country"]');
        this.reg_state= page.locator('input[id="state"]');
        this.reg_city= page.locator('input[id="city"]');
        this.reg_zipcode= page.locator('input[id="zipcode"]');
        this.reg_mobile= page.locator('input[id="mobile_number"]');

        this.reg_btncreate= page.locator('button[data-qa="create-account"]');

        
    }

    async gotourl()
    {
         await this.page.goto("https://automationexercise.com/");
    }
    
    
    async filldetail(name,password,dates,months,years)
    {
            await this.reg_gender.check();
            //await this.user_name.clear();
           // await this.user_name.pressSequentially(name,{delay : 150});

           await this.reg_pass.fill(password);
           await this.reg_date.selectOption(dates);
           await this.reg_month.selectOption(months);
           await this.reg_year.selectOption(years);
           await this.reg_new.check();
           await this.reg_receive.check();
      
    }

    async address_information(firstname,lastname,company_name,reg_addre1,reg_addre2,country_n,state_name,city_name,zipcode,mobile_no)
    {
        await this.reg_firname.fill(firstname);
        await this.reg_lastname.fill(lastname);
        await this.reg_company.pressSequentially(company_name,{delay : 100});
        await this.reg_add1.fill(reg_addre1);
        await this.reg_add2.fill(reg_addre2);
        await this.reg_country.selectOption(country_n);
        await this.reg_state.fill(state_name);
        await this.reg_city.fill(city_name);
        await this.reg_zipcode.fill(zipcode);
        await this.reg_mobile.fill(mobile_no);
        await this.reg_btncreate.click();

    }
    

}
module.exports={registration}