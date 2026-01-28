const expectChai = require("chai").expect
describe('Functional Testing on Application',()=>{

    it('Scrolling and Mouse hover',async()=>{
        // browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        // await $("#mousehover").scrollIntoView()
        // await browser.pause(3000)
        // await $("#mousehover").moveTo()
        // await $("=Top").click()
        // await browser.pause(3000)

        await browser.url("https://only-testing-blog.blogspot.com/2014/09/selectable.html")
        // await $("button").doubleClick()
        // console.log(await browser.isAlertOpen())
        // // expectChai(await browser.isAlertOpen()).to.be.true
        // expectChai(await browser.getAlertText()).to.equal("You double clicked me.. Thank You..")
        // await browser.acceptAlert()
        // await browser.pause(3000)
        await browser.waitUntil(async () => await browser.isAlertOpen(), {
            timeout: 5000,
            timeoutMsg: 'Alert did not appear'
        });

        const text = await browser.getAlertText();
        await browser.acceptAlert();
        console.log(text);

    })
})
