import test from '@playwright/test'

test("Multiple window",async({page,context})=>{

await page.goto("https://www.leafground.com/window.xhtml")

//create promise 
//do the action 
// resolve promise

//create promise

const [multipleWiondw]= await Promise.all([
    context.waitForEvent('page'),
    page.locator("//span[text()='Open Multiple']").click()
])
//count the window
const count=multipleWiondw.context().pages()
console.log(count.length)

// create variable to 2 child window -> transter the control to the child page
let webtable:any
let dashboard:any

for(let i=0;i<count.length;i++){
    const title=await count[i].title()
    if(title==='Web Table'){
        //control webtable -> resolve
        webtable=count[i]
    }else if(title==='Dashboard'){
        //control dashboard
        dashboard=count[i]
    }
}

 await webtable.locator("//input[@name='form:j_idt89:globalFilter']").fill("Japan")

 webtable.waitForTimeout(3000)
 //dashboard.locator("//input[@id='email']").fill("tl@gmail.com")

})