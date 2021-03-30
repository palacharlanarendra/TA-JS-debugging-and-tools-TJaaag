function fullName(firstname,lastname){
    return `${firstname} ${lastname}`;
}
let result,expected
    result = fullName("narendra","babu");
    expected = `narendra palacharla`
    if(result != expected){
        throw new Error(`${result} is not equal to ${expected}`); 
    }


    result = fullName("narendra","babu");
    expected = `narendra babu`
    if(result != expected){
        throw new Error(`${result} is not equal to ${expected}`);
    }

    // After making the first test fail do you see the output of the second test?
    // no! we cant se the output of second test.


function totalIncome(amount,taxRate){
    return amount+taxRate;
}
let result,expected;
    result = 10000+(10000*0.3);
    expected  = 13000;
    if(result!=expected){
        throw new Error(`${result} is not equal to ${expected}`);
    }

    result = 10000+(10000*0.3);
    expected  = 8000;
    if(result!=expected){
        throw new Error(`${result} is not equal to ${expected}`);
    }
// After making the first test fail do you see the output of the second test?
    // no! we cant se the output of second test.