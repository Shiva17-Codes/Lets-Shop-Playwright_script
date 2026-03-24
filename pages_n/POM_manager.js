const {registration}=require('./Registration');
const {home_page}=require('./Home_page');
const {Loginuser}=require('./Login');
const {accountpage}=require('./Account_page');
const {checkout}=require('./checkout_page');

class POM_manager_s{
    constructor(page)
        {
            this.page=page;
            this.registration_pom=new registration(this.page);
            this.home_pom=new home_page(this.page);
            this.login_pom=new Loginuser(this.page);
            this.checkout_pom=new checkout(this.page);
            this.account_pom=new accountpage(this.page);
        }

        getregistration()
        {
            return this.registration_pom;
        }
         gethome()
        {
            return this.home_pom;
        }
         getloginuser()
        {
            return this.login_pom;
        }
         getaccount()
        {
            return this.account_pom;
        }
         getcheckout()
        {
            return this.checkout_pom;
        }
}
module.exports={POM_manager_s}