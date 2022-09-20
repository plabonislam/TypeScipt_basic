//assume you pass any object to a function,
//now function receive that function and add a id with the object and returns

const addTo = (obj: object) => {
  let random = Math.floor(Math.random() * 100);
  return { ...obj, id: random };
};

let user = addTo({ name: "plabon", age: 20 });

//problem ?
// user.id lekhte gele suggessation paiba kintu ,user.name or user.age lekhle paiba na
//works  ? data object is passing as variable  and receving as variableto in addTo function.
//But obj object tai ki ki data ache ,eita kintu type script jane na.

//solution ? generic diye data receive kora
//so user jei data pathai seta ke dhorbo and type check korbo
//ei dhora and type check er kaz ta korte generic lage

let addGenericTo = <T>(obj: T) => {
  let random = Math.floor(Math.random() * 100);
  return { ...obj, id: random };
};

addGenericTo({ name: "plabon", age: 20 });
addGenericTo(1);
//ei addGenericTo function e jei typer data pathaw sei typer data receive korte parbe
//problem ? ami chai shudhu object typer data receive korbo

let addGeneric = <T extends object>(obj: T) => {
  let random = Math.floor(Math.random() * 100);
  return { ...obj, id: random };
};
let genericUser = addGeneric({ name: "plabon", age: 20 });
//now it can provide suggessation

//--------------you can also define the object with specific structure -----------------------------------

let addGeneric2 = <
  T extends {
    name: string;
    age: number;
  }
>(
  obj: T
) => {
  let random = Math.floor(Math.random() * 100);
  return { ...obj, id: random };
};

let u2 = { name: "plabon", age: 20, roll: 1 };
addGeneric2(u2);

//------------------- interface with Generic----------------------------------------------------------------

//assume an api response interface.how do you handle it ?

interface ApiResponse {
  status: number;
  type: string;
  data: object;
}

const responseApi1: ApiResponse = {
  status: 1,
  type: "string",
  data: {
    name: "test",
  },
};

//problem for next apiresopnse data is an string .so how do you manage


interface genericApiResponse<T> {
 status: number;
 type: string;
 data: T;
}

const genericApi1:genericApiResponse<object>= {
 status:200,
 type:"string",
 data:{
  name:"pppp"
 }
}

const genericApi2:genericApiResponse<string>= {
 status:200,
 type:"string",
 data:"hey"
}

//genericApiResponse<T> receive object or string and set data accordingly in 