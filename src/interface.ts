//interface with Object
//we have used type aliasis  for object type declaration
//Interface is better option to do that for object
//it will provide some suggesation while passing it
//so in a large project it will be helpful which type of data you need to pass

interface rectangle {
 height:number,
 width:number
}

const drawRectangle=(options:rectangle):number=> {
 let height = options.height;
 let width = options.width;
 return height*width;
}

let data={
 width:200,
 height:300
}
drawRectangle(data)


//-----------------interface with calss------------------