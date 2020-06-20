// chap 21-25
// task1
// var first=prompt("your first name:")
// var last=prompt("your last name:")
// var full=(first+last)
// alert("welcome "+full)


// task2
// var fav=prompt("your favoutie mobile:")
// var a=fav.length;
// document.write("<br> My favourite phone is:"+" "+fav)
// document.write("<br>length of string:"+" "+a)

// task3
// var str="pakistani"
// var b=str.indexOf("n")
// document.write("<br>string:"+str)
// document.write("<br>string:"+str)

// task4
// var str1="Hello world"
// var c=str1.lastIndexOf("l")
// document.write("<br>string:"+str1)
// document.write("<br>last index of l:"+c)

// task5
// var str="pakistani"
// var a=str.charAt(3)
// document.write("<br>string:"+str)
// document.write("<br>character at index 3:"+a)

// task6
// var first=prompt("your first name:")
// var last=prompt("your last name:")
// var a = first.concat(last);
// alert("welcome "+a)


// task7
// var city = "Hyderabad"
// var newcity=city.replace("Hyder", "Islam");
//  document.write("<br>City:"+city)
//  document.write("<br>After replacement:"+newcity)

// task8
// var message = "Ali and Sami are best friends. They play cricket and football together ";
// var a=message.replace(/and/g,"&");
// document.write("<br>Message:"+message)
// document.write("<br>After replacement:"+a)

// task9
// var num="472"
// var nnum=parseInt("472")
// document.write("<br>Value:"+num)
// document.write("<br>Type:string")
// document.write("<br>Value:"+nnum)
// document.write("<br>Type:number")

// task10
// var str=prompt("Your favourite fruit")
// var str1=str.toLocaleUpperCase()
// document.write("<br>"+str)
// document.write("<br>"+str1)

// task11
// var str="javascript"
// var str1=str.slice(0,1)
// str1=str1.toUpperCase()
// var str2=str.slice(1)
// str2=str2.toLowerCase()
// document.write("<br>"+str)
// document.write("<br>"+str1+str2)

// task12
// var num = 35.36 ;
// var str=num.toString().replace(".","")
// document.write("<br>Number="+num)
// document.write("<br>Result="+str)

// task13
// var name=prompt("enter your name:")
// var namelength=name.length;
// for(i=0;i<name.length;i++){
//     if(name.slice(i,i+1)=="!"||name.slice(i,i+1)=="@"||name.slice(i,i+1)=="$"){
//         alert("invalid username")
//     }
    
//     else{
//             alert("welcome"+" "+name)
//         }
// }





// task14
// var a= ["cake", "apple pie", "cookie", "chips", "patties"]
// var input=prompt("welcome to bakery,what do you want to order:")
// input= input.toLowerCase();

// if(input==="cake")
// {
//     alert("cake is available")
// }
// else if(input==="apple pie"){
//     alert("apple pie is available")
// }
// else if(input==="cookie"){
//     alert("cookie is available")

// }
// else if(input==="chips"){
//     alert("chips is available")
// }
// else if(input==="patties"){
//     alert("patties is available")
// }
// else{
//     alert("we are sorry,"+" "+input+" "+"is not availabe in our ")
// }


// task16
// var str = "University of Karachi";
// var res = str.split("");
// document.write(res)

// task17
// var str = prompt("Enter string");
// var res = str.charAt(str.length-1);
// document.write("User input:"+str)
// document.write("<br>Last charcter of input:"+res)


// task18
// function countOccurences(string, word) {
//     return string.split(word).length - 1;
//  }
//  var text="the quick brown fox jumps over the lazy dog."; 
//  var count=countOccurences(text,"the");
// document.write("<br>Text:"+text)
// document.write("<br>there are"+" "+count+" "+"occurence of the word 'the'")



// chap 26-30

// task1
// var input=prompt("enter a positive integer:")
// document.write("<br>Number:"+input)
// var input1=Math.round(input)
// document.write("<br>rounded off value:"+input1)
// var input2=Math.floor(input)
// document.write("<br>floor value:"+input2)
// var input3=Math.ceil(input)
// document.write("<br>ceil value:"+input3)

