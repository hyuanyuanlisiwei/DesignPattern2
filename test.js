/**
 * Created by hyylsw on 2017/8/3.
 */
var arr=[1,2,3];
var len=arr.length;
for(var i=len-1;i>=0;i--){
    arr.splice(i,1);
}
console.log(arr);