const {Builder,By,Key, util} = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
async function example(){
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://facebook.com/");
    //await driver.findElement(By.name("q")).sendKeys("Selenium",Key.RETURN);
    // let username = wait.until(presence_of_element_located((By.XPATH, "//input[@id='email']")));
    // username.send_keys("Asif");

}

example();