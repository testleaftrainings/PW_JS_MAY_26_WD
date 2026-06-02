//union -> OR condition (|)

let value:string|number|boolean
value='f'

let statusCode:number|string
statusCode=204 //(No content)
statusCode='No Content'

//intersection -> AND condition (&)
let val:string&number

//type alias -> custom type for data structure
type admin={adminId:string,password:string}
type customer={customerId:string,passwordcus:string}

type v=admin&customer

let user:v={
    adminId:'tl@56',
    password:'1234', 
    customerId:'tl@56',
    passwordcus:'1234'
}

console.log(user)
