class home_page{
    constructor(page)
    {
        this.page=page;
        this.sign_log=page.locator("a[href='/login']");
        this.btnlogout=page.locator("a[href='/logout']");

        this.prod1= page.locator("[data-product-id='1']").nth(0);
        this.btncon= page.locator("//button[normalize-space()='Continue Shopping']");
     
         this.btncart= page.locator("//body[1]/header[1]/div[1]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[3]/a[1]");

    }
    async sign_login()
    {
            await this.sign_log.click();
    }
    async logout_fun()
    {
            await this.btnlogout.click();
    }

    async prod_fun()
    {
           // await this.prod1.scrollIntoViewIfNeeded();
            await this.prod1.click();
            await this.btncon.click();
            await this.btncart.click();
    }

    
}
module.exports={home_page}