let submit = document.getElementById('submit');
let fname = document.getElementById('first-name');
let lname = document.getElementById('last-name');
let add = document.getElementById('address');
let pin = document.getElementById('pincode');
let state = document.getElementById('state');
let country = document.getElementById('country');

let food1 = document.getElementById('food1');
let food2 = document.getElementById('food2');
let food3 = document.getElementById('food3');
let food4 = document.getElementById('food4');
let food5 = document.getElementById('food5');
let foods = [food1,food2,food3,food4,food5]
let food ='';

let gender1 = document.getElementById('gender1');
let gender2 = document.getElementById('gender2');
let gender='';




let tbody= document.getElementById('tbody')

submit.addEventListener('click',()=>{

  
  //gender
  if(gender1.checked){
    gender ="Male"
  }
  else if(gender2.checked)
    gender = "Female"

  //food
  for(let x of foods){
    if(x.checked)
      food= food + x.value +", "
  }
  food = food.slice(0,-2)

  let check = [fname.value,lname.value,add.value,pin.value,gender,food,state.value,country.value]

  console.log(check)

 if(!check.includes('')){
   createTable();
   document.getElementById('warning').innerText = ''
   window.scrollTo(0,0)
   clear();
 }
  else{
    document.getElementById('warning').innerText = '*Need to fill all the boxes'
    setTimeout(()=>document.getElementById('warning').innerText = '',2000)
  }
  
})

function createTable(){
  let tr = document.createElement('tr')
  tr.innerHTML = `
                  <td>${fname.value}</td>
                  <td>${lname.value}</td>
                  <td>${add.value}</td>
                  <td>${pin.value}</td>
                  <td>${gender}</td>
                  <td>${food}</td>
                  <td>${state.value}</td>
                  <td>${country.value}</td>
                  `

  tbody.append(tr);
}

function clear(){
  food =''
  gender=''
  fname.value=''
  lname.value=''
  pin.value=''
  add.value=''
  state.value=''
  country.value=''
  var checkBox = document.getElementsByName("food");
  for(var i=0;i<checkBox.length;i++)
     checkBox[i].checked = false;

  var radio = document.getElementsByName("gender");
  for(var i=0;i<radio.length;i++)
    radio[i].checked = false;

}
