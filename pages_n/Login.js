
class Loginuser{
    constructor(page)
    {
        this.page=page;
        this.user_name=page.getByPlaceholder("Name");
        this.emailid=page.locator('//input[@name="email"]').nth(1);
        this.btnsignup=page.locator("button[data-qa='signup-button']");
        this.log_emailid=page.locator("input[placeholder='Email Address']").nth(0);
        this.log_password=page.locator("input[placeholder='Password']");
        this.btnlogin=page.locator("button[data-qa='login-button']");
        
    }
    async sign_up(name,email)
    {
            await this.user_name.pressSequentially(name,{delay : 100});
            await this.emailid.pressSequentially(email,{delay : 100});
            await this.btnsignup.click();
    }
   async login_in(email,password)
    {
            await this.log_emailid.pressSequentially(email,{delay : 100});
            await this.log_password.pressSequentially(password,{delay : 100});
            await this.btnlogin.click();
    }
}
module.exports={Loginuser}