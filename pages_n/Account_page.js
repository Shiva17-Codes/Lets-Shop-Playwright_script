class accountpage{
    constructor(page)
    {
        this.page=page;
        this.btncont=page.locator('.btn.btn-primary');
        
////a[@data-qa="continue-button"]
    }
    async cont_fun()
    {
        await this.btncont.click();
    }
    

}
module.exports={accountpage}