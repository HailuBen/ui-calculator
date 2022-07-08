function setUpEvents(){
    numbers = [9,0,2,1,0];

    const add = numbers.reduce((accumulator, currentValue)=>{
        return accumulator+currentValue;
    },0)
    
    console.log(add);
}   
window.onload = function(){
    setUpEvents();
};