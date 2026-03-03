//Exporting modules
//We export modules so that we can use/utilise them in other files/modules in our program
export const calculator = (x,y)=>{
    let difference= x-y
    
    console.log("The difference of the two numbers is: ",difference)
}
console.log("========================================")
 export const simpleInterest = (p,r,t)=>{
 let si = (p*r*t)/100
 console.log("The simple interest is: ",si)
 }

 console.log("========================================")
const BMI = (weight,height)=>{
 let Answer = weight/(height**2)
 console.log("The BMI is: ",Answer, "kg/m\u00B2")
 };
 export{BMI}

console.log("========================================")
