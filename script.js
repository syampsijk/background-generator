// //instantiation

// class Player {
//     constructor (name,type)
//     {
//         console.log("player"+this);
//         this.name =name;
//         this.type =type;
//     }
//     introduce()
//     {
//         console.log(`Hi i am ${this.name}, I m a ${this.type}`)
//     }
// }

// class Wizard extends Player {
//     constructor(name, type)
//     {
//         super(name,type)
//         console.log("wizard"+this);
//     }
//     play()
//     {
//         console.log(`this is weiie name ${this.type}`);
//     }
// }


// const wizard1 = new Wizard("syam","healer");
// const wizard2 = new Wizard("silpa","magic");


// var c = [1,2,3];
// var d = c;
// d.push(154);
// console.log("c"+c);
// console.log("d" +d);
let obj ={a:'a',b:"b",c: {deep:"try to copy me"}};
let clone = Object.assign({},obj);
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj));
obj.c.deep =5;
console.log("obj"+obj);
console.log("clone"+clone);
console.log("clone2"+clone2);
console.log("superClone"+superClone);
