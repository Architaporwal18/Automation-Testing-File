const expectChai = require('chai').expect

describe('UI Controls Test Suite',async()=>{



xit('UI Controls',async()=>{
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
    await $("input[name='username']").setValue("rahulshettyacademy")
    await $("//input[@type = 'password']").setValue("learning")
    //await $("#signInBtn").click()
    
    //what if there is multiple elements = $$
    // const radioButton = await $$('.radiotextsty')
    // const userDropDown = await radioButton[1]
    // await userDropDown.click()
    // await browser.pause(4000)

    //if elements have no class then we use its parents class
    
    const radioButton = await $$('.customradio')
    const userDropDown = await radioButton[1]
    await userDropDown.$('span').click()
    
    const modal = await $(".modal-body")
    await modal.waitForDisplayed()
    await $("#cancelBtn").waitForClickable()
    await $("#cancelBtn").click()
    console.log( await radioButton[0].$("span").isSelected())
    
    await userDropDown.$("span").click()
    await modal.waitForDisplayed()
   // await $('#okayBtn').click()
    await $("#okayBtn").waitForClickable()
    await $('#okayBtn').click()
    
 

     await radioButton[0].$("span").click()
     console.log(await expect(modal).not.toBeDisplayed())

     const dropdown = await $("select.form-control")
     await dropdown.selectByAttribute('value','teach')
    //  await browser.pause(3000)
     await dropdown.selectByVisibleText('Consultant')
    //  await browser.pause(3000)
     await dropdown.selectByIndex(0)
     await browser.pause(3000)
     console.log(await dropdown.getValue())


    expectChai(await dropdown.getValue()).to.equal("stud")

})


    xit("Dynamic Dropdown Control Smoke",async()=>{

        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $("#autocomplete").setValue("ind")
        await browser.pause(3000)
        const items = await $$("[class ='ui-menu-item'] div")
        for(var i=0;i<items.length;i++){
            if(await items[i].getText() === "India"){
                await items[i].click()
                await browser.pause(2000)
            }
        }
    })

    it("Checkbox Identification",async()=>{
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        const elems = $$("input[type = 'checkbox']")
        await elems[1].click()
        console.log(await elems[1].isSelected())
        console.log(await elems[2].isSelected())
        await browser.saveScreenshot("screenshot.png")
    })

})