// task2
// var input=prompt("enter a negative integer:")
// document.write("<br>Number:"+input)
// var input1=Math.round(input)
// document.write("<br>rounded off value:"+input1)
// var input2=Math.floor(input)
// document.write("<br>floor value:"+input2)
// var input3=Math.ceil(input)
// document.write("<br>ceil value:"+input3)


// task3
// var input=prompt("enter an integer:")
// var inputnew=Math.abs(input)
// document.write("<br>absolute value:"+inputnew)

// task4
// var throwdice=Math.random()*6
// var floor=Math.floor(throwdice)
// document.write("random dice value:"+floor)

// task5
// var coin=Math.random()*2
// var floor=Math.floor(coin)
// document.write(floor)
// if(floor===0){
// document.write("<br>random coin value:heads")}
// else
// {
//     document.write("<br>random coin value:tails")
// }

// task6
// var random=Math.random()*100
// var floor=Math.floor(random)
// document.write("The random number between 1 to 100:"+floor)

// task7
// var num = prompt("Enter your weight in kilograms:")
// num=parseFloat(num)
// var n = num.toFixed(2);
// document.write("The weight of user is:"+n)

// task8
// var secret=9
// var num=prompt("Enter a number between 1 to 10:")
// if(num==9){
//     alert("Congratulations!")
// }
// else{
//     alert("Try again!")
// }


// chap 31-34

// task1
// var rightNow = new Date();
// document.write(rightNow)

// task2
// var monthNames = ["january", "feburary", "march", "april", "may", "june", "july","august","september","october","november","december"];
// var now = new Date();
// var theMonth = now.getMonth();
// var nameOfmonth = monthNames[theMonth];
// document.write("Current Month: "+nameOfmonth)

// task3
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// document.write("Today is "+nameOfToday)

// task4
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// if(nameOfToday==dayNames[0]||nameOfToday==dayNames[6]){
//     alert("Its fun day")
// }
// else{
//     alert("Today is "+nameOfToday)
// }

// task5
// var now = new Date();
// var theDate=now.getDate();
// if(theDate<16){
//     document.write("First fifteen days of the Month")
// }
// else{
//     document.write("Last days of the Month")
// }


// task6
// var current=new Date();
// var ms=current.getTime();
// var mins=(ms/1000*60*60)
// document.write("Current Date: "+current)
// document.write("<br>Elapsed milliseconds since january 1,1970: "+ms)
// document.write("<br>Elapsed minutes since january 1,1970: "+mins)

// task7
// var current=new Date();
// var hrs=current.getHours();
// if(hrs>12 && hrs<24){
// alert("Its PM")
// }
// else{
//     alert("Its AM")
// }

// task8
// var mydate=new Date(" Thu December 31, 2020 00:00:00")
// document.write("Later date: "+mydate)

// task9
// var today = new Date();
// var doomsday = new Date("April 24, 2020");
// var msToday = today.getTime();
// var msDoomsday = doomsday.getTime();
// var msDiff = msToday - msDoomsday;
// var dDiff = msDiff / (1000 * 60 * 60 * 24);
// dDiff = Math.floor(dDiff);
// document.write(dDiff +" days have passed since 24 April,2020" )


// task10
// var mydate=new Date();
// var mydatemilli=mydate.getTime();
// var first=new Date("january 01,2020 00:00:00")
// var firstmili=first.getTime();
// var diff=mydatemilli-firstmilli
// var diff1=(diff/1000)
// document.write("Date: "+mydate)
// document.write(diff1+" seconds have passed since beginning of 2015")


// task11
// var newdate=new Date("Sat Dec 05,2015 23:08:16");
// var changedate=new Date("Sat Dec 05,2015 22:08:16");
// document.write("Current date: "+newdate)
// document.write("<br>1hour ago, "+changedate)




// task12
// var newdate=new Date();
// document.write("Current date: "+newdate)
// newdate.setFullYear(1920)
// document.write("<br>100 years ago, "+newdate)


// task13
// var age=prompt("Enter your age:")
// var by=2020-age
// document.write("Your age: "+age)
// document.write("<br>Your birth year is: "+by)

