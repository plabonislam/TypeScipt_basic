//------------------------implicit type--------------------
//as we have assigned first time number 
//so next time it only expect number

let a=100
console.log(a)
a=10


//--------------explicit type-------------------------------
//-(|) union allows mixed data type
//allows only number
let b:number;
b=1000



//allows both number and string
let c:number|string;
c="string"
c=100



//------------------------------------Dynamic type data--------------------
// use data type any;

let anytype :any;
anytype= 1;
anytype="string"

//----------------------array---------------------------------

    //  1.how to declare?
    //  2.how to assign ?
    //  3. how to use?

//array  declare
let array: string[];

//assign value
array=[];

//array used
array.push("first")


// --------another way of declare and assign value together------

let mixedArray: (number|string)[]=[];
mixedArray.push(1,"2nd");
// mixedArray.push(null); can't assign null

let mixedArray2: (number|string|null|boolean)[]=[];
mixedArray2.push(1,"2nd",null,true);
//mixedArray2.push(undefined) can't assign undefined


//----------------------Object------------------------------------

// define object
let humanObj: {
 name: string,
 age:number
}


//assign obj
humanObj = {
 name:"plabon",
 age:26
}

// humanObj=[] can't assign array as object 


//now you can used  it's property
humanObj.age=27;
humanObj.name="sss"


// --------another way of declare and assign object ------

//define object
let arrayAsObject: object;
//assign array as value
arrayAsObject =[1,2,3];



//-----------------------------------Function------------------------------
// if you return nothing it returns void not undefined like js
//declare function type variable
let myFun:Function;

//assign value
//you have to only assign function not value
myFun=()=> {}
//myFun= 10; not possible

//---------------------------common way of using function-------------------

const myFunction=(a:string,b:string,c?:string|number,d:string="default"): string=>{
 //here c is optional parameter
 console.log(c)
 console.log(d)
 return a + b;
}
myFunction("hey","mr");
myFunction("hey","mr","optional");

//--------------------------type aliases--------------------------------------
//nijer mto data type diye variable 
//it helps to clean code

type strOrNum = number|string;
type userType= {name:string,age:number}

const userDetails = (id:strOrNum,user:userType)=>{}

//-----------------------function signature ------------------------------------

//create function signature
let myFunSignature : ()=>void;
let add : (x:number,y:number)=>number;
let userPrsonalDetails:(id:strOrNum,userInfo:userType)=>object;


//it may look like arrow function but it is not an arraow function
//now whereever we are using this function we need to maintain same return type,parameter for function

myFunSignature=()=>console.log("retur nothings means return void")
add = function (a:number,b:number):number { return a*b;}
userPrsonalDetails=(id:strOrNum,info:userType)=>{
 return info;
}

myFunSignature();
add(1,2);

let referenceValue ={
 name:"plabon",
 age:26,
 lastName:"islam"
}

userPrsonalDetails(1, referenceValue)

//JavaScript passes all arguments to a function by values.
//here reference value  also goes via passed by value
//when you pass reference value it checks it's acceptable data is presented or not in referenceValue.
//if necessary data existed with some extra data .it is completely fine


// you can not pass any extra value directly
//you have to pass exact data 
userPrsonalDetails(1, {name:"plabon",age:26})
// userPrsonalDetails(1, { name:"plabon",age:26,lastName:"islam"})



//this --->object is created by class,