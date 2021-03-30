function test(message,callback){
    try{
        callback();
        console.log("✔️",message);
    }catch(error){
        console.error(error);
        console.log("❌",message);
    }
}
function fullName(firstname,lastname){
    return `${firstname} ${lastname}`;
}
function testFullName(){
    result = fullName("narendra","babu");
    expected = `narendra palacharla`
    if(result != expected){
        throw new Error(`${result} is not equal to ${expected}`); 
    }
}


function testSecondFullName(){
    result = fullName("narendra","babu");
    expected = `narendra babu`
    if(result != expected){
        throw new Error(`${result} is not equal to ${expected}`);
    }
}
test(`adding two names`,testFullName);
test(`adding two names`,testSecondFullName);
//  Error: narendra babu is not equal to narendra palacharla
// ❌ adding two names
// ✔️ adding two names
function test(message,callback){
    try{
        callback();
        console.log("✔️",message);
    }catch(error){
        console.error(error);
        console.log("❌",message);
    }
}
function totalIncome(amount,taxRate){
    return amount+taxRate;
}
function testTotal(){
    result = 10000+(10000*0.3);
    expected  = 13000;
    if(result!=expected){
        throw new Error(`${result} is not equal to ${expected}`);
    }
}
function testSecondTotal(){
    result = 10000+(10000*0.3);
    expected  = 8000;
    if(result!=expected){
        throw new Error(`${result} is not equal to ${expected}`);
    }
}
test(`salary calculations`,testTotal);
test(`salary calculations`,testSecondTotal);
// ✔️ salary calculations
// script.js:39 Error: 13000 is not equal to 8000

