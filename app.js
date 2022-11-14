const range=document.getElementById('myRange');
const dispHeight=document.getElementById('dispHeight');
const dispWeight=document.getElementById('dispWeight');


function heightRange(value){
    const height=value;
    dispHeight.innerText=`${height}cm`;
}
function weightRange(value){
    const weight=value;
dispWeight.innerText=`${weight}cm`;
}