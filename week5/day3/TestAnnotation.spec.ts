import test, { expect } from '@playwright/test'

test("Test Method",async({page})=>{

    await page.goto("https://www.amazon.com")
    const title= await page.title()
    console.log(title)
})


// test.only("Test  only ",async({page})=>{

//     await page.goto("https://login.salesforce.com/?locale=in")
//     const title= await page.title()
//     console.log(title)
// })

test.skip("Test Skip",async({page})=>{
    await page.goto("https://www.facebook.com")
}
)



test.fail("Non Retry assertion",async({page})=>{

    test.info().annotations.push({type:'author',description:'Dilip'},
        {type:'smoke testing',description:'check Login function'})

        await page.goto("https://www.leafground.com/input.xhtml")
        const title=await page.title()
        console.log(title)
         expect(title).toBe("Input Components")

        console.log("After Assertion")
})

test.fixme("test fixme",async({page})=>{

        await page.goto("https://www.leafground.com/input.xhtml")
        const title=await page.title()
        console.log(title)
         expect(title).toBe("Input Components")

        console.log("After Assertion")
})