// task14
// var cname=prompt("Enter your name:")
// var month=prompt("Enter Month:")
// var units=prompt("number of units consumed in that month:")
// var chr=16;
// var net=(units*chr)
// var late=350;
// var gross=net + late
// document.write("<br>K-Electric Bill <br>")
// document.write("<br>Customer name: "+cname)
// document.write("<br>Month: "+month)
// document.write("<br>No of units: "+units)
// document.write("<br>Charges per unit: "+chr +"<br>")
// document.write("<br>Net amount payable (within due date): "+net)
// document.write("<br>Late payment surcharge: "+late)
// document.write("<br>Gross amount payable (after due date): "+gross)





// chap 35-38

// task1
// function time(){
//     var now = new Date();
// document.write(now)
// }
// time()

// task2
// function greet(){

//     var first=prompt("your first name:")
//     var last=prompt("your last name:")
//     var full=(first+last)
//     alert("welcome "+full)
    
// }
// greet()


// task3
// function add(num1,num2){
//     var num1=+prompt("enter first number")
//     var num2=+prompt("enter second number")

//     var sum=num1+num2
//     return sum;
 
// }
// alert(add())



// task4
// function calc(num1,opr,num2){
//     var num1=+prompt("enter first number")
//     var opr=prompt("enter an operator")
//     var num2=+prompt("enter second number")

//     if(opr==="+"){
//         return num1+num2
//     }
//     else if(opr==="-"){
//         return num1-num2
//     }
//     else if(opr==="*"){
//         return num1*num2
//     }
//     else if(opr==="/"){
//         return num1/num2
//     }
//     else{
//         return "Invalid operation!"
//     }
    
// }
// alert(calc());

// task5
// function square(number) {
//     return number * number;
//   }
//   alert(square(3))


// task6
//   function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = prompt("Enter any integer to calculate its factorial:");
//   answer = factorial(n)
// document.write("The factorial of " + n + " is " + answer);


// task7
// var startnum=prompt("Enter the starting number:")
// var endnum=prompt("Enter the ending number:")
// function counting(startnum,endnum){
//     for (i=startnum;i<=endnum;i++)
//     {
//         document.write(i)
//     }
// }
// counting()

// task8
// function pythagorean(sideA,sideB){
//   var x;
//    x=Math.sqrt(sideA*sideA+sideB*sideB);
//     document.write(x)
// }
// pythagorean(4,3)


// task9-a
// Arguments as variable
// var length = prompt("Enter a whole number for the length of your rectangle.");
// var width = prompt ("Enter a whole number for the width of your rectangle.");

// function area (length, width) {
// return length * width;
// }

// document.write("The area of your rectangle is " + area(length,width));


// task9-b
// function area (length, width) {
//     return length * width;
//     }
    
//     document.write("The area of your rectangle is " + area(3,4));



// task10
// function palindrome(str){
// str = str.toLowerCase()
// var len = str.length;
// for (var i = 0; i < len/2; i++) {
//     if (str[i] !== str[len - 1 - i])
//     return false;
// }

// return true;
// }
// alert(palindrome(prompt("Enter a word to check palindrome:")))

// task11
// function titleCase(str) {
//    var splitStr = str.toLowerCase().split(' ');
//    for (var i = 0; i < splitStr.length; i++) {
      
//        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//    }
 
//    return splitStr.join(' '); 
// }
// document.write("the quick brown fox");
// document.write(titleCase("<br>the quick brown fox"));

// task12
// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i <= str.length - 1; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// document.write("Web Development Tutorial <br>");
// document.write(longestWord("<br> Web Development Tutorial"));


// task13
// function count(str, letter) 
// {
 
//  var letCount = 0;
//  for (var i = 0; i < str.length; i++) 
//  {
//     if (str.charAt(i) == letter) 
//       {
//       letCount += 1;
//       }
//   }
//   return letCount;
// }

// console.log(count('JSResourceS.com', 'o'));


// task14
// function circumference(radius){
//     return (radius*2*3.142);
// }
// document.write("The circumfernce of the circle is:"+circumference(3))
// function area(radius){
//     return (radius*radius*3.142);
// }
// document.write("<br>The area of the circle is:"+area(3))