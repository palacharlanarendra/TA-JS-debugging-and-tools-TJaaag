function test(message,callback){
    try{
      callback();
      console.log("✔️",message);
    }catch(error){
      console.error(error);
      console.log("❌",message);
    }
  }
  function multi(num1,num2){
    return num1+num2;
  }
  function testMulti1(){
    result = multi(3,3);
    if(typeof num1==Number && typeof num2==Number){
        throw new Error(`${num1} & ${num2} are not numbers`);
      }
  }
  function testMulti2(){
    result = multi(2,3);
    expected = 6;
    if(typeof num1==Number && typeof num2==Number){
        throw new Error(`${result} is not equal to ${expected}`);
      }
  }

  function testMulti3(){
      num1=2;
      num2="4"
    result = multi(num1,num2);
    expected = 4;
    if(typeof num1!=Number && typeof num2!=Number){
        throw new Error(`${num1} or ${num2}, one/both of those/them are not numbers `);
    }
    if(result!=expected){
      throw new Error(`${result} is not equal to ${expected}`);
    }
  
  }
  function testMulti4(){
    num1=5;
    num2=4;
  result = multi(num1,num2);
  expected = 5;
  if(typeof num1!=Number && typeof num2!=Number){
      throw new Error(`${num1} or ${num2}, one/both of those/them are not numbers `);
  }
  if(result!=expected){
    throw new Error(`${result} is not equal to ${expected}`);
  }

}
function testMulti5(){
    num1=5;
    num2=5;
  result = multi(num1,num2);
  expected = 4;
  if(typeof num1!=Number && typeof num2!=Number){
      throw new Error(`${num1} or ${num2}, one/both of those/them are not numbers `);
  }
  if(result!=expected){
    throw new Error(`${result} is not equal to ${expected}`);
  }
}
  test("Multiding 3 and 3",testMulti1);
  test("Multiding 2 and 3",testMulti2);
  test("Multiding 2 and 4",testMulti3);
  test("Multiding 5 and 4",testMulti4);
  test("Multiding 5 and 5",testMulti5);
//   ✔️ Multiding 3 and 3
//   ✔️ Multiding 2 and 3
//   Error: 2 or 4, one/both of those/them are not numbers 
//      
//   
//   
//    ❌ Multiding 2 and 4
//   Error: 5 or 4, one/both of those/them are not numbers 
//      
//  
//    ❌ Multiding 5 and 4
//    Error: 5 or 5, one/both of those/them are not numbers 
//     

//   script.js:7 ❌ Multiding 5 and 5


function test(message,callback){
    try{
      callback();
      console.log("✔️",message);
    }catch(error){
      console.error(error);
      console.log("❌",message);
    }
  }
  function multi(num1,num2){
    return num1*num2;
  }
  function testMulti1(){
    result = multi(3,3);
    if(typeof num1==Number && typeof num2==Number){
        throw new Error(`${result} is not equal to ${expected}`);
      }
  }
  function testMulti2(){
    result = multi(2,3);
    expected = 6;
    if(typeof num1==Number && typeof num2==Number){
        throw new Error(`${result} is not equal to ${expected}`);
      }
  }

  function testMulti3(){
      num1=2;
      num2="4"
    result = multi(num1,num2);
    expected = 4;
    if(typeof num1!=Number && typeof num2!=Number){
        throw new Error(`${num1} or ${num2}, one/both of those/them are not numbers `);
    }
    if(result!=expected){
      throw new Error(`${result} is not equal to ${expected}`);
    }
  
  }
  function testMulti4(){
    num1=5;
    num2=4;
  result = multi(num1,num2);
  expected = 5;
  if(typeof num1!=Number && typeof num2!=Number){
      throw new Error(`${num1} or ${num2}, one/both of those/them are not numbers `);
  }
  if(result!=expected){
    throw new Error(`${result} is not equal to ${expected}`);
  }

}
function testMulti5(){
    num1=5;
    num2=5;
  result = multi(num1,num2);
  expected = 25;
  if(typeof num1!=Number && typeof num2!=Number){
      throw new Error(`${num1} or ${num2}, one/both of those/them are not numbers `);
  }
  if(result!=expected){
    throw new Error(`${result} is not equal to ${expected}`);
  }
}
  test("Multiding 3 and 3",testMulti1);
  test("Multiding 2 and 3",testMulti2);
  test("Multiding 2 and 4",testMulti3);
  test("Multiding 5 and 4",testMulti4);
  test("Multiding 5 and 5",testMulti5);