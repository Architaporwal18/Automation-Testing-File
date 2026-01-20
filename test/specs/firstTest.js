describe('Ecommerce Application',async()=>{


xit('Login Page Fail', async()=>{


    await browser.url("https://www.instagram.com/")
    //console.log(await browser.getTitle())
    //await expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty Acadedemy"))

    // await $("input[id = 'name']").setValue("Archita Porwal")
    // await browser.pause(3000)
    // await $("#name").setValue("Niharika")
    // await browser.pause(3000)

    await $("input[name = 'username']").setValue("archiporwal_18")
    //  await browser.pause(3000)
     await $("input[name = 'password']").setValue("CiscoFY26PPT")
     
    
    // await password.setValue("1234567890")
     await browser.pause(3000)
     await $("button[type = 'submit']").click()
     await browser.pause(3000)
    //await console.log(await $("//[@class='Sorry, your password was incorrect. Please double-check your password.']").getText())

    const errorMsg = await $("//div[contains(text(),'password was incorrect')]");
    console.log(await errorMsg.getText());

})
it('Login Page Success',async()=>{
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
    await $("input[name='username']").setValue("rahulshettyacademy")
    await $("//input[@type = 'password']").setValue("learning")
    await $("#signInBtn").click()
    //await browser.pause(3000)

    await $(".btn-primary").waitForExist()
    await expect(browser).toHaveUrl(expect.stringContaining("shop"))
    await expect(browser).toHaveTitle("ProtoCommerce")

})





















})