const range=document.getElementById('myRange');
const dispHeight=document.getElementById('dispHeight');
const dispWeight=document.getElementById('dispWeight');
const maleActive=document.getElementById('male');
const femaleActive=document.getElementById('female');
const activeTabs=document.querySelectorAll('.active');
const resultContainer=document.querySelector('.resultContainer');
const mainBody=document.querySelector('.calculator');
const show=document.querySelector('.show');
const unshow=document.querySelector('.unshow');
const bmiScore=document.querySelector('.score');
const feedback=document.querySelector('.tagLine');
const retryBTN=document.querySelector('#calculateAgain');
//Range Values
function heightRange(value){
    const height=value;
    dispHeight.innerText=`${height}cm`;
}
function weightRange(value){
    const weight=value;
dispWeight.innerText=`${weight}`;
}
//Active Tabs for Male and Female
activeTabs.forEach((activeTab) => {
    activeTab.addEventListener("click", () => {
      removeActiveClasses();
      activeTab.classList.add("active");
    });
  });

  function removeActiveClasses() {
    activeTabs.forEach((activeTab) => {
      activeTab.classList.remove("active");
    });
  }

//Calculations
function calulatoionBMI(){
    let height= parseInt(document.querySelector('#height').value);
    let weight=parseInt(document.getElementById('weight').value);
    if(height===0||isNaN(height)){
   alert("Please Enter  a valid value");
    }
    else if (weight===0 || isNaN(weight)){
        alert("Please Enter  a valid value");
    }
else
  displayResult(height,weight);
  resultContainer.style.display='flex';
  mainBody.style.display='none'
}
function displayResult(height,weight){
  let BMI=(weight/((height*height)/10000)).toFixed(2);
bmiScore.innerText=BMI;
if(BMI<18.6){
feedback.innerHTML='You are under weight';
}
else if(BMI>=18.6&&BMI<24.9){
  feedback.innerHTML='You have a normal body weight!';
}
else {feedback.innerHTML='You are over Weight!'};
retryBTN.addEventListener('click',()=>{
  resultContainer.style.display='none';
  mainBody.style.display='flex';
})

}












