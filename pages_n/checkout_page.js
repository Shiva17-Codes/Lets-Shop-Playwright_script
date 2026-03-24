class checkout{
    constructor(page)
    {
        this.page=page;
        this.btncheck=page.locator("//a[normalize-space()='Proceed To Checkout']");
        this.btnloginreg=page.locator("//u[normalize-space()='Register / Login']");
        
////a[@data-qa="continue-button"]
    }
    async checkout_fun()
    {
        await this.btncheck.click();
    }
     async check_con()
    {
        await this.btnloginreg.click();
    }

}
module.exports={checkout}