console.log('Hello world');

const a = 5;
const b = 10;

let c = a + b;

console.log(c);

if(c == '510')
  console.log("Text");
else
  console.log("Number");

for(i = 0; i < 2; i++)
{
  console.log(i);
}

counter = 0;

const arr = ['txt1', 10, 'слон', 1000, 2, 5, 6];

console.log(`Last array element = ${arr.pop()}`);

arr.push("New text");

while(counter < arr.length)
{
  msg  = `Value at ${counter} = ${arr[counter]}`;

  //console.log(msg);
  counter++;
}

// var inName = document.getElementById('testimonials__input-name');
// inName.value = 'Someone';
// console.log(inName);

function multiply(num1, num2) {
  var result = num1 * num2;
  return result;
}

res = multiply(5, 3);
console.log(res);

// const btnSubmit = document.getElementById('testimonials__button');
// btnSubmit.onclick = function (){
//   console.log('Button is pressed');
// }



const form = document.getElementById('testimonials__form');
form.onsubmit = function(e){
  e.preventDefault();

  var name = document.getElementById('testimonials__input-name').value;
  var email = 'fbeahvdklc'; //form.getElementById('testimonials__input-email').value;
  var phone = '21345789';//form.getElementById('testimonials__input-phone').value;

  res = {"name":name, "email":email, "phone":phone};

  console.log(res);
  console.log(res.name);
  console.log('Form is submitted');
}