// const accountid = 123456
// let accountmail = "swainaditya921@gmail.com"
// var accountpass = "muna"

// console.table([accountid,accountmail,accountpass]);
// console.table([
//   { variable: 'accountid', value: accountid },
//   { variable: 'accountmail', value: accountmail },
//   { variable: 'accountpass', value: accountpass }
// ]);
// console.warn(acountid)


//********************************************************Quection of circle************************************ */

// let r = 16
// let R
// let pi = 22/7
// let smallcircle = Math.ceil(pi * r * r)
// // console.log(smallcircle)

// let bigcircle = Math.ceil(352 + smallcircle)

// // console.log(bigcircle)
//  R_power2 = bigcircle * 7/22
// //  console.log(R)
// R = Math.ceil(Math.sqrt(R_power2));
// //  console.log(rootOfR);
// let leanth_of_road = Math.ceil(R - r)
// console.log(leanth_of_road)
// console.table([
//   { variable: 'r', value: r },
//   { variable: 'R', value: R },
//   { variable: 'pi', value: pi },
//   { variable: 'smallcircle', value: smallcircle },
//   { variable: 'bigcircle', value: bigcircle },
//   { variable: 'R', value: R },
//   { variable: 'leanth_of_road', value: leanth_of_road }
// ]);



// let MyDate = new Date()
// // console.log(MyDate.toUTCString())
// // console.log(typeof MyDate)

// const myarr = new Array(0,2,3,4,5)
// // console.log(myarr)

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const concatenatedArray = array1.concat(array2);
// console.log(concatenatedArray);



function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//  sayMyName()

function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

//  console.log("Result: ", result);


function loginUserMessage(username){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage('Sunil parida'))
// console.log(loginUserMessage("Magya bia chodi"))


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "muna",
    price: 199
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    // return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));


// **********************************MY FUNCTION***********************************

// const user1 = {
//     name: "Aditya",
//     price: 199,
//     message: "Thank you"
// }

// function product(muna){
//     console.log(`costumer name ${muna.name} this product ${muna.price}. ${muna.message} for perchsge this product.`)
// }
// product(user1)

// const day = 3;
// switch(day){
//     case 1:
//         console.log("sunday"); 
//     break;
//     case 2:
//         console.log("monday");
//     break;
//     case 3:
//         console.log("tuesday");
//     break;
//     case 4:
//         console.log("wednesday");
//     break;
//     case 5:
//         console.log("thersday");
//     break;
//     case 6:
//         console.log("friday");
//     break;

//     default:
//         console.log("enter valed day")
    
// }


const name = "hitesh"
const repoCount = 50

// console.log(name +" "+ repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());



// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));


const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://drive.google.com/drive/folders/1wfNTKinBAV6CCxaI5lfSnnRFAYpy0uEl?usp=share_link"

// console.log(url.replace('drive/folders/1wfNTKinBAV6CCxaI5lfSnnRFAYpy0uEl?', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));


let sum = 0
for (let i = 5; i <= 50; i++) {
    sum += i;
    
}
console.log(sum);

let total = 0;
for (let i = 5; i <= 50; i++) {
    total += i;
}
console.log(total);



