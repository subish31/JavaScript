//1 first

function one(n)
{
    if(n>=1 && n<=100)
    {
        if(n%3==0 && n%5==0)
        {
            console.log("FizzBuzz");
        }
        else if(n%3==0)
        {
            console.log("Fizz");
        }
        else if(n%5==0)
        {
            console.log("Buzz");
        }
        else
            console.log("No Multiples");
    }
    else
    {
       console.log("Invalid Number"); 
    }
}
one(30);


// 2 palindrome

function palindrome(str){
    const rev=str.split('').reverse().join('');
    if(str==rev)
        console.log("Palindrome");
    else
        console.log("Not Palindrome");
}
let s="MADAM";
palindrome(s);


//3 Largest Number in an array

let arr1=[27,12,3,98,94]
function max(arr)
{
    let ma=arr[0];
    for(let i=0;i<arr.length;i++)
    {
        if(ma<arr[i])
            ma=arr[i];
    }
    console.log(ma);
}
max(arr1);


//4 letter count
let string= "hello world";
function count(string)
{
let re = {}
for(let i = 0;i< string.length;i++){
  let ch = string.charAt(i);
  if(re[ch]){
    re[ch]+=1;
  }
  else{
    re[ch]=1;
  }
}
console.log(re);
}
count(string);


// 5 longest word in  a string

let st="Hello this is JavaScript Programming";
function longest(str) {
    str = str.match(/[a-zA-Z0-9]+/gi);
    let largest = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > largest.length) {
            largest = str[i];
        }
    }
    return largest;
}
console.log(longest(st));



// 6 factorial of a given  number

function fact(n)
{
    for(let i=1;i<=n;i++)
    {
        if(n%i==0)
            console.log(i);
    }
}
fact(98);


// 7 Celcius to farenheit

function ctf(c)
{
    let f= ((9/5)*c)+32;
    console.log("farenheit : "+f);
}
ctf(41);


//8.distinct numbers
let ar=[1,2,3,5];
function dist(ar){
    j=1
    for(i=0;i<ar.length;i++,j++){
        if(ar[i]!=j){
            console.log(j);
            break;
        }
    }
}
dist(ar);
