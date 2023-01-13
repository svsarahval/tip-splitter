// TODO: Handle user input of initial bill value
// TODO: Handle user selection of the gratuity, both default and custom values
// TODO: Handle user input of number of people to split the bill between
// TODO: Handle calculation of tip per person and total bill per person
// TODO: Handle resetting the calculator
// TODO: Handle appropriate styling for gratuities
// -> If a pre-set gratuity is selected, it should appear active.
// -> If no a pre-set gratuity is selected, or the user is providing a custom tip,
//    the buttons should NOT have appear active
// TODO: Handle appropriate styling for reset btn
// -> If there has been no value calculated, the reset btn should not work
// -> If the tips have been calculated, the reset btn should work

// Note: The elements needed have been queried for you here
// ** Query elements
const bill = document.getElementById('bill');
const gratuityBtns = document.querySelectorAll('.gratuity');
const customGratuity = document.getElementById('custom-gratuity');
const people = document.getElementById('people');
const splitTip = document.getElementById('split-tip');
const splitTotal = document.getElementById('split-total');
const resetBtn = document.getElementById('reset');
const errorMessage = document.querySelector('ifZero');
const buttonSelected = document.getElementsByClassName('active'); 





customGratuity.addEventListener('click', calculateCustomGratuity);

gratuityBtns.forEach((gratuityBtns) => {
    gratuityBtns.addEventListener('click', calculateTip);
})


resetBtn.addEventListener('click', resetAll)

resetBtn.addEventListener('mouseenter', ()=>{
    resetBtn.style.backgroundColor = 'var(--lightGrayishCyan )';
});

resetBtn.addEventListener('mouseleave', ()=>{
    resetBtn.style.backgroundColor = '';
});


bill.oninput = function(event){
    dealWithRestButton();
    calculate();

    if(customGratuity.value!== '' && (people.value !== ''|| people.value > 0) ){
     calculate();
    }
}

customGratuity.oninput = function(){
 dealWithRestButton();

 if((bill.value !== ''|| bill.value < 0) && (people.value  !== '' || people.value > 0) ) {
  calculate()
 }
}

people.oninput = funtion(){

 dealWithRestButton();

 if(people.value <= 0 || people.value === ''){
  errorMessage.innerText = `can't be zero`;
  errorMessage.style.color ='red';
  people.style.borderColor ='red';
  splitTip.innerText = '----';
  splitTotal.innerText ='----';
 }else{
  errorMessage.innerText = ``;
  people.style.borderColor = '';
  calculate()

 }
}

function calculate(){
 let tipPerPerson;
 let totalPerPerson;
 let tipPercentage;

 if(buttonSelected.length == 0){
  tipPercentage = 0;
 }else{
  if(customTip.classList.contains('active')){
   tipPercentage =customTip.value; 
  }else{
   tipPercentage = buttonSelected [0].value;
  }
 }

 tipPerPerson = (bill.value * tipPercentage * 0.01)/people.value;
 totalPerPerson = (bill.value/people.value) + tipPerPerson; 
 tipPerPerson = tipPerPerson.toFixed(2)
 totalPerPerson = totalPerPerson.toFixed (2);

 resultTip.innerText = tipPerPerson;
 resultTotal.innerText = totalPerPerson;

}

function calculateTip(){
 gratuityBtns.forEach((gratuityBtns)=> {
  gratuityBtns.classList.remove('active');
 });
 this classList; addEventListener('active');
 if((bill.value !==''|| bill.value < 0)&& (people.value !== ''|| people.value > 0) ){
  calculate();
 }
}

function dealWithResetButton(){
    if(customTip.value === '' && bill.value === '' && numberOfPeople.value === ''){
        reset.disabled = true;
        reset.classList.remove('has-reset-activated');
        numberOfPeople.style.borderColor = '';
    }else{
        reset.disabled = false;
        reset.classList.add('has-reset-activated');       
    }
}


function resetAll(){
    gratuityBtns.forEach((gratuityBtns) => {
        gratuityBtns.classList.remove('active');
    });

    bill.forEach((bill) => {
        bill.value = '';
    });

    resultTip.innerText = '0.00';
    resultTotal.innerText = '0.00';

    resetBtn.disabled = true;
    errorMessage.innerText = ``;
    people.style.borderColor = ''
    resetBtn.classList.remove('has-reset-activated');
    resetBtn.style.backgroundColor = '';
}