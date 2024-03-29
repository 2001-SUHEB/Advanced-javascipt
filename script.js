//====================advanced javascript------------------------------

//----------------------- ans methods--------------------------------

//1.pop()-->removes and returns element from last

// let arr=[1,2,3,4,5,6,7]
// let removedElement=arr.pop()
// console.log(arr);
// console.log(removedElement);

//2.push()---puhses at end and returns length of new  ans

// let len=arr.push(8,9,10)
// console.log(arr);
// console.log(len);

//3. shift()-->removes element from start and returns(opposite of pop)

// let rm=arr.shift()
// console.log(arr);
// console.log(rm);

//4.unshift()-->opposite of push
// let len=arr.unshift(99,88,77)
// console.log(arr);
// console.log(len);

//====================================================================================

//------------converting string to  ans------------------------------
//-----------------------split()-----------------------

// let str ="suheb"
// let a=str.split("")
// console.log(a);

//--------------looping through elements of an  ans------------

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
    
// }


//=====sample task - party queue===========================================

// let que=["Bob","Alice","Charlie"]
// que.push("David","Emily")
// console.log(que);
// que.shift()
// let second_person = que.shift()
// console.log(que);
// console.log(second_person);
// que.unshift("Richard")
// console.log(que);

//==============MAP============================================================
//maps every element of an  ans and forms a new  ans
// const num = [1,2,3,4,5,6]

// const squarenum=num.map((element)=>{
//     return element*element
// })
// console.log(squarenum);

//======================TASK ON MAP=========================================

// let celcius=[0,-40,100]

// let farh=celcius.map((e)=>{
//     let f=  (e * 9/5) + 32
//     let c= e
//     return [`c:${c},f:${f}`]
// })
// console.log(farh);

//======================= ans METHOD============================

//1.find()---->finds first occurence of something in an  ans(does not modifes the  ans)

// let num=[1,2,3,4,5,6]

// let even=num.find((e)=>{
//     return e%2==0
// })

// console.log(even);


//2.filter()--->filters and finds all occurence-----------------

// let num=[1,2,3,4,5,6]

// let eve=num.filter((e)=>{
//     return e%2==0
// })

// console.log(eve);

//================================TASK ON FIND AND FILTER

// let num=[1,2,3,4,5,6]

// let all=num.filter((e)=>{
//     return e%3==0
// })
// let oneNum=num.find((e)=>{
//     return e%3==0
// })
// console.log(all);
// console.log(oneNum);

//=====================================================
//3.reduce()===>reduces into one element

// let arr=[1,2,3,4,5,6]

// let sum=arr.reduce((h1,h2)=>{
//     return h1+h2+0
// })
// let pro=arr.reduce((h1,h2)=>{
//     return h1*h2
// },1)

// console.log(sum);
// console.log(pro);
//================================TASK ON REDUCE==================================

// let arr=[1,0,2,3,0,2]

// let nonZero=arr.reduce((h1,h2)=>{
//     if(h2!=0){
//         return h1*h2
//     }
//     else{
//         return h1
//     }
// },1)

// console.log(nonZero);


//=========================================ASSIGNMENTS=============================================
//------------------project-1
// let post ans=[]

// let addPost=(post)=>{
//     post ans.unshift(post)
// }

// let removePost=()=>{
//     post ans.shift()
// }

// addPost("suheb")
// addPost("suheb")
// addPost("suheb")
// addPost("suheb")
// console.log(post ans);
// removePost()
// console.log(post ans);
//=========================================ASSIGNMENTS ON STOCK PRICE============================================              

// function findBestTimeToBuyAndSell(stock) {
//     let minprice=stock[stock.length-1]
//     let maxProfit = 0;
//     let buyIndex = 0;
//     let sellIndex = stock.length-1;
//     let maxPrice = stock[stock.length - 1]; // Start with the last day's price

//     for (let i = stock.length - 2; i >= 0; i--) {
//         if(stock[i]>maxPrice){
//             maxPrice=stock[i]
//             sellIndex=i
//         }else{
//             let profit=maxPrice-stock[i]
//             if(profit>maxProfit){
//                 maxProfit=profit
//                 buyIndex=i
//             }
//         }
    
// }
// return [buyIndex, sellIndex];
// }

// let stock = [12, 34, 8, 56, 54, 23, 100];
// let [buy, sell] = findBestTimeToBuyAndSell(stock);
// console.log("Buy at day", buy, "and sell at day", sell)


//====================string methods------------------------------
//=======string to  ans methods================
// let str="hello suheb"
// let str1="hello, syed"
// let str2="suheb"

// let arr=str.split(" ")
// console.log(arr);
// let arr2=str1.split(",")
// console.log(arr2);
// let ans=str2.split("")
// console.log(ans);

// //======= ans to string methods=================

// let arr3=[1,2,3,4,5,6,7,8,9,10]
// let str4=arr3.join(" ")
// console.log(str4);

//=======other string methods------------------------------

// let str="hello"

// let char = str.charAt(2)
// console.log(char);

// let asci=str.charCodeAt(2)
// console.log(asci);

// let ans=String.fromCharCode(asci)
// console.log(ans);

// let string1="suheb"
// let string2="rinci"
// console.log(string1+" "+string2);
 
//======================TASK ON STRING =================================

// let str=prompt("Enter a string")
// str=str+" "
// let ans=[]
// let i=0
// let res=""
// let finalAnswer=""
// while(i<str.length) {
//      if(str[i]==" "){
//         ans.push(res)
//         res=""
//      }else{
//         res=res+str[i]
//      }
//      i++

// }
// for (let  j = 0;  j <  ans.length;  j++) {
//     const element =  ans[j];
//     if(j==ans.length-1){
//           finalAnswer=finalAnswer+element
//     }else{
//         finalAnswer=finalAnswer+element[0]+". "
//     }
    
// }

// console.log(finalAnswer);
 

//====TASK-2 ON STRING =============================================================
//CEASER CIPHER=========================================== 

// let str = "xyz"
// let shift = 2
// let ans=""
// for (let  i = 0;  i < str.length;  i++) {
//     const element = str[ i];
//     let ascii=str.charCodeAt(i)+shift
//     if(ascii>122){
//     ascii=ascii%122 + 96
//     ans+=String.fromCharCode(ascii)
//     }
//     else{
//         ans+=String.fromCharCode(ascii)
//     }
// }
// console.log(ans);

//===================JSON--JAVASCRIPT OBJECT NOTATION =================================================
// let obj={
//     a:1,
//     b:2,
//     c:3,
//     d:4,
//     e:5,
//     f:6
// }

// let str=JSON.stringify(obj)
// console.log(str);

// let obj2=JSON.parse(str)    
// console.log(obj2);
// console.log(obj2.c);
// console.log(obj2.f);

//=====================DESTRUCTING OBJECT =================================================

// let obj={
//     name:"suheb",
//     age:22,
//     city:"vellore",
//     programmer:true
// }

// let {name,age}=obj
// console.log(age);
// console.log(name);

//====================DESTRUCTING ARRAYS=========================================

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let [a, b, c, d, e, f, g, h, i, j] = arr;

// console.log(a); // Output: 1
// console.log(b); // Output: 2
// console.log(c); // Output: 3
