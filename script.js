//====================advanced javascript------------------------------

//-----------------------array methods--------------------------------

//1.pop()-->removes and returns element from last

// let arr=[1,2,3,4,5,6,7]
// let removedElement=arr.pop()
// console.log(arr);
// console.log(removedElement);

//2.push()---puhses at end and returns length of new array

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

//------------converting string to array------------------------------
//-----------------------split()-----------------------

// let str ="suheb"
// let a=str.split("")
// console.log(a);

//--------------looping through elements of an array------------

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
//maps every element of an array and forms a new array
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

//=======================ARRAY METHOD============================

//1.find()---->finds first occurence of something in an array(does not modifes the array)

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
// let postArray=[]

// let addPost=(post)=>{
//     postArray.unshift(post)
// }

// let removePost=()=>{
//     postArray.shift()
// }

// addPost("suheb")
// addPost("suheb")
// addPost("suheb")
// addPost("suheb")
// console.log(postArray);
// removePost()
// console.log(postArray);


 

 