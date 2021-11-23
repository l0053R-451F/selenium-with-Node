// tab.findElement(swd.By.css(".agP.aFw"))

require("selenium-webdriver/firefox");
  
// Include selenium webdriver
let swd = require("selenium-webdriver");
let browser = new swd.Builder();
let tab = browser.forBrowser("firefox").build();
  
// Get the credentials from the JSON file
let {email, pass} = require("./credential.json");
  
// Step 1 - Opening the geeksforgeeks sign in page
let tabToOpen =
    tab.get("https://mail.google.com/mail/u/0/#inbox?compose=new");
tabToOpen
    .then(function () {
  
        // Timeout to wait if connection is slow
        let findTimeOutP =
            tab.manage().setTimeouts({
                implicit: 20000, // 20 seconds
            });
        return findTimeOutP;
    })

    .then(function(){
        tab.findElement(swd.By.css(".agP.aFw")).click();
    })