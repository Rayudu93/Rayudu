/*/

const delayedfunction=()=> {
    console.log('delayed function excute');
};
setTimeout(delayedfunction,10000);



const repfunction=()=>{
    console.log('Repated function executed');
};
const intervalId=setInterval(repfunction,1000);



function repeated(){
    console.log('Executing repeated function');
}
const intervalId=setInterval(repeated,1000)
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval stop');
}, 1000);

*/

function parent(name,callback){
    setTimeout(callback,1000);
    callback();
    console.log('hey '+name);
}
//function random(){
    //console.log('Hey i am callbackfunction');
}
parent('Rayudu',function random(){
    console.log('Hey i am callbackfunction');});