// Include the firefox driver
require("selenium-webdriver/firefox");
  
// Include selenium webdriver
let swd = require("selenium-webdriver");
let browser = new swd.Builder();
let tab = browser.forBrowser("firefox").build();
  
// Get the credentials from the JSON file
let {email, pass, username} = require("./credential.json");
  
// Step 1 - Opening the geeksforgeeks sign in page
let tabToOpen =
    tab.get("https://mail.google.com");


 function fE(arg){
    return tab.findElement(swd.By.xpath(arg));
}

function gEC(arg){
    return tab.findElement(swd.By.css(arg));
}
    tabToOpen
    .then(function () {
  
        // Timeout to wait if connection is slow
        let findTimeOutP =
            tab.manage().setTimeouts({
                implicit: 20000, // 20 seconds
            });
        return findTimeOutP;
    })
    .then(function() {
        // tab.findElement(swd.By.xpath('//*[@id="identifierId"]'));
        fE('//*[@id="identifierId"]');
    })
    .then(function(){
        //tab.findElement(swd.By.xpath('//*[@id="identifierId"]')).sendKeys(email);
        fE('//*[@id="identifierId"]').sendKeys(email);
    })
    .then(function(){
        //tab.findElement(swd.By.xpath('/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[2]/div/div[1]/div/div/button/span')).click();
        fE('/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[2]/div/div[1]/div/div/button/span').click();
    })
    
    .then(function(){
        setTimeout(() => {
            tab.findElement(swd.By.css(".whsOnd.zHQkBf")).sendKeys(pass);
        }, 2000);
    })
    .then(function(){
        setTimeout(() =>{
            fE('/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[2]/div/div[1]/div/div/button/span').click();
        }, 3500);
        // /html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[2]/div/div[1]/div/div/button/span
        // /html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[2]/div/div[1]/div/div/button/span
    })
    .then(function(){
        setTimeout(() => {
            fE('/html/body/div[7]/div[3]/div/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]').click();
        }, 10000);
    })
    .then(function(){
        setTimeout(() => {
           tab.findElement('#:dw').sendKeys(username);
        }, 11000);
    })


    //*[@id=":dw"]


    //*[@id=":dw"]