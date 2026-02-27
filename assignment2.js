let distance = -8

if(distance<=100 && distance>=0){
    console.log("Pay 5 USD")
}
else if (distance >100 && distance <= 500){
    console.log("Pay 10 USD")
}
else if (distance > 500 && distance<=1000 ){
    console.log("Pay 20 USD")
}
else if(distance>1000){
    console.log("Pay 40 USD")
}
else {
    console.log("Invalid Distance")
}