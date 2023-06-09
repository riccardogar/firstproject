let ftbtn = document.getElementById('ft');
let cmbtn = document.getElementById('cm');

ftbtn.addEventListener('click', function(){
  let input = document.getElementById('input').value;
  let feet = Math.floor(input / 30.48);
  let inches = Math.round((input / 2.54) % 12);
  document.getElementById('output').value = feet + "ft " + inches + "in";
});

cmbtn.addEventListener('click', function(){
  let input = document.getElementById('input').value;
  let cm = input * 2.54;
  document.getElementById('output').value = cm + "cm";
});
