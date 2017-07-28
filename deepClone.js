// var a={person:{name:123}};
// // var b=Object.assign({},a);
// var b=JSON.parse(JSON.stringify(a));
// b.person.name=2342;
// console.log(a);
// console.log(b);

// var a=[{name:123},{age:123}];
// var b=JSON.parse(JSON.stringify(a));
// console.log(b instanceof  Array);
// console.log(a);

var list=[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}];
var yetList=[1,2,3];
var diff=[];
list.forEach(function (val,index) {
    if(yetList.indexOf(val.id)<0){
        diff.push(val);
    }
});
console.log(diff);